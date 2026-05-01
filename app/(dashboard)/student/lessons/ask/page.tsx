"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { clearDemoUser } from "../../../../../lib/demo-auth";

type SentQuestion = { time: string; body: string; sentTo: string };

const INITIAL_HISTORY: SentQuestion[] = [
  {
    time: "Today, 10:24 AM",
    body: "Could you please elaborate on why the vertical velocity component at the peak of the trajectory is zero? I'm having trouble connecting this to the conservation of energy principle mentioned at 12:45.",
    sentTo: "Sabbir Rahman",
  },
];

export default function AskQuestionPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"comments" | "ask">("ask");
  const [draft, setDraft] = useState("");
  const [history, setHistory] = useState<SentQuestion[]>(INITIAL_HISTORY);

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  function handleSend() {
    const body = draft.trim();
    if (!body) return;
    setHistory([
      { time: "Just now", body, sentTo: "Sabbir Rahman" },
      ...history,
    ]);
    setDraft("");
  }

  return (
    <div className="bg-background text-on-background min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 flex justify-between items-center px-5 h-16">
        <div className="flex items-center gap-4">
          <Link href="/student/lessons" className="active:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[#003087]">arrow_back</span>
          </Link>
          <h1 className="text-xl font-black text-[#003087] tracking-tight">Admission PRO</h1>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          title="Sign out"
          className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300"
        >
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGcJ2Q3k967k46QNbQBqTc4HuZ7TNd2bRept9uzmf1aXSxFOGGTZKPRqx30a-EEeDPokEpOvPQaYNr_jBPeZpPA0uWP43VACxx6lMuvvutE8nowasMCohErFseVY6C7PPoIOQ9gX-d-zZoshmwYzQi8Pvt1aPwA2jjqOFMwEMtwPPtniJog7ZEjcxESXBawd38yW-eDT9F1ZGWhzuClKcnpJIBmACZTggY856dKwUymNBkegqnZIxj4MwD35xC0fHaUYA2hPWcObo"
          />
        </button>
      </header>

      <main className="max-w-screen-xl mx-auto">
        <section className="w-full bg-black relative aspect-video overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 z-10">
            <span
              className="material-symbols-outlined text-white text-6xl opacity-80"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_circle
            </span>
          </div>
          <img
            alt="Lecture"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpWwNBI9QT8CxtLkjsbPzttJXqyWjBdd8_z2ztefod4CLrs2gTYNOILSXtmU4dBlkBU6cNaZOSKs6uxBS1OPP0YG_UnJZH9HhdxWqoRB7OuGE6G1S6kbiMIgFLXDQEn9VOxUIt7XT_58_RaPyYEN0UHSyUlMONmIxmv82rmk_E91P4dysMbECHKXbT7x2Vxs-OTtNijTV73L2lN1ctSdSfowlgR7Y_JejgoUPKnkEoINWIWUh2oUfW9Yg2onoS1IhFJ423tWcuXDY"
          />
          <div className="absolute bottom-0 w-full h-1.5 bg-slate-800">
            <div className="h-full bg-[#003087] w-[45%]" />
          </div>
        </section>

        <div className="px-container-margin py-base space-y-gutter">
          <div className="mt-4">
            <h2 className="font-headline-md text-headline-md text-primary-container mb-1">
              Advanced Dynamics: Projectile Motion &amp; Vector Calculus
            </h2>
            <div className="flex items-center gap-3 text-slate-500 font-label-sm text-label-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">visibility</span> 12.4k
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span> 45:12
              </span>
            </div>
          </div>

          <div className="bg-surface-container rounded-xl p-1 flex">
            <button
              type="button"
              onClick={() => setMode("comments")}
              className={
                mode === "comments"
                  ? "flex-1 py-2 text-center font-label-sm text-label-sm text-[#003087] bg-white rounded-lg shadow-sm font-bold border border-slate-100"
                  : "flex-1 py-2 text-center font-label-sm text-label-sm text-slate-500 transition-colors"
              }
            >
              Comments
            </button>
            <button
              type="button"
              onClick={() => setMode("ask")}
              className={
                mode === "ask"
                  ? "flex-1 py-2 text-center font-label-sm text-label-sm text-[#003087] bg-white rounded-lg shadow-sm font-bold border border-slate-100"
                  : "flex-1 py-2 text-center font-label-sm text-label-sm text-slate-500 transition-colors"
              }
            >
              Ask Question
            </button>
          </div>

          {mode === "ask" ? (
            <section className="space-y-6">
              <div className="bg-white border border-outline-variant rounded-xl p-card-padding shadow-sm">
                <div className="space-y-3">
                  <textarea
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    rows={4}
                    placeholder="Type your question for the instructor..."
                    className="w-full border-none focus:ring-0 p-0 font-body-md text-body-md placeholder:text-slate-400 bg-transparent resize-none outline-none"
                  />
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-slate-500">
                        This will be sent directly to instructor
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Estimated response time: 24-48 hours
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleSend}
                      className="bg-[#003087] text-white font-label-sm text-label-sm px-6 h-tap-target-min rounded-lg flex items-center gap-2 active:opacity-90 transition-all"
                    >
                      Send Question
                      <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-label-sm text-label-sm text-slate-400 uppercase tracking-wider">
                  Your Interaction History
                </h3>
                {history.map((q, i) => (
                  <div
                    key={i}
                    className="bg-white border-l-4 border-primary-container border-y border-r border-outline-variant rounded-r-xl p-card-padding"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-primary-container text-[11px] font-bold rounded uppercase tracking-tight">
                        <span className="material-symbols-outlined text-[14px]">school</span>
                        Question to Instructor
                      </span>
                      <span className="text-[12px] text-slate-400 font-medium">{q.time}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">{q.body}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#006e26] font-label-sm text-label-sm">
                      <span
                        className="material-symbols-outlined text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span>Sent to {q.sentTo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section className="bg-white border border-outline-variant rounded-xl p-card-padding shadow-sm">
              <p className="text-sm text-on-surface-variant">No public comments yet on this lesson.</p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
