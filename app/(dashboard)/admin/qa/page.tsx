"use client";

import { useState } from "react";

type Question = {
  id: string;
  group: string;
  student: string;
  ago: string;
  preview: string;
  full: string;
  videoTitle: string;
  videoMoment: string;
  hasAttachment?: boolean;
};

const QUESTIONS: Question[] = [
  {
    id: "q1",
    group: "Physics: Electromagnetism",
    student: "Sabbir Rahman",
    ago: "12m ago",
    preview:
      "Sir, I don't understand how the right-hand rule applies to this specific Lenz's Law problem...",
    full: "Sir, I don't understand how the right-hand rule applies to this specific Lenz's Law problem. If the magnet is moving away, should the induced field oppose the change or the motion? The textbook says one thing, but your explanation in the video at 14:22 feels different.",
    videoTitle: "Physics L-08: Electromagnetic Induction (Part 2)",
    videoMoment: "14:22",
    hasAttachment: true,
  },
  {
    id: "q2",
    group: "Physics: Electromagnetism",
    student: "Tanvir Ahmed",
    ago: "45m ago",
    preview: "Is the displacement current formula required for the engineering exam?",
    full: "Is the displacement current formula required for the engineering exam? I want to make sure I'm not skipping anything important.",
    videoTitle: "Physics L-08: Electromagnetic Induction (Part 2)",
    videoMoment: "08:10",
  },
  {
    id: "q3",
    group: "Chemistry: Organic Mech",
    student: "Nusaiba Islam",
    ago: "2h ago",
    preview: "Can you explain the stability of carbocations again?",
    full: "Can you explain the stability of carbocations again? I keep mixing up the order of stability between primary, secondary and tertiary.",
    videoTitle: "Chemistry L-12: Carbocation Rearrangements",
    videoMoment: "09:45",
  },
];

export default function InstructorQAPage() {
  const [activeId, setActiveId] = useState<string>(QUESTIONS[0].id);
  const [filter, setFilter] = useState("");
  const [reply, setReply] = useState("");

  const filtered = QUESTIONS.filter(
    (q) =>
      filter === "" ||
      q.student.toLowerCase().includes(filter.toLowerCase()) ||
      q.videoTitle.toLowerCase().includes(filter.toLowerCase()) ||
      q.preview.toLowerCase().includes(filter.toLowerCase()),
  );
  const grouped = filtered.reduce<Record<string, Question[]>>((acc, q) => {
    (acc[q.group] ??= []).push(q);
    return acc;
  }, {});
  const active = QUESTIONS.find((q) => q.id === activeId) ?? QUESTIONS[0];

  return (
    <div className="bg-background text-on-background min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 flex justify-between items-center px-5 h-16">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-slate-600 active:opacity-80 transition-opacity md:hidden">
            menu
          </button>
          <h1 className="text-xl font-black text-[#003087] tracking-tight">Instructor Q&amp;A</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            <span className="text-sm font-semibold text-slate-600">Instructor Mode</span>
            <div className="h-5 w-[1px] bg-slate-200" />
          </div>
          <img
            alt="Instructor"
            className="h-10 w-10 rounded-full object-cover border-2 border-primary"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkw_uv-AYQrkOjoyTBYE-QIKV-YgmA24Mh6Q_DrxmWCdDoAaqH5YxKlKjDBBzN9U7rlqn1L8okvK2h8lX5H0KFMOjtGag4A4pRFPUn9HnYa_58YnGeE7vLP2iK3jDbxXwW8ZDHJGI6pYuhNKrHcuZuXITEtzmUWeE1dZsfzdDOFkhvwoCqCLk5UHmYHWnBZTDJIC6WzdpVZDZQCtEnvl1LCJkDEuB-RXuHf6YeLEP6SRXHViiPnFoOXd9lv3OEIt_lO46VEQf177g"
          />
        </div>
      </header>

      <main className="pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-container-margin py-base md:py-gutter grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <aside className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="bg-white border border-outline-variant p-card-padding rounded-xl shadow-sm h-[calc(100vh-140px)] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline-md text-headline-md text-primary">Pending Q&amp;A</h2>
                <span className="bg-primary text-white text-[12px] font-bold px-2 py-1 rounded">
                  {filtered.length} New
                </span>
              </div>

              <div className="relative mb-6">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  search
                </span>
                <input
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Filter by video or student..."
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>

              <div className="flex-1 overflow-y-auto flex flex-col gap-4">
                {Object.entries(grouped).map(([group, qs]) => (
                  <div key={group} className="space-y-2">
                    <h3 className="text-label-sm font-label-sm text-slate-500 uppercase tracking-widest">
                      {group}
                    </h3>
                    {qs.map((q) => {
                      const isActive = q.id === activeId;
                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => setActiveId(q.id)}
                          className={
                            isActive
                              ? "w-full text-left p-4 bg-primary-container text-white rounded-lg cursor-pointer border-l-4 border-primary shadow-md"
                              : "w-full text-left p-4 bg-surface hover:bg-surface-container-high border border-slate-100 rounded-lg cursor-pointer transition-colors"
                          }
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span
                              className={
                                isActive
                                  ? "text-[12px] font-bold opacity-80"
                                  : "text-[12px] font-bold text-primary"
                              }
                            >
                              {q.student}
                            </span>
                            <span
                              className={
                                isActive
                                  ? "text-[10px] font-medium opacity-70"
                                  : "text-[10px] font-medium text-slate-400"
                              }
                            >
                              {q.ago}
                            </span>
                          </div>
                          <p
                            className={
                              isActive
                                ? "text-sm font-medium line-clamp-2"
                                : "text-sm text-slate-600 line-clamp-2"
                            }
                          >
                            {q.preview}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                ))}
                {filtered.length === 0 && (
                  <p className="text-sm text-slate-400">No questions match this filter.</p>
                )}
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 space-y-gutter">
            <div className="bg-white border border-outline-variant p-card-padding rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="h-12 w-12 bg-primary-fixed rounded-lg flex items-center justify-center text-primary">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                </div>
                <div>
                  <h4 className="text-label-sm font-label-sm text-slate-500">Related Video</h4>
                  <p className="font-bold text-primary">{active.videoTitle}</p>
                </div>
                <button className="ml-auto flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Watch Moment [{active.videoMoment}]
                </button>
              </div>

              <div className="flex gap-4">
                <img
                  alt="Student"
                  className="h-12 w-12 rounded-full object-cover shrink-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBkinSg5ViT_p0ke4N0ur8CFuCcoFxu2_Bk2FNve7ArYGnYbo5XJ73xAGZt6p7vB3ISu9mqZx3HH56T5laKYLrMDQCXcShZQD0jfUTMGqfE1B2N-ydUims4QNsTNMCeq6vjVtPWfBsOji2cxKDnTpCls_kxEcHcyf1Jltm4QthecqH53e-UTCKFcaQdpz2nUdw7DwbGXMGKisv26rEyo37FXbELcmn39aeWHX_rZ8T5pN-5Cl98XtoyQyE3GoN7KbI1FeZYRk-Fgk"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">{active.student}</h3>
                    <span className="text-sm text-slate-400 font-medium">{active.ago}</span>
                  </div>
                  <p className="text-question-text font-question-text text-on-background leading-relaxed">
                    {active.full}
                  </p>
                  {active.hasAttachment && (
                    <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 w-full max-w-md">
                      <img
                        alt="Attachment"
                        className="w-full h-48 object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAsrVh1jTDDMQaBwtDJM13DD0B-gOIOh37cSYCuP9rB6FIfeYgSJy_VnD03FU5LrTUU-M0qJod15XY-hjaHyA3gjz6zqAF6KsqKbCwCggsWrvwh6p_bhUSStakmgbbscldtnNDhU9S1LLAgQpLKUF_LisqX4IPbXV8cJfrgqOjj0PwxO2mA_StD5XITAb5kvCmZ_oAA6hizj39FeKgDW7Wxup56g_Lp5AAedJ9yZbfDQxOeakXCfR_2HwNmOSgr1_f8HgLjLmZjYk"
                      />
                      <div className="bg-slate-50 p-2 text-xs text-slate-500 text-center">
                        textbook_diagram_ch3.jpg
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white border border-primary/20 p-card-padding rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined">reply</span>
                <h3 className="font-bold">Compose Instructor Reply</h3>
              </div>
              <div className="space-y-4">
                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  rows={6}
                  placeholder="Explain the concept clearly here... Use markdown for formatting."
                  className="w-full p-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-body-md font-body-md"
                />
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex gap-2">
                    {[
                      "format_bold",
                      "format_italic",
                      "attachment",
                      "functions",
                    ].map((icon) => (
                      <button
                        key={icon}
                        className="p-2 text-slate-500 hover:bg-slate-100 rounded transition-colors"
                      >
                        <span className="material-symbols-outlined">{icon}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setReply("")}
                      className="px-6 py-2 border border-outline text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Save Draft
                    </button>
                    <button
                      type="button"
                      onClick={() => setReply("")}
                      className="px-8 py-2 bg-primary text-white font-bold rounded-lg active:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                    >
                      Send &amp; Pin Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary-container/10 border-2 border-dashed border-secondary/30 p-card-padding rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-black px-3 py-1 uppercase rounded-bl-lg tracking-tighter">
                Student View Preview
              </div>
              <h4 className="text-label-sm font-label-sm text-secondary mb-4 flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  push_pin
                </span>
                How this will appear as a Pinned Highlight for Students
              </h4>
              <div className="bg-white border-l-4 border-secondary p-4 rounded shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-secondary">INSTRUCTOR RESPONSE</span>
                  <div className="h-1 flex-1 bg-secondary/10 rounded-full" />
                </div>
                <p className="text-sm text-slate-700 font-medium italic">
                  {reply.trim()
                    ? `"${reply.trim()}"`
                    : '"Excellent question, Sabbir! The textbook is referring to the polarity of the induced EMF, whereas I\'m focusing on the physical force interaction. Remember: nature always tries to maintain the status quo..."'}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
