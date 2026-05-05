"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearDemoUser } from "../../../../lib/demo-auth";

const cohortBars = [
  { label: "Jan", value: 48 },
  { label: "Feb", value: 62 },
  { label: "Mar", value: 58 },
  { label: "Apr", value: 76 },
  { label: "May", value: 83 },
  { label: "Jun", value: 92 },
  { label: "Jul", value: 88 },
];

const questionBanks = [
  { icon: "functions", name: "Mathematics", count: "2,450 questions", health: "92%" },
  { icon: "science", name: "Physics", count: "1,820 questions", health: "87%" },
  { icon: "biotech", name: "Biology", count: "3,100 questions", health: "95%" },
];

const scheduled = [
  { day: "09", title: "Medical Model Test 08", time: "10:00 AM - 11:30 AM", status: "Ready" },
  { day: "11", title: "Engineering Physics Mock", time: "04:00 PM - 05:00 PM", status: "Draft" },
  { day: "14", title: "DU A-Unit Mega Exam", time: "08:00 PM - 09:30 PM", status: "Review" },
];

const courses = [
  {
    tag: "MEDICAL",
    title: "Medical Excellence Batch",
    students: "6.8k",
    lessons: "95 lessons",
    status: "Live",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWa-TENXDWQ4DY6emvd_jjk8dpC0BfcN4lAwE5PaOk3SAOSqtKfzchQQjeIjlDOCRs4Jl-tEBmqqfRqYLo0KNkNQcLlabrG5sQ2PMrNGmpwQTLLIWrCh1rilaCqQJ0l5yGoh2jTvIXNzDD2TYDU_Rbxg7bLb2gP7hN_FTqXXm-FIgHUN1qSwHj-pr3PgAJUAluYO5GWx6kRvCrhuYCRBidN5zH3b90RrwB38unWhcdaIX7UJ7GXktjoCj1nBoXPNu6w4OqJD9LHPw",
  },
  {
    tag: "ENGINEERING",
    title: "BUET Admission Mastery",
    students: "4.2k",
    lessons: "120 lessons",
    status: "Live",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7FHSBL_Jt41NQEJd7TE8gEqBqG-PSs_pkkVoMUGMNWU8COwhHEQ-3NYcPPGcAYk1bT7nSon95Cf8cvo79yr7qkgUIBXUbq7mNogWHFqLKT1ZuaL1uTDKBsaEELSIVB5cqltLnUFpo_O_yFR6sTxxym1QX3U3XoAdPsw0nLXApvBSBVw1wwZad69PE5gZlkJW8i2un6b3y6yuEwvCGxFfufextP9d7M3TSwubVF68s78R4w9CxZVpwk8Aix1rlQzQvTFotAHgZGcE",
  },
  {
    tag: "VARSITY",
    title: "DU A-Unit Target Batch",
    students: "3.1k",
    lessons: "85 lessons",
    status: "Recorded",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWwrdi-Q3lWO-4D336FWlKjOxEguq0ZYfN4DK6DP7COtUGz6s7n7877cAQK85t6UQBikhp2rNfvPZuKboCneeEzb0GlJ7JJxP8gJtGz4rAd-sJ7ITS1Pf_bWlVW15Y_ikxRt2OiTnw1bGEzf8oZrmxRn-iemBZUnLyGLJUJuCwc9P4-gVIPpMiW-Ek5-hflA3ub-TUynlj6FPa1FWDSM5K0manH7QaH-XMyVdGc0NGcswW1dUO4TnegVhORqo1ybdIVRKiw3CF32c",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();

  function handleSignOut() {
    clearDemoUser();
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f8fbfa] text-[#101828] pb-20 md:pb-0">
      <header className="sticky top-0 z-50 border-b border-[rgba(216,216,216,0.5)] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="grid h-10 w-10 place-items-center rounded-full border border-[#d0d5dd] text-[#1a906b] transition hover:bg-[#f0faf7]">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#20b486]">Command Center</p>
              <h1 className="text-xl font-black tracking-tight text-[#101828]">Admin Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden h-11 items-center gap-2 rounded-full bg-[#20b486] px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(32,180,134,0.24)] transition hover:bg-[#1a906b] md:flex">
              <span className="material-symbols-outlined text-[20px]">upload</span>
              Upload Video
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              title="Sign out"
              className="h-11 w-11 overflow-hidden rounded-full border border-[#d0d5dd] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
            >
              <img
                alt="User Profile"
                className="h-full w-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXl2oaPBwYtdqAtustIZmHadF3FIVVlDDGivawPKa6KWq3LS_3rNMh0lJsGw6kUcJFsmbHVOLneKCI31wXlhqorstaYYhLXeeNsNfRtnr7DlP-mibxR3kFHYZw8rxXyQZ16yYn7khjxDDPKcM1YyGFpfEAor2-edjSLj3gHjJ8903rmP73u_L7eZFpka9QX6sulOOrr_VhO6r41UsFx-DKfPWVIWc9HIovNbSk7ymOELS8Tq3M5AERQ0S34MOboHV5pHz20hr8JZA"
              />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <section className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.08)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#edfff9] px-4 py-2 text-sm font-bold text-[#1a906b]">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Live operations healthy
              </div>
              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#101828] sm:text-5xl">
                Monitor cohorts, exams, and learning quality from one place.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#646464]">
                Admissions activity is up this week. Review the model-test pipeline and question bank
                quality before the next high-volume exam window.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { label: "Active Students", value: "12,482", delta: "+4.2%", icon: "groups" },
                { label: "Exam Attempts", value: "8,854", delta: "+12.5%", icon: "quiz" },
                { label: "Open Q&A", value: "148", delta: "32 urgent", icon: "forum" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#1a906b]">
                      {item.delta}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#667085]">{item.label}</p>
                  <p className="text-3xl font-black text-[#101828]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#20b486]">Cohort Analytics</p>
                <h3 className="mt-1 text-2xl font-black text-[#101828]">Performance overview</h3>
              </div>
              <div className="rounded-full bg-[#edfff9] px-3 py-1 text-sm font-bold text-[#1a906b]">
                +12.5% avg score
              </div>
            </div>
            <div className="relative h-72 rounded-lg border border-[#dce8e2] bg-[#f0faf7] p-5">
              <div className="pointer-events-none absolute inset-x-5 top-8 bottom-12 grid grid-rows-4">
                {[0, 1, 2, 3].map((line) => (
                  <div key={line} className="border-t border-[#d7e8df]" />
                ))}
              </div>

              <div className="relative z-10 flex h-full items-end gap-3">
                {cohortBars.map((bar) => (
                  <div key={bar.label} className="flex h-full flex-1 flex-col justify-end gap-3">
                    <div className="relative min-h-0 flex-1 overflow-hidden rounded-full bg-white shadow-inner">
                      <div
                        className="absolute bottom-0 left-0 right-0 rounded-full shadow-[0_10px_20px_rgba(32,180,134,0.18)]"
                        style={{
                          height: `${bar.value}%`,
                          background:
                            "linear-gradient(180deg, #4ac8ae 0%, #20b486 52%, #1a906b 100%)",
                        }}
                      />
                    </div>
                    <span className="text-center text-xs font-bold text-[#667085]">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#20b486]">Question Bank</p>
                <h3 className="text-2xl font-black text-[#101828]">Coverage health</h3>
              </div>
              <Link href="/admin/exams/schedule" className="grid h-10 w-10 place-items-center rounded-full bg-[#edfff9] text-[#20b486]">
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="space-y-3">
              {questionBanks.map((bank) => (
                <div key={bank.name} className="rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
                      <span className="material-symbols-outlined">{bank.icon}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-black text-[#101828]">{bank.name}</p>
                        <p className="text-sm font-black text-[#20b486]">{bank.health}</p>
                      </div>
                      <p className="text-sm text-[#667085]">{bank.count}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#20b486]">Scheduler</p>
                <h3 className="text-2xl font-black text-[#101828]">Upcoming exams</h3>
              </div>
              <Link href="/admin/exams/schedule" className="rounded-full bg-[#20b486] px-4 py-2 text-sm font-bold text-white">
                New exam
              </Link>
            </div>
            <div className="space-y-3">
              {scheduled.map((exam) => (
                <div key={exam.title} className="flex items-center gap-4 rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-4">
                  <div className="min-w-[58px] rounded-lg bg-white p-2 text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                    <p className="text-xs font-bold uppercase text-[#667085]">May</p>
                    <p className="text-2xl font-black text-[#20b486]">{exam.day}</p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-black text-[#101828]">{exam.title}</h4>
                    <p className="text-sm text-[#667085]">{exam.time}</p>
                  </div>
                  <span className="rounded-full bg-[#edfff9] px-3 py-1 text-xs font-bold text-[#1a906b]">
                    {exam.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#20b486]">Courses</p>
                <h3 className="text-2xl font-black text-[#101828]">Active programs</h3>
              </div>
              <button className="grid h-10 w-10 place-items-center rounded-full border border-[#d0d5dd] bg-white text-[#667085] transition hover:border-[#20b486] hover:text-[#20b486]">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {courses.map((course) => (
                <article key={course.title} className="overflow-hidden rounded-xl border border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:border-[#20b486]">
                  <div className="relative h-36 overflow-hidden">
                    <img className="h-full w-full object-cover transition duration-500 hover:scale-105" src={course.img} alt="" />
                    <div className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[10px] font-black text-[#1a906b] backdrop-blur">
                      {course.tag}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="line-clamp-2 min-h-[40px] text-sm font-black text-[#101828]">{course.title}</h4>
                    <div className="mt-4 flex items-center justify-between text-xs text-[#667085]">
                      <span>{course.lessons}</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">group</span>
                        {course.students}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-[rgba(216,216,216,0.55)] pt-4">
                      <button className="text-sm font-bold text-[#1a906b]">Manage</button>
                      <span className="flex items-center gap-1 text-xs font-black text-[#20b486]">
                        <span className="h-2 w-2 rounded-full bg-[#20b486]" />
                        {course.status}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
