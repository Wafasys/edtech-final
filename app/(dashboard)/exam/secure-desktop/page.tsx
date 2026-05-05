"use client";

import { useState } from "react";

const OPTIONS = ["Ribosome", "Golgi Body", "Mitochondria", "Lysosome"];

export default function DesktopSecureExamViewPage() {
  const [selected, setSelected] = useState("Mitochondria");
  const [locked, setLocked] = useState(false);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-hidden h-screen w-screen flex flex-col select-none">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 h-16 bg-white border-b border-slate-200">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-2xl">timer</span>
          <div>
            <h1 className="font-headline-md text-headline-md text-primary tracking-tight">45:12</h1>
            <p className="font-label-sm text-label-sm text-outline">Question 12 of 50</p>
          </div>
        </div>
        <div className="flex-1 px-12">
          <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
            <div
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={24}
              className="bg-primary h-full"
              role="progressbar"
              style={{ width: "24%" }}
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden md:block">
            <p className="font-label-sm text-label-sm text-on-surface font-bold">
              Medical Admission Mock Test 2027
            </p>
            <p className="font-label-sm text-label-sm text-error">Negative Marking: 0.25</p>
          </div>
          <button
            type="button"
            onClick={() => setLocked(true)}
            className="bg-surface-container-high px-4 py-2 rounded-lg font-label-sm text-label-sm text-primary transition-all opacity-90 active:scale-95"
          >
            Help
          </button>
        </div>
      </header>

      <main className="flex-1 mt-16 mb-20 flex overflow-hidden">
        <section className="flex-1 overflow-y-auto p-10 border-r border-slate-200 bg-white">
          <div className="max-w-2xl ml-auto mr-auto lg:mr-10">
            <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-sm text-label-sm mb-6">
              Biology: Cell Structure
            </span>
            <h2 className="font-question-text text-question-text text-on-surface mb-8">
              Which of the following cell organelles is known as the &quot;powerhouse of the
              cell&quot;?
            </h2>
            <div className="rounded-xl overflow-hidden border border-slate-100 mb-8 bg-surface-container">
              <img
                alt="Scientific microscopic visualization of cellular organelles"
                className="w-full h-64 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNMi_W-idtFfUDsWjrEBPvF4IyueJ_wYe5lEc8xOJdfokzNY1lybVYYdjZDQJC6E8L-ae_crHf7ux5OqYh4JKi25NEVc_bdnY5WvLZKLNkO4-IYCYLlVXu1FHP-YvKjx7ZO6xWq53DUQhGcCq_8ocMhHkjwZnvlPTmX6rCyc6eep0jYDtsxHtJwkUWbz7iewDN7Ud72OX0lZ3w5fZaalfBqRqKihjvYF3DPe8kFC8HvZfyGWf3ANlR6bzrVSVM7RplJ2wN9pJ2kTQ"
              />
            </div>
            <div className="bg-error-container p-4 rounded-lg flex items-start gap-3">
              <span className="material-symbols-outlined text-error">warning</span>
              <p className="font-label-sm text-label-sm text-on-error-container">
                Warning: Leaving full-screen mode or switching tabs will automatically submit your
                exam and invalidate the attempt.
              </p>
            </div>
          </div>
        </section>

        <section className="w-[450px] overflow-y-auto p-10 bg-surface">
          <div className="max-w-md mx-auto">
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest mb-6">
              Select one option
            </p>
            <div className="space-y-4">
              {OPTIONS.map((option) => {
                const isSelected = selected === option;
                return (
                  <label
                    key={option}
                    className={
                      isSelected
                        ? "group flex items-center p-6 bg-primary-fixed border-2 border-primary rounded-xl cursor-pointer transition-all active:scale-[0.98]"
                        : "group flex items-center p-6 bg-white border border-outline-variant rounded-xl cursor-pointer transition-all active:scale-[0.98] hover:border-primary"
                    }
                  >
                    <input
                      className="hidden"
                      name="exam-option"
                      type="radio"
                      checked={isSelected}
                      onChange={() => setSelected(option)}
                    />
                    <div
                      className={
                        isSelected
                          ? "w-6 h-6 border-2 border-primary bg-primary rounded-full flex items-center justify-center"
                          : "w-6 h-6 border-2 border-outline-variant rounded-full flex items-center justify-center transition-colors"
                      }
                    >
                      <div className={isSelected ? "w-2 h-2 bg-white rounded-full" : ""} />
                    </div>
                    <span
                      className={
                        isSelected
                          ? "ml-4 font-body-lg text-body-lg text-on-primary-fixed font-bold"
                          : "ml-4 font-body-lg text-body-lg text-on-surface"
                      }
                    >
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col gap-3">
              <button className="w-full h-12 flex items-center justify-center gap-2 border border-outline text-outline font-label-sm text-label-sm rounded-lg hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined">flag</span>
                Mark for Review
              </button>
              <button
                type="button"
                onClick={() => setSelected("")}
                className="w-full h-12 flex items-center justify-center gap-2 text-error font-label-sm text-label-sm rounded-lg hover:bg-error-container transition-colors"
              >
                <span className="material-symbols-outlined">delete</span>
                Clear Selection
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-white border-t border-slate-200 h-20">
        <button className="flex items-center gap-2 px-6 h-12 rounded-lg text-slate-500 font-label-sm text-label-sm border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
          <span className="material-symbols-outlined">arrow_back</span>
          Previous
        </button>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 mr-4">
            {["bg-secondary", "bg-secondary", "bg-primary", "bg-slate-200", "bg-slate-200"].map(
              (color, index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${color}`} />
              ),
            )}
          </div>
          <button className="flex items-center gap-2 px-8 h-12 rounded-lg bg-primary text-white font-label-sm text-label-sm transition-all active:scale-95 shadow-lg shadow-primary/20">
            Next Question
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="flex items-center gap-2 px-8 h-12 rounded-lg bg-secondary text-white font-label-sm text-label-sm transition-all active:scale-95">
            <span className="material-symbols-outlined">check_circle</span>
            Final Submit
          </button>
        </div>
      </footer>

      {locked && (
        <div className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center backdrop-blur-md">
          <div className="max-w-md bg-white p-10 rounded-2xl text-center shadow-2xl">
            <div className="w-20 h-20 bg-error-container text-error rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl">lock</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              System Locked Mode
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Your examination environment is strictly monitored. Any attempt to minimize this
              window, capture screenshots, or switch tabs will result in an immediate
              disqualification.
            </p>
            <button
              type="button"
              onClick={() => setLocked(false)}
              className="w-full py-4 bg-primary text-white font-label-sm text-label-sm rounded-xl"
            >
              I Understand, Continue Exam
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
