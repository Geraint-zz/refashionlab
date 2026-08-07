import fs from "node:fs";
import path from "node:path";

const root = path.resolve("content/source/beginner-refashion-lab-2026-08-05/articles");
const rows = [];
for (const category of fs.readdirSync(root)) {
  const categoryRoot = path.join(root, category);
  if (!fs.statSync(categoryRoot).isDirectory()) continue;
  for (const slug of fs.readdirSync(categoryRoot)) {
    const item = path.join(categoryRoot, slug);
    if (!fs.statSync(item).isDirectory()) continue;
    const meta = JSON.parse(fs.readFileSync(path.join(item, "article.json"), "utf8"));
    rows.push({ slug, title: meta.title, seoTitle: meta.seo_title, summary: meta.summary, directAnswer: meta.direct_answer, category, markdown: fs.readFileSync(path.join(item, "article.md"), "utf8") });
  }
}
rows.sort((a, b) => a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug));
const output = `export const generatedPosts = ${JSON.stringify(rows, null, 2)} as const;\n`;
fs.writeFileSync("app/lib/generated-content.ts", output, "utf8");
console.log(`Generated ${rows.length} embedded posts.`);
