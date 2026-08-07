# refashionlab — Skill 02 Stitch UI Brief v1

Status: `VISUAL_ARCHITECTURE / WAITING_FOR_FIRST_CANDIDATE`

This brief is derived from the locked Skill 01 blueprint and planning wireframe. It is a design input only; it is not an approved production visual source.

## Site identity

- Site name: refashionlab
- Site ID: refashion-lab
- Purpose: calm, practical English-language guides for beginner sewing, clothing repair, and upcycling.
- Audience: new sewers, household craft hobbyists, clothing-DIY readers, and upcycling beginners.
- Voice: calm, practical, encouraging, non-judgmental.
- Brand mode: text wordmark; no unapproved icon or mascot.

## Information architecture

- Homepage: discovery and editorial promise.
- Level 1: `/section/{section-slug}/` with section introduction, category cards, and featured/latest guides.
- Level 2: `/category/{category-slug}/` with topic introduction, five source-backed post cards, and parent section link.
- Level 3: `/post/{post-slug}/` with breadcrumb, title, direct answer, published state, long-form body, FAQ when present, and related next steps.
- Trust pages: `/about/`, `/privacy-policy/`, `/terms/`, `/user-agreement/`.

## Visual direction

Use a warm, tactile editorial system that feels like a well-used sewing notebook: warm cream paper, deep green ink, muted sage, terracotta/rust accents, fine rules, generous margins, and restrained rounded corners. The visual system should feel useful and handmade without looking childish, rustic-themed, or overly decorative.

Use a text wordmark in the header and footer. Do not invent a symbol, animal, monogram, or separate logo mark. Keep the wordmark consistent across all page types.

## Mobile-first requirements

- Design the narrow mobile layout first at approximately 360–390px.
- Header must stay compact with a visible wordmark and a clear touch-friendly navigation affordance.
- Body copy must remain readable without horizontal overflow; use comfortable line length and spacing.
- Touch targets should be at least 44px where interactive.
- Long titles and article paragraphs must wrap naturally.
- Cards should stack to one column on narrow screens and avoid dense mechanical grids.
- Legal pages must use the same header/footer but a calm, readable long-form layout.
- Use minimal motion and respect reduced-motion preferences.

## Homepage sections

1. Text wordmark and compact navigation.
2. Beginner-focused hero: “Make useful things from what you already have.”
3. Four beginner pathways: Start Sewing, Repair Clothes, Refashion Old Clothes, Make Projects.
4. Three Section cards: Sewing Foundations, Repair & Refashion, Everyday Sewing Projects.
5. Featured guides using real source titles.
6. Browse-by-material or practical discovery block.
7. Editorial promise: useful over perfect, clear steps, use what you have, make it yours.
8. Footer with all four Legal links.

## Page states to show in Stitch

- Homepage desktop and mobile.
- Section landing desktop and mobile.
- Category hub desktop and mobile.
- Post detail desktop and mobile, including long title, breadcrumb, published date, h2/h3 body, materials/steps, FAQ, and related links.
- Legal long-form page desktop and mobile.
- Empty/404 state may be shown only as a secondary state, not as the main visual source.

## Content and date rules

Use only the supplied content direction and real article titles. Do not use lorem ipsum or invented product claims. Date examples are illustrative UI states only; production dates come from Skill 01 content time policy. Show Published when updated equals published; show Updated only when it is later.

## Do / don’t

- Do: keep the layout tactile, editorial, practical, and beginner-friendly.
- Do: make hierarchy and next steps obvious on mobile.
- Do: use real section, category, post, and Legal routes in navigation examples.
- Don’t: add accounts, comments, newsletter signup, payments, downloads, or dashboard UI.
- Don’t: use placeholder copy, stock SaaS patterns, oversized gradients, mascot logos, or unexplained decorative icons.
- Don’t: treat this brief, the planning wireframe, or the current React implementation as approved production authority.
