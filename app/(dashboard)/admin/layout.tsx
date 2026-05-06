"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clearDemoUser } from "../../../lib/demo-auth";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/exams/schedule", label: "Exam Management", icon: "quiz" },
  { href: "/admin/exams/monitor", label: "Live Monitoring", icon: "monitoring" },
  { href: "/admin/qa", label: "Q&A Replies", icon: "forum" },
  { href: "#", label: "Course Management", icon: "menu_book", disabled: true },
  { href: "#", label: "Student Monitoring", icon: "groups", disabled: true },
];

export default function AdminPanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    clearDemoUser();
    router.push("/admin/login");
  }

  function isActive(href: string) {
    return href !== "#" && pathname.startsWith(href);
  }

  return (
    <div className="flex min-h-screen bg-[#f8fbfa]">
      <aside className="fixed left-0 top-0 z-40 hidden h-full w-80 flex-col border-r border-[rgba(216,216,216,0.55)] bg-[#f3faf7] p-3 md:flex">
        <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-3 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#101828] text-white shadow-[0_8px_18px_rgba(16,24,40,0.18)]">
              <span className="material-symbols-outlined">admin_panel_settings</span>
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-base font-black leading-tight tracking-tight text-[#101828]">
                Admin Panel
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20b486]">
                EdTech LMS
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-3 shrink-0 rounded-xl border border-[#101828] bg-[#101828] p-3 text-white shadow-[0_12px_28px_rgba(16,24,40,0.14)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#99f3d6]">
                Today
              </p>
              <p className="mt-0.5 text-2xl font-black leading-none text-white">12,482</p>
              <p className="mt-1 text-xs font-semibold text-white/70">active students online</p>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/12 text-[#99f3d6]">
              <span className="material-symbols-outlined">trending_up</span>
            </span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/12">
            <div className="h-full w-[72%] rounded-full bg-[#20b486]" />
          </div>
        </div>

        <div className="mt-3 min-h-0 flex-1 rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-2 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
          <nav className="h-full space-y-0.5 overflow-y-auto pr-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              const disabled = item.disabled === true;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-disabled={disabled}
                  className={
                    active
                      ? "group flex h-10 items-center gap-2.5 rounded-lg bg-[#20b486] px-2.5 text-sm font-black text-white shadow-[0_8px_18px_rgba(32,180,134,0.18)]"
                      : disabled
                        ? "group flex h-10 items-center gap-2.5 rounded-lg px-2.5 text-sm font-bold text-[#98a2b3] opacity-70"
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
                  {disabled ? (
                    <span className="rounded-full bg-[#f2f4f7] px-2 py-0.5 text-[10px] font-black text-[#98a2b3]">
                      Soon
                    </span>
                  ) : active ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-3 shrink-0 rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-3 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
          <div className="mb-3 flex items-center gap-3">
            <img
              alt="Admin"
              className="h-9 w-9 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXl2oaPBwYtdqAtustIZmHadF3FIVVlDDGivawPKa6KWq3LS_3rNMh0lJsGw6kUcJFsmbHVOLneKCI31wXlhqorstaYYhLXeeNsNfRtnr7DlP-mibxR3kFHYZw8rxXyQZ16yYn7khjxDDPKcM1YyGFpfEAor2-edjSLj3gHjJ8903rmP73u_L7eZFpka9QX6sulOOrr_VhO6r41UsFx-DKfPWVIWc9HIovNbSk7ymOELS8Tq3M5AERQ0S34MOboHV5pHz20hr8JZA"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-black text-[#101828]">Sami Admin</p>
              <p className="truncate text-xs font-semibold text-[#667085]">Platform operator</p>
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

      <div className="min-w-0 flex-1 md:ml-80">{children}</div>
    </div>
  );
}
