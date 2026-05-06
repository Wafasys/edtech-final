"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  BookOpenCheck,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  Monitor,
  Smartphone,
  Trophy,
  User,
  X,
} from "lucide-react";
import { clearDemoUser } from "../../../lib/demo-auth";

const NAV_ITEMS = [
  { href: "/student/dashboard", label: "Home", icon: "home", Icon: Home },
  { href: "/student/search", label: "Courses", icon: "menu_book", Icon: BookOpen },
  { href: "/student/lessons", label: "Lessons", icon: "play_circle", Icon: BookOpenCheck },
  { href: "/student/leaderboard", label: "Leaderboard", icon: "leaderboard", Icon: Trophy },
  { href: "/student/results", label: "Exams", icon: "quiz", Icon: LayoutDashboard },
  { href: "/exam/secure-desktop", label: "Desktop Exam", icon: "desktop_windows", Icon: Monitor },
  { href: "/exam/secure-mobile", label: "Mobile Exam", icon: "smartphone", Icon: Smartphone },
  { href: "/student/profile", label: "Profile", icon: "person", Icon: User },
];

export default function StudentPanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleLogout() {
    clearDemoUser();
    router.push("/login");
    closeMobileMenu();
  }

  function openMobileMenu() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setMobileMenuMounted(true);
    closeTimer.current = setTimeout(() => {
      setMobileMenuOpen(true);
    }, 20);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      setMobileMenuMounted(false);
    }, 280);
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

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

      <div className="min-w-0 flex-1 md:ml-80">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[rgba(216,216,216,0.55)] bg-white/95 px-4 shadow-[0_8px_18px_rgba(16,24,40,0.04)] backdrop-blur-xl md:hidden">
          <button
            type="button"
            onPointerDown={(event) => {
              event.preventDefault();
              openMobileMenu();
            }}
            onClick={openMobileMenu}
            className="grid h-11 w-11 place-items-center rounded-lg border border-[#d0d5dd] bg-white text-[#101828] shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition active:scale-95"
            aria-label="Open student menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/student/dashboard" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#20b486] text-white shadow-[0_8px_18px_rgba(32,180,134,0.18)]">
              <BookOpenCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black leading-none text-[#101828]">Admission Pro</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#20b486]">
                Student
              </p>
            </div>
          </Link>
          <Link href="/student/profile" className="h-11 w-11 overflow-hidden rounded-lg">
            <img
              alt="Student"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7AVCa4cbImZGmJFs9PZrFqrnKiHsrMVbtu_AvNewLKNnd1SYzk4LAGylzk67kVH4NWaatlGp5NVZGyhwPxNVtG-foMlfFChdJjAI8xUo0QMgMqZM7tDCr1m2fVcAY2eKFPD3o8ZfRUEk02shPYJxUE59v9jEE_E6nZY9xCA_0QJ5mRC_OyY9F_ednoy-XwWcvN_dJj00oVywilCOogXpTnOWR_HNK_XlW5DlKA3ZeJROOsiI7tnNKUVkmiNbtZYhtUVCJNUZN_8M"
            />
          </Link>
        </header>

        {children}
      </div>

      {mobileMenuMounted && (
      <div className="fixed inset-0 z-50 md:hidden">
        <div
          aria-hidden="true"
          role="presentation"
          onPointerDown={closeMobileMenu}
          onTouchStart={closeMobileMenu}
          onClick={closeMobileMenu}
          className={
            mobileMenuOpen
              ? "absolute inset-0 bg-[#101828]/42 backdrop-blur-[2px]"
              : "absolute inset-0 bg-[#101828]/42 backdrop-blur-[2px]"
          }
          style={{
            opacity: mobileMenuOpen ? 1 : 0,
            transition: "opacity 320ms ease",
          }}
        />

        <aside
          onPointerDown={(event) => event.stopPropagation()}
          onTouchStart={(event) => event.stopPropagation()}
          onClick={(event) => event.stopPropagation()}
          className={
            mobileMenuOpen
              ? "absolute left-0 top-0 flex h-full w-[min(86vw,340px)] flex-col bg-[#f3faf7] p-3 shadow-2xl"
              : "absolute left-0 top-0 flex h-full w-[min(86vw,340px)] flex-col bg-[#f3faf7] p-3 shadow-2xl"
          }
          style={{
            transform: mobileMenuOpen ? "translate3d(0, 0, 0)" : "translate3d(-104%, 0, 0)",
            transition: "transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
          }}
        >
          <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-3 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/student/dashboard"
                onPointerDown={closeMobileMenu}
                onClick={closeMobileMenu}
                className="flex min-w-0 items-center gap-3"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#20b486] text-white shadow-[0_8px_18px_rgba(32,180,134,0.22)]">
                  <BookOpenCheck className="h-5 w-5" />
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
              <button
                type="button"
                onPointerDown={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  closeMobileMenu();
                }}
                onTouchStart={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  closeMobileMenu();
                }}
                onClick={closeMobileMenu}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#d0d5dd] bg-white text-[#667085] transition hover:bg-[#f8fbfa] active:scale-95"
                aria-label="Close student menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-3 min-h-0 flex-1 rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-2 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
            <nav className="h-full space-y-1 overflow-y-auto pr-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                const Icon = item.Icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onPointerDown={closeMobileMenu}
                    onClick={closeMobileMenu}
                    className={
                      active
                        ? "group flex h-11 items-center gap-3 rounded-lg bg-[#20b486] px-3 text-sm font-black text-white shadow-[0_8px_18px_rgba(32,180,134,0.18)]"
                        : "group flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-bold text-[#667085] transition hover:bg-[#f0faf7] hover:text-[#101828]"
                    }
                  >
                    <span
                      className={
                        active
                          ? "grid h-8 w-8 place-items-center rounded-md bg-white/16 text-white"
                          : "grid h-8 w-8 place-items-center rounded-md bg-[#f8fbfa] text-[#20b486] transition group-hover:bg-white"
                      }
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-3 shrink-0 rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-3 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
            <div className="mb-3 flex items-center gap-3">
              <img
                alt="Student"
                className="h-10 w-10 rounded-lg object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7AVCa4cbImZGmJFs9PZrFqrnKiHsrMVbtu_AvNewLKNnd1SYzk4LAGylzk67kVH4NWaatlGp5NVZGyhwPxNVtG-foMlfFChdJjAI8xUo0QMgMqZM7tDCr1m2fVcAY2eKFPD3o8ZfRUEk02shPYJxUE59v9jEE_E6nZY9xCA_0QJ5mRC_OyY9F_ednoy-XwWcvN_dJj00oVywilCOogXpTnOWR_HNK_XlW5DlKA3ZeJROOsiI7tnNKUVkmiNbtZYhtUVCJNUZN_8M"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-black text-[#101828]">Fahim Ahmed</p>
                <p className="truncate text-xs font-semibold text-[#667085]">
                  Medical candidate
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="flex h-10 w-full items-center justify-center gap-2 rounded-md border border-[#ffd8d3] bg-white px-4 text-xs font-black text-[#ba1a1a] transition hover:bg-[#fff5f4] active:scale-[0.99]"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </aside>
      </div>
      )}
    </div>
  );
}
