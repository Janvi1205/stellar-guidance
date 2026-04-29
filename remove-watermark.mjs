import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "src/assets/grandf2.png");
const out = path.join(__dirname, "src/assets/grandf2.webp");

const meta = await sharp(src).metadata();
console.log(`Original size: ${meta.width}x${meta.height}`);

// Crop ~60px from bottom and ~60px from right to remove the Gemini watermark icon
const cropRight = 60;
const cropBottom = 60;

const newWidth = meta.width - cropRight;
const newHeight = meta.height - cropBottom;

await sharp(src)
  .extract({ left: 0, top: 0, width: newWidth, height: newHeight })
  .webp({ quality: 82, effort: 6 })
  .toFile(out);

console.log(`✅ Done! Cropped to ${newWidth}x${newHeight}, icon removed. Saved as grandf2.webp`);
