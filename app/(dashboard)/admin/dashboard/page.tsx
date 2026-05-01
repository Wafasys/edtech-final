"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearDemoUser } from "../../../../lib/demo-auth";

export default function AdminDashboardPage() {
  const router = useRouter();

  function handleSignOut() {
    clearDemoUser();
    router.push("/admin/login");
  }

  return (
    <div className="bg-background text-on-background min-h-screen pb-20 md:pb-0">
      <header className="flex justify-between items-center w-full px-5 py-3 sticky top-0 z-50 bg-white border-b border-slate-100 transition-all duration-200">
        <div className="flex items-center gap-4">
          <Link href="/" className="active:opacity-70 transition-all duration-200 text-blue-900">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold text-blue-900 tracking-tight">Admission Pro</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-primary px-4 py-2 rounded-xl text-white text-sm font-medium active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[20px]">upload</span>
            Upload Video
          </button>
          <button
            type="button"
            onClick={handleSignOut}
            title="Sign out"
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant"
          >
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXl2oaPBwYtdqAtustIZmHadF3FIVVlDDGivawPKa6KWq3LS_3rNMh0lJsGw6kUcJFsmbHVOLneKCI31wXlhqorstaYYhLXeeNsNfRtnr7DlP-mibxR3kFHYZw8rxXyQZ16yYn7khjxDDPKcM1YyGFpfEAor2-edjSLj3gHjJ8903rmP73u_L7eZFpka9QX6sulOOrr_VhO6r41UsFx-DKfPWVIWc9HIovNbSk7ymOELS8Tq3M5AERQ0S34MOboHV5pHz20hr8JZA"
            />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-container-margin py-8">
        <div className="mb-8">
          <h2 className="font-display-lg text-3xl font-extrabold text-primary">Admin Dashboard</h2>
          <p className="text-base text-outline">
            Manage courses, question banks, and monitor student performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 bg-white p-card-padding border border-slate-100 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-primary">Performance Overview</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-medium">
                  +12.5%
                </span>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {[
                { cls: "bg-blue-50", h: "40%", v: "62%" },
                { cls: "bg-blue-100", h: "55%", v: "68%" },
                { cls: "bg-blue-200", h: "45%", v: "65%" },
                { cls: "bg-primary-container", h: "75%", v: "82%" },
                { cls: "bg-blue-400", h: "65%", v: "74%" },
                { cls: "bg-primary", h: "90%", v: "94%" },
              ].map((b, i) => (
                <div key={i} className={`w-full ${b.cls} rounded-t-lg relative group`} style={{ height: b.h }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {b.v}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-outline">
              <span>JAN</span>
              <span>FEB</span>
              <span>MAR</span>
              <span>APR</span>
              <span>MAY</span>
              <span>JUN</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-gutter">
            <div className="bg-primary text-white p-card-padding rounded-xl flex flex-col justify-between h-1/2">
              <span className="text-xs font-medium opacity-80 uppercase tracking-widest">Active Students</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">12,482</span>
                <span className="text-secondary-fixed text-sm">↑ 4%</span>
              </div>
            </div>
            <div className="bg-white border border-slate-100 p-card-padding rounded-xl flex flex-col justify-between h-1/2">
              <span className="text-xs font-medium text-outline uppercase tracking-widest">Total Exams Held</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">854</span>
                <span className="text-on-surface-variant text-sm">This year</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-white p-card-padding border border-slate-100 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-primary">Question Bank</h3>
              <button className="text-blue-700 text-sm font-medium flex items-center gap-1">
                View All <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
            <div className="space-y-4">
              {[
                { icon: "functions", iconCls: "bg-blue-50 text-blue-900", name: "Mathematics (DU Pattern)", count: "2,450 Questions" },
                { icon: "science", iconCls: "bg-red-50 text-red-900", name: "Physics (Engineering)", count: "1,820 Questions" },
                { icon: "biotech", iconCls: "bg-green-50 text-green-900", name: "Biology (Medical)", count: "3,100 Questions" },
              ].map((q) => (
                <div key={q.name} className="flex items-center justify-between p-4 bg-surface rounded-lg border border-surface-container">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded ${q.iconCls}`}>
                      <span className="material-symbols-outlined">{q.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{q.name}</p>
                      <p className="text-xs text-outline">{q.count}</p>
                    </div>
                  </div>
                  <button className="material-symbols-outlined text-outline">edit</button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 bg-white p-card-padding border border-slate-100 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-primary">Exam Scheduler</h3>
              <button className="bg-primary-container text-on-primary-container px-3 py-1.5 rounded-lg text-sm font-medium">
                Schedule New
              </button>
            </div>
            <div className="space-y-4">
              {[
                { d: "24", t: "Model Test: BUET Standard 01", time: "10:00 AM - 12:00 PM", status: "UPCOMING", statusCls: "bg-yellow-100 text-yellow-800" },
                { d: "26", t: "Subject Test: Chemistry P1", time: "04:00 PM - 05:00 PM", status: "UPCOMING", statusCls: "bg-yellow-100 text-yellow-800" },
                { d: "28", t: "Mega Final: DU A-Unit Mock", time: "09:00 AM - 10:30 AM", status: "DRAFT", statusCls: "bg-slate-100 text-slate-500" },
              ].map((e, i) => (
                <div key={e.t} className={`flex gap-4 items-start ${i < 2 ? "pb-4 border-b border-surface-container" : ""}`}>
                  <div className="text-center min-w-[50px]">
                    <p className="text-xs font-bold text-outline uppercase">Oct</p>
                    <p className="text-xl font-bold text-primary">{e.d}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-primary">{e.t}</h4>
                    <p className="text-xs text-outline">Time: {e.time}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${e.statusCls}`}>{e.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-12 mt-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-primary">Active Courses</h3>
              <div className="flex gap-2">
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface transition-colors">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                </button>
                <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface transition-colors">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {[
                {
                  tag: "ENGINEERING",
                  title: "BUET Admission Mastery 2024",
                  lectures: "120 Lectures",
                  students: "4.2k Students",
                  status: "LIVE",
                  statusCls: "text-secondary",
                  dotCls: "bg-secondary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7FHSBL_Jt41NQEJd7TE8gEqBqG-PSs_pkkVoMUGMNWU8COwhHEQ-3NYcPPGcAYk1bT7nSon95Cf8cvo79yr7qkgUIBXUbq7mNogWHFqLKT1ZuaL1uTDKBsaEELSIVB5cqltLnUFpo_O_yFR6sTxxym1QX3U3XoAdPsw0nLXApvBSBVw1wwZad69PE5gZlkJW8i2un6b3y6yuEwvCGxFfufextP9d7M3TSwubVF68s78R4w9CxZVpwk8Aix1rlQzQvTFotAHgZGcE",
                },
                {
                  tag: "MEDICAL",
                  title: "Medical Excellence Batch",
                  lectures: "95 Lectures",
                  students: "6.8k Students",
                  status: "RECORDED",
                  statusCls: "text-outline",
                  dotCls: "bg-outline",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWa-TENXDWQ4DY6emvd_jjk8dpC0BfcN4lAwE5PaOk3SAOSqtKfzchQQjeIjlDOCRs4Jl-tEBmqqfRqYLo0KNkNQcLlabrG5sQ2PMrNGmpwQTLLIWrCh1rilaCqQJ0l5yGoh2jTvIXNzDD2TYDU_Rbxg7bLb2gP7hN_FTqXXm-FIgHUN1qSwHj-pr3PgAJUAluYO5GWx6kRvCrhuYCRBidN5zH3b90RrwB38unWhcdaIX7UJ7GXktjoCj1nBoXPNu6w4OqJD9LHPw",
                },
                {
                  tag: "VARSITY A",
                  title: "DU A-Unit Target Batch",
                  lectures: "85 Lectures",
                  students: "3.1k Students",
                  status: "LIVE",
                  statusCls: "text-secondary",
                  dotCls: "bg-secondary",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWwrdi-Q3lWO-4D336FWlKjOxEguq0ZYfN4DK6DP7COtUGz6s7n7877cAQK85t6UQBikhp2rNfvPZuKboCneeEzb0GlJ7JJxP8gJtGz4rAd-sJ7ITS1Pf_bWlVW15Y_ikxRt2OiTnw1bGEzf8oZrmxRn-iemBZUnLyGLJUJuCwc9P4-gVIPpMiW-Ek5-hflA3ub-TUynlj6FPa1FWDSM5K0manH7QaH-XMyVdGc0NGcswW1dUO4TnegVhORqo1ybdIVRKiw3CF32c",
                },
              ].map((c) => (
                <div key={c.title} className="bg-white border border-slate-100 rounded-xl overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={c.img} alt="" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary">
                      {c.tag}
                    </div>
                  </div>
                  <div className="p-card-padding">
                    <h4 className="text-sm font-medium text-primary mb-2">{c.title}</h4>
                    <div className="flex justify-between items-center text-xs text-outline">
                      <span>{c.lectures}</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">group</span> {c.students}
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-surface-container flex justify-between">
                      <button className="text-primary text-sm font-medium">Manage</button>
                      <div className={`flex items-center font-bold text-[10px] ${c.statusCls}`}>
                        <span className={`w-2 h-2 ${c.dotCls} rounded-full mr-1`}></span> {c.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-white/95 backdrop-blur-md md:hidden border-t border-slate-100">
        <Link href="/admin/dashboard" className="flex flex-col items-center justify-center text-blue-900 bg-blue-50/50 rounded-xl px-3 py-1 active:scale-95 transition-transform duration-150">
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
        <button className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-blue-800 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="text-[11px] font-medium">Leaderboard</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-blue-800 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[11px] font-medium">Profile</span>
        </button>
      </nav>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center md:hidden active:scale-90 transition-transform">
        <span className="material-symbols-outlined">video_call</span>
      </button>
    </div>
  );
}
