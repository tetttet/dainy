import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const messages = body.messages;

  const apiKey = process.env.GEMINI_API_KEY;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: messages.map((msg: unknown) => ({
          role: (msg as { role: string }).role,
          parts: [{ text: (msg as { content: string }).content }],
        })),
      }),
    }
  );

  const data = await response.json();
  const botText =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

  return NextResponse.json({ response: botText });
}
