# Skill 07 Launch QA

- Run: skill07-first-launch-2026-08-07-refashion-lab
- site_id: `refashion-lab`
- Mode: `first_launch`

## Local QA

- Skill 06 handoff: `PASS_ADMIN_IMPORT_QA`
- Data/check/build: PASS
- Visual identity gate: PASS
- Routes and four Legal pages: PASS
- Mobile widths 360/375/390/414: PASS; no horizontal overflow

## Release

- Release commit: `fc737cd35d06cc0f95ad05aa3cf540a76463e61d`
- Source push: PASS
- Saved version: 4
- Deployment status: local adapter ready; awaiting Cloudflare automatic deployment
- Deployment URL: https://refashionlab.geraintx.chatgpt.site

## Production QA

- Homepage: 200 and correct refashionlab content
- Section, Category, Post, About, Privacy Policy, Terms, User Agreement: PASS
- Production canonical URLs: PASS on checked routes
- robots.txt and sitemap.xml: PASS
- Production access: owner-only private access retained

## Final status

`WAITING_FOR_CLOUDFLARE_AUTOMATIC_DEPLOYMENT`

## Cloudflare Pages QA

- pages.dev: `https://refashionlab.pages.dev/`
- Root cause fixed locally: the Pages output now contains `dist/index.html` plus every known route index file.
- The post-build adapter also copies client assets and writes the site `sitemap.xml` and `robots.txt`.
- Cloudflare build-log blocker fixed: remove the stale `.wrangler/deploy/config.json` after static conversion so Pages does not resolve the deleted `dist/server/wrangler.json`.
- Local `validate-data`, `check`, and `build`: PASS
- pages.dev: pending redeploy and production recheck
- robots.txt: pending redeploy and production recheck
- Formal domain: pending; parity not run
- Next gate: precise commit/push, wait for Cloudflare automatic deployment, then rerun production DOM parity
