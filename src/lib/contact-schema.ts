import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please keep your name under 80 characters."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(30, "Please keep your phone number under 30 characters.")
    .regex(/^[0-9+()\-.\s]+$/, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  subject: z
    .string()
    .trim()
    .max(120, "Please keep the subject under 120 characters.")
    .optional()
    .or(z.literal("")),
  comments: z
    .string()
    .trim()
    .max(1200, "Please keep your message under 1,200 characters.")
    .optional()
    .or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactDefaultValues: ContactInput = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  comments: "",
};
