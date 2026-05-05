"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearDemoUser } from "../../../../lib/demo-auth";

const BRAND = {
  green: "#20b486",
  greenDark: "#1a906b",
  mint: "#f0faf7",
  text: "#101828",
  muted: "#667085",
  border: "rgba(216,216,216,0.55)",
};

const weeklyScores = [48, 56, 52, 64, 71, 69, 78];
const studyMix = [
  { label: "Physics", value: 82, color: "#20b486" },
  { label: "Chemistry", value: 64, color: "#4ac8ae" },
  { label: "Biology", value: 72, color: "#ff9b26" },
  { label: "English", value: 46, color: "#3fc89e" },
];
const courses = [
  { name: "Medical Physics Mastery", icon: "bolt", progress: 78, next: "Magnetism L-12" },
  { name: "Organic Chemistry Sprint", icon: "science", progress: 61, next: "Aldehydes quiz" },
  { name: "Biology Rapid Revision", icon: "biotech", progress: 84, next: "Cell cycle mock" },
];
const upcoming = [
  { day: "09", month: "May", title: "Medical Model Test 08", time: "10:00 AM", tone: "Live in 3 days" },
  { day: "12", month: "May", title: "Botany Topic Quiz", time: "08:30 PM", tone: "Practice" },
];

function MiniLineChart() {
  const points = weeklyScores
    .map((score, index) => {
      const x = 12 + index * 44;
      const y = 100 - ((score - 40) / 42) * 76;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 288 120" className="h-36 w-full" role="img" aria-label="Weekly score trend">
      {[24, 52, 80, 108].map((y) => (
        <line key={y} x1="0" x2="288" y1={y} y2={y} stroke="#e8eee9" strokeWidth="1" />
      ))}
      <polyline points={points} fill="none" stroke={BRAND.green} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {weeklyScores.map((score, index) => {
        const x = 12 + index * 44;
        const y = 100 - ((score - 40) / 42) * 76;
        return (
          <g key={index}>
            <circle cx={x} cy={y} r="5" fill="#fff" stroke={BRAND.green} strokeWidth="3" />
            {index === weeklyScores.length - 1 && (
              <text x={x - 8} y={y - 12} fill={BRAND.greenDark} fontSize="12" fontWeight="700">
                {score}%
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function StudentDashboardPage() {
  const router = useRouter();

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-[#f8fbfa] text-[#101828] pb-24">
      <header className="sticky top-0 z-50 border-b border-[rgba(216,216,216,0.5)] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="grid h-10 w-10 place-items-center rounded-full border border-[#d0d5dd] text-[#1a906b] transition hover:bg-[#f0faf7]">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#20b486]">Student Portal</p>
              <h1 className="text-xl font-black tracking-tight text-[#101828]">Admission Pro</h1>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            title="Sign out"
            className="flex items-center gap-3 rounded-full border border-[#d0d5dd] bg-white py-1.5 pl-2 pr-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] transition hover:border-[#20b486]"
          >
            <img
              alt="User Profile"
              className="h-9 w-9 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7AVCa4cbImZGmJFs9PZrFqrnKiHsrMVbtu_AvNewLKNnd1SYzk4LAGylzk67kVH4NWaatlGp5NVZGyhwPxNVtG-foMlfFChdJjAI8xUo0QMgMqZM7tDCr1m2fVcAY2eKFPD3o8ZfRUEk02shPYJxUE59v9jEE_E6nZY9xCA_0QJ5mRC_OyY9F_ednoy-XwWcvN_dJj00oVywilCOogXpTnOWR_HNK_XlW5DlKA3ZeJROOsiI7tnNKUVkmiNbtZYhtUVCJNUZN_8M"
            />
            <span className="hidden text-sm font-semibold text-[#667085] sm:inline">Sign out</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <section className="grid gap-5 lg:grid-cols-[1.45fr_0.9fr]">
          <div className="overflow-hidden rounded-xl border border-[rgba(216,216,216,0.55)] bg-white shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
            <div className="grid min-h-[330px] lg:grid-cols-[1.12fr_0.88fr]">
              <div className="flex flex-col justify-between p-7 sm:p-8">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#edfff9] px-4 py-2 text-sm font-bold text-[#1a906b]">
                    <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
                    12 day learning streak
                  </div>
                  <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-[#101828] sm:text-5xl">
                    Welcome back, Fahim. Keep the momentum sharp.
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-7 text-[#646464]">
                    You are ahead of 68% of your batch this week. Finish today&apos;s physics lesson
                    and one model test review to stay on track.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/student/lessons"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#20b486] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(32,180,134,0.26)] transition hover:bg-[#1a906b]"
                  >
                    Continue Learning
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <Link
                    href="/exam/secure-desktop"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#d0d5dd] bg-white px-6 text-sm font-bold text-[#101828] transition hover:border-[#20b486] hover:bg-[#f2fffb]"
                  >
                    Start Mock Exam
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[260px] bg-[#f0faf7]">
                <img
                  alt="Student lesson preview"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp56NRgQbpopI4tQGH3I_5nsB3VqqkF4f_mhFEGVePICnKBnusErVhkNg6twm1pW1OCbrej6tRf_W5SYMn1YYBLAX1Xm8mXKZfupRTHhAWq6T_LPej3fMEJ22JNpNZnxDj7mDljE22HQ-rCtKbTSDZ7rFpBzPrrzTyG8DvuxjepJo9gVxnQJxADc5RJlqUUcHMTf1sHk9L3YF5mm03Th3w49yqCTyw12W8CawOXH5z_BqYZ9hXnC2aTo5CbNl65WFruXWwgP-IBFQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/65 via-[#101828]/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/30 bg-white/90 p-4 shadow-[0_18px_38px_rgba(16,24,40,0.16)] backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#20b486]">Resume</p>
                      <h3 className="mt-1 text-base font-black text-[#101828]">Electromagnetic Induction</h3>
                      <p className="text-sm text-[#667085]">14:22 of 45:00 completed</p>
                    </div>
                    <span className="material-symbols-outlined grid h-12 w-12 place-items-center rounded-full bg-[#20b486] text-white">
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { label: "Weekly Accuracy", value: "78%", icon: "track_changes", delta: "+6.4%" },
              { label: "Questions Solved", value: "485", icon: "fact_check", delta: "+82" },
              { label: "Current Rank", value: "#337", icon: "leaderboard", delta: "Top 12%" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-5 shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
                    <span className="material-symbols-outlined">{stat.icon}</span>
                  </div>
                  <span className="rounded-full bg-[#f2fffb] px-3 py-1 text-xs font-bold text-[#1a906b]">
                    {stat.delta}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#667085]">{stat.label}</p>
                <p className="mt-1 text-3xl font-black text-[#101828]">{stat.value}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.82fr]">
          <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#20b486]">Score Trend</p>
                <h3 className="mt-1 text-2xl font-black text-[#101828]">Weekly performance</h3>
              </div>
              <span className="rounded-full bg-[#edfff9] px-3 py-1 text-sm font-bold text-[#1a906b]">
                +12.5%
              </span>
            </div>
            <MiniLineChart />
            <div className="mt-2 grid grid-cols-7 text-center text-xs font-bold text-[#98a2b3]">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <div className="mb-5 flex items-start justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#20b486]">Study Mix</p>
                <h3 className="mt-1 text-2xl font-black text-[#101828]">Subject progress</h3>
              </div>
              <span className="material-symbols-outlined text-[#20b486]">insights</span>
            </div>
            <div className="space-y-4">
              {studyMix.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-bold text-[#101828]">{item.label}</span>
                    <span className="font-bold text-[#667085]">{item.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-[#f2f4f7]">
                    <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.72fr]">
          <div>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#20b486]">Courses</p>
                <h3 className="text-2xl font-black text-[#101828]">Active learning paths</h3>
              </div>
              <Link href="/student/search" className="text-sm font-bold text-[#1a906b] hover:underline">
                Browse all
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {courses.map((course) => (
                <article key={course.name} className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-5 shadow-[0_12px_28px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:border-[#20b486]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#f0faf7] text-[#20b486]">
                      <span className="material-symbols-outlined">{course.icon}</span>
                    </div>
                    <span className="text-sm font-black text-[#20b486]">{course.progress}%</span>
                  </div>
                  <h4 className="text-base font-black text-[#101828]">{course.name}</h4>
                  <p className="mt-1 text-sm text-[#667085]">Next: {course.next}</p>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#f2f4f7]">
                    <div className="h-full rounded-full bg-[#20b486]" style={{ width: `${course.progress}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-white p-6 shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#20b486]">Schedule</p>
                <h3 className="text-2xl font-black text-[#101828]">Upcoming exams</h3>
              </div>
              <Link href="/student/results" className="grid h-10 w-10 place-items-center rounded-full bg-[#edfff9] text-[#20b486]">
                <span className="material-symbols-outlined">calendar_month</span>
              </Link>
            </div>
            <div className="space-y-3">
              {upcoming.map((exam) => (
                <div key={exam.title} className="flex items-center gap-4 rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-4">
                  <div className="min-w-[58px] rounded-lg bg-white p-2 text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                    <p className="text-xs font-bold uppercase text-[#667085]">{exam.month}</p>
                    <p className="text-2xl font-black text-[#20b486]">{exam.day}</p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-black text-[#101828]">{exam.title}</h4>
                    <p className="text-sm text-[#667085]">{exam.time}</p>
                  </div>
                  <span className="hidden rounded-full bg-[#edfff9] px-3 py-1 text-xs font-bold text-[#1a906b] sm:inline">
                    {exam.tone}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
