"use server";

import { contactSchema, type ContactInput } from "@/lib/contact-schema";

export type ContactResult = {
  ok: boolean;
  message: string;
};

export async function submitContact(values: ContactInput): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      message:
        "Oops, there was an error sending your message. Please try again later.",
    };
  }

  // The practice can connect this action to its preferred inbox or CRM.
  console.info("New contact request", {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
  });

  return {
    ok: true,
    message:
      "Thank you for contacting us. We will get back to you as soon as possible.",
  };
}
