import fs from "node:fs";
import path from "node:path";

export type Post = {
  slug: string; title: string; seoTitle: string; summary: string; directAnswer: string;
  section: string; category: string; markdown: string; publishedAt: string; updatedAt: string;
};
export type Category = { slug: string; title: string; section: string; posts: Post[] };
export type Section = { slug: string; title: string; description: string; categories: Category[] };

const sourceRoot = path.join(process.cwd(), "content", "source", "beginner-refashion-lab-2026-08-05");
const sectionOrder = ["sewing-foundations", "repair-and-refashion", "everyday-sewing-projects"];
const sectionTitles: Record<string, [string, string]> = {
  "sewing-foundations": ["Sewing Foundations", "Begin with patterns, tools, and machine basics that make the next project feel possible."],
  "repair-and-refashion": ["Repair & Refashion", "Give worn clothes a practical second life through small repairs and thoughtful transformations."],
  "everyday-sewing-projects": ["Everyday Sewing Projects", "Make useful bags and home pieces from fabric you already have."],
};
const categoryTitles: Record<string, string> = {
  "beginner-patterns": "Beginner Patterns", "sewing-tools": "Sewing Tools", "sewing-machine-basics": "Sewing Machine Basics",
  "hand-sewing": "Hand Sewing", "visible-mending": "Visible Mending", "denim-refashion": "Denim Refashion",
  "old-t-shirt-upcycling": "Old T-Shirt Upcycling", "before-after-projects": "Before & After Projects",
  "fabric-bags": "Fabric Bags", "home-sewing": "Home Sewing",
};
const categoryToSection: Record<string, string> = {
  "beginner-patterns": "sewing-foundations", "sewing-tools": "sewing-foundations", "sewing-machine-basics": "sewing-foundations",
  "hand-sewing": "repair-and-refashion", "visible-mending": "repair-and-refashion", "denim-refashion": "repair-and-refashion",
  "old-t-shirt-upcycling": "repair-and-refashion", "before-after-projects": "repair-and-refashion",
  "fabric-bags": "everyday-sewing-projects", "home-sewing": "everyday-sewing-projects",
};
function readJson<T>(file: string): T { return JSON.parse(fs.readFileSync(file, "utf8")) as T; }
function metadataPath(category: string, slug: string) { return path.join(sourceRoot, "articles", category, slug, "article.json"); }
function markdownPath(category: string, slug: string) { return path.join(sourceRoot, "articles", category, slug, "article.md"); }
function assignedDate(index: number) { return new Date(Date.UTC(2026, 6, 28 + Math.floor(index / 5), 1, (index % 5) * 2)).toISOString(); }

function loadPosts(): Post[] {
  const rows: Post[] = [];
  for (const category of fs.readdirSync(path.join(sourceRoot, "articles"))) {
    const categoryPath = path.join(sourceRoot, "articles", category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;
    for (const slug of fs.readdirSync(categoryPath)) {
      const itemPath = path.join(categoryPath, slug);
      if (!fs.statSync(itemPath).isDirectory()) continue;
      const meta = readJson<{ title: string; seo_title: string; summary: string; direct_answer: string }>(metadataPath(category, slug));
      rows.push({ slug, title: meta.title, seoTitle: meta.seo_title, summary: meta.summary, directAnswer: meta.direct_answer, section: categoryToSection[category], category, markdown: fs.readFileSync(markdownPath(category, slug), "utf8"), publishedAt: "", updatedAt: "" });
    }
  }
  rows.sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section) || a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug));
  return rows.map((post, index) => ({ ...post, publishedAt: assignedDate(index), updatedAt: assignedDate(index) }));
}

export const posts = loadPosts();
export const sections: Section[] = sectionOrder.map((slug) => ({
  slug, title: sectionTitles[slug][0], description: sectionTitles[slug][1],
  categories: Object.keys(categoryToSection).filter((category) => categoryToSection[category] === slug).map((category) => ({ slug: category, title: categoryTitles[category], section: slug, posts: posts.filter((post) => post.category === category) })),
}));
export function getPost(slug: string) { return posts.find((post) => post.slug === slug); }
export function getCategory(slug: string) { return sections.flatMap((section) => section.categories).find((category) => category.slug === slug); }
export function getSection(slug: string) { return sections.find((section) => section.slug === slug); }
export function markdownToHtml(markdown: string) { return markdown.split(/\r?\n/).filter((line) => !line.startsWith("![")).map((line) => line.startsWith("### ") ? `<h3>${line.slice(4)}</h3>` : line.startsWith("## ") ? `<h2>${line.slice(3)}</h2>` : line.startsWith("# ") ? `<h1>${line.slice(2)}</h1>` : line.trim() ? `<p>${line}</p>` : "").join("\n"); }
export const siteOrigin = "https://refashionlab.geraintx.chatgpt.site";
