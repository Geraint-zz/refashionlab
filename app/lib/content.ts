import { generatedPosts } from "./generated-content";

export type Post = {
  slug: string; title: string; seoTitle: string; summary: string; directAnswer: string;
  section: string; category: string; markdown: string; publishedAt: string; updatedAt: string;
};
export type Category = { slug: string; title: string; section: string; posts: Post[] };
export type Section = { slug: string; title: string; description: string; categories: Category[] };

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
function assignedDate(index: number) { return new Date(Date.UTC(2026, 6, 28 + Math.floor(index / 5), 1, (index % 5) * 2)).toISOString(); }
export const posts: Post[] = [...generatedPosts].sort((a, b) => sectionOrder.indexOf(categoryToSection[a.category]) - sectionOrder.indexOf(categoryToSection[b.category]) || a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug)).map((post, index) => ({ ...post, section: categoryToSection[post.category], publishedAt: assignedDate(index), updatedAt: assignedDate(index) }));
export const sections: Section[] = sectionOrder.map((slug) => ({
  slug, title: sectionTitles[slug][0], description: sectionTitles[slug][1],
  categories: Object.keys(categoryToSection).filter((category) => categoryToSection[category] === slug).map((category) => ({ slug: category, title: categoryTitles[category], section: slug, posts: posts.filter((post) => post.category === category) })),
}));
export function getPost(slug: string) { return posts.find((post) => post.slug === slug); }
export function getCategory(slug: string) { return sections.flatMap((section) => section.categories).find((category) => category.slug === slug); }
export function getSection(slug: string) { return sections.find((section) => section.slug === slug); }
function escapeHtml(value: string) { return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;"); }
export function markdownToHtml(markdown: string, slug: string) { return markdown.split(/\r?\n/).map((line) => { const image = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/); if (image) { const role = image[2].toLowerCase().includes("closing") ? "closing" : "featured"; return `<figure class="article-media"><img src="/assets/images/${slug}/${role}.jpg" alt="${escapeHtml(image[1])}" loading="lazy" /></figure>`; } return line.startsWith("### ") ? `<h3>${line.slice(4)}</h3>` : line.startsWith("## ") ? `<h2>${line.slice(3)}</h2>` : line.startsWith("# ") ? `<h1>${line.slice(2)}</h1>` : line.trim() ? `<p>${line}</p>` : ""; }).join("\n"); }
export const siteOrigin = "https://refashionlab.geraintx.chatgpt.site";
