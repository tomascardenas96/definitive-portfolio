import { authOptions } from "@/lib/authOptions";
import { initializeDatabase, prisma } from "@/lib/prisma";
import { commentSchema } from "@/utils/validate";
import { getServerSession, Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await initializeDatabase();

    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await initializeDatabase();
    const session: Session | null = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized user" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = commentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, image } = session.user!;

    console.log(session.user!);

    await prisma.comment.create({
      data: {
        content: parsed.data.content,
        name: name!,
        image: image!,
        email: email!,
        location: "Benito Juarez, AR",
        googleId: "abc123",
      },
    });

    return NextResponse.json({ message: "Comment created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
