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

type Status = "in_progress" | "submitted" | "flagged";

type Student = {
  roll: number;
  name: string;
  initials: string;
  initialsBg: string;
  initialsText: string;
  progress: number;
  total: number;
  status: Status;
};

const STUDENTS: Student[] = [
  {
    roll: 102,
    name: "Rahim Khan",
    initials: "RK",
    initialsBg: "bg-[#edfff9]",
    initialsText: "text-[#1a906b]",
    progress: 45,
    total: 50,
    status: "in_progress",
  },
  {
    roll: 105,
    name: "Fatima Ahmed",
    initials: "FA",
    initialsBg: "bg-[#fff5e6]",
    initialsText: "text-[#b25b00]",
    progress: 50,
    total: 50,
    status: "submitted",
  },
  {
    roll: 112,
    name: "Arif Islam",
    initials: "AI",
    initialsBg: "bg-[#fff1ee]",
    initialsText: "text-[#ba1a1a]",
    progress: 32,
    total: 50,
    status: "flagged",
  },
  {
    roll: 118,
    name: "Nusaiba Hossain",
    initials: "NH",
    initialsBg: "bg-[#edfff9]",
    initialsText: "text-[#1a906b]",
    progress: 41,
    total: 50,
    status: "in_progress",
  },
];

const STAT_CARDS = [
  { label: "Registered", value: "87", delta: "+4.2%", icon: "groups", tone: "mint" },
  { label: "Currently active", value: "65", delta: "Live", icon: "play_arrow", tone: "mint" },
  { label: "Submitted", value: "22", delta: "On time", icon: "check_circle", tone: "muted" },
];

const OPTIONS = [
  { letter: "A", text: "Ribosome", selected: false },
  { letter: "B", text: "Golgi Body", selected: false },
  { letter: "C", text: "Mitochondria", selected: true },
  { letter: "D", text: "Lysosome", selected: false },
];

export default function ExamMonitorPage() {
  const [filter, setFilter] = useState("");
  const [activeRoll, setActiveRoll] = useState<number>(STUDENTS[0].roll);

  const filtered = STUDENTS.filter(
    (s) =>
      filter === "" ||
      String(s.roll).includes(filter) ||
      s.name.toLowerCase().includes(filter.toLowerCase()),
  );
  const active = STUDENTS.find((s) => s.roll === activeRoll) ?? STUDENTS[0];

  const submittedCount = STUDENTS.filter((s) => s.status === "submitted").length;
  const inProgressCount = STUDENTS.filter((s) => s.status === "in_progress").length;
  const flaggedCount = STUDENTS.filter((s) => s.status === "flagged").length;
  const completion = ((submittedCount + inProgressCount * 0.6) / STUDENTS.length) * 100;

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
                Live Operations
              </p>
              <h1 className="text-xl font-black tracking-tight text-[#101828]">
                Live Exam Monitoring
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="hidden gap-2 rounded-full border border-[#ffd5cf] bg-[#fff1ee] px-3 py-1.5 text-[#ba1a1a] hover:bg-[#fff1ee] sm:inline-flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ba1a1a]" />
              <span className="text-[11px] font-black uppercase tracking-[0.16em]">Live now</span>
            </Badge>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#ba1a1a] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(186,26,26,0.24)] transition hover:bg-[#8c1414]"
            >
              <span className="material-symbols-outlined text-[20px]">cancel</span>
              End exam for all
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <section className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <Card className="overflow-hidden border-[#101828] bg-[#101828] text-white shadow-[0_22px_70px_rgba(16,24,40,0.22)]">
            <CardContent className="p-6 sm:p-8">
              <Badge className="mb-6 border-white/10 bg-white/10 px-3 py-1.5 text-[#99f3d6] hover:bg-white/10">
                <span className="mr-1 h-1.5 w-1.5 animate-pulse rounded-full bg-[#99f3d6]" />
                Session in progress · Medical Mock 04
              </Badge>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Watch every candidate, alert, and answer in real time.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
                Surveillance is active for 87 candidates. Tab-switch detection, screen lock and
                encrypted view sessions are running.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#20b486] px-6 text-sm font-black text-white transition hover:bg-[#1a906b]"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                  Audit a candidate
                </button>
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 text-sm font-black text-white transition hover:bg-white/14"
                >
                  <span className="material-symbols-outlined text-[20px]">campaign</span>
                  Broadcast notice
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {STAT_CARDS.map((item) => (
              <Card
                key={item.label}
                className="border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg ${
                        item.tone === "mint"
                          ? "bg-[#edfff9] text-[#20b486]"
                          : "bg-[#f2f4f7] text-[#475467]"
                      }`}
                    >
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

        <Card className="mt-6 border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
          <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 pb-3">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#20b486]">
                Cohort progress
              </p>
              <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                Overall completion
              </CardTitle>
            </div>
            <Badge className="rounded-full bg-[#edfff9] px-3 py-1 text-[#1a906b] hover:bg-[#edfff9]">
              {completion.toFixed(1)}% progress
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-[#f2f4f7]">
              <div
                className="h-full bg-[#1a906b]"
                style={{ width: `${(submittedCount / STUDENTS.length) * 100}%` }}
              />
              <div
                className="h-full bg-[#20b486]"
                style={{ width: `${(inProgressCount / STUDENTS.length) * 100}%` }}
              />
              <div
                className="h-full bg-[#ba1a1a]"
                style={{ width: `${(flaggedCount / STUDENTS.length) * 100}%` }}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-6 text-xs font-semibold text-[#667085]">
              <Legend dot="bg-[#1a906b]" label={`Submitted (${submittedCount})`} />
              <Legend dot="bg-[#20b486]" label={`In progress (${inProgressCount})`} />
              <Legend dot="bg-[#ba1a1a]" label={`Flagged (${flaggedCount})`} />
            </div>
          </CardContent>
        </Card>

        <section className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 pb-3">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#20b486]">
                  Candidates
                </p>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Active sessions
                </CardTitle>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#667085]">
                  search
                </span>
                <input
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search roll or name"
                  className="h-10 w-48 rounded-full border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] pl-10 pr-4 text-sm font-semibold text-[#101828] outline-none transition focus:border-[#20b486] focus:bg-white"
                />
              </div>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-y border-[rgba(216,216,216,0.55)] bg-[#f9fafb]">
                      <Th>Roll</Th>
                      <Th>Student</Th>
                      <Th>Progress</Th>
                      <Th>Status</Th>
                      <Th className="text-right">View</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((s) => {
                      const pct = (s.progress / s.total) * 100;
                      const isActive = s.roll === activeRoll;
                      return (
                        <tr
                          key={s.roll}
                          className={`border-b border-[rgba(216,216,216,0.55)] transition hover:bg-[#f0faf7] ${
                            isActive ? "bg-[#f2fffb]" : ""
                          }`}
                        >
                          <td className="px-5 py-4 text-sm font-black text-[#101828]">
                            #{s.roll}
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <span
                                className={`grid h-9 w-9 place-items-center rounded-full text-[11px] font-black ${s.initialsBg} ${s.initialsText}`}
                              >
                                {s.initials}
                              </span>
                              <span className="text-sm font-bold text-[#101828]">{s.name}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex flex-col gap-1.5">
                              <span className="text-xs font-black text-[#101828]">
                                {s.progress}/{s.total}
                              </span>
                              <div className="h-1.5 w-28 overflow-hidden rounded-full bg-[#f2f4f7]">
                                <div
                                  className={`h-full rounded-full ${
                                    s.status === "submitted"
                                      ? "bg-[#1a906b]"
                                      : s.status === "flagged"
                                        ? "bg-[#ba1a1a]"
                                        : "bg-[#20b486]"
                                  }`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <StatusPill status={s.status} />
                          </td>
                          <td className="px-5 py-4 text-right">
                            <button
                              type="button"
                              onClick={() => setActiveRoll(s.roll)}
                              className="grid h-9 w-9 place-items-center rounded-full border border-[#d0d5dd] bg-white text-[#667085] transition hover:border-[#20b486] hover:text-[#20b486]"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="overflow-hidden border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <div className="flex items-center justify-between bg-[#101828] px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#ff6f6f]" />
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/80">
                    Live preview · Roll #{active.roll}
                  </p>
                </div>
                <span className="material-symbols-outlined cursor-pointer text-white/70 transition hover:text-white">
                  fullscreen
                </span>
              </div>
              <CardContent className="space-y-4 p-5">
                <div className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-[#f9fafb]">
                  <div className="flex items-center justify-between border-b border-[rgba(216,216,216,0.55)] px-4 py-3">
                    <span className="text-xs font-black uppercase tracking-[0.14em] text-[#20b486]">
                      Question 46/50
                    </span>
                    <Badge className="gap-1 rounded-full bg-[#fff5e6] px-2.5 py-0.5 text-[#b25b00] hover:bg-[#fff5e6]">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      14:52
                    </Badge>
                  </div>
                  <div className="space-y-4 p-5">
                    <h4 className="text-base font-black text-[#101828]">
                      Which organelle is the powerhouse of the cell?
                    </h4>
                    <div className="space-y-2">
                      {OPTIONS.map((opt) => (
                        <div
                          key={opt.letter}
                          className={`flex items-center gap-3 rounded-lg border p-3 ${
                            opt.selected
                              ? "border-[#20b486] bg-[#f2fffb]"
                              : "border-[rgba(216,216,216,0.55)] bg-white"
                          }`}
                        >
                          <span
                            className={`grid h-6 w-6 place-items-center rounded-full border-2 text-[10px] font-black ${
                              opt.selected
                                ? "border-[#20b486] bg-[#20b486] text-white"
                                : "border-[#d0d5dd] bg-white text-[#667085]"
                            }`}
                          >
                            {opt.letter}
                          </span>
                          <span
                            className={`text-sm font-semibold ${
                              opt.selected ? "text-[#1a906b]" : "text-[#101828]"
                            }`}
                          >
                            {opt.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#667085]">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  Encrypted student view session
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#ffd5cf] bg-[#fff5f4] shadow-[0_12px_28px_rgba(186,26,26,0.08)]">
              <CardContent className="flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#fff1ee] text-[#ba1a1a]">
                  <span className="material-symbols-outlined">warning</span>
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ba1a1a]">
                    Security alert
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#101828]">
                    Roll #112 (Arif Islam) switched browser tabs twice. Auto-warning issued.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#d0d5dd] bg-white px-4 text-xs font-black text-[#101828] transition hover:border-[#ba1a1a] hover:text-[#ba1a1a]">
                      <span className="material-symbols-outlined text-[16px]">volume_off</span>
                      Mute
                    </button>
                    <button className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#ba1a1a] px-4 text-xs font-black text-white transition hover:bg-[#8c1414]">
                      <span className="material-symbols-outlined text-[16px]">lock</span>
                      Lock session
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      className={`px-5 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-[#667085] ${className}`}
    >
      {children}
    </th>
  );
}

function Legend({ dot, label }: { dot: string; label: string }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}

function StatusPill({ status }: { status: Status }) {
  if (status === "submitted") {
    return (
      <Badge className="rounded-full bg-[#edfff9] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[#1a906b] hover:bg-[#edfff9]">
        Submitted
      </Badge>
    );
  }
  if (status === "flagged") {
    return (
      <Badge className="rounded-full bg-[#fff1ee] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[#ba1a1a] hover:bg-[#fff1ee]">
        Flagged
      </Badge>
    );
  }
  return (
    <Badge className="rounded-full bg-[#fff5e6] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[#b25b00] hover:bg-[#fff5e6]">
      In progress
    </Badge>
  );
}
