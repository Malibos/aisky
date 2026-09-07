import { NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Brak tokenów Telegrama w zmiennych środowiskowych!");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const dataString = JSON.stringify(body, null, 2);
    const message = `🚀 <b>Nowy Lead - AI Sky</b>\n\n<pre>${escapeHtml(dataString)}</pre>`;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message.slice(0, 4096),
        parse_mode: "HTML",
      }),
    });

    return NextResponse.json({ success: true, message: "Wysłano na Telegram" }, { status: 200 });
  } catch (error) {
    console.error("Błąd parsowania webhooka:", error);
    return NextResponse.json({ success: false }, { status: 200 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "Webhook gotowy i nasłuchuje na POST" }, { status: 200 });
}
