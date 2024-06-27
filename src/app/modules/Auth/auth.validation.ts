import { z } from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string().email().min(1, { message: "Email must be required" }),
    password: z.string().min(1, { message: "Password must be required" }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
};
