import fs from "node:fs";
import path from "node:path";

const root = path.resolve("content/source/beginner-refashion-lab-2026-08-05");
const map = JSON.parse(fs.readFileSync(path.join(root, "content-map.json"), "utf8"));
const expectedCategories = ["beginner-patterns", "sewing-tools", "sewing-machine-basics", "hand-sewing", "visible-mending", "denim-refashion", "old-t-shirt-upcycling", "before-after-projects", "fabric-bags", "home-sewing"];
const posts = [];
for (const category of expectedCategories) {
  const dir = path.join(root, "articles", category);
  if (!fs.existsSync(dir)) throw new Error(`Missing category: ${category}`);
  for (const slug of fs.readdirSync(dir)) {
    const item = path.join(dir, slug);
    if (!fs.statSync(item).isDirectory()) continue;
    const meta = JSON.parse(fs.readFileSync(path.join(item, "article.json"), "utf8"));
    if (!fs.existsSync(path.join(item, "article.md"))) throw new Error(`Missing article markdown: ${category}/${slug}`);
    posts.push({ ...meta, category, slug });
  }
}
if (map.length !== 50 || posts.length !== 50) throw new Error(`Expected 50 posts; map=${map.length}, files=${posts.length}`);
if (new Set(posts.map((post) => post.slug)).size !== 50) throw new Error("Duplicate post slug");
const anchor = new Date("2026-08-07T23:59:59+08:00");
const assigned = posts.map((_, index) => new Date(Date.UTC(2026, 6, 28 + Math.floor(index / 5), 1, (index % 5) * 2)).toISOString());
if (new Set(assigned).size !== 50 || assigned.some((date) => new Date(date) > anchor)) throw new Error("Invalid publish schedule");
for (const file of ["app/about/page.tsx", "app/privacy-policy/page.tsx", "app/terms/page.tsx", "app/user-agreement/page.tsx", "app/sitemap.ts", "app/robots.ts"]) if (!fs.existsSync(file)) throw new Error(`Missing runtime file: ${file}`);
console.log(`PASS: ${posts.length} posts, ${expectedCategories.length} categories, 3 sections, 4 legal routes, schedule valid.`);
