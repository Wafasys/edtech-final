"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearDemoUser } from "../../../../lib/demo-auth";

export default function StudentDashboardPage() {
  const router = useRouter();

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-24">
      <style>{`
        .circular-progress {
          background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
                      conic-gradient(#001d59 calc(var(--progress) * 1%), #e1e3e4 0);
        }
      `}</style>

      <header className="flex justify-between items-center w-full px-5 py-3 sticky top-0 z-50 bg-white border-b border-slate-100 transition-all duration-200">
        <div className="flex items-center gap-3">
          <Link href="/" className="material-symbols-outlined text-blue-900 cursor-pointer">
            arrow_back
          </Link>
          <h1 className="text-lg font-bold text-blue-900 tracking-tight">Admission Pro</h1>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          title="Sign out"
          className="w-8 h-8 rounded-full overflow-hidden border border-slate-200"
        >
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7AVCa4cbImZGmJFs9PZrFqrnKiHsrMVbtu_AvNewLKNnd1SYzk4LAGylzk67kVH4NWaatlGp5NVZGyhwPxNVtG-foMlfFChdJjAI8xUo0QMgMqZM7tDCr1m2fVcAY2eKFPD3o8ZfRUEk02shPYJxUE59v9jEE_E6nZY9xCA_0QJ5mRC_OyY9F_ednoy-XwWcvN_dJj00oVywilCOogXpTnOWR_HNK_XlW5DlKA3ZeJROOsiI7tnNKUVkmiNbtZYhtUVCJNUZN_8M"
          />
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-container-margin py-8 space-y-8">
        <section className="space-y-2">
          <h2 className="font-display-lg text-display-lg text-primary text-3xl font-extrabold">
            Welcome back, Fahim
          </h2>
          <p className="font-body-md text-body-md text-outline">
            You have completed 68% of your weekly study goal. Stay focused!
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="md:col-span-2 bg-white rounded-xl border border-outline-variant overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative h-48 md:h-auto overflow-hidden">
              <img
                alt="Last Lesson"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp56NRgQbpopI4tQGH3I_5nsB3VqqkF4f_mhFEGVePICnKBnusErVhkNg6twm1pW1OCbrej6tRf_W5SYMn1YYBLAX1Xm8mXKZfupRTHhAWq6T_LPej3fMEJ22JNpNZnxDj7mDljE22HQ-rCtKbTSDZ7rFpBzPrrzTyG8DvuxjepJo9gVxnQJxADc5RJlqUUcHMTf1sHk9L3YF5mm03Th3w49yqCTyw12W8CawOXH5z_BqYZ9hXnC2aTo5CbNl65WFruXWwgP-IBFQ"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-5xl opacity-90">
                  play_circle
                </span>
              </div>
            </div>
            <div className="p-card-padding flex flex-col justify-between flex-1">
              <div>
                <span className="font-label-sm text-label-sm text-primary bg-primary-fixed px-2 py-1 rounded">
                  Physics Unit 4
                </span>
                <h3 className="font-headline-md text-headline-md mt-3 text-primary text-xl font-semibold">
                  Electromagnetic Induction
                </h3>
                <p className="font-body-md text-body-md text-outline mt-2">Resume at 14:22</p>
              </div>
              <button className="mt-6 w-full h-tap-target-min bg-primary text-on-primary rounded-xl font-label-sm flex items-center justify-center gap-2 active:opacity-70 transition-all">
                Continue Learning
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-outline-variant p-card-padding flex flex-col items-center justify-center text-center">
            <div
              className="relative w-32 h-32 circular-progress rounded-full flex items-center justify-center"
              style={{ ["--progress" as string]: 74 } as React.CSSProperties}
            >
              <div className="bg-white w-24 h-24 rounded-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-primary">74%</span>
                <span className="text-[10px] uppercase font-bold text-outline">Accuracy</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 w-full">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="font-label-sm text-label-sm text-outline">Days Streak</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">485</p>
                <p className="font-label-sm text-label-sm text-outline">Questions</p>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <div className="flex justify-between items-end px-1">
            <h3 className="font-headline-md text-headline-md text-primary text-xl font-semibold">
              Enrolled Courses
            </h3>
            <button className="text-primary font-label-sm flex items-center gap-1">
              View all <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white border border-outline-variant rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  functions
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-label-sm text-label-sm text-primary font-semibold">Engineering Math</h4>
                <div className="mt-2 w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "85%" }}></div>
                </div>
                <p className="text-[12px] mt-1 text-outline">85% Complete</p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  science
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-label-sm text-label-sm text-primary font-semibold">Advanced Chemistry</h4>
                <div className="mt-2 w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "42%" }}></div>
                </div>
                <p className="text-[12px] mt-1 text-outline">42% Complete</p>
              </div>
            </div>

            <div className="bg-white border border-outline-variant rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  language
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-label-sm text-label-sm text-primary font-semibold">English Proficiency</h4>
                <div className="mt-2 w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "15%" }}></div>
                </div>
                <p className="text-[12px] mt-1 text-outline">15% Complete</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-headline-md text-headline-md text-primary text-xl font-semibold px-1">
            Upcoming Exams
          </h3>
          <div className="space-y-3">
            <div className="bg-white border border-outline-variant rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-center bg-surface-container-low p-2 rounded-lg min-w-[60px]">
                  <p className="text-[10px] font-bold text-outline uppercase">Oct</p>
                  <p className="text-xl font-black text-primary">12</p>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-primary font-semibold">Full Model Test 04</h4>
                  <p className="text-sm text-outline">Paper I &amp; II • 10:00 AM</p>
                </div>
              </div>
              <button className="px-4 h-10 border border-primary text-primary rounded-lg font-label-sm text-[12px] hover:bg-primary-fixed transition-colors">
                Details
              </button>
            </div>

            <div className="bg-white border border-outline-variant rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-center bg-surface-container-low p-2 rounded-lg min-w-[60px]">
                  <p className="text-[10px] font-bold text-outline uppercase">Oct</p>
                  <p className="text-xl font-black text-primary">15</p>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm text-primary font-semibold">Subjective Quiz: Biology</h4>
                  <p className="text-sm text-outline">Botany Basics • 03:30 PM</p>
                </div>
              </div>
              <button className="px-4 h-10 border border-primary text-primary rounded-lg font-label-sm text-[12px] hover:bg-primary-fixed transition-colors">
                Details
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-white/95 backdrop-blur-md border-t border-slate-100">
        <Link href="/student/dashboard" className="flex flex-col items-center justify-center text-blue-900 bg-blue-50/50 rounded-xl px-3 py-1 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[11px] font-medium">Home</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-blue-800 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[11px] font-medium">Courses</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-blue-800 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">quiz</span>
          <span className="text-[11px] font-medium">Exams</span>
        </button>
        <Link href="/student/leaderboard" className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-blue-800 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="text-[11px] font-medium">Leaderboard</span>
        </Link>
        <Link href="/student/profile" className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-blue-800 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[11px] font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
