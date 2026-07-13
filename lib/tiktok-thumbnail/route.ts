import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "Missing url" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}