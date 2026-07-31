/**
 * Retry optimize locked JPGs via temp copy (Windows file locks).
 */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public");

const TARGETS = [
  { globDir: "herosection", maxW: 480, maxH: 720, q: 72 },
  { globDir: "hero", maxW: 1920, maxH: 1080, q: 72 },
  { globDir: "hero/posters", maxW: 1280, maxH: 720, q: 70 },
  { globDir: "hero/slider", maxW: 1600, maxH: 900, q: 72 },
  { globDir: "team", maxW: 800, maxH: 1000, q: 75 },
  { globDir: "portfolio", maxW: 1280, maxH: 1280, q: 74 },
];

async function listImages(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const out = [];
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...(await listImages(full)));
      else if (/\.(jpe?g|png|webp)$/i.test(e.name)) out.push(full);
    }
    return out;
  } catch {
    return [];
  }
}

async function optimizeViaTemp(file, maxW, maxH, q) {
  const before = (await fs.stat(file)).size;
  if (before < 80 * 1024) return null;

  const tmpIn = path.join(os.tmpdir(), `to-in-${Date.now()}-${path.basename(file)}`);
  const tmpOut = path.join(os.tmpdir(), `to-out-${Date.now()}-${path.basename(file)}.jpg`);
  await fs.copyFile(file, tmpIn);

  const buf = await sharp(tmpIn, { failOn: "none" })
    .rotate()
    .resize({ width: maxW, height: maxH, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: q, mozjpeg: true })
    .toBuffer();

  await fs.writeFile(tmpOut, buf);
  await fs.copyFile(tmpOut, file);
  await fs.unlink(tmpIn).catch(() => {});
  await fs.unlink(tmpOut).catch(() => {});

  const after = buf.length;
  if (after >= before * 0.92) return null;
  return { file, beforeKB: Math.round(before / 1024), afterKB: Math.round(after / 1024) };
}

async function main() {
  let saved = 0;
  for (const t of TARGETS) {
    const dir = path.join(ROOT, t.globDir);
    const files = await listImages(dir);
    for (const file of files) {
      // Skip already small portfolio jpgs from previous pass
      try {
        const result = await optimizeViaTemp(file, t.maxW, t.maxH, t.q);
        if (!result) continue;
        saved += result.beforeKB - result.afterKB;
        console.log(
          `${path.relative(ROOT, result.file)}: ${result.beforeKB}KB → ${result.afterKB}KB`,
        );
      } catch (err) {
        console.warn(`skip ${file}: ${err.message}`);
      }
    }
  }
  console.log(`Saved ~${saved}KB`);
}

main();
