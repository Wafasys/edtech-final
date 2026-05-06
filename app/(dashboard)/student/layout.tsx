"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clearDemoUser } from "../../../lib/demo-auth";

const NAV_ITEMS = [
  { href: "/student/dashboard", label: "Home", icon: "home" },
  { href: "/student/search", label: "Courses", icon: "menu_book" },
  { href: "/student/lessons", label: "Lessons", icon: "play_circle" },
  { href: "/student/leaderboard", label: "Leaderboard", icon: "leaderboard" },
  { href: "/student/results", label: "Exams", icon: "quiz" },
  { href: "/exam/secure-desktop", label: "Desktop Exam", icon: "desktop_windows" },
  { href: "/exam/secure-mobile", label: "Mobile Exam", icon: "smartphone" },
  { href: "/student/profile", label: "Profile", icon: "person" },
];

export default function StudentPanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    clearDemoUser();
    router.push("/login");
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <div className="flex min-h-screen bg-[#f8fbfa]">
      <aside className="fixed left-0 top-0 z-40 hidden h-full w-80 flex-col border-r border-[rgba(216,216,216,0.55)] bg-[#f3faf7] p-3 md:flex">
        <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-3 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
          <Link href="/student/dashboard" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#20b486] text-white shadow-[0_8px_18px_rgba(32,180,134,0.22)]">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-base font-black leading-tight tracking-tight text-[#101828]">
                Admission Pro
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20b486]">
                Student Portal
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-3 min-h-0 flex-1 rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-2 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
          <nav className="h-full space-y-0.5 overflow-y-auto pr-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "group flex h-10 items-center gap-2.5 rounded-lg bg-[#20b486] px-2.5 text-sm font-black text-white shadow-[0_8px_18px_rgba(32,180,134,0.18)]"
                      : "group flex h-10 items-center gap-2.5 rounded-lg px-2.5 text-sm font-bold text-[#667085] transition hover:bg-[#f0faf7] hover:text-[#101828]"
                  }
                >
                  <span
                    className={
                      active
                        ? "material-symbols-outlined grid h-7 w-7 place-items-center rounded-md bg-white/16 text-[19px] text-white"
                        : "material-symbols-outlined grid h-7 w-7 place-items-center rounded-md bg-[#f8fbfa] text-[19px] text-[#20b486] transition group-hover:bg-white"
                    }
                    style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {item.icon}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{item.label}</span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-3 shrink-0 rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-3 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#edfff9] text-sm font-black text-[#1a906b]">
              78%
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-xs font-black uppercase tracking-[0.14em] text-[#20b486]">
                  Weekly Goal
                </p>
                <p className="shrink-0 text-xs font-bold text-[#667085]">14/18h</p>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#f2f4f7]">
                <div className="h-full w-[78%] rounded-full bg-[#20b486]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 shrink-0 rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-3 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
          <div className="mb-3 flex items-center gap-3">
            <img
              alt="Student"
              className="h-9 w-9 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7AVCa4cbImZGmJFs9PZrFqrnKiHsrMVbtu_AvNewLKNnd1SYzk4LAGylzk67kVH4NWaatlGp5NVZGyhwPxNVtG-foMlfFChdJjAI8xUo0QMgMqZM7tDCr1m2fVcAY2eKFPD3o8ZfRUEk02shPYJxUE59v9jEE_E6nZY9xCA_0QJ5mRC_OyY9F_ednoy-XwWcvN_dJj00oVywilCOogXpTnOWR_HNK_XlW5DlKA3ZeJROOsiI7tnNKUVkmiNbtZYhtUVCJNUZN_8M"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-black text-[#101828]">Fahim Ahmed</p>
              <p className="truncate text-xs font-semibold text-[#667085]">Medical candidate</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex h-9 w-full items-center justify-center gap-2 rounded-full border border-[#d0d5dd] bg-white text-xs font-black text-[#101828] transition hover:border-[#ba1a1a] hover:bg-[#fff5f4] hover:text-[#ba1a1a]"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Logout
          </button>
        </div>
      </aside>

      <div className="min-w-0 flex-1 pb-24 md:ml-80 md:pb-0">{children}</div>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center gap-2 overflow-x-auto border-t border-[rgba(216,216,216,0.55)] bg-white/95 px-3 py-2 shadow-[0_-12px_32px_rgba(16,24,40,0.08)] backdrop-blur-xl md:hidden">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "flex min-w-[72px] shrink-0 flex-col items-center justify-center rounded-xl bg-[#edfff9] px-3 py-2 text-[#1a906b] transition-transform active:scale-95"
                  : "flex min-w-[72px] shrink-0 flex-col items-center justify-center rounded-xl px-3 py-2 text-[#98a2b3] transition hover:bg-[#f8fbfa] hover:text-[#20b486] active:scale-95"
              }
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="mt-0.5 max-w-[68px] truncate text-[11px] font-bold">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
