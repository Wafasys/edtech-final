"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clearDemoUser } from "../../../lib/demo-auth";

const NAV_ITEMS = [
  { href: "/student/dashboard", label: "Home", icon: "home" },
  { href: "/student/search", label: "Courses", icon: "menu_book" },
  { href: "/student/lessons", label: "Lessons", icon: "play_circle" },
  { href: "/student/lessons/pinned-reply", label: "Pinned Reply", icon: "push_pin" },
  { href: "/student/results", label: "Exams", icon: "quiz" },
  { href: "/exam/secure-desktop", label: "Desktop Exam", icon: "desktop_windows" },
  { href: "/exam/secure-mobile", label: "Mobile Exam", icon: "smartphone" },
  { href: "/student/leaderboard", label: "Leaderboard", icon: "leaderboard" },
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
    <div className="flex min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-full z-40 hidden md:flex flex-col bg-white border-r border-slate-200 w-72">
        <div className="px-6 py-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg">school</span>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#003087] leading-tight">Admission Pro</h2>
            <p className="text-xs text-outline">Student Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "flex items-center gap-3 px-4 py-3 bg-blue-50 text-[#003087] border-r-4 border-[#003087] text-sm font-semibold"
                    : "flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-all"
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-slate-200">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 border border-error text-error text-sm font-semibold rounded hover:bg-error-container transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 md:ml-72 min-w-0 pb-24 md:pb-0">{children}</div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex items-center gap-2 overflow-x-auto px-3 py-2 bg-white/95 backdrop-blur-md border-t border-slate-100">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "shrink-0 min-w-[64px] flex flex-col items-center justify-center text-blue-900 bg-blue-50/50 rounded-xl px-3 py-1 active:scale-95 transition-transform duration-150"
                  : "shrink-0 min-w-[64px] flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-blue-800 active:scale-95 transition-transform duration-150"
              }
            >
              <span
                className="material-symbols-outlined"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
