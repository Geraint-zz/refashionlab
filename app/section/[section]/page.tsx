import type { Metadata } from "next";
import Link from "next/link";
import { ContentShell } from "../../_components/ContentShell";
import { getSection, sections } from "../../lib/content";

export function generateStaticParams() { return sections.map((section) => ({ section: section.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> { const section = getSection((await params).section); return { title: section?.title ?? "Section", description: section?.description, alternates: { canonical: `/section/${section?.slug ?? ""}/` } }; }
export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) { const section = getSection((await params).section); if (!section) return <ContentShell><h1>Section not found</h1></ContentShell>; return <ContentShell><p className="kicker">Section</p><h1>{section.title}</h1><p className="lede">{section.description}</p><div className="section-grid">{section.categories.map((category) => <Link className="section-card sage" key={category.slug} href={`/category/${category.slug}/`}><span>{category.posts.length} guides</span><h2>{category.title}</h2><p>Beginner-friendly guides and practical next steps.</p><b>Explore category →</b></Link>)}</div></ContentShell>; }
