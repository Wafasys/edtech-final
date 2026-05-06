"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Bold,
  Check,
  Clock3,
  ExternalLink,
  Filter,
  Inbox,
  Italic,
  MessageSquareText,
  Paperclip,
  Pin,
  PlayCircle,
  Search,
  Send,
  Sigma,
  Sparkles,
  TimerReset,
  UserRound,
} from "lucide-react";

type QuestionStatus = "urgent" | "new" | "draft";

type Question = {
  id: string;
  group: string;
  student: string;
  ago: string;
  preview: string;
  full: string;
  videoTitle: string;
  videoMoment: string;
  status: QuestionStatus;
  confidence: string;
  attempts: number;
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
    status: "urgent",
    confidence: "Low confidence",
    attempts: 3,
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
    status: "new",
    confidence: "Medium confidence",
    attempts: 1,
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
    status: "draft",
    confidence: "Medium confidence",
    attempts: 2,
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
    status: "urgent",
    confidence: "Low confidence",
    attempts: 4,
  },
];

const FILTERS: Array<{ value: "all" | QuestionStatus; label: string }> = [
  { value: "all", label: "All" },
  { value: "urgent", label: "Urgent" },
  { value: "new", label: "New" },
  { value: "draft", label: "Drafts" },
];

const TOOLS = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Paperclip, label: "Attach" },
  { icon: Sigma, label: "Equation" },
];

function statusClass(status: QuestionStatus) {
  if (status === "urgent") {
    return "border-[#ffb3b0] bg-[#fff5f4] text-[#93000a]";
  }

  if (status === "draft") {
    return "border-[#d9dadb] bg-[#f3f4f5] text-[#444652]";
  }

  return "border-[#b4c5ff] bg-[#edf1ff] text-[#001d59]";
}

export default function InstructorQAPage() {
  const [activeId, setActiveId] = useState(QUESTIONS[0].id);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | QuestionStatus>("all");
  const [reply, setReply] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    return QUESTIONS.filter((question) => {
      const matchesFilter = filter === "all" || question.status === filter;
      const matchesTerm =
        term === "" ||
        question.student.toLowerCase().includes(term) ||
        question.group.toLowerCase().includes(term) ||
        question.videoTitle.toLowerCase().includes(term) ||
        question.preview.toLowerCase().includes(term);

      return matchesFilter && matchesTerm;
    });
  }, [filter, query]);

  const grouped = useMemo(
    () =>
      filtered.reduce<Record<string, Question[]>>((groups, question) => {
        (groups[question.group] ??= []).push(question);
        return groups;
      }, {}),
    [filtered],
  );

  const active = QUESTIONS.find((question) => question.id === activeId) ?? QUESTIONS[0];
  const urgentCount = QUESTIONS.filter((question) => question.status === "urgent").length;

  return (
    <div className="min-h-screen bg-[#f4f6f4] pb-8 text-[#191c1d]">
      <header className="sticky top-0 z-30 border-b border-[#d9dadb] bg-[#fbfdfb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <Link
                href="/admin/dashboard"
                aria-label="Back to admin dashboard"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#c4c6d4] bg-white text-[#2e3132] shadow-[0_1px_0_rgba(25,28,29,0.06)] transition hover:border-[#001d59] hover:text-[#001d59]"
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#006e26]">
                  Instructor operations
                </p>
                <h1 className="truncate text-2xl font-extrabold tracking-tight text-[#111414]">
                  Q&amp;A Reply Desk
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#c4c6d4] bg-white px-3 text-sm font-bold text-[#2e3132] shadow-[0_1px_0_rgba(25,28,29,0.06)] transition hover:border-[#006e26] hover:text-[#006e26]"
              >
                <Filter className="h-4 w-4" />
                Lecture filter
              </button>
              <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#001d59] px-4 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(0,29,89,0.2)] transition hover:bg-[#003087]"
              >
                <Pin className="h-4 w-4" />
                Pinned library
              </button>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {[
              { label: "Open threads", value: QUESTIONS.length, icon: Inbox, note: "3 subjects" },
              { label: "Urgent", value: urgentCount, icon: TimerReset, note: "needs first pass" },
              { label: "Avg reply", value: "27m", icon: Sparkles, note: "6m faster today" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#d9dadb] bg-white px-4 py-3 shadow-[0_1px_0_rgba(25,28,29,0.05)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold uppercase tracking-[0.12em] text-[#747683]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-2xl font-extrabold leading-none text-[#111414]">
                      {item.value}
                    </p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-[#edf1ff] text-[#001d59]">
                    <item.icon className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-2 truncate text-xs font-semibold text-[#444652]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1440px] gap-4 px-4 py-4 lg:grid-cols-[370px_minmax(0,1fr)] lg:px-6 xl:grid-cols-[380px_minmax(0,1fr)_315px]">
        <aside className="rounded-lg border border-[#d9dadb] bg-white shadow-[0_18px_40px_rgba(25,28,29,0.06)]">
          <div className="border-b border-[#e1e3e4] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#006e26]">
                  Inbox
                </p>
                <h2 className="mt-1 text-lg font-extrabold tracking-tight">Pending questions</h2>
              </div>
              <span className="rounded-md border border-[#c4c6d4] bg-[#f8f9fa] px-2.5 py-1 text-xs font-extrabold text-[#444652]">
                {filtered.length} shown
              </span>
            </div>

            <div className="mt-4 grid grid-cols-4 rounded-lg border border-[#c4c6d4] bg-[#f3f4f5] p-1">
              {FILTERS.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  className={
                    filter === item.value
                      ? "h-8 rounded-md bg-white text-xs font-extrabold text-[#001d59] shadow-[0_1px_0_rgba(25,28,29,0.08)]"
                      : "h-8 rounded-md text-xs font-bold text-[#747683] transition hover:text-[#191c1d]"
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="relative mt-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#747683]" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search student, lecture, topic"
                className="h-11 w-full rounded-lg border border-[#c4c6d4] bg-[#fbfdfb] pl-9 pr-3 text-sm font-semibold text-[#191c1d] outline-none transition placeholder:text-[#747683] focus:border-[#001d59] focus:bg-white focus:ring-2 focus:ring-[#b4c5ff]"
              />
            </div>
          </div>

          <div className="max-h-[calc(100dvh-292px)] min-h-[360px] space-y-5 overflow-y-auto p-3">
            {Object.entries(grouped).map(([group, questions]) => (
              <section key={group}>
                <div className="mb-2 flex items-center gap-2 px-1">
                  <span className="h-px flex-1 bg-[#e1e3e4]" />
                  <p className="max-w-[72%] truncate text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#747683]">
                    {group}
                  </p>
                </div>

                <div className="space-y-2">
                  {questions.map((question) => {
                    const selected = question.id === active.id;

                    return (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => setActiveId(question.id)}
                        className={
                          selected
                            ? "w-full rounded-lg border border-[#001d59] bg-[#eef2ff] p-3 text-left shadow-[inset_4px_0_0_#001d59,0_12px_24px_rgba(0,29,89,0.10)]"
                            : "w-full rounded-lg border border-[#e1e3e4] bg-white p-3 text-left transition hover:border-[#747683] hover:bg-[#f8f9fa]"
                        }
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#f3f4f5] text-[#444652]">
                              <UserRound className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-extrabold text-[#191c1d]">
                                {question.student}
                              </p>
                              <p className="truncate text-xs font-semibold text-[#747683]">
                                {question.ago}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`shrink-0 rounded-md border px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] ${statusClass(
                              question.status,
                            )}`}
                          >
                            {question.status}
                          </span>
                        </div>

                        <p className="mt-3 line-clamp-2 text-sm font-medium leading-5 text-[#444652]">
                          {question.preview}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}

            {filtered.length === 0 && (
              <div className="rounded-lg border border-dashed border-[#c4c6d4] bg-[#f8f9fa] p-8 text-center">
                <Search className="mx-auto h-6 w-6 text-[#747683]" />
                <p className="mt-3 text-sm font-extrabold text-[#191c1d]">No matches</p>
                <p className="mt-1 text-sm font-medium text-[#747683]">
                  Try another student, lecture, or status.
                </p>
              </div>
            )}
          </div>
        </aside>

        <section className="min-w-0 space-y-4">
          <article className="rounded-lg border border-[#d9dadb] bg-white shadow-[0_18px_40px_rgba(25,28,29,0.06)]">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#e1e3e4] p-5">
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#006e26]">
                  Question
                </p>
                <h2 className="mt-1 truncate text-2xl font-extrabold tracking-tight text-[#111414]">
                  From {active.student}
                </h2>
              </div>
              <span className="inline-flex h-8 items-center gap-2 rounded-md border border-[#d9dadb] bg-[#f8f9fa] px-3 text-xs font-extrabold text-[#444652]">
                <Clock3 className="h-3.5 w-3.5" />
                {active.ago}
              </span>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center gap-3 rounded-lg border border-[#d9dadb] bg-[#f8f9fa] p-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#001d59] text-white shadow-[0_10px_20px_rgba(0,29,89,0.18)]">
                  <PlayCircle className="block h-6 w-6" strokeWidth={2.3} />
                </span>
                <div className="min-w-0 flex-1 self-center">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#747683]">
                    Related video
                  </p>
                  <p className="mt-0.5 truncate text-sm font-extrabold text-[#191c1d]">
                    {active.videoTitle}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg border border-[#c4c6d4] bg-white px-3 text-xs font-extrabold text-[#001d59] transition hover:bg-[#edf1ff]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {active.videoMoment}
                </button>
              </div>

              <div className="rounded-lg border border-[#d9dadb] bg-white p-5 shadow-[0_1px_0_rgba(25,28,29,0.05)]">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className={`rounded-md border px-2.5 py-1 text-xs font-extrabold uppercase tracking-[0.1em] ${statusClass(active.status)}`}>
                    {active.status}
                  </span>
                  <span className="rounded-md border border-[#d9dadb] bg-[#f8f9fa] px-2.5 py-1 text-xs font-bold text-[#444652]">
                    {active.confidence}
                  </span>
                  <span className="rounded-md border border-[#d9dadb] bg-[#f8f9fa] px-2.5 py-1 text-xs font-bold text-[#444652]">
                    {active.attempts} attempts
                  </span>
                </div>

                <p className="text-lg font-semibold leading-8 text-[#191c1d]">{active.full}</p>

                {active.hasAttachment && (
                  <div className="mt-5 overflow-hidden rounded-lg border border-[#c4c6d4] bg-[#fbfdfb]">
                    <div className="grid min-h-44 place-items-center bg-[linear-gradient(135deg,#fbfdfb_0%,#edf1ff_48%,#f4fff1_100%)] p-5">
                      <div className="relative h-32 w-full max-w-md rounded-lg border border-[#747683] bg-white shadow-[0_12px_28px_rgba(25,28,29,0.10)]">
                        <div className="absolute left-5 top-1/2 h-12 w-12 -translate-y-1/2 rounded-md border-2 border-[#93000a] bg-[#ffdad6]" />
                        <div className="absolute right-5 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full border-2 border-[#001d59] bg-[#dbe1ff]" />
                        <div className="absolute left-[35%] top-1/2 h-1 w-[30%] -translate-y-1/2 bg-[#006e26]" />
                        <div className="absolute left-[62%] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[8px] border-l-[14px] border-y-transparent border-l-[#006e26]" />
                        <p className="absolute bottom-3 left-4 text-xs font-bold text-[#747683]">
                          induced field sketch
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 border-t border-[#d9dadb] px-4 py-2 text-xs font-bold text-[#444652]">
                      <Paperclip className="h-3.5 w-3.5" />
                      textbook_diagram_ch3.jpg
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>

          <section className="rounded-lg border border-[#001d59]/20 bg-white shadow-[0_18px_40px_rgba(25,28,29,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e1e3e4] p-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#006e26]">
                  Compose
                </p>
                <h2 className="mt-1 text-lg font-extrabold tracking-tight">Instructor response</h2>
              </div>
              <span className="rounded-md border border-[#d9dadb] bg-[#f8f9fa] px-2.5 py-1 text-xs font-bold text-[#444652]">
                Markdown enabled
              </span>
            </div>

            <div className="p-5">
              <textarea
                value={reply}
                onChange={(event) => setReply(event.target.value)}
                rows={7}
                placeholder="Start with the core correction, then give the exam shortcut."
                className="w-full resize-y rounded-lg border border-[#c4c6d4] bg-[#fbfdfb] p-4 text-base font-medium leading-7 text-[#191c1d] outline-none transition placeholder:text-[#747683] focus:border-[#001d59] focus:bg-white focus:ring-2 focus:ring-[#b4c5ff]"
              />

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1">
                  {TOOLS.map((tool) => (
                    <button
                      key={tool.label}
                      type="button"
                      title={tool.label}
                      aria-label={tool.label}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-[#c4c6d4] bg-white text-[#444652] transition hover:border-[#001d59] hover:bg-[#edf1ff] hover:text-[#001d59]"
                    >
                      <tool.icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setReply("")}
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#c4c6d4] bg-white px-4 text-sm font-extrabold text-[#2e3132] transition hover:border-[#747683] hover:bg-[#f8f9fa]"
                  >
                    Save draft
                  </button>
                  <button
                    type="button"
                    onClick={() => setReply("")}
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#006e26] px-4 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(0,110,38,0.18)] transition hover:bg-[#00531b]"
                  >
                    <Send className="h-4 w-4" />
                    Send and pin
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>

        <aside className="space-y-4 xl:sticky xl:top-[178px] xl:self-start">
          <section className="rounded-lg border border-[#d9dadb] bg-[#111414] p-4 text-white shadow-[0_18px_40px_rgba(25,28,29,0.16)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#99f89e]">
                  Student preview
                </p>
                <h2 className="mt-1 text-lg font-extrabold">Pinned highlight</h2>
              </div>
              <Pin className="h-5 w-5 text-[#99f89e]" />
            </div>

            <div className="mt-4 rounded-lg border border-white/12 bg-white p-4 text-[#191c1d]">
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[#99f89e] text-[#002106]">
                  <MessageSquareText className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#006e26]">
                    Instructor response
                  </p>
                  <p className="text-xs font-semibold text-[#747683]">Pinned at {active.videoMoment}</p>
                </div>
              </div>
              <p className="text-sm font-semibold leading-6 text-[#191c1d]">
                {reply.trim() ||
                  "Excellent question. Lenz's law opposes the change in flux. First decide whether flux is increasing or decreasing, then choose the induced field direction that fights that change."}
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-[#d9dadb] bg-white p-4 shadow-[0_18px_40px_rgba(25,28,29,0.06)]">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#006e26]">
              Reply checklist
            </h2>
            <div className="mt-4 space-y-3">
              {[
                "Answer the misconception directly",
                "Reference the lecture timestamp",
                "Add exam-level shortcut",
                "Pin only if reusable",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className={
                      index < 2
                        ? "mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-[#006e26] text-white"
                        : "mt-0.5 grid h-5 w-5 place-items-center rounded-md border border-[#c4c6d4] text-[#747683]"
                    }
                  >
                    {index < 2 ? <Check className="h-3.5 w-3.5" /> : null}
                  </span>
                  <p className="text-sm font-semibold leading-5 text-[#444652]">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
