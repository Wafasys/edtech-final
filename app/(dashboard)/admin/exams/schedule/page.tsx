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

const upcomingExams = [
  {
    id: "ex-1",
    icon: "biotech",
    title: "Biology Chapter Test 04",
    subtitle: "Cell Structure & Function",
    date: "22 Jun 2024",
    time: "09:00 AM",
    enrolled: 842,
    status: "Ready",
  },
  {
    id: "ex-2",
    icon: "science",
    title: "Organic Chemistry Intro",
    subtitle: "Chemistry Unit 1",
    date: "24 Jun 2024",
    time: "02:30 PM",
    enrolled: 512,
    status: "Draft",
  },
  {
    id: "ex-3",
    icon: "calculate",
    title: "Engineering Math Mock",
    subtitle: "Linear Algebra & Calculus",
    date: "27 Jun 2024",
    time: "06:00 PM",
    enrolled: 1284,
    status: "Review",
  },
];

const subjects = ["Full Mock", "Biology", "Chemistry", "Physics", "Mathematics"];

export default function ExamSchedulePage() {
  const [negativeMarking, setNegativeMarking] = useState(true);
  const [secureMode, setSecureMode] = useState(true);
  const [autoPublish, setAutoPublish] = useState(false);

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
                Exam Operations
              </p>
              <h1 className="text-xl font-black tracking-tight text-[#101828]">
                Schedule a new exam
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden h-11 items-center gap-2 rounded-full border border-[#d0d5dd] bg-white px-6 text-sm font-bold text-[#101828] transition hover:bg-[#f0faf7] md:inline-flex"
            >
              <span className="material-symbols-outlined text-[20px]">history</span>
              Past exams
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#20b486] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(32,180,134,0.24)] transition hover:bg-[#1a906b]"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              New exam
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        <section className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <Card className="overflow-hidden border-[#101828] bg-[#101828] text-white shadow-[0_22px_70px_rgba(16,24,40,0.22)]">
            <CardContent className="p-6 sm:p-8">
              <Badge className="mb-6 border-white/10 bg-white/10 px-3 py-1.5 text-[#99f3d6] hover:bg-white/10">
                <span className="material-symbols-outlined mr-1 text-[16px]">event_available</span>
                Schedule queue healthy
              </Badge>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Plan the next mock test, lock the rules, ship it to students.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
                Configure timing, marking, and security in one pass. Saving a draft keeps the
                exam off the student feed until you publish.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#20b486] px-6 text-sm font-black text-white transition hover:bg-[#1a906b]"
                >
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  Save & schedule
                </button>
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 text-sm font-black text-white transition hover:bg-white/14"
                >
                  <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  Duplicate template
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {[
              { label: "Scheduled this month", value: "14", delta: "+3 vs May", icon: "event_note" },
              { label: "Avg participation", value: "72%", delta: "+5.4%", icon: "groups" },
              { label: "Drafts pending", value: "3", delta: "Review", icon: "edit_note" },
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

        <section className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Card className="border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 pb-3">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#20b486]">
                  Schedule details
                </p>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Configure the exam
                </CardTitle>
              </div>
              <Badge className="rounded-full bg-[#edfff9] px-3 py-1 text-[#1a906b] hover:bg-[#edfff9]">
                Draft
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-[#667085]">
                    Exam title
                  </label>
                  <input
                    type="text"
                    defaultValue="Medical Admission Mock Test - Batch 2027"
                    className="h-12 w-full rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] px-4 text-sm font-semibold text-[#101828] outline-none transition focus:border-[#20b486] focus:bg-white focus:ring-2 focus:ring-[#20b486]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-[#667085]">
                    Subject
                  </label>
                  <div className="relative">
                    <select className="h-12 w-full appearance-none rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] pl-4 pr-10 text-sm font-semibold text-[#101828] outline-none transition focus:border-[#20b486] focus:bg-white focus:ring-2 focus:ring-[#20b486]/20">
                      {subjects.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[20px] text-[#667085]">
                      expand_more
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-[#667085]">
                    Duration
                  </label>
                  <div className="flex h-12 overflow-hidden rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] focus-within:border-[#20b486] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#20b486]/20">
                    <input
                      type="number"
                      defaultValue={60}
                      className="w-full bg-transparent px-4 text-sm font-semibold text-[#101828] outline-none"
                    />
                    <span className="grid place-items-center bg-[#edfff9] px-4 text-xs font-black uppercase tracking-[0.16em] text-[#1a906b]">
                      min
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-[#667085]">
                    Date
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-[#20b486]">
                      calendar_today
                    </span>
                    <input
                      type="text"
                      defaultValue="June 25, 2024"
                      className="h-12 w-full rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] pl-11 pr-4 text-sm font-semibold text-[#101828] outline-none transition focus:border-[#20b486] focus:bg-white focus:ring-2 focus:ring-[#20b486]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-[#667085]">
                    Start time
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-[#20b486]">
                      schedule
                    </span>
                    <input
                      type="text"
                      defaultValue="10:00 AM"
                      className="h-12 w-full rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] pl-11 pr-4 text-sm font-semibold text-[#101828] outline-none transition focus:border-[#20b486] focus:bg-white focus:ring-2 focus:ring-[#20b486]/20"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-[#667085]">
                    Description for students
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Comprehensive mock covering full Biology syllabus. Negative marking applies; bring a stable internet connection."
                    className="w-full rounded-lg border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-4 text-sm leading-6 text-[#101828] outline-none transition focus:border-[#20b486] focus:bg-white focus:ring-2 focus:ring-[#20b486]/20"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#20b486]">
                  Exam rules
                </p>

                <RuleRow
                  icon="remove_circle"
                  iconBg="bg-[#fff1ee]"
                  iconColor="text-[#ba1a1a]"
                  title="Negative marking"
                  description="Deduct 0.25 for incorrect answers"
                  trailing={<span className="text-sm font-black text-[#ba1a1a]">-0.25</span>}
                  enabled={negativeMarking}
                  onToggle={() => setNegativeMarking((v) => !v)}
                />
                <RuleRow
                  icon="lock"
                  iconBg="bg-[#edfff9]"
                  iconColor="text-[#20b486]"
                  title="Secure locked mode"
                  description="Prevents tab switching and screen recording"
                  enabled={secureMode}
                  onToggle={() => setSecureMode((v) => !v)}
                />
                <RuleRow
                  icon="rocket_launch"
                  iconBg="bg-[#fff5e6]"
                  iconColor="text-[#b25b00]"
                  title="Auto-publish results"
                  description="Release scores the moment the window closes"
                  enabled={autoPublish}
                  onToggle={() => setAutoPublish((v) => !v)}
                />
              </div>

              <div className="flex flex-wrap gap-3 border-t border-[rgba(216,216,216,0.55)] pt-5">
                <button
                  type="button"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#20b486] px-6 text-sm font-black text-white shadow-[0_10px_24px_rgba(32,180,134,0.24)] transition hover:bg-[#1a906b]"
                >
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  Save & schedule
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d0d5dd] bg-white px-6 text-sm font-black text-[#101828] transition hover:bg-[#f0faf7]"
                >
                  <span className="material-symbols-outlined text-[20px]">drafts</span>
                  Save as draft
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center rounded-full px-4 text-sm font-black text-[#667085] transition hover:text-[#101828]"
                >
                  Cancel
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="border-[rgba(216,216,216,0.55)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 pb-3">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#20b486]">
                    Pipeline
                  </p>
                  <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                    Upcoming exams
                  </CardTitle>
                </div>
                <Badge className="rounded-full bg-[#edfff9] px-3 py-1 text-[#1a906b] hover:bg-[#edfff9]">
                  {upcomingExams.length} active
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingExams.map((exam) => (
                  <div
                    key={exam.id}
                    className="rounded-xl border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-4 transition hover:border-[#20b486] hover:bg-white"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
                        <span className="material-symbols-outlined">{exam.icon}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black text-[#101828]">{exam.date}</p>
                        <p className="text-xs font-semibold text-[#667085]">{exam.time}</p>
                      </div>
                    </div>
                    <h4 className="text-sm font-black text-[#101828]">{exam.title}</h4>
                    <p className="text-xs text-[#667085]">{exam.subtitle}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-[#667085]">
                        <span className="material-symbols-outlined text-[14px]">group</span>
                        {exam.enrolled.toLocaleString()} enrolled
                      </span>
                      <Badge className="rounded-full bg-[#edfff9] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[#1a906b] hover:bg-[#edfff9]">
                        {exam.status}
                      </Badge>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-[#d0d5dd] bg-white px-4 text-xs font-black text-[#101828] transition hover:border-[#20b486] hover:text-[#20b486]">
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                        Edit
                      </button>
                      <button className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#20b486] px-4 text-xs font-black text-white shadow-[0_8px_18px_rgba(32,180,134,0.24)] transition hover:bg-[#1a906b]">
                        <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                        Start now
                      </button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-[#101828] bg-[#101828] text-white shadow-[0_22px_70px_rgba(16,24,40,0.22)]">
              <CardContent className="p-6">
                <Badge className="mb-4 border-white/10 bg-white/10 px-3 py-1 text-[#99f3d6] hover:bg-white/10">
                  <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#99f3d6]" />
                  Live monitor
                </Badge>
                <h3 className="text-2xl font-black leading-tight tracking-tight">
                  Switch to live exam control room
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Watch real-time student activity, server health, and proctor alerts on running
                  sessions.
                </p>
                <Link
                  href="/admin/exams/monitor"
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#20b486] text-sm font-black text-white transition hover:bg-[#1a906b]"
                >
                  <span className="material-symbols-outlined text-[20px]">monitoring</span>
                  Open live monitor
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function RuleRow({
  icon,
  iconBg,
  iconColor,
  title,
  description,
  trailing,
  enabled,
  onToggle,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  trailing?: React.ReactNode;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[rgba(216,216,216,0.55)] bg-[#f9fafb] p-4">
      <div className="flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-lg ${iconBg} ${iconColor}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </span>
        <div>
          <p className="text-sm font-black text-[#101828]">{title}</p>
          <p className="text-xs text-[#667085]">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {trailing}
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={enabled}
          className={`relative h-6 w-11 rounded-full transition ${
            enabled ? "bg-[#20b486]" : "bg-[#d0d5dd]"
          }`}
        >
          <span
            className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
              enabled ? "left-6" : "left-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
