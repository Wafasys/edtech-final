"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    group: "Chemistry: Organic Mechanisms",
    student: "Nusaiba Islam",
    ago: "2h ago",
    preview: "Can you explain the stability of carbocations again?",
    full: "Can you explain the stability of carbocations again? I keep mixing up the order of stability between primary, secondary and tertiary.",
    videoTitle: "Chemistry L-12: Carbocation Rearrangements",
    videoMoment: "09:45",
  },
  {
    id: "q4",
    group: "Biology: Genetics",
    student: "Mehedi Hasan",
    ago: "5h ago",
    preview: "Apu, the dihybrid cross ratio confuses me when one allele is incompletely dominant.",
    full: "Apu, the dihybrid cross ratio confuses me when one allele is incompletely dominant. Could you walk through the 9:3:3:1 modification with a quick example?",
    videoTitle: "Biology L-04: Mendelian Genetics",
    videoMoment: "21:08",
  },
];

const TOOLBAR_ICONS = [
  { icon: "format_bold", label: "Bold" },
  { icon: "format_italic", label: "Italic" },
  { icon: "attachment", label: "Attach" },
  { icon: "functions", label: "Equation" },
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
    <div className="min-h-screen bg-[#f8fbfa] text-[#101828] pb-20 md:pb-0">
      <header className="sticky top-0 z-50 border-b border-[rgba(216,216,216,0.5)] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/dashboard"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#d0d5dd] text-[#1a906b] transition hover:bg-[#f0faf7]"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#20b486]">
                Instructor Studio
              </p>
              <h1 className="text-xl font-black tracking-tight text-[#101828]">
                Pending Q&amp;A
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="hidden gap-2 rounded-full bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9] sm:inline-flex">
              <span className="material-symbols-outlined text-[14px]">forum</span>
              <span className="text-[11px] font-black uppercase tracking-[0.16em]">
                {QUESTIONS.length} pending
              </span>
            </Badge>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#20b486] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(32,180,134,0.24)] transition hover:bg-[#1a906b]"
            >
              <span className="material-symbols-outlined text-[20px]">push_pin</span>
              View pinned replies
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <section className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <Card className="overflow-hidden border-[#101828] bg-[#101828] text-white shadow-[0_22px_70px_rgba(16,24,40,0.22)]">
            <CardContent className="p-6 sm:p-8">
              <Badge className="mb-6 border-white/10 bg-white/10 px-3 py-1.5 text-[#99f3d6] hover:bg-white/10">
                <span className="material-symbols-outlined mr-1 text-[16px]">verified</span>
                Reply queue under control
              </Badge>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Clear the response backlog before students lose the plot.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
                Pinned answers surface as highlights inside the lecture player. Reply with markdown
                or attach a quick screenshot to keep concepts crisp.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#20b486] px-6 text-sm font-black text-white transition hover:bg-[#1a906b]"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  Reply to oldest
                </button>
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 text-sm font-black text-white transition hover:bg-white/14"
                >
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  Filter by lecture
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {[
              { label: "Open Q&A", value: String(QUESTIONS.length), delta: "32 urgent", icon: "forum" },
              { label: "Avg response time", value: "27m", delta: "-6m", icon: "timer" },
              { label: "Pinned answers", value: "94", delta: "+12 this week", icon: "push_pin" },
            ].map((item) => (
              <Card
                key={item.label}
                className="border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="truncate text-sm font-bold text-[#667085]">{item.label}</p>
                        <Badge
                          variant="outline"
                          className="shrink-0 rounded-full border-[#dce8e2] bg-[#f2fffb] text-[#1a906b]"
                        >
                          {item.delta}
                        </Badge>
                      </div>
                      <p className="mt-1 text-3xl font-black text-[#101828]">{item.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="space-y-3 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#20b486]">
                    Inbox
                  </p>
                  <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                    Pending questions
                  </CardTitle>
                </div>
                <Badge className="rounded-full bg-[#edfff9] px-3 py-1 text-[#1a906b] hover:bg-[#edfff9]">
                  {filtered.length} new
                </Badge>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#667085]">
                  search
                </span>
                <input
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Filter by lecture or student"
                  className="h-11 w-full rounded-full border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] pl-10 pr-4 text-sm font-semibold text-[#101828] outline-none transition focus:border-[#20b486] focus:bg-white focus:ring-2 focus:ring-[#20b486]/20"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(grouped).map(([group, qs]) => (
                <div key={group} className="space-y-2">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#667085]">
                    {group}
                  </p>
                  {qs.map((q) => {
                    const isActive = q.id === activeId;
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setActiveId(q.id)}
                        className={`w-full rounded-xl border p-4 text-left transition ${
                          isActive
                            ? "border-[#20b486] bg-[#f2fffb] shadow-[0_8px_18px_rgba(32,180,134,0.12)]"
                            : "border-[rgba(216,216,216,0.55)] bg-white hover:border-[#20b486] hover:bg-[#f9fafb]"
                        }`}
                      >
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <span
                            className={`text-sm font-black ${
                              isActive ? "text-[#1a906b]" : "text-[#101828]"
                            }`}
                          >
                            {q.student}
                          </span>
                          <span className="text-[11px] font-bold text-[#667085]">{q.ago}</span>
                        </div>
                        <p className="line-clamp-2 text-sm text-[#475467]">{q.preview}</p>
                      </button>
                    );
                  })}
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-xl border border-dashed border-[#d0d5dd] bg-[#f9fafb] p-6 text-center text-sm font-semibold text-[#667085]">
                  No questions match this filter.
                </p>
              )}
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 pb-3">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#20b486]">
                    Question
                  </p>
                  <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                    From {active.student}
                  </CardTitle>
                </div>
                <Badge className="rounded-full bg-[#edfff9] px-3 py-1 text-[#1a906b] hover:bg-[#edfff9]">
                  {active.ago}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-3 rounded-xl border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-3">
                  <span
                    className="material-symbols-outlined grid h-11 w-11 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#667085]">
                      Related video
                    </p>
                    <p className="truncate text-sm font-black text-[#101828]">
                      {active.videoTitle}
                    </p>
                  </div>
                  <button className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-[#d0d5dd] bg-white px-4 text-xs font-black text-[#101828] transition hover:border-[#20b486] hover:text-[#20b486]">
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    {active.videoMoment}
                  </button>
                </div>

                <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-5">
                  <p className="text-sm leading-7 text-[#101828]">{active.full}</p>
                  {active.hasAttachment && (
                    <div className="mt-4 overflow-hidden rounded-lg border border-[rgba(216,216,216,0.55)] bg-white">
                      <img
                        alt="Attachment"
                        className="h-44 w-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAsrVh1jTDDMQaBwtDJM13DD0B-gOIOh37cSYCuP9rB6FIfeYgSJy_VnD03FU5LrTUU-M0qJod15XY-hjaHyA3gjz6zqAF6KsqKbCwCggsWrvwh6p_bhUSStakmgbbscldtnNDhU9S1LLAgQpLKUF_LisqX4IPbXV8cJfrgqOjj0PwxO2mA_StD5XITAb5kvCmZ_oAA6hizj39FeKgDW7Wxup56g_Lp5AAedJ9yZbfDQxOeakXCfR_2HwNmOSgr1_f8HgLjLmZjYk"
                      />
                      <p className="border-t border-[rgba(216,216,216,0.55)] bg-[#f9fafb] px-4 py-2 text-xs font-bold text-[#667085]">
                        textbook_diagram_ch3.jpg
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <CardHeader className="pb-3">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#20b486]">
                  Compose reply
                </p>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Instructor response
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  rows={6}
                  placeholder="Explain the concept clearly. Markdown supported."
                  className="w-full rounded-xl border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-4 text-sm leading-6 text-[#101828] outline-none transition focus:border-[#20b486] focus:bg-white focus:ring-2 focus:ring-[#20b486]/20"
                />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-1">
                    {TOOLBAR_ICONS.map((tool) => (
                      <button
                        key={tool.icon}
                        title={tool.label}
                        className="grid h-9 w-9 place-items-center rounded-full border border-[#d0d5dd] bg-white text-[#667085] transition hover:border-[#20b486] hover:text-[#20b486]"
                      >
                        <span className="material-symbols-outlined text-[18px]">{tool.icon}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setReply("")}
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d0d5dd] bg-white px-6 text-sm font-black text-[#101828] transition hover:bg-[#f0faf7]"
                    >
                      <span className="material-symbols-outlined text-[20px]">drafts</span>
                      Save draft
                    </button>
                    <button
                      type="button"
                      onClick={() => setReply("")}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#20b486] px-6 text-sm font-black text-white shadow-[0_10px_24px_rgba(32,180,134,0.24)] transition hover:bg-[#1a906b]"
                    >
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Send & pin
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed border-[#dce8e2] bg-[#f2fffb] shadow-none">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#1a906b]">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      push_pin
                    </span>
                    <p className="text-xs font-black uppercase tracking-[0.16em]">
                      Student-side preview
                    </p>
                  </div>
                  <Badge className="rounded-full bg-white px-3 py-1 text-[#1a906b] hover:bg-white">
                    Pinned highlight
                  </Badge>
                </div>
                <div className="rounded-lg border-l-4 border-[#20b486] bg-white p-4 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
                  <p className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#1a906b]">
                    Instructor response
                  </p>
                  <p className="text-sm italic leading-6 text-[#101828]">
                    {reply.trim()
                      ? `"${reply.trim()}"`
                      : '"Excellent question! The textbook is referring to the polarity of the induced EMF, whereas I focus on the physical force interaction. Nature always tries to maintain the status quo..."'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
