import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json([]);
  }

  const dir = path.join(
    process.cwd(),
    "public",
    "images",
    folder
  );

  if (!fs.existsSync(dir)) {
    return NextResponse.json([]);
  }

  const images = fs
    .readdirSync(dir)
    .filter(file =>
      /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    )
    .sort()
    .map(file => ({
      src: `/images/${folder}/${file}`,
      alt: file,
    }));

  return NextResponse.json(images);
}