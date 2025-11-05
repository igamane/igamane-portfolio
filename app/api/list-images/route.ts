// app/api/list-images/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const dirParam = (searchParams.get("dir") ?? "").trim();
  if (!dirParam) return NextResponse.json({ images: [] }, { status: 400 });

  // Ensure leading slash, keep your original prefix
  const normalized = dirParam.startsWith("/") ? dirParam : `/${dirParam}`;

  // Accept both folder names
  const m = normalized.match(/^\/(project-screenshots|projects-screenshots)\/(.*)$/i);
  if (!m) return NextResponse.json({ images: [] }, { status: 400 });

  const prefix = m[1];          // "project-screenshots" or "projects-screenshots"
  const rest = m[2] || "";      // subpath like "1/d-1"

  const baseDir = path.join(process.cwd(), "public", prefix);
  const absDir = path.join(baseDir, rest);
  const absDirNormalized = path.normalize(absDir);
  const safeBase = path.normalize(baseDir);

  // Prevent traversal
  if (!absDirNormalized.toLowerCase().startsWith(safeBase.toLowerCase())) {
    return NextResponse.json({ images: [] }, { status: 400 });
  }

  try {
    const items = await fs.readdir(absDirNormalized, { withFileTypes: true });
    const files = items
      .filter(d => d.isFile())
      .map(d => d.name)
      .filter(name => IMAGE_EXTS.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    const baseUrl = `/${prefix}/${rest}`.replace(/\/+$/, "");
    const images = files.map(name => `${baseUrl}/${name}`);

    return NextResponse.json(
      { images },
      { headers: { "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=300" } }
    );
  } catch (err: any) {
    // Optional: include error to debug locally
    return NextResponse.json({ images: [], error: err?.code || "READ_ERROR" }, { status: 200 });
  }
}
