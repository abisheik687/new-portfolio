
'use server';

import type { ContactFormValues } from '@/lib/form-schemas';

export async function submitContactForm(data: ContactFormValues) {
  console.log("Form data submitted (from server action):", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Simulate success or error
  // if (Math.random() > 0.5) throw new Error("Failed to send message");
  return { success: true, message: "Message sent successfully! (Simulated)" };
}
