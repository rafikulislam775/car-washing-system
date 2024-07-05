import { z } from "zod";

// Define the zod schema for the services
const serviceValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  duration: z
    .number()
    .int()
    .min(1, { message: "Duration must be at least 1 minute" })
    .max(60, { message: "Duration must be at most 60 minutes" }),
  isDeleted: z.boolean().optional().default(false),
});

export const serviceValidations = {
  serviceValidationSchema,
};
