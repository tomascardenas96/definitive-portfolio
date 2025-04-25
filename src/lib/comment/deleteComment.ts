import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";
import { prisma } from "../prisma";
import { getCommentById } from "./getCommentById";

export const deleteComment = async (id: string) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { error: "Unauthorized" };
  }

  const comment = await getCommentById(id);

  if (!comment) {
    return { error: "Comment not found" };
  }

  if (comment.email !== session.user?.email) {
    return { error: "Unauthorized" };
  }

  await prisma.comment.delete({
    where: {
      id,
    },
  });

  return { message: "Comment deleted" };
};
