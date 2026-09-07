import { NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function asObject(value: unknown): Record<string, unknown> | null {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return null;
}

function unwrapValue(value: unknown): string | null {
  if (value == null || value === "") return null;
  if (typeof value === "string" || typeof value === "number") return String(value);
  const obj = asObject(value);
  if (!obj) return null;
  if (obj.value != null && obj.value !== "") return String(obj.value);
  return null;
}

function pickField(sources: Array<Record<string, unknown> | null>, keys: string[]) {
  for (const source of sources) {
    if (!source) continue;
    for (const key of keys) {
      const found = unwrapValue(source[key]);
      if (found) return found;
    }
  }
  return "Brak";
}

function collectionSources(body: Record<string, unknown>) {
  const data = asObject(body.data);
  const parameters = asObject(body.parameters) ?? asObject(data?.parameters);
  const analysis = asObject(body.analysis) ?? asObject(data?.analysis);
  const collected =
    asObject(analysis?.data_collection_results) ??
    asObject(body.data_extraction) ??
    asObject(data?.data_extraction);

  return [body, data, parameters, collected, analysis];
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    console.log("ElevenLabs Webhook Payload:", JSON.stringify(body, null, 2));

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Brak tokenów Telegrama w zmiennych środowiskowych!");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const sources = collectionSources(body);
    const name = pickField(sources, ["client_name", "Imie", "imie", "name"]);
    const phone = pickField(sources, ["phone", "Kontakt", "kontakt", "telefon"]);
    const email = pickField(sources, ["email", "Email"]);

    const message = [
      "🚀 <b>Nowy Lead – AI Sky</b>",
      "",
      `👤 <b>Imię:</b> ${escapeHtml(name)}`,
      `📞 <b>Telefon:</b> ${escapeHtml(phone)}`,
      `✉️ <b>Email:</b> ${escapeHtml(email)}`,
    ].join("\n");

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      console.error("Błąd wysyłki do Telegrama:", await response.text());
    }

    return NextResponse.json({ success: true, message: "Wysłano na Telegram" }, { status: 200 });
  } catch (error) {
    console.error("Błąd parsowania webhooka:", error);
    return NextResponse.json({ success: false }, { status: 200 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "Webhook gotowy i nasłuchuje na POST" }, { status: 200 });
}
