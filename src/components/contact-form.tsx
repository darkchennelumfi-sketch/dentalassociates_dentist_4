"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Phone,
  Send,
} from "lucide-react";
import { submitContact } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactDefaultValues,
  contactSchema,
  type ContactInput,
} from "@/lib/contact-schema";
import { site } from "@/lib/site";

const DRAFT_KEY = "dental-associates-contact-draft";

type Step = 1 | 2;
type Status = "idle" | "submitting" | "success" | "error";

const steps = ["Your details", "Your message"] as const;

export function ContactForm() {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaultValues,
    mode: "onTouched",
  });

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = form;

  const watchedValues = useWatch({ control });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (!raw) return;

      const parsed: unknown = JSON.parse(raw);
      const draft = contactSchema.partial().safeParse(parsed);
      if (!draft.success) return;

      const values: ContactInput = { ...contactDefaultValues };
      (Object.keys(contactDefaultValues) as Array<keyof ContactInput>).forEach(
        (key) => {
          const value = draft.data[key];
          if (typeof value === "string") {
            values[key] = value;
          }
        },
      );

      reset(values);
    } catch {
      window.localStorage.removeItem(DRAFT_KEY);
    }
  }, [reset]);

  useEffect(() => {
    try {
      const parsed = contactSchema.partial().safeParse(watchedValues);
      if (parsed.success) {
        window.localStorage.setItem(DRAFT_KEY, JSON.stringify(parsed.data));
      }
    } catch {
      // A full or unavailable storage should never block the form.
    }
  }, [watchedValues]);

  const goToMessage = async () => {
    const valid = await trigger(["name", "phone", "email"]);
    if (valid) {
      setStep(2);
    }
  };

  const onSubmit = handleSubmit(async (values) => {
    setStatus("submitting");
    setNotice("");

    try {
      const result = await submitContact(values);
      if (result.ok) {
        setStatus("success");
        setNotice(result.message);
        reset(contactDefaultValues);
        window.localStorage.removeItem(DRAFT_KEY);
      } else {
        setStatus("error");
        setNotice(result.message);
      }
    } catch {
      setStatus("error");
      setNotice(
        "Oops, there was an error sending your message. Please try again later.",
      );
    }
  });

  const startOver = () => {
    reset(contactDefaultValues);
    setStep(1);
    setStatus("idle");
    setNotice("");
  };

  const progress =
    status === "success" ? 100 : step === 1 ? 44 : 88;

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-ink/10 bg-cream p-8 shadow-card sm:p-10">
        <span className="grid size-14 place-items-center rounded-full bg-sage-light text-pine">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-3xl leading-tight text-ink">
          Thank you for reaching out.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{notice}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button onClick={startOver} variant="outline">
            Send another message
          </Button>
          <Button asChild>
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-cream p-6 shadow-card sm:p-8 md:p-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-clay-deep">
            Send a message
          </p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-ink">
            How can we help?
          </h2>
        </div>
        <span className="hidden rounded-full border border-ink/10 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-ink/65 sm:block">
          Step {step} of 2
        </span>
      </div>

      <div className="mt-6">
        <div className="h-1 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-clay transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[0.58rem] font-semibold uppercase tracking-[0.16em]">
          {steps.map((label, index) => (
            <span
              key={label}
              className={
                (index === 0 && step >= 1) || (index === 1 && step === 2)
                  ? "text-clay-deep"
                  : "text-ink/65"
              }
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-7" noValidate>
        <AnimatePresence mode="wait" initial={false}>
          {step === 1 ? (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="mt-1.5 text-xs text-clay-deep" role="alert">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone number"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    {...register("phone")}
                  />
                  {errors.phone ? (
                    <p className="mt-1.5 text-xs text-clay-deep" role="alert">
                      {errors.phone.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-clay-deep" role="alert">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <Button
                type="button"
                size="lg"
                className="w-full"
                onClick={goToMessage}
              >
                Continue
                <ArrowRight aria-hidden="true" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  {...register("subject")}
                />
                {errors.subject ? (
                  <p className="mt-1.5 text-xs text-clay-deep" role="alert">
                    {errors.subject.message}
                  </p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="comments">Comments</Label>
                <Textarea
                  id="comments"
                  placeholder="Tell us a little more about what you need."
                  rows={5}
                  {...register("comments")}
                />
                {errors.comments ? (
                  <p className="mt-1.5 text-xs text-clay-deep" role="alert">
                    {errors.comments.message}
                  </p>
                ) : null}
              </div>

              {status === "error" && notice ? (
                <p
                  className="rounded-xl border border-clay/30 bg-clay/8 px-4 py-3 text-xs leading-relaxed text-clay-deep"
                  role="alert"
                >
                  {notice}
                </p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setStep(1)}
                  disabled={isSubmitting}
                >
                  <ArrowLeft aria-hidden="true" />
                  Back
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" aria-hidden="true" />
                  ) : (
                    <Send aria-hidden="true" />
                  )}
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <p className="mt-5 text-[0.68rem] leading-relaxed text-ink/65">
        We only use your details to respond to your message. Prefer to call?{" "}
        <a
          href={site.phoneHref}
          className="font-semibold text-pine underline decoration-ink/20 underline-offset-2"
        >
          {site.phoneDisplay}
        </a>
      </p>
    </div>
  );
}
