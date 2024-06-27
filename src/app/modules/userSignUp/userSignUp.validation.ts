import { z } from "zod";

const userSignUpValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name must be required" }),
    email: z.string().email().min(1, { message: "Email must be required" }),
    password: z.string().min(1, { message: "Password must be required" }),
    phone: z.string().min(1, { message: "Phone must be required" }),
    role: z.enum(["admin", "user"], {
      message: "role must be one of the following', 'admin',or,'user'",
    }),
  }),
});
export const userSignUpValidations = {
  userSignUpValidationSchema,
};
