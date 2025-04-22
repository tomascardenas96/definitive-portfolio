import { z } from "zod";

export const commentSchema = z.object({
  // Aqui se define el esquema de los datos que se van a validar

  // Si no cumple con el esquema, se lanza un error
  // body: z.string().min(1, { message: "Comment body is required" }),
  // postId: z.string().min(1, { message: "Post ID is required" }),
  // userId: z.string().min(1, { message: "User ID is required" }),

  // Si cumple con el esquema, se devuelve el dato

  // Ejemplo de uso:
  // const comment = commentSchema.parse({
  //     body: "This is a comment",
  //     postId: "123",
  //     userId: "456",
  // });
});

