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
  Lock,
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
  { key: "A", value: "Ribosome", note: "Protein synthesis site" },
  { key: "B", value: "Golgi Body", note: "Packaging and secretion" },
  { key: "C", value: "Mitochondria", note: "ATP production" },
  { key: "D", value: "Lysosome", note: "Cellular digestion" },
];

export default function MobileSecureExamViewPage() {
  const [selected, setSelected] = useState("C");
  const [marked, setMarked] = useState(false);
  const [locked, setLocked] = useState(false);

  return (
    <main className="min-h-screen select-none bg-[#f8fbfa] pb-28 text-[#101828]">
      <header className="sticky top-0 z-50 border-b border-[rgba(216,216,216,0.65)] bg-white px-4 py-3 shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
              <Clock3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xl font-black leading-none text-[#101828]">45:12</p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#98a2b3]">
                Q12 of 50
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setLocked(true)}
            className="h-10 rounded-md border-[#d0d5dd] bg-white !px-4 text-xs font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
          >
            <Lock className="h-4 w-4" />
            Secure
          </Button>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f2f4f7]">
          <div className="h-full w-[24%] rounded-full bg-[#20b486]" />
        </div>
      </header>

      <div className="mx-auto w-full max-w-2xl space-y-4 px-4 py-4">
        <Card className="rounded-lg border-[#c9efe4] bg-[#f2fffb] shadow-[0_8px_18px_rgba(16,24,40,0.04)]">
          <CardContent className="flex items-start gap-3 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#20b486]" />
            <div>
              <p className="text-sm font-black text-[#101828]">Medical Admission Mock Test 2027</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#667085]">
                Re-entry is blocked if you leave this screen.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
          <div className="aspect-[16/8] bg-[#eef8f4]">
            <img
              alt="Scientific microscopic visualization of cellular organelles"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNMi_W-idtFfUDsWjrEBPvF4IyueJ_wYe5lEc8xOJdfokzNY1lybVYYdjZDQJC6E8L-ae_crHf7ux5OqYh4JKi25NEVc_bdnY5WvLZKLNkO4-IYCYLlVXu1FHP-YvKjx7ZO6xWq53DUQhGcCq_8ocMhHkjwZnvlPTmX6rCyc6eep0jYDtsxHtJwkUWbz7iewDN7Ud72OX0lZ3w5fZaalfBqRqKihjvYF3DPe8kFC8HvZfyGWf3ANlR6bzrVSVM7RplJ2wN9pJ2kTQ"
            />
          </div>
          <CardHeader className="p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9]">
                Biology
              </Badge>
              <Badge className="rounded-md border-0 bg-[#f2f4f7] px-3 py-1.5 text-[#667085] hover:bg-[#f2f4f7]">
                Cell Structure
              </Badge>
            </div>
            <CardTitle className="mt-4 text-xl font-black leading-8 text-[#101828]">
              Which of the following cell organelles is known as the
              &quot;powerhouse of the cell&quot;?
            </CardTitle>
            <CardDescription className="mt-2 flex items-center gap-2 text-xs font-bold text-[#ba1a1a]">
              <AlertTriangle className="h-4 w-4" />
              -0.25 negative marking for wrong answers
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
          <CardHeader className="p-5 pb-3">
            <CardDescription className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#20b486]">
              Select one option
            </CardDescription>
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
                      ? "flex min-h-[72px] w-full items-center gap-4 rounded-lg border-2 border-[#20b486] bg-[#f2fffb] px-4 py-4 text-left shadow-[0_8px_18px_rgba(32,180,134,0.08)] transition active:scale-[0.99]"
                      : "flex min-h-[72px] w-full items-center gap-4 rounded-lg border border-[#d0d5dd] bg-white px-4 py-4 text-left transition hover:border-[#20b486] hover:bg-[#f8fbfa] active:scale-[0.99]"
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

        <section className="grid grid-cols-2 gap-3">
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#98a2b3]">
                  Answered
                </p>
                <p className="text-lg font-black text-[#101828]">12/50</p>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#fff9f3] text-[#b25b00]">
                <Flag className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#98a2b3]">
                  Marked
                </p>
                <p className="text-lg font-black text-[#101828]">{marked ? "05" : "04"}</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-[rgba(216,216,216,0.65)] bg-white px-4 py-3 shadow-[0_-10px_24px_rgba(16,24,40,0.08)]">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="outline"
              className="h-11 rounded-md border-[#d0d5dd] bg-white !px-4 font-extrabold text-[#667085] hover:bg-[#f8fbfa] hover:text-[#101828]"
            >
              <ArrowLeft className="h-4 w-4" />
              Prev
            </Button>
            <Button
              type="button"
              className="h-11 rounded-md bg-[#101828] !px-4 font-extrabold text-white hover:bg-[#243044]"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <Button className="h-11 rounded-md bg-[#20b486] !px-5 font-extrabold text-white shadow-[0_12px_24px_rgba(32,180,134,0.18)] hover:bg-[#1a906b]">
            <CheckCircle2 className="h-4 w-4" />
            Submit
          </Button>
        </div>
      </footer>

      {locked && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101828]/86 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-sm rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-2xl">
            <CardContent className="p-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg bg-[#fff5f4] text-[#ba1a1a]">
                <Lock className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-black text-[#101828]">
                Secure exam mode
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Keep this screen open. Leaving the app can submit and flag your attempt.
              </p>
              <Button
                type="button"
                onClick={() => setLocked(false)}
                className="mt-6 h-11 w-full rounded-md bg-[#20b486] !px-5 font-extrabold text-white hover:bg-[#1a906b]"
              >
                Continue Exam
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
