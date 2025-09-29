import z from "zod";

export const signupFormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name is too short.",
    }),
    lastName: z.string().min(2, {
      message: "Last name is too short.",
    }),
    username: z.string().min(3, {
      message: "Username is too short.",
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

export const loginFormSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const forgotPasswordSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
});

export const profileUpdateSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name is too short.",
  }),
  lastName: z.string().min(2, {
    message: "Last name is too short.",
  }),
  userName: z.string().min(3, {
    message: "Username is too short.",
  }),
});

export type profileUpdateSchemaType = z.infer<typeof profileUpdateSchema>;
export type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
export type signupFormSchemaType = z.infer<typeof signupFormSchema>;
export type loginFormSchemaType = z.infer<typeof loginFormSchema>;
