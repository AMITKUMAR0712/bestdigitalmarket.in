/**
 * Compress / resize public images in place for faster loads.
 * Keeps the same filenames (PNG screenshots become JPEG with .jpg and path map printed).
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public");

const RULES = [
  { dir: "herosection", maxW: 480, maxH: 720, quality: 72 },
  { dir: "portfolio", maxW: 1280, maxH: 1280, quality: 74 },
  { dir: "team", maxW: 800, maxH: 1000, quality: 75 },
  { dir: "hero", maxW: 1920, maxH: 1080, quality: 72 },
  { dir: "hero/posters", maxW: 1280, maxH: 720, quality: 70 },
  { dir: "hero/slider", maxW: 1600, maxH: 900, quality: 72 },
];

const EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (EXT.has(path.extname(e.name).toLowerCase())) files.push(full);
  }
  return files;
}

function ruleFor(file) {
  const rel = path.relative(ROOT, file).replaceAll("\\", "/");
  const match = RULES.find((r) => rel === r.dir || rel.startsWith(r.dir + "/"));
  return match ?? { dir: "", maxW: 1600, maxH: 1600, quality: 75 };
}

async function optimizeFile(file) {
  const ext = path.extname(file).toLowerCase();
  const rule = ruleFor(file);
  const before = (await fs.stat(file)).size;
  if (before < 40 * 1024) return null; // already light

  const img = sharp(file, { failOn: "none" }).rotate();
  const meta = await img.metadata();
  let pipeline = img.resize({
    width: rule.maxW,
    height: rule.maxH,
    fit: "inside",
    withoutEnlargement: true,
  });

  const isPng = ext === ".png";
  const outJpg = isPng ? file.replace(/\.png$/i, ".jpg") : file;

  if (isPng || ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: rule.quality, mozjpeg: true });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: rule.quality });
  }

  const buf = await pipeline.toBuffer();
  if (buf.length >= before * 0.95 && !isPng) return null; // no meaningful win

  await fs.writeFile(outJpg, buf);
  if (isPng && outJpg !== file) {
    await fs.unlink(file).catch(() => {});
  }

  const after = buf.length;
  return {
    from: path.relative(ROOT, file).replaceAll("\\", "/"),
    to: path.relative(ROOT, outJpg).replaceAll("\\", "/"),
    beforeKB: Math.round(before / 1024),
    afterKB: Math.round(after / 1024),
    converted: isPng && outJpg !== file,
    dims: `${meta.width}x${meta.height}`,
  };
}

async function main() {
  // Logo: special small treatment
  const logo = path.join(ROOT, "tradeorbit-logo.png");
  try {
    const before = (await fs.stat(logo)).size;
    const buf = await sharp(logo)
      .resize({ width: 360, withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true })
      .toBuffer();
    if (buf.length < before) {
      await fs.writeFile(logo, buf);
      console.log(`logo: ${Math.round(before / 1024)}KB → ${Math.round(buf.length / 1024)}KB`);
    }
  } catch {
    /* ignore */
  }

  const files = await walk(ROOT);
  const renamed = [];
  let saved = 0;

  for (const file of files) {
    if (file.includes("tradeorbit-logo")) continue;
    try {
      const result = await optimizeFile(file);
      if (!result) continue;
      saved += result.beforeKB - result.afterKB;
      console.log(
        `${result.from}: ${result.beforeKB}KB → ${result.afterKB}KB (${result.dims})`,
      );
      if (result.converted) renamed.push(result);
    } catch (err) {
      console.warn(`skip ${file}:`, err.message);
    }
  }

  console.log(`\nSaved ~${saved}KB total`);
  if (renamed.length) {
    console.log("\nPNG→JPG renames (update code paths):");
    for (const r of renamed) console.log(`  /${r.from} → /${r.to}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
