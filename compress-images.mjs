import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, "src/assets");
const publicDir = path.join(__dirname, "public");

// Images to convert: [inputFile, outputFile, options]
const tasks = [
  // Large PNGs in assets -> WebP
  { src: path.join(assetsDir, "grandf2.png"),                    out: path.join(assetsDir, "grandf2.webp"),                    opts: { quality: 82, effort: 6 } },
  { src: path.join(assetsDir, "aarpit2.png"),                    out: path.join(assetsDir, "aarpit2.webp"),                    opts: { quality: 82, effort: 6 } },
  { src: path.join(assetsDir, "service-career-consultation.png"),out: path.join(assetsDir, "service-career-consultation.webp"),opts: { quality: 80, effort: 6 } },
  { src: path.join(assetsDir, "service-foreign-travel.png"),     out: path.join(assetsDir, "service-foreign-travel.webp"),     opts: { quality: 80, effort: 6 } },
  { src: path.join(assetsDir, "logo.png"),                       out: path.join(assetsDir, "logo.webp"),                       opts: { quality: 90, effort: 6 } },
  { src: path.join(assetsDir, "AstroAarpit_Pic-removebg-preview.png"), out: path.join(assetsDir, "AstroAarpit_Pic-removebg-preview.webp"), opts: { quality: 82, effort: 6 } },
  // Public hero portrait
  { src: path.join(publicDir, "hero-portrait.png"),              out: path.join(publicDir, "hero-portrait.webp"),              opts: { quality: 85, effort: 6 } },
];

async function run() {
  for (const { src, out, opts } of tasks) {
    try {
      await stat(src); // check exists
      const before = (await stat(src)).size;
      await sharp(src).webp(opts).toFile(out);
      const after = (await stat(out)).size;
      const saved = (((before - after) / before) * 100).toFixed(1);
      console.log(`✅ ${path.basename(src)} → ${path.basename(out)}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (saved ${saved}%)`);
    } catch (e) {
      console.warn(`⚠️  Skipped ${path.basename(src)}: ${e.message}`);
    }
  }
  console.log("\n✨ Done! Update your component imports to use .webp files.");
}

run();
