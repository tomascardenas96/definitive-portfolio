import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { message } = await req.json();

  const html = `
  <h2>Nuevo mensaje desde el sitio web</h2>
  <p><strong>Nombre:</strong> ${session.user?.name}</p>
  <p><strong>Email:</strong> ${session.user?.email}</p>
  <p><strong>Mensaje:</strong><br/>${message}</p>
`;

  try {
    const data = await resend.emails.send({
      from: `${session.user?.name} <my-portfolio@tomascardenas.me>`,
      to: "tomascardenas.dev@gmail.com",
      subject: "Tenés un nuevo mensaje desde tu portafolio",
      html,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error as string);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
