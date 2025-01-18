// app/clan-activity/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // API-Request durchführen
    const apiRes = await fetch(
      "https://soluna.onrender.com/clan-activity",
      {
        method: "GET",
        headers: {
          "Content-Type": "text/html",
        },
        // Optional: Caching-Strategie, falls nötig
        // cache: 'no-store', // Beispiel: Deaktiviere Caching
      }
    );

    // Fehlerbehandlung bei nicht erfolgreichen Antworten
    if (!apiRes.ok) {
      return new NextResponse(`Fehler: ${apiRes.status} ${apiRes.statusText}`, {
        status: apiRes.status,
      });
    }

    // HTML-Inhalt von der API abrufen
    const html = await apiRes.text();

    // API-HTML direkt als Antwort zurückgeben
    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("Fehler beim Abrufen der API:", error);
    return new NextResponse("Interner Serverfehler", { status: 500 });
  }
}
