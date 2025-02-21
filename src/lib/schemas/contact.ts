import * as z from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  inquiryType: z.enum([
    "General Inquiry",
    "Digital Transformation Consultation",
    "AI Solutions",
    "Automation Services",
    "Web Development",
    "Other"
  ], {
    required_error: "Please select an inquiry type",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.enum(["email", "phone"]).default("email"),
  newsletter: z.boolean().default(false),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>