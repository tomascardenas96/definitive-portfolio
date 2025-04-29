import { UpdateCommentDto, updateCommentSchema } from "@/dtos/comment.dto";
import { prisma } from "../prisma";

export const updateComment = async (id: string, body: UpdateCommentDto) => {
  const parsed = updateCommentSchema.safeParse(body);

  if (!parsed.success) {
    return {
      message: "Invalid request",
      error: parsed.error.format(),
    };
  }

  const { content } = parsed.data;

  const comment = await prisma.comment.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  return {
    message: "Comment updated",
    comment,
  };
};
