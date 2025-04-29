import { z } from "zod";

export const createCommentSchema = z.object({
  content: z.string().min(1, { message: "Comment body is required" }),
});

export const updateCommentSchema = createCommentSchema.partial();

export type CreateCommentDto = z.infer<typeof createCommentSchema>;
export type UpdateCommentDto = z.infer<typeof updateCommentSchema>;
