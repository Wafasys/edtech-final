"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearDemoUser } from "../../../../lib/demo-auth";

export default function StudentProfilePage() {
  const router = useRouter();

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  return (
    <div className="bg-background text-on-background min-h-screen pb-24">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div className="flex items-center justify-between px-5 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/student/dashboard" className="active:opacity-70 transition-opacity text-[#003087]">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-lg font-semibold tracking-tight text-[#003087]">My Profile</h1>
          </div>
          <button onClick={handleSignOut} className="material-symbols-outlined text-gray-500" title="Sign out">
            settings
          </button>
        </div>
      </header>

      <main className="mt-16 max-w-7xl mx-auto space-y-8">
        <section className="bg-white px-container-margin py-8 border-b border-outline-variant/30">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary-container">
              <img
                alt="Rahim Khan"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS0aQGDpbu6dcqSa9qLdxsALV-pUIZpbB4dfPlhm_DJYnFo7pB402Y5T0f17hkZtU-S_J4DRnJ5vksQVp8TcT5g0UbenXUaUsDzIZqgWPBBU36zMYYcmhKb2Qv9LbJH7Lw6Vqpc3upffZ-N-ePIGUKcOrRrHqRekGO_Ws9l3U_XszlJVZK3619cguLAiYEwGR3AUyAqSuP77TWlLdBEnZstoA4lK25iokl80r8HGdtzWnhPYfuig8dE0qaKOE888-CgPwxlk_sZlA"
              />
            </div>
            <div className="flex-1 text-center md:text-left space-y-1">
              <h2 className="text-3xl font-extrabold text-primary">Rahim Khan</h2>
              <p className="text-base text-on-surface-variant">01712345678</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">Medical Batch B</span>
                <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed text-xs rounded-full">Target: Medical Admission 2027</span>
              </div>
            </div>
            <button className="mt-4 md:mt-0 px-6 h-tap-target-min border border-primary-container text-primary-container font-semibold rounded-lg hover:bg-primary-container/5 transition-colors">
              Edit Profile
            </button>
          </div>
        </section>

        <section className="px-container-margin">
          <h3 className="text-xl font-semibold mb-4">Continue Watching</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
            {[
              { module: "Module: Chemistry 02", title: "Organic Chemistry Basics", progress: 65, resume: "12:45", time: "18:45", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6J49e7Xs0kY4_jKtR20PtiPfgmWz5Gknd0Y88ItaukF7hOcBpHTNnCXFU3PemQIeA8K2_p7ZTJOOlC7Kaewt3uGsLUogA5nOycxNQNUIIiHsRrtNZPekNArW_JMw6Vrmzx8ZesvmDJD2-iwrCleSbQk4KwthWNRn8KLDcGFdqtZ_mzlns4TWiKXioL1ZMqRimb0xmz3fr8MskuJAt7nAtkbxEG4oWIFTmaMKMCCLHFQB-jmkYTc9frfO9vIbNoGL2YJNWjoDRjx4" },
              { module: "Module: Biology 04", title: "Molecular Genetics", progress: 30, resume: "08:20", time: "24:10", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNns9L7czKkwBA1BGCdsENJXQ9iL5akuMFilcFdPKihyFDGGcJ1q61Uq2rwSG0HG0SSaTiPPyCq2QvKd2p9U1jGgv1TdmH_4kvPUwR5eYAgO8KWaWJvOSlZFGiE_4U-mgQ3kN9855gh3AHqrwEqbNHsYP9gHTvLMUXQI5Ovljw1Yfh1xfAGLbs1HtEmtj_VXyjpWt0df1XAqY-kl2xPUJtfjctssD3qK4D-8UwmwusOCpDkciqx-5HUzVmj99XaC4KLuRGYVvMicU" },
            ].map((v) => (
              <div key={v.title} className="min-w-[280px] md:min-w-[340px] bg-white rounded-xl border border-outline-variant/30 overflow-hidden flex-shrink-0">
                <div className="relative h-40">
                  <img alt={v.title} className="w-full h-full object-cover" src={v.img} />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-[10px] rounded">{v.time}</div>
                </div>
                <div className="p-card-padding space-y-3">
                  <div>
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">{v.module}</p>
                    <h4 className="text-base font-semibold leading-tight">{v.title}</h4>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[12px] font-medium">
                      <span>Progress</span>
                      <span>{v.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="bg-primary-container h-full" style={{ width: `${v.progress}%` }}></div>
                    </div>
                  </div>
                  <button className="w-full h-tap-target-min bg-primary-container text-white font-semibold rounded-lg flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">play_circle</span>
                    Resume at {v.resume}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-container-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "assignment", iconCls: "bg-blue-50 text-primary-container", label: "Exams Attempted", value: "09" },
              { icon: "video_library", iconCls: "bg-green-50 text-secondary", label: "Videos Completed", value: "42/68" },
              { icon: "local_fire_department", iconCls: "bg-orange-50 text-orange-600", label: "Current Streak", value: "7 days" },
            ].map((s) => (
              <div key={s.label} className="bg-white p-6 border border-outline-variant/30 rounded-xl flex items-center gap-5">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${s.iconCls}`}>
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant">{s.label}</p>
                  <p className="text-xl font-semibold">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-container-margin">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">My Q&amp;A</h3>
            <button className="text-primary-container font-semibold text-sm flex items-center">
              View All <span className="material-symbols-outlined ml-1 text-sm">chevron_right</span>
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-outline-variant/30 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-surface-container">
                <p className="text-xs text-on-surface-variant mb-2">
                  Linked to: <span className="text-primary underline">Properties of Alkanes</span>
                </p>
                <p className="text-base font-semibold">How do we determine the boiling point difference between isomers?</p>
              </div>
              <div className="bg-blue-50/50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-primary-container text-white text-[10px] rounded font-bold uppercase">Pinned</span>
                  <span className="text-xs font-bold text-primary">Instructor Reply</span>
                </div>
                <p className="text-base text-on-surface italic">
                  &ldquo;Focus on the surface area and branching. More branching leads to lower surface area, resulting in weaker Van der Waals forces.&rdquo;
                </p>
              </div>
            </div>
            <div className="bg-white border border-outline-variant/30 rounded-xl p-6">
              <p className="text-xs text-on-surface-variant mb-2">
                Linked to: <span className="text-primary underline">Plant Physiology Intro</span>
              </p>
              <p className="text-base font-semibold">Will the cellular respiration cycle be covered in the next module?</p>
              <p className="mt-4 text-xs text-gray-400">Awaiting Instructor response...</p>
            </div>
          </div>
        </section>

        <section className="px-container-margin">
          <h3 className="text-xl font-semibold mb-6">Exam History &amp; Performance</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-card-padding border border-outline-variant/30 rounded-xl space-y-6">
              <div className="flex justify-between items-end">
                <h4 className="text-base font-bold">9 Exams Taken</h4>
                <span className="text-xs bg-surface-container px-3 py-1 rounded">Avg Score: 78%</span>
              </div>
              <div className="space-y-5">
                {[
                  { subject: "Bangla", score: "200/300", pct: 66.6, barCls: "bg-error", scoreCls: "text-error", weak: "Weak Area - Focus here" },
                  { subject: "English", score: "250/300", pct: 83.3, barCls: "bg-primary-container" },
                  { subject: "General Knowledge", score: "270/300", pct: 90, barCls: "bg-secondary" },
                ].map((s) => (
                  <div key={s.subject} className="space-y-2">
                    <div className="flex justify-between text-base">
                      <span className="font-medium">{s.subject}</span>
                      <span className={`font-bold ${s.scoreCls ?? ""}`}>{s.score}</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className={`${s.barCls} h-full`} style={{ width: `${s.pct}%` }}></div>
                    </div>
                    {s.weak && <p className="text-xs text-error font-semibold italic">{s.weak}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Recent Results</h4>
              {[
                { date: "June 18, 2024", title: "Physics Paper 01", score: "Score: 45/50", rank: "Rank: 12th" },
                { date: "June 15, 2024", title: "Chemistry Full Mock", score: "Score: 82/100", rank: "Rank: 45th" },
                { date: "June 10, 2024", title: "Weekly English Test", score: "Score: 18/20", rank: "Rank: 4th" },
              ].map((r) => (
                <div key={r.title} className="bg-white p-4 border border-outline-variant/30 rounded-lg flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer">
                  <div>
                    <p className="text-xs text-on-surface-variant">{r.date}</p>
                    <p className="text-base font-bold">{r.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-bold text-primary">{r.score}</p>
                    <p className="text-xs text-secondary font-bold">{r.rank}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-container-margin">
          <h3 className="text-xl font-semibold mb-4">My Downloaded Materials</h3>
          <div className="bg-white border border-outline-variant/30 rounded-xl divide-y divide-surface-container">
            {[
              { file: "Biology_Lecture_Notes.pdf", meta: "2.4 MB • June 20", action: "download" },
              { file: "Chemistry_Question_Bank.pdf", meta: "14.8 MB • June 15", action: "open_in_new" },
              { file: "Summary_Sheets.pdf", meta: "1.1 MB • June 12", action: "download" },
            ].map((f) => (
              <div key={f.file} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded">
                    <span className="material-symbols-outlined">picture_as_pdf</span>
                  </div>
                  <div>
                    <p className="text-base font-medium">{f.file}</p>
                    <p className="text-xs text-on-surface-variant">{f.meta}</p>
                  </div>
                </div>
                <button className="w-10 h-10 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined">{f.action}</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="px-container-margin pb-10">
          <h3 className="text-xl font-semibold mb-4">Upcoming Exams</h3>
          <div className="bg-primary-container text-white p-card-padding rounded-xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">event</span>
                <span className="text-xs uppercase font-bold tracking-widest opacity-80">Next Goal</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold leading-tight">Biology Unit Test</h4>
                <p className="text-base text-primary-fixed">June 24, 10:00 AM</p>
              </div>
              <div className="flex gap-4 pt-2">
                <button className="px-6 h-tap-target-min bg-white text-primary-container font-bold rounded-lg">View Syllabus</button>
                <button className="px-6 h-tap-target-min border border-white/30 font-bold rounded-lg">Remind Me</button>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-2 bg-white border-t border-gray-200 z-50">
        <Link href="/student/dashboard" className="flex flex-col items-center justify-center text-gray-500 py-1 w-full active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[11px] font-medium mt-1">Home</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-gray-500 py-1 w-full active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[11px] font-medium mt-1">Courses</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500 py-1 w-full active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">quiz</span>
          <span className="text-[11px] font-medium mt-1">Exams</span>
        </button>
        <Link href="/student/leaderboard" className="flex flex-col items-center justify-center text-gray-500 py-1 w-full active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="text-[11px] font-medium mt-1">Leaderboard</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-[#003087] bg-blue-50/50 rounded-lg py-1 w-full active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="text-[11px] font-medium mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
