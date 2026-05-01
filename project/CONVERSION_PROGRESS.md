# Dashboard HTML → Next.js conversion tracker

Source HTMLs live in `project/<name>/code.html`. Converted pages live under `app/(dashboard)/...`.
Tailwind is loaded via CDN in `app/(dashboard)/layout.tsx` along with Material Symbols + Inter font.
All data is dummy / hard-coded — no real API calls.

## Done

- [x] student_dashboard          → app/(dashboard)/student/dashboard/page.tsx
- [x] admin_dashboard            → app/(dashboard)/admin/dashboard/page.tsx
- [x] student_profile_dashboard  → app/(dashboard)/student/profile/page.tsx
- [x] leaderboard                → app/(dashboard)/student/leaderboard/page.tsx
- [x] exam_scheduling_admin      → app/(dashboard)/admin/exams/schedule/page.tsx
- [x] live_exam_monitoring_admin → app/(dashboard)/admin/exams/monitor/page.tsx
- [x] result_analysis            → app/(dashboard)/student/results/page.tsx
- [x] smart_search               → app/(dashboard)/student/search/page.tsx

Shared admin shell (left sidebar + logout) lives in app/(dashboard)/admin/layout.tsx.

## Pending

- [ ] video_lesson
- [ ] video_player_notes_revised
- [ ] ask_question_mode_revised
- [ ] instructor_q_a_panel_revised
- [ ] pinned_instructor_reply_revised
- [ ] desktop_secure_exam_view
- [ ] mobile_secure_exam_view
- [ ] index.html (design index — likely skip; redundant with this tracker)

## Conventions for future batches

1. Convert ≤4 files per session to stay within token budget.
2. Update the checkbox + target path here when each one ships.
3. Conversion rules:
   - Strip `<!DOCTYPE>` / `<html>` / `<head>` / `<body>`; keep only the body's inner markup.
   - The shared `tailwind.config` and Google Fonts already live in `app/(dashboard)/layout.tsx` — drop them from each page.
   - HTML → JSX: `class` → `className`, `for` → `htmlFor`, void tags self-closed, inline `style="..."` → `style={{ ... }}`, `tabindex` → `tabIndex`.
   - Replace any `onclick="..."` strings with React `onClick={() => {...}}`. Use local `useState` for menu/tab toggles.
   - Replace `<a href="...">` with `<Link href="...">` from `next/link` for internal routes.
   - External `lh3.googleusercontent.com` / placeholder URLs can stay as-is.
   - Add `"use client"` only when the page uses state, effects, or event handlers.
   - Wire any "Sign out" / settings button to `clearDemoUser()` + `router.push("/login")` (or `/admin/login`).
4. Auth helpers: `lib/demo-auth.ts` exports `setDemoUser`, `getDemoUser`, `clearDemoUser`, plus `DEMO_STUDENT` / `DEMO_ADMIN` constants.
5. Reference URL map after a conversion:
   - `/login`, `/signup` — student auth
   - `/admin/login` — admin auth
   - `/student/dashboard`, `/student/profile`, `/student/leaderboard`
   - `/admin/dashboard`
