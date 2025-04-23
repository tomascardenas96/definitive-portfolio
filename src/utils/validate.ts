import { z } from "zod";

export const commentSchema = z.object({
  content: z
    .string()
    .min(1, { message: "Comment body is required" })
    .max(100, { message: "Comment body must be less than 100 characters" }),

  email: z.string().email({ message: "Invalid email" }),
  googleId: z.string({ message: "Google ID is required" }),
});
