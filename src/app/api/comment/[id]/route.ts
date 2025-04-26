import { deleteComment } from "@/lib/comment/deleteComment";
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
