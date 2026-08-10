import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { join, dirname } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const client = join(dist, "client");
const port = 4323;
const sections = JSON.parse(await readFile(join(root, "src/data/sections.json"), "utf8"));
const categories = JSON.parse(await readFile(join(root, "src/data/categories.json"), "utf8"));
const posts = JSON.parse(await readFile(join(root, "src/data/posts.json"), "utf8"));
const routes = [
  "/",
  "/about/",
  "/privacy-policy/",
  "/terms/",
  "/user-agreement/",
  ...sections.map((item) => `/section/${item.slug}/`),
  ...categories.map((item) => `/category/${item.slug}/`),
  ...posts.map((item) => `/post/${item.slug}/`),
  "/sitemap.xml",
  "/robots.txt",
];

await cp(client, dist, { recursive: true, force: true });

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const server = spawn(npmCommand, ["run", "start", "--", "--port", String(port)], {
  cwd: root,
  stdio: "ignore",
  shell: process.platform === "win32",
});
const stop = () => { if (!server.killed) server.kill(); };
process.on("exit", stop);

let ready = false;
for (let attempt = 0; attempt < 60; attempt += 1) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/`);
    if (response.ok) { ready = true; break; }
  } catch {}
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
if (!ready) throw new Error("Pages static export server did not become ready.");

for (const route of routes) {
  const response = await fetch(`http://127.0.0.1:${port}${route}`);
  if (!response.ok) throw new Error(`Static export route failed: ${route} (${response.status})`);
  const body = await response.text();
  const output = route.endsWith(".xml") || route.endsWith(".txt")
    ? join(dist, route.slice(1))
    : join(dist, route === "/" ? "index.html" : route.slice(1), "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, body);
}

await rm(join(dist, "server"), { recursive: true, force: true });
// Vinext creates a Wrangler deploy config for its server output. This build is
// intentionally converted to static Pages output, so remove only that config
// before Cloudflare Pages performs its post-build Wrangler configuration scan.
await rm(join(root, ".wrangler", "deploy", "config.json"), { force: true });
await writeFile(join(dist, ".assetsignore"), "*.map\n");
stop();
console.log(`Prepared ${routes.length - 2} HTML routes plus sitemap.xml and robots.txt for Cloudflare Pages.`);
