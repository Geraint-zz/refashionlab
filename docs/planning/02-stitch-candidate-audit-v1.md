# Skill 02 Visual Candidate Audit v1

Status: `APPROVED_LOCAL_BUILD_EXCEPTION`

## Controlled exception

The user explicitly instructed: skip Stitch and use the local website build as the visual source. This candidate is therefore recorded as `local_build`, not as a Stitch candidate. The standard Skill 02 Stitch source contract is not claimed.

## Candidate

- candidate_id: `local-build-refashionlab-v1`
- source_type: `local_build`
- source_sha256: `AF077257CD24F4C1FE42BACEA97A29636F46B1D2B0F3DED2CC83E19D1E4FDB46`
- local preview: `http://127.0.0.1:3002/`
- screenshot manifest: `docs/planning/02-local-build-screenshot-manifest-v1.json`
- screenshot set: 10 files covering Homepage, Section, Category, Post, and Legal in mobile and desktop viewports

## Preliminary audit

- hierarchy coverage: PASS
- mobile coverage: PASS
- legal layout coverage: PASS
- date state visible on Post: PASS
- local wordmark consistency: PASS
- placeholder/starter skeleton residue in rendered homepage: PASS
- production visual authority: `LOCAL_BUILD_EXCEPTION_PENDING_APPROVAL`

## Decision

The user explicitly approved `local-build-refashionlab-v1` and its screenshot set. The approved lock is recorded in `docs/planning/02-approved-visual-source-lock-v1.json`. This approval is valid for the local-build exception path and is not represented as a standard Stitch export.
