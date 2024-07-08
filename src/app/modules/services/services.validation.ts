import { z } from "zod";

// Define the zod schema for the services
const serviceValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    price: z.number().positive({ message: "Price must be a positive number" }),
    duration: z
      .number()
      .int()
      .min(1, { message: "Duration must be at least 1 minute" })
      .max(60, { message: "Duration must be at most 60 minutes" }),
    isDeleted: z.boolean().optional().default(false),
  }),
});
const UpdateServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }).optional(),
    description: z
      .string()
      .min(1, { message: "Description is required" })
      .optional(),
    price: z
      .number()
      .positive({ message: "Price must be a positive number" })
      .optional(),
    duration: z
      .number()
      .int()
      .min(1, { message: "Duration must be at least 1 minute" })
      .max(60, { message: "Duration must be at most 60 minutes" })
      .optional(),
    isDeleted: z.boolean().optional().default(false).optional(),
  }),
});

export const serviceValidations = {
  serviceValidationSchema,
  UpdateServiceValidationSchema,
};
