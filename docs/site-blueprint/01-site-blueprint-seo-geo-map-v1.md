# refashionlab — Skill 01 Locked Site Blueprint

## Authority

```yaml
skill_id: "01"
site_id: "refashion-lab"
site_name: "refashionlab"
project_root: "C:/Users/aoemo/Documents/Refashion"
primary_language: "en-US"
target_market: "English-speaking global audience; country not specified"
project_type: "beginner sewing, clothing repair, and upcycling content site"
content_site: true
minimum_content_hierarchy_depth: 3
selected_content_hierarchy_depth: 3
planning_wireframe_only: true
production_visual_source: false
visual_source_status: awaiting_skill02
brand_asset_mode: text_wordmark
favicon_policy: required_before_launch
formal_domain_status: pending
```

## 1. Positioning and audience

refashionlab is a practical English-language guide for beginners who want to learn basic sewing, repair clothing, and turn existing garments or fabric into useful projects. The site prioritizes calm explanations, realistic materials, and small projects that build confidence.

Primary users are new sewers, household craft hobbyists, clothing-DIY readers, and upcycling beginners. The site does not position itself as professional tailoring education, certification, or expert safety advice.

## 2. Content hierarchy

```text
Section → Category → Post
```

Routes:

```text
/section/{section-slug}/
/category/{category-slug}/
/post/{post-slug}/
```

| Section | Categories | Posts |
|---|---|---:|
| Sewing Foundations | beginner-patterns, sewing-tools, sewing-machine-basics | 15 |
| Repair & Refashion | hand-sewing, visible-mending, denim-refashion, old-t-shirt-upcycling, before-after-projects | 25 |
| Everyday Sewing Projects | fabric-bags, home-sewing | 10 |

All ten categories contain five source-backed posts. Home and Legal pages are outside this three-level content hierarchy.

## 3. Initial scope and expansion boundary

The first release includes all 50 supplied posts and their supplied opening/closing images. No new Section or Category is approved in v1. A future Category requires at least 3–5 ready, source-backed posts; a future Section requires at least two stable Categories. Advanced pattern drafting, professional training, regulated advice, and unrelated high-risk topics remain out of scope.

## 4. SEO/GEO authority

The site-level topic is `beginner sewing, clothing repair, and upcycling projects`. Search ownership is divided into Learn, Fix, Refashion, and Make intents. Section pages own broad discovery queries; Category pages own topic hubs; Posts own one concrete how-to, project, or troubleshooting query each.

Every Post should open with a direct answer or project summary, then provide materials/tools, preparation, numbered steps, troubleshooting, applicable safety notes, and relevant internal links. FAQ is conditional on genuine reader questions, not mandatory keyword padding. Titles, headings, and descriptions must remain natural and source-supported. Unsupported expert claims, guaranteed outcomes, and keyword stuffing are prohibited.

## 5. Editorial quality profile

```yaml
language: en-US
audience_level: beginner
tone: [calm, practical, encouraging, non-judgmental]
display_title_max_length: 72
seo_title_max_length: 60
h1_matches_display_title: true
meta_description_target_length: 145-160
faq_required_on_every_post: false
related_posts_required_when_relevant: true
length_threshold_breach: REVIEW
missing_core_steps: BLOCKED
unsupported_expert_claim: REVIEW
```

## 6. Legal and trust direction

Legal source mode is `standard_template_pack`. Required routes are `/about/`, `/privacy-policy/`, `/terms/`, and `/user-agreement/`. The site is treated as a static content site with no accounts, comments, user submissions, contact form, email subscription, payments, or downloads. Analytics, cookies, ads, and affiliate links use cautious future-safe language because their activation status is not confirmed. Legal drafts are general operational trust content, not legal advice.

## 7. Content time policy

See `docs/planning/content-time-policy-v1.json`. The user-approved anchor is 2026-08-07 in Asia/Shanghai, with a ten-day backward window, five posts per day, unique timestamps, no future timestamps, and initial `updated_at` equal to `published_at`.

## 8. Homepage prototype direction

The mobile-first planning wireframe includes: text wordmark/header, beginner-focused hero, four beginner pathways, three Section cards, featured guides, material-first browsing, editorial promise, and a Legal footer. It is planning-only and must not be treated as a production visual source.

## 9. Handoff constraints

Skill 02 receives the hierarchy, homepage planning wireframe, brand direction, and visual-source status. Skill 03 must establish an approved production visual source before implementation. Skill 01B may only persist, archive, hash, and validate the approved package; it must not rewrite strategy, build the website, register Admin, run downstream Skills, commit, push, or deploy.
