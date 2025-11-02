import { z } from "zod";

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
];

export const registrationSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "First name can only contain letters, spaces, hyphens, and apostrophes"
      ),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .regex(
        /^[a-zA-Z\s'-]+$/,
        "Last name can only contain letters, spaces, hyphens, and apostrophes"
      ),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),

    whatsappNumber: z
      .string()
      .min(1, "WhatsApp number is required")
      .regex(
        /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,6}[-\s\.]?[0-9]{1,6}$/,
        "Please enter a valid phone number"
      ),

    expectations: z
      .string()
      .min(
        10,
        "Please provide at least 10 characters describing your expectations"
      )
      .max(1000, "Expectations must be less than 1000 characters"),

    hearAboutUs: z.enum(["WhatsApp", "Twitter", "LinkedIn", "Other"], {
      message: "Please select how you heard about this course",
    }),

    otherSource: z.string().optional(),

    proofOfPayment: z
      .custom<FileList>()
      .refine((files) => files?.length === 1, "Proof of payment is required")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        "File size must be less than 10MB"
      )
      .refine(
        (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png, .webp and .pdf files are accepted"
      ),
  })
  .refine(
    (data) => {
      // If "Other" is selected, otherSource must be provided
      if (data.hearAboutUs === "Other") {
        return data.otherSource && data.otherSource.trim().length > 0;
      }
      return true;
    },
    {
      message: "Please specify how you heard about us",
      path: ["otherSource"],
    }
  );

export type RegistrationFormData = z.infer<typeof registrationSchema>;
