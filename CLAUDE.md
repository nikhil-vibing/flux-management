# Flux1

## Project Overview
This project is not yet defined. See `Product.md` for the product specification (to be filled in).

## Development Standards
All coding standards, patterns, and conventions are documented in `UNIVERSAL_VIBE_CODING_AGENT.md`. Follow those guidelines for all implementation work.

## Key Conventions
- **Language:** TypeScript (always, no `any` types)
- **Validation:** Zod for all runtime validation
- **Styling:** Tailwind CSS, utility-first
- **Components:** Max 150 lines per component; refactor into folders if larger
- **State:** useState (local) / React Query (server) / Zustand (global client)
- **Commit format:** `type(scope): description` (e.g., `feat(auth): add login`)
- **Folder structure:** Every new folder must contain a README.md

## Before Starting
Ask the user:
1. Prototype or production build?
2. Target platform: Web (Next.js), Mobile (React Native/Expo), or Both?
3. UI framework preference?

## Pre-Commit Checks
- `npm run type-check` passes
- `npm run lint` passes
- `npm run test` passes
- No `console.log` statements in production code
- No hardcoded secrets