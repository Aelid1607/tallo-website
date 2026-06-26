import { NextRequest, NextResponse } from "next/server";

const FIREBASE_PROJECT_ID = "shopsmartau-7657e";
const FIREBASE_API_KEY = "AIzaSyCX_oBifFlgoRCpcSe3niR9xikCX1c05w4";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/waitlist?key=${FIREBASE_API_KEY}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        email: { stringValue: email.toLowerCase().trim() },
        source: { stringValue: "website" },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
