import type { Metadata } from "next";
import Link from "next/link";
import { ContentShell } from "../../_components/ContentShell";
import { getCategory, sections } from "../../lib/content";
export function generateStaticParams() { return sections.flatMap((section) => section.categories.map((category) => ({ category: category.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> { const category = getCategory((await params).category); return { title: category?.title ?? "Category", description: `Beginner guides in ${category?.title ?? "this category"}.`, alternates: { canonical: `/category/${category?.slug ?? ""}/` } }; }
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) { const category = getCategory((await params).category); if (!category) return <ContentShell><h1>Category not found</h1></ContentShell>; return <ContentShell><p className="kicker">Category</p><h1>{category.title}</h1><p className="lede">Small, source-backed projects that help you practise one useful skill at a time.</p><div className="guide-list">{category.posts.map((post) => <Link href={`/post/${post.slug}/`} className="guide" key={post.slug}><span>{category.title}</span><h2>{post.title}</h2><p>{post.summary}</p><strong>Read guide →</strong></Link>)}</div></ContentShell>; }
