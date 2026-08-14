import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "../../_components/ContentShell";
import { getPost, markdownToHtml, posts } from "../../lib/content";

export function generateStaticParams() { return posts.map((post) => ({ post: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ post: string }> }): Promise<Metadata> { const post = getPost((await params).post); return { title: post?.seoTitle ?? "Guide", description: post?.summary, alternates: { canonical: `/post/${post?.slug ?? ""}/` }, openGraph: { title: post?.seoTitle, description: post?.summary, type: "article" } }; }
export default async function PostPage({ params }: { params: Promise<{ post: string }> }) { const post = getPost((await params).post); if (!post) notFound(); return <ContentShell><article className="article"><p className="kicker">{post.category.replaceAll("-", " ")} · beginner guide</p><h1>{post.title}</h1><p className="lede">{post.directAnswer}</p><p className="article-date">Published {new Date(post.publishedAt).toLocaleDateString("en-US", { dateStyle: "long", timeZone: "Asia/Shanghai" })}</p><div className="article-body" dangerouslySetInnerHTML={{ __html: markdownToHtml(post.markdown, post.slug) }} /><a className="button button-dark" href={`/category/${post.category}/`}>More in this category →</a></article></ContentShell>; }
