"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { clearDemoUser } from "../../../../lib/demo-auth";

const FEEDBACK_OPTIONS = [
  "Concept explanation too fast",
  "Video quality issues",
  "Lack of practical examples",
  "Other",
];

export default function VideoLessonPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"ask" | "comments">("ask");
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <header className="bg-white flex justify-between items-center w-full px-5 py-3 sticky top-0 z-40 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <Link href="/student/dashboard" className="active:opacity-70 transition-all duration-200">
            <span className="material-symbols-outlined text-blue-900">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold text-blue-900 tracking-tight">Admission Pro</h1>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          title="Sign out"
          className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden"
        >
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU10ND4wFzhd4D6gQWztHOfxL9A1pnKNiyZQpy-_T8DfP3L9dDOGroCUFNHU7HXa-xIp-GSa96MZ1We2XprsxQaL_fV9CJ-VzEj5NvzMxLsRAWOlYPWD8eZQQkU4fej_JE_k4CcY--vAAAwr7ShkxYz2EWQMz8lCATjNPDqyFSIvV5lu0F1Plx65ogbab2E83CCYJ1XPNtjm0aQNB6giL3EHXjWqB8B3k0BfeRrfU_p5v_Yibh2089PNJck5eOYRMzfsT2Rmf1dUs"
          />
        </button>
      </header>

      <main className="max-w-4xl mx-auto">
        <section
          className="relative aspect-video w-full bg-black overflow-hidden group"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)",
          }}
        >
          <img
            alt="Lecture"
            className="w-full h-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWJefcI5HzVF9tJlWruGZbM4lPNq9BzJVYnQ0FcpROzGYR8i4eWhHWotL_o368ZsdKaAh35y8JOKOmARV8FZbFZYM3U6guX35Aph2Qyx1Zp7HfiWQ2auk9Hh8li_yOgOHleo3QVvmwk2yafLvfmLzETdUM3gpZ3pGPVkA3mrgGPwDlfRGmJ9-x02n4N7DtJ7aB93kG0rymM8DVYb3JV1fnpkwtQ73RK7C4zdORTeUD4OM2EybnFdF1_ZCKoAyAPUBirNWG9Mq2CWQ"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-4"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)",
            }}
          >
            <div className="w-full h-1 bg-white/30 rounded-full mb-4 relative cursor-pointer">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500 rounded-full" />
              <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button className="text-white flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-[32px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
                <button className="text-white">
                  <span className="material-symbols-outlined">volume_up</span>
                </button>
                <span className="text-white text-xs font-medium">12:45 / 45:00</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <button>
                  <span className="material-symbols-outlined">closed_caption</span>
                </button>
                <button>
                  <span className="material-symbols-outlined">settings</span>
                </button>
                <button>
                  <span className="material-symbols-outlined">fullscreen</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-container-margin py-4 flex justify-between items-center bg-white border-b border-slate-100">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 active:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-[20px]">thumb_up</span>
              <span className="font-label-sm text-label-sm">1.2k</span>
            </button>
            <button
              type="button"
              onClick={() => setFeedbackOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 active:bg-slate-50 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">thumb_down</span>
              <span className="font-label-sm text-label-sm">Dislike</span>
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary active:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">bookmark</span>
            <span className="font-label-sm text-label-sm">Save</span>
          </button>
        </section>

        <section className="px-container-margin py-6">
          <h2 className="font-headline-md text-headline-md text-primary mb-2">
            Advanced Calculus: Derivatives of Trigonometric Functions
          </h2>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            <span>Unit 4: Calculus</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Dr. Ariful Islam</span>
          </div>

          <div className="flex border-b border-slate-200 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("ask")}
              className={
                activeTab === "ask"
                  ? "px-6 py-3 border-b-2 border-primary text-primary font-semibold text-sm"
                  : "px-6 py-3 text-slate-500 font-medium text-sm"
              }
            >
              Ask Instructor
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("comments")}
              className={
                activeTab === "comments"
                  ? "px-6 py-3 border-b-2 border-primary text-primary font-semibold text-sm"
                  : "px-6 py-3 text-slate-500 font-medium text-sm"
              }
            >
              Comments (24)
            </button>
          </div>

          {activeTab === "ask" ? (
            <div className="bg-surface-container-low rounded-xl p-card-padding mb-8">
              <p className="text-sm text-on-surface-variant mb-4">
                Having trouble with a specific step? Ask Dr. Ariful directly.
              </p>
              <div className="relative">
                <textarea
                  rows={3}
                  placeholder="Type your question here..."
                  className="w-full rounded-xl border border-outline-variant p-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                />
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-primary">
                    <span className="material-symbols-outlined text-sm">image</span>
                  </button>
                  <Link
                    href="/student/lessons/ask"
                    className="px-4 py-1.5 bg-primary text-on-primary text-sm rounded-lg font-semibold"
                  >
                    Post
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-surface-container-low rounded-xl p-card-padding mb-8">
              <p className="text-sm text-on-surface-variant">No public comments to display yet.</p>
            </div>
          )}

          <div className="space-y-4">
            <h3 className="font-label-sm text-label-sm uppercase tracking-wider text-slate-400">
              Class Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-error"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      picture_as_pdf
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Lecture_Notes_U4.pdf</h4>
                    <p className="text-xs text-slate-400">4.2 MB • Updated yesterday</p>
                  </div>
                </div>
                <button className="text-primary active:scale-90 transition-transform">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      description
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Practice_Problems.pdf</h4>
                    <p className="text-xs text-slate-400">1.8 MB • Updated 2 days ago</p>
                  </div>
                </div>
                <button className="text-primary active:scale-90 transition-transform">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {feedbackOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-container-margin bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-sm rounded-xl overflow-hidden shadow-2xl">
            <div className="p-card-padding border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-primary">Help us improve</h3>
              <button
                type="button"
                onClick={() => setFeedbackOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-card-padding">
              <p className="text-on-surface-variant mb-6 text-sm">
                We&apos;re sorry this lesson didn&apos;t meet your expectations. What was unclear?
              </p>
              <div className="space-y-3 mb-6">
                {FEEDBACK_OPTIONS.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary/50 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="feedback"
                      checked={feedback === opt}
                      onChange={() => setFeedback(opt)}
                      className="w-4 h-4 text-primary focus:ring-primary border-slate-300"
                    />
                    <span className="text-sm font-medium">{opt}</span>
                  </label>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setFeedbackOpen(false)}
                  className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold active:opacity-90 transition-opacity"
                >
                  Submit Feedback
                </button>
                <button
                  type="button"
                  onClick={() => setFeedbackOpen(false)}
                  className="w-full py-3 text-slate-500 font-medium active:opacity-70"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
