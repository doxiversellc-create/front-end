import z from "zod";

export const signupFormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name is too short.",
    }),
    lastName: z.string().min(2, {
      message: "Last name is too short.",
    }),
    email: z.email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
