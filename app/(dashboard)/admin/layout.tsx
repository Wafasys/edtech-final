"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clearDemoUser } from "../../../lib/demo-auth";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/exams/schedule", label: "Exam Management", icon: "quiz" },
  { href: "/admin/exams/monitor", label: "Live Monitoring", icon: "monitoring" },
  { href: "#", label: "Course Management", icon: "menu_book" },
  { href: "#", label: "Student Monitoring", icon: "groups" },
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

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-full z-40 hidden md:flex flex-col bg-white border-r border-slate-200 w-72">
        <div className="px-6 py-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg">school</span>
          </div>
          <div>
            <h2 className="text-lg font-black text-[#003087] leading-tight">Admin Panel</h2>
            <p className="text-xs text-outline">Admission LMS</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = item.href !== "#" && pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={
                  active
                    ? "flex items-center gap-3 px-4 py-3 bg-blue-50 text-[#003087] border-r-4 border-[#003087] text-sm font-semibold"
                    : "flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-all"
                }
              >
                <span className="material-symbols-outlined">{item.icon}</span>
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

      <div className="flex-1 md:ml-72 min-w-0">{children}</div>
    </div>
  );
}
