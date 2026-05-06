"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Eraser,
  Flag,
  HelpCircle,
  Lock,
  MonitorCheck,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OPTIONS = [
  {
    key: "A",
    value: "Ribosome",
    note: "Protein synthesis site",
  },
  {
    key: "B",
    value: "Golgi Body",
    note: "Packaging and secretion",
  },
  {
    key: "C",
    value: "Mitochondria",
    note: "ATP production",
  },
  {
    key: "D",
    value: "Lysosome",
    note: "Cellular digestion",
  },
];

const questionNumbers = Array.from({ length: 15 }, (_, index) => index + 1);

export default function DesktopSecureExamViewPage() {
  const [selected, setSelected] = useState("C");
  const [marked, setMarked] = useState(false);
  const [locked, setLocked] = useState(false);

  return (
    <main className="flex h-screen w-screen select-none flex-col overflow-hidden bg-[#f8fbfa] text-[#101828]">
      <header className="flex h-[72px] shrink-0 items-center justify-between gap-4 border-b border-[rgba(216,216,216,0.65)] bg-white px-5 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
        <div className="flex min-w-[260px] items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
            <Clock3 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-black leading-none text-[#101828]">45:12</p>
            <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[#98a2b3]">
              Question 12 of 50
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1 px-2">
          <div className="mb-2 flex items-center justify-between gap-4">
            <p className="truncate text-sm font-black text-[#101828]">
              Medical Admission Mock Test 2027
            </p>
            <Badge className="rounded-md border-0 bg-[#fff5f4] px-3 py-1 text-[#ba1a1a] hover:bg-[#fff5f4]">
              -0.25 negative
            </Badge>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#f2f4f7]">
            <div className="h-full w-[24%] rounded-full bg-[#20b486]" />
          </div>
        </div>

        <div className="flex min-w-[260px] items-center justify-end gap-3">
          <Badge className="hidden rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9] lg:inline-flex">
            <ShieldCheck className="h-4 w-4" />
            Locked mode
          </Badge>
          <Button
            type="button"
            variant="outline"
            onClick={() => setLocked(true)}
            className="h-10 rounded-md border-[#d0d5dd] bg-white !px-4 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
          >
            <HelpCircle className="h-4 w-4" />
            Help
          </Button>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_430px]">
        <section className="min-h-0 overflow-y-auto border-r border-[rgba(216,216,216,0.65)] bg-white p-6 lg:p-8">
          <div className="mx-auto max-w-3xl space-y-5">
            <Card className="overflow-hidden rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <div className="aspect-[16/7] bg-[#eef8f4]">
                <img
                  alt="Scientific microscopic visualization of cellular organelles"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNMi_W-idtFfUDsWjrEBPvF4IyueJ_wYe5lEc8xOJdfokzNY1lybVYYdjZDQJC6E8L-ae_crHf7ux5OqYh4JKi25NEVc_bdnY5WvLZKLNkO4-IYCYLlVXu1FHP-YvKjx7ZO6xWq53DUQhGcCq_8ocMhHkjwZnvlPTmX6rCyc6eep0jYDtsxHtJwkUWbz7iewDN7Ud72OX0lZ3w5fZaalfBqRqKihjvYF3DPe8kFC8HvZfyGWf3ANlR6bzrVSVM7RplJ2wN9pJ2kTQ"
                />
              </div>
              <CardHeader className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9]">
                    Biology
                  </Badge>
                  <Badge className="rounded-md border-0 bg-[#f2f4f7] px-3 py-1.5 text-[#667085] hover:bg-[#f2f4f7]">
                    Cell Structure
                  </Badge>
                </div>
                <CardTitle className="mt-4 text-2xl font-black leading-9 text-[#101828]">
                  Which of the following cell organelles is known as the
                  &quot;powerhouse of the cell&quot;?
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="rounded-lg border-[#ffd8d3] bg-[#fff5f4] shadow-[0_12px_28px_rgba(16,24,40,0.04)]">
              <CardContent className="flex items-start gap-3 p-5">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#ba1a1a]" />
                <p className="text-sm font-semibold leading-6 text-[#7a271a]">
                  Leaving full-screen mode, switching tabs, or using screen capture will
                  automatically submit and flag this attempt.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <aside className="flex min-h-0 flex-col bg-[#f8fbfa]">
          <div className="min-h-0 flex-1 overflow-y-auto p-5 lg:p-6">
            <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <CardHeader className="p-5">
                <CardDescription className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#20b486]">
                  Select one option
                </CardDescription>
                <CardTitle className="mt-1 text-xl font-black text-[#101828]">
                  Answer panel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-5 pt-0">
                {OPTIONS.map((option) => {
                  const isSelected = selected === option.key;
                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setSelected(option.key)}
                      className={
                        isSelected
                          ? "flex w-full items-center gap-4 rounded-lg border-2 border-[#20b486] bg-[#f2fffb] px-4 py-4 text-left shadow-[0_8px_18px_rgba(32,180,134,0.08)] transition active:scale-[0.99]"
                          : "flex w-full items-center gap-4 rounded-lg border border-[#d0d5dd] bg-white px-4 py-4 text-left transition hover:border-[#20b486] hover:bg-[#f8fbfa] active:scale-[0.99]"
                      }
                    >
                      <span
                        className={
                          isSelected
                            ? "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#20b486] text-sm font-black text-white"
                            : "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f2f4f7] text-sm font-black text-[#667085]"
                        }
                      >
                        {option.key}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-black text-[#101828]">
                          {option.value}
                        </span>
                        <span className="mt-1 block text-xs font-semibold text-[#667085]">
                          {option.note}
                        </span>
                      </span>
                      {isSelected && <CheckCircle2 className="h-5 w-5 shrink-0 text-[#20b486]" />}
                    </button>
                  );
                })}

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setMarked((value) => !value)}
                    className={
                      marked
                        ? "h-11 rounded-md border-[#ffbd7a] bg-[#fff9f3] !px-4 font-extrabold text-[#b25b00] hover:bg-[#fff9f3]"
                        : "h-11 rounded-md border-[#d0d5dd] bg-white !px-4 font-extrabold text-[#101828] hover:border-[#ffbd7a] hover:bg-[#fff9f3]"
                    }
                  >
                    <Flag className="h-4 w-4" />
                    {marked ? "Marked" : "Mark"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSelected("")}
                    className="h-11 rounded-md border-[#ffd8d3] bg-white !px-4 font-extrabold text-[#ba1a1a] hover:bg-[#fff5f4]"
                  >
                    <Eraser className="h-4 w-4" />
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-5 rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.04)]">
              <CardHeader className="p-5 pb-3">
                <CardTitle className="text-sm font-black uppercase tracking-[0.14em] text-[#101828]">
                  Question map
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-5 gap-2 p-5 pt-0">
                {questionNumbers.map((number) => (
                  <button
                    key={number}
                    type="button"
                    className={
                      number === 12
                        ? "h-10 rounded-md bg-[#20b486] text-sm font-black text-white"
                        : number < 12
                          ? "h-10 rounded-md bg-[#edfff9] text-sm font-black text-[#1a906b]"
                          : "h-10 rounded-md bg-[#f2f4f7] text-sm font-black text-[#667085]"
                    }
                  >
                    {number}
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>

      <footer className="flex h-[76px] shrink-0 items-center justify-between border-t border-[rgba(216,216,216,0.65)] bg-white px-5 shadow-[0_-10px_24px_rgba(16,24,40,0.05)]">
        <Button
          type="button"
          variant="outline"
          className="h-11 rounded-md border-[#d0d5dd] bg-white !px-5 font-extrabold text-[#667085] hover:bg-[#f8fbfa] hover:text-[#101828]"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>
        <div className="flex items-center gap-3">
          <Button className="h-11 rounded-md bg-[#101828] !px-6 font-extrabold text-white hover:bg-[#243044]">
            Next Question
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button className="h-11 rounded-md bg-[#20b486] !px-6 font-extrabold text-white shadow-[0_12px_24px_rgba(32,180,134,0.18)] hover:bg-[#1a906b]">
            <CheckCircle2 className="h-4 w-4" />
            Final Submit
          </Button>
        </div>
      </footer>

      {locked && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101828]/86 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-md rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-2xl">
            <CardContent className="p-6 text-center sm:p-8">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-[#fff5f4] text-[#ba1a1a]">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-2xl font-black text-[#101828]">
                Secure exam mode
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#667085]">
                This session is monitored. Switching apps, minimizing the window, or
                capturing the screen may disqualify the attempt.
              </p>
              <Button
                type="button"
                onClick={() => setLocked(false)}
                className="mt-6 h-11 w-full rounded-md bg-[#20b486] !px-5 font-extrabold text-white hover:bg-[#1a906b]"
              >
                <MonitorCheck className="h-4 w-4" />
                Continue Exam
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
