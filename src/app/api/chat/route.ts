import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const urls = [
      "https://joki.fajaranugrahdev.my.id",
      "https://joki.fajaranugrahdev.my.id/our-teams",
      "https://joki.fajaranugrahdev.my.id/contact",
    ];

    let combinedText = "";

    for (const url of urls) {
      const res = await fetch(url);
      if (!res.ok) continue;

      const html = await res.text();
      const dom = new JSDOM(html);
      const doc = dom.window.document;

      // Ekstrak elemen penting
      const meta = Array.from(doc.querySelectorAll("meta[name='description'], meta[property='og:description']"))
        .map((m) => m.getAttribute("content") || "")
        .join(" ");

      const headings = Array.from(doc.querySelectorAll("h1,h2,h3,h4,h5,h6"))
        .map((h) => h.textContent?.trim() || "")
        .join(" ");

      const bodyText = doc.body.textContent?.trim() || "";

      const pageContent = `${meta}\n${headings}\n${bodyText}`.replace(/\s+/g, " ");
      combinedText += pageContent + "\n\n";
    }

    const finalText = combinedText.slice(0, 5000);

    const prompt = `
Berikut adalah informasi yang diambil dari beberapa halaman website Dev Dream:

${finalText}

Pertanyaan pengguna: ${message}

Berikan jawaban berdasarkan informasi yang tersedia di atas. Jika tidak menemukan informasi, jawab dengan sopan bahwa informasinya tidak ditemukan.
`;

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 400,
      }),
    });

    const data = await openaiRes.json();
    const reply = data.choices?.[0]?.message?.content ?? "Maaf, tidak ada jawaban.";
    return NextResponse.json({ reply });

  } catch (err: any) {
     return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
