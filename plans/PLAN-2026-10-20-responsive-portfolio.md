# PLAN: Set footer year to 2025 and make the portfolio responsive

## 1. Goal and Scope

Change the footer copyright year from `2026` to `2025`. Make the existing single-page portfolio usable at phone, tablet, laptop, and wide-desktop widths without changing its dark visual direction, project content, or adding dependencies.

Done means:
- Footer displays `© 2025 Rafi Fauzan Hermansah`.
- No horizontal overflow at 390px, 768px, 1024px, and 1440px viewport widths.
- Header, hero, projects, contact area, and Wibuflix case-study modal remain readable and operable at those widths.
- The Wibuflix modal exposes all of its content and actions on a 390px-tall-by-844px-wide mobile viewport instead of clipping its lower content.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

Out of scope:
- New portfolio sections, project content rewrites, a redesign, animations, API changes, new assets, dependencies, or a theme switcher.
- Changing any Wibuflix repositories or its deployed API.

## 2. Executor Rules

- Follow phases and steps in order, one at a time.
- Commit after each step: `git add -A && git commit -m "<type>(<scope>): <step description>"`.
- If the code does not match what a step describes, STOP and report the mismatch.
  Do not improvise or fix adjacent things.
- Do not add dependencies, rename things, or change behavior outside the step.
- Run the step's verification before moving on. If it fails, stop and report.
- For backend steps: verify server starts with `node src/server.js` before committing.
- For frontend steps: verify types compile with `npx tsc --noEmit` before committing.
- Do NOT update any skill file. Skill updates are handled by the senior model after verification.

## 3. Findings

| ID | Status | File:Line | Description |
|---|---|---|---|
| F1 | VERIFIED | `src/components/Footer.tsx:6` | The footer hard-codes `const currentYear = 2026`. |
| F2 | VERIFIED | `src/components/Navbar.tsx:22-83` | Desktop navigation is hidden below `md`; a conditional mobile drawer replaces it. The header uses `px-6` at every width, leaving limited space at narrow widths. |
| F3 | VERIFIED | `src/components/Hero.tsx:18-89` | The hero uses `pt-20 pb-20` on mobile and places both CTAs and three icon links in the same wrapping row. This produces a long, dense mobile first screen. |
| F4 | VERIFIED | `src/components/Projects.tsx:31-122` | Project cards use a one-column mobile layout and a two-column `md` layout. The Wibuflix card opens `WibuflixCaseStudy`. |
| F5 | VERIFIED | `src/components/WibuflixCaseStudy.tsx:49,69` | The modal has a fixed maximum height and its body uses `overflow-hidden`. Below `md`, the two columns become one stack. Content below the visible modal area cannot scroll into view. |
| F6 | VERIFIED | `src/components/WibuflixCaseStudy.tsx:53,73,114-117,122-134` | Several responsive modal labels use 10px or 11px text, including metadata, step descriptions, and repository controls. |
| F7 | VERIFIED | `src/components/Contact.tsx:20` | The text `Let's` causes the current `npm run lint` failure (`react/no-unescaped-entities`). |
| F8 | VERIFIED | `src/components/WibuflixCaseStudy.tsx:20-36` | `setMounted(true)` runs synchronously in an effect, causing the current `npm run lint` failure (`react-hooks/set-state-in-effect`). |
| F9 | VERIFIED | worktree | `src/components/WibuflixCaseStudy.tsx` is already modified before this plan is created. It must not be accidentally included in unrelated commits. |

## 4. Phases and Steps

### Phase 1 — Preserve the current worktree and commit the plan

**Step 0 — Commit the plan file**
- **Files:** `plans/PLAN-2026-10-20-responsive-portfolio.md`
- **Change:** no source code changes. Stage and commit the plan file alone.
- **Verify:** `git log --oneline -1` shows a commit with only the plan file.
- **Commit message:** `docs(plans): add PLAN-2026-10-20-responsive-portfolio.md`
- **Rollback:** `git revert HEAD`

**Step 1 — Isolate the existing uncommitted modal work**
- **Files:** none; preserve the pre-existing change to `src/components/WibuflixCaseStudy.tsx` outside subsequent commits.
- **Change:** after the user decides how to preserve the existing work, create a clean worktree for this plan. Preferred action: `git stash push -m "pre-responsive-plan Wibuflix modal" -- src/components/WibuflixCaseStudy.tsx`. Do not discard or overwrite the stash.
- **Also update:** nothing.
- **Verify:** `git status --short` does not list `src/components/WibuflixCaseStudy.tsx`; `git stash list` contains the named stash. If the user chooses to retain the change in the active worktree, stop instead of using `git add -A` in later steps.
- **Rollback:** `git stash pop` restores the preserved change after the responsive branch is complete.

### Phase 2 — Apply the minimum shared responsive adjustments

**Step 2 — Set the explicit footer year to 2025**
- **Files:** `src/components/Footer.tsx`
- **Change:** replace only `const currentYear = 2026` with `const currentYear = 2025`. Keep the footer structure and wording unchanged.
- **Also update:** nothing.
- **Verify:** run `npx tsc --noEmit`; render the homepage and confirm the footer text is `© 2025 Rafi Fauzan Hermansah`.
- **Commit message:** `fix(footer): set copyright year to 2025`
- **Rollback:** revert this commit.

**Step 3 — Improve responsive page spacing and control grouping**
- **Files:** `src/components/Navbar.tsx`, `src/components/Hero.tsx`, `src/components/Contact.tsx`
- **Change:**
  - In `Navbar`, use smaller horizontal padding below `sm` and preserve the existing `md` desktop/mobile navigation breakpoint. Ensure the brand label can shrink with `min-w-0` and `truncate`, while the menu button remains a minimum 44px hit area.
  - In `Hero`, reduce the mobile-only top and bottom padding; retain the existing larger `md` spacing. Make the primary/secondary CTAs occupy full width on the narrowest screens, return to content width at `sm`, and place social icon links in a distinct full-width row below the CTAs on mobile. Keep all interactive targets at least 44px tall or wide.
  - In `Contact`, make each contact action full-width below `sm`, content-width from `sm` upward, and retain the existing wrapping layout for tablet and desktop.
  - Escape the apostrophe in `Let's` as `Let&apos;s` so lint passes. Do not alter the sentence itself.
- **Also update:** no data file or page component change is required; these components are already mounted by `src/app/page.tsx`.
- **Verify:**
  1. Run `npx tsc --noEmit` and `npm run lint`.
  2. At 390px, verify the header name does not collide with the menu button, CTAs do not share a cramped row, social buttons are not confused with the CTA group, and every control remains tappable.
  3. At 768px and 1440px, verify existing two-column/inline layouts return without overflow.
- **Commit message:** `fix(layout): improve responsive navigation and actions`
- **Rollback:** revert this commit.

### Phase 3 — Make the Wibuflix modal fully usable on every viewport

**Step 4 — Remove the client mount-state anti-pattern without changing modal behavior**
- **Files:** `src/components/WibuflixCaseStudy.tsx`
- **Change:** remove `mounted` state and the synchronous `setMounted(true)` call. Render the portal only when `document` is available, using a client-safe guard appropriate for this existing `'use client'` component. Keep the body-scroll lock, Escape handling, overlay click handling, and `onClose` API unchanged.
- **Also update:** `src/components/Projects.tsx` must continue to render the modal using the same `onClose` callback; no public prop changes are allowed.
- **Verify:**
  1. Run `npm run lint`; the `react-hooks/set-state-in-effect` error is absent.
  2. Open the Wibuflix card, close it with the close button, Escape, and an overlay click. Confirm page scrolling locks while open and restores after each close method.
  3. Run `npx tsc --noEmit`.
- **Commit message:** `fix(wibuflix): remove modal mount effect state`
- **Rollback:** revert this commit.

**Step 5 — Add mobile-safe modal scrolling and readable responsive sizing**
- **Files:** `src/components/WibuflixCaseStudy.tsx`
- **Change:**
  - Keep the dialog inside the viewport using the existing dynamic-viewport height limit, but change the content region below the header from clipped (`overflow-hidden`) to vertical scrolling (`overflow-y-auto`) when its stacked mobile content exceeds available height.
  - Keep the header and close button visible while the modal body scrolls. The scrollable element must have `min-h-0` in the grid layout.
  - Preserve the current one-column below-`md` and two-column at-`md` behavior. Do not create a third layout or introduce JavaScript viewport detection.
  - Increase low-value text only enough for legibility: use at least `text-xs` for step descriptions, metadata values, screen-selection helper copy, and repository buttons. Retain concise labels to avoid wrapping.
  - Keep the selected screen button discernible by preserving `aria-pressed` and strengthening its existing color/border distinction. Do not replace buttons with non-semantic tabs unless full keyboard tab behavior is implemented.
  - Make the repository buttons stack vertically below `sm` and return to side-by-side from `sm` upward, so labels and external-link icons are not compressed.
  - Remove the endpoint value `api.wibuflix.me` from the publicly displayed metadata. Keep generic metadata only: Status, App stack, Server stack, and visibility. Do not link to or expose the private API endpoint.
- **Also update:** `src/data/portfolio.ts` remains the authoritative high-level project description; do not duplicate or alter its public project text in this step.
- **Verify:**
  1. At 390×844, open the modal and scroll its body from top to bottom. Confirm the Home/Catalog/History controls, all four process cards, all metadata, and both repository buttons can be reached; confirm no horizontal page overflow.
  2. At 768×1024, confirm controls remain readable and the modal does not exceed the viewport.
  3. At 1440×900, confirm the two-column modal layout remains intact and the mobile screenshot is not smaller than its current visible size.
  4. Verify Escape, overlay click, close button, screen switching, and body scroll restoration still work.
  5. Run `npx tsc --noEmit` and `npm run lint`.
- **Commit message:** `fix(wibuflix): make case study responsive`
- **Rollback:** revert this commit.

### Phase 4 — Verify the production artifact

**Step 6 — Run static checks and production build**
- **Files:** none.
- **Change:** no source changes.
- **Also update:** nothing.
- **Verify:** run these commands in order:
  1. `git diff --check`
  2. `npm run lint`
  3. `npx tsc --noEmit`
  4. `npm run build`
  All commands must exit with code 0.
- **Commit message:** none; this is verification only.
- **Rollback:** not applicable.

**Step 7 — Perform viewport regression checks against the production build**
- **Files:** none.
- **Change:** no source changes.
- **Also update:** nothing.
- **Verify:** serve the production build with `npm run start`, then inspect at these viewport sizes:
  - 390×844: mobile menu, hero CTAs, social controls, Wibuflix modal full-body scroll, project cards, contact buttons, footer year.
  - 768×1024: tablet header, card grid, modal controls, contact wrapping.
  - 1024×768: desktop navigation, project grid, modal two-column layout.
  - 1440×900: container widths, paragraph readability, hero alignment, footer year.
  At every viewport, assert `document.documentElement.scrollWidth === document.documentElement.clientWidth` except for the intentional vertical scrollbar.
- **Commit message:** none; this is verification only.
- **Rollback:** not applicable.

## 5. Needs My Decision

1. `src/components/WibuflixCaseStudy.tsx` already has uncommitted work. Confirm whether it should be preserved in a named stash before this plan is executed, or committed separately first. Do not run this plan while that choice is unresolved.

## 6. Risks

| Phase | Risk | Detection / Mitigation |
|---|---|---|
| Phase 1 | Existing modal work is accidentally committed with the new responsive work. | Isolate it before any source commit; verify the plan commit contains only `plans/PLAN-2026-10-20-responsive-portfolio.md`. |
| Phase 2 | Smaller mobile spacing makes controls wrap or reduces hit-target size. | Test 390px and assert all buttons retain a 44px minimum touch target. |
| Phase 3 | Changing portal mount behavior can cause a hydration or `document is not defined` failure. | Run production build, then open and close the modal using all three supported close routes. |
| Phase 3 | Enabling scroll can let focus or page scroll escape the modal. | Verify body scroll is locked, modal body scrolls, and overflow restores on close. |
| Phase 4 | Development-only UI hides production-only CSS or rendering issues. | Serve `npm run build` output with `npm run start` for the final viewport checks. |

## 7. Noticed but Out of Scope

- The default create-next-app README has not been replaced with project documentation.
- The Wibuflix case study would be more persuasive with project outcomes and larger inspectable screenshots.
- The project page has duplicate contact calls to action; this plan only changes their responsive placement, not content strategy.

## 8. After Execution

When all steps are committed, report back to the senior model (not the executor):
- State which plan file was executed.
- List any steps that were PARTIAL or had to deviate.
- Do not update the wibuflix skill or any skill file.
The senior model will run verify-plan, confirm correctness, then update the skill.
