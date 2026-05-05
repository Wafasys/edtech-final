"use client";

import { useState } from "react";

const OPTIONS = [
  { key: "A", value: "Ribosome" },
  { key: "B", value: "Golgi Body" },
  { key: "C", value: "Mitochondria" },
  { key: "D", value: "Lysosome" },
];

export default function MobileSecureExamViewPage() {
  const [selected, setSelected] = useState("C");

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col select-none">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 h-16 bg-white border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-blue-900">timer</span>
          <div className="flex flex-col">
            <span className="font-inter font-bold tracking-tight text-lg text-blue-900">
              45:12
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Question 12 of 50
            </span>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-xs font-black text-blue-900 leading-none">Medical Admission</h1>
          <p className="text-[10px] text-slate-500 font-medium">Mock Test 2027</p>
        </div>
      </header>

      <main className="flex-1 mt-16 mb-20 px-container-margin pt-base flex flex-col max-w-2xl mx-auto w-full">
        <div className="mt-4 mb-6 p-4 bg-tertiary-fixed border border-on-tertiary-fixed-variant rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined text-on-tertiary-fixed-variant">
            security
          </span>
          <p className="font-label-sm text-on-tertiary-fixed-variant">
            SECURITY ALERT: Re-entry is blocked if you leave this screen.
          </p>
        </div>

        <section className="flex-1 flex flex-col justify-center py-6">
          <div className="mb-8">
            <span className="font-label-sm text-primary mb-2 block uppercase tracking-tighter">
              Biology | Cell Structure
            </span>
            <h2 className="font-question-text text-question-text text-on-surface">
              Which of the following cell organelles is known as the &quot;powerhouse of the
              cell&quot;?
            </h2>
            <div className="mt-4 flex items-center gap-2 text-error font-label-sm">
              <span className="material-symbols-outlined text-sm">error</span>
              <span>-0.25 negative marking for wrong answers</span>
            </div>
          </div>

          <div className="space-y-4">
            {OPTIONS.map((option) => {
              const isSelected = selected === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setSelected(option.key)}
                  className={
                    isSelected
                      ? "w-full flex items-center p-card-padding border-2 border-primary-container rounded-xl bg-primary-fixed-dim/20 transition-all active:scale-[0.98] text-left"
                      : "w-full flex items-center p-card-padding border border-outline-variant rounded-xl bg-white transition-all active:scale-[0.98] text-left hover:border-primary-container"
                  }
                >
                  <div
                    className={
                      isSelected
                        ? "h-10 w-10 rounded-full bg-primary-container text-white flex items-center justify-center mr-4 shrink-0 font-bold"
                        : "h-10 w-10 rounded-full border-2 border-outline-variant flex items-center justify-center mr-4 shrink-0 font-bold text-outline"
                    }
                  >
                    {option.key}
                  </div>
                  <span
                    className={
                      isSelected
                        ? "font-body-lg text-primary font-semibold"
                        : "font-body-lg text-on-surface"
                    }
                  >
                    {option.value}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 mt-8 pb-8">
          <div className="bg-surface-container p-4 rounded-xl flex items-center gap-3">
            <div className="bg-primary text-on-primary h-10 w-10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">task_alt</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-outline uppercase">Answered</p>
              <p className="text-body-md font-bold text-primary">12/50</p>
            </div>
          </div>
          <div className="bg-surface-container p-4 rounded-xl flex items-center gap-3">
            <div className="bg-on-tertiary-container text-white h-10 w-10 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">flag</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-outline uppercase">Marked</p>
              <p className="text-body-md font-bold text-primary">04</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-5 py-3 bg-white shadow-lg border-t border-slate-200">
        <div className="flex gap-2">
          <button className="h-tap-target-min px-4 flex items-center justify-center text-slate-500 font-bold hover:bg-slate-50 transition-all active:scale-95">
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            <span className="font-label-sm">Previous</span>
          </button>
          <button className="h-tap-target-min px-4 flex items-center justify-center text-blue-900 font-bold hover:bg-slate-50 transition-all active:scale-95">
            <span className="font-label-sm">Next</span>
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </button>
        </div>
        <button className="h-tap-target-min px-6 bg-primary text-white font-bold rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all">
          <span className="material-symbols-outlined mr-2">check_circle</span>
          <span className="font-label-sm">Submit Exam</span>
        </button>
      </footer>
    </div>
  );
}
