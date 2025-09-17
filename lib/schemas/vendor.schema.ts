import z from "zod";

export const vendorsSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  toolName: z.string().min(1, {
    message: "Tool name is required.",
  }),
  toolUrl: z.url({
    message: "Please enter a valid URL.",
  }),
  description: z
    .string()
    .min(20, {
      message: "Description must be at least 20 characters.",
    })
    .max(500, {
      message: "Description must not exceed 500 characters.",
    }),
});

export type VendorSchemaType = z.infer<typeof vendorsSchema>;
