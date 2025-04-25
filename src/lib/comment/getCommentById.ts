import { prisma } from "../prisma";

export const getCommentById = async (id: string) => {
  return await prisma.comment.findUnique({
    where: {
      id,
    },
  });
};
