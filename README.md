# Crust n Crumb — Website from zero (MVP starter)

A responsive Next.js App Router / TypeScript starter project. Includes home page, category-filtered menu, local demo basket, brand-story section, location, and responsive navigation.

## Quick start

1. Install Node.js 20+ (LTS recommended).
2. Open this folder in VS Code/Codex.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.
6. Run `npm run lint` and `npm run build` before deployment.

## Important limitations / do not publish as live ordering

- This is a prototype, not a finished production website.
- Menu names are illustrative; descriptions are limited and not fully verified.
- **There are no verified prices, nutrition, full ingredients or allergens**; these must be sourced from approved records.
- Basket data is held **only in browser localStorage**; there is **no checkout, payment processing, POS integration or order submission**.
- Stylized emoji-based food placeholders must be replaced with licensed/owned actual product photography before launch.
- Contact/location/opening hours, privacy policy, cookie consent, business legal info, branding rights and delivery rules must be verified by authorized owner.
- `robots.index=false` prevents prototype indexing until launch approval.
- Google Fonts is loaded externally; consider privacy requirements and self-hosting.
- No admin dashboard/backend is included in this MVP; those are phase-two requirements.

## Next steps for Codex

1. Audit and test the project; pin dependency versions and security update policy.
2. Build editable product catalog, media storage and management roles.
3. Import verified product data with strict allergy labeling and provenance.
4. Replace illustrations with authentic commercial photos.
5. Design and implement secure order workflow, API, kitchen flow, stock sync, authorization, logging, tests and payment provider integration — **staging first**.
6. Add Albanian and English localization, accessibility review, structured data and compliance pages.
7. Do not deploy to public production without explicit business authorization.

## Brand tokens

- White `#FFFFFF`
- Thulian Pink `#CF7091`
- Black `#050405`
- Slogan: Healthy Fast Food Made Deliciously Fresh

## Codex kick-off prompt

> Audit this Next.js MVP for Crust n Crumb. Preserve brand tokens. Fix build and accessibility issues, and propose implementation of i18n, editable menu and admin CMS. Do not fabricate prices/allergens; do not enable real payments or deploy without approval. Start by reporting a technical plan and tests.
