import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the refashionlab homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Beginner Sewing, Repair &amp; Upcycling/);
  assert.match(html, /Make useful things from what you already have/);
  assert.match(html, /https:\/\/refashionlab\.geraintx\.chatgpt\.site\//);
  assert.match(html, /\/section\/sewing-foundations\//);
  assert.match(html, /\/post\/fix-hole-in-jeans-by-hand\//);
  assert.match(html, /\/privacy-policy\//);
  assert.doesNotMatch(html, /href=["']#["']/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site|codex-preview/i);
});

test("server-renders a source-backed post and SEO endpoints", async () => {
  const response = await render("/post/fix-hole-in-jeans-by-hand/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /How to Fix a Hole in Jeans by Hand/);
  assert.match(html, /Published/);
  assert.match(html, /<link rel="canonical" href="https:\/\/refashionlab\.geraintx\.chatgpt\.site\/post\/fix-hole-in-jeans-by-hand\/"/);
  assert.ok(await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"));
  assert.ok(await readFile(new URL("../app/robots.ts", import.meta.url), "utf8"));
  await assert.rejects(access(new URL("public/_sites-preview", templateRoot)));
});
