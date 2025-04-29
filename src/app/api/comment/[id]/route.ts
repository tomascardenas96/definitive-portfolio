import { UpdateCommentDto } from "@/dtos/comment.dto";
import { deleteComment } from "@/lib/comment/deleteComment";
import { updateComment } from "@/lib/comment/updateComment";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { message, error } = await deleteComment(id);

    if (error) {
      return NextResponse.json({ error }, { status: 401 });
    }

    return NextResponse.json({ message }, { status: 200 });
  } catch (error) {
    console.error("Error al eliminar comentario:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const { message, error } = await updateComment(id, body);

    if (error) {
      return NextResponse.json({ error }, { status: 401 });
    }

    return NextResponse.json({ message }, { status: 200 });
  } catch (error) {
    console.error("Error al actualizar comentario:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
