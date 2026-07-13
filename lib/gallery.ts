import fs from "fs";
import path from "path";

export function getImages(folder: string) {
  const dir = path.join(
    process.cwd(),
    "public",
    "images",
    folder
  );

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    )
    .sort()
    .map((file) => ({
      src: `/images/${folder}/${file}`,
      alt: file,
    }));
}