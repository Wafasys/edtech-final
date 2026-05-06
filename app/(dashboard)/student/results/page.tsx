"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const summaryStats = [
  { label: "Correct", value: "44", detail: "88% hit rate", tone: "green", icon: CheckCircle2 },
  { label: "Incorrect", value: "5", detail: "Needs review", tone: "red", icon: XCircle },
  { label: "Skipped", value: "1", detail: "Time pressure", tone: "neutral", icon: Clock3 },
  { label: "Rank", value: "#337", detail: "Top 15%", tone: "dark", icon: Trophy },
];

const subjectBreakdown = [
  { subject: "Physics", score: 82, status: "2 weak concepts" },
  { subject: "Chemistry", score: 91, status: "Strong" },
  { subject: "Math", score: 76, status: "Slow on limits" },
  { subject: "English", score: 88, status: "Stable" },
];

const questions = [
  {
    id: 1,
    subject: "Physics",
    status: "incorrect",
    question: "Which of the following describes the Heisenberg Uncertainty Principle correctly?",
    selected: "It is possible to know both position and momentum exactly.",
    correct: "The product of uncertainties in position and momentum is >= h/4pi.",
    explanation:
      "The principle sets a physical limit on how precisely position and momentum can be known together. It is not a measurement error.",
    reference: "Physics Vol II, Chapter 13: Quantum Mechanics",
  },
  {
    id: 2,
    subject: "Chemistry",
    status: "correct",
    question: "In organic chemistry, what is the primary product of the Kolbe-Schmitt reaction?",
    selected: "Salicylic Acid",
    correct: "Salicylic Acid",
    explanation:
      "Sodium phenoxide reacts with carbon dioxide under pressure, then acid workup gives salicylic acid.",
    reference: "Organic Chemistry, Aromatic Hydroxy Acids",
  },
  {
    id: 3,
    subject: "Math",
    status: "skipped",
    question: "Calculate the limit of (sin x)/x as x approaches zero.",
    selected: "Skipped",
    correct: "1",
    explanation:
      "This is a standard trigonometric limit. Memorize the direct result and practice substitution traps around it.",
    reference: "Calculus, Standard Limits",
  },
  {
    id: 4,
    subject: "Physics",
    status: "incorrect",
    question: "Maximum projectile range occurs at which launch angle on level ground?",
    selected: "30 degrees",
    correct: "45 degrees",
    explanation:
      "For a fixed initial velocity on level ground, range is proportional to sin 2theta, which is maximum when 2theta is 90 degrees.",
    reference: "Mechanics, Projectile Motion",
  },
  {
    id: 5,
    subject: "English",
    status: "correct",
    question: "Choose the correct synonym of meticulous.",
    selected: "Careful",
    correct: "Careful",
    explanation:
      "Meticulous means showing great attention to detail, so careful is the closest option in this context.",
    reference: "Vocabulary Drill Set 08",
  },
];

function toneClasses(tone: string) {
  if (tone === "green") {
    return "border-[#c9efe4] bg-[#f2fffb] text-[#1a906b]";
  }
  if (tone === "red") {
    return "border-[#ffd8d3] bg-[#fff5f4] text-[#ba1a1a]";
  }
  if (tone === "dark") {
    return "border-[#d0d5dd] bg-[#f9fafb] text-[#101828]";
  }
  return "border-[#eaecf0] bg-white text-[#667085]";
}

export default function ResultAnalysisPage() {
  const [filter, setFilter] = useState("all");
  const filteredQuestions =
    filter === "all" ? questions : questions.filter((question) => question.status === filter);

  return (
    <main className="min-h-screen bg-[#f8fbfa] px-4 py-5 pb-28 text-[#101828] sm:px-6 lg:px-8 lg:py-8 md:pb-8">
      <div className="mx-auto w-full max-w-[1240px] space-y-5">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
          <Card className="overflow-hidden rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_18px_44px_rgba(16,24,40,0.07)]">
            <CardContent className="p-5 sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 rounded-md border-[#d0d5dd] bg-white !px-4 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
                  >
                    <Link href="/student/dashboard">
                      <ArrowLeft className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </Button>
                  <Badge className="ml-3 rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9]">
                    Engineering Model Test #42
                  </Badge>
                  <h1 className="mt-5 text-3xl font-black leading-tight text-[#101828] sm:text-4xl">
                    Your result analysis is ready.
                  </h1>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#646464]">
                    Review the exact mistakes, skipped questions, and topic patterns
                    before starting the next mock.
                  </p>
                </div>

                <div className="rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-5 text-center lg:min-w-[220px]">
                  <p className="text-xs font-extrabold uppercase text-[#20b486]">
                    Final score
                  </p>
                  <p className="mt-2 text-5xl font-black text-[#101828]">
                    42.5<span className="text-2xl text-[#98a2b3]">/50</span>
                  </p>
                  <div className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-[#667085]">
                    <Trophy className="h-4 w-4 text-[#20b486]" />
                    Current rank 337th
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {summaryStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`rounded-lg border p-4 ${toneClasses(stat.tone)}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-extrabold uppercase">{stat.label}</p>
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-3 text-3xl font-black text-[#101828]">{stat.value}</p>
                      <p className="mt-1 text-xs font-bold text-[#667085]">{stat.detail}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-[#101828] text-white shadow-[0_18px_44px_rgba(16,24,40,0.08)]">
            <CardHeader className="p-5 sm:p-6">
              <CardDescription className="text-xs font-extrabold uppercase text-[#f5c542]">
                Next action
              </CardDescription>
              <CardTitle className="mt-2 text-2xl font-black text-white">
                Fix Physics before Friday.
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5 pt-0 sm:p-6 sm:pt-0">
              <p className="text-sm leading-6 text-white/72">
                Two wrong answers came from mechanics and quantum basics. Spend 35 minutes
                on explanations, then take one mixed drill.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button className="h-10 rounded-md bg-[#20b486] !px-4 font-extrabold text-white hover:bg-[#1a906b]">
                  <RotateCcw className="h-4 w-4" />
                  Retry weak set
                </Button>
                <Button
                  variant="outline"
                  className="h-10 rounded-md border-white/20 bg-white/10 !px-4 font-extrabold text-white hover:bg-white/15 hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 lg:grid-cols-[360px_minmax(0,1fr)]">
          <div className="space-y-5">
            <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <CardHeader className="p-5 sm:p-6">
                <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                  Subject breakdown
                </CardDescription>
                <CardTitle className="mt-1 text-xl font-black text-[#101828]">
                  Where marks moved
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-5 pt-0 sm:p-6 sm:pt-0">
                {subjectBreakdown.map((item) => (
                  <div key={item.subject} className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-black text-[#101828]">{item.subject}</p>
                      <p className="text-xs font-bold text-[#667085]">{item.status}</p>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#f2f4f7]">
                      <div
                        className="h-full rounded-full bg-[#20b486]"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-lg border-[#c9efe4] bg-[#f2fffb] shadow-[0_12px_28px_rgba(16,24,40,0.04)]">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-[#20b486]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[#101828]">
                      Highest return review
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      Rework only the two Physics misses first. The rest of the exam is
                      stable enough for maintenance drills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:space-y-0 sm:p-6">
              <div>
                <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                  Question analysis
                </CardDescription>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Selected answers vs correct answers
                </CardTitle>
              </div>
              <Tabs value={filter} onValueChange={setFilter}>
                <TabsList className="grid h-auto grid-cols-4 rounded-lg bg-[#f2f4f7] p-1">
                  {["all", "incorrect", "correct", "skipped"].map((item) => (
                    <TabsTrigger
                      key={item}
                      value={item}
                      className="min-h-10 rounded-md !px-3 !py-2 text-xs font-black capitalize data-[state=active]:bg-white data-[state=active]:text-[#101828]"
                    >
                      {item}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </CardHeader>

            <CardContent className="space-y-4 bg-[#f8fbfa] p-4 sm:p-5">
              {filteredQuestions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

function QuestionCard({ question }: { question: (typeof questions)[number] }) {
  const isCorrect = question.status === "correct";
  const isSkipped = question.status === "skipped";

  return (
    <article className="overflow-hidden rounded-lg border border-[#eaecf0] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-extrabold uppercase text-[#98a2b3]">
              Question {String(question.id).padStart(2, "0")}
            </p>
            <Badge className="mt-2 rounded-md border-0 bg-[#edfff9] px-3 py-1 text-[#1a906b] hover:bg-[#edfff9]">
              {question.subject}
            </Badge>
          </div>
          <Badge
            className={
              isCorrect
                ? "rounded-md border-0 bg-[#edfff9] px-3 py-1 text-[#1a906b] hover:bg-[#edfff9]"
                : isSkipped
                  ? "rounded-md border-0 bg-[#f2f4f7] px-3 py-1 text-[#667085] hover:bg-[#f2f4f7]"
                  : "rounded-md border-0 bg-[#fff5f4] px-3 py-1 text-[#ba1a1a] hover:bg-[#fff5f4]"
            }
          >
            {isCorrect ? "Correct" : isSkipped ? "Skipped" : "Incorrect"}
          </Badge>
        </div>

        <p className="mb-5 text-base font-black leading-7 text-[#101828]">
          {question.question}
        </p>

        <div className="space-y-3">
          {!isCorrect && (
            <div
              className={
                isSkipped
                  ? "flex items-center gap-3 rounded-lg border border-[#d0d5dd] bg-[#f9fafb] p-4"
                  : "flex items-center gap-3 rounded-lg border-2 border-[#ffb4ab] bg-[#fff5f4] p-4"
              }
            >
              {isSkipped ? (
                <Clock3 className="h-5 w-5 shrink-0 text-[#667085]" />
              ) : (
                <XCircle className="h-5 w-5 shrink-0 text-[#ba1a1a]" />
              )}
              <div>
                <p className="text-[11px] font-black uppercase text-[#667085]">
                  {isSkipped ? "Selected" : "Your answer"}
                </p>
                <p className="mt-1 text-sm font-bold text-[#101828]">{question.selected}</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 rounded-lg border-2 border-[#20b486] bg-[#f2fffb] p-4">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#20b486]" />
            <div>
              <p className="text-[11px] font-black uppercase text-[#1a906b]">
                Correct answer
              </p>
              <p className="mt-1 text-sm font-bold text-[#101828]">{question.correct}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#eaecf0] bg-[#f9fafb] p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2 text-[#20b486]">
          <BookOpenCheck className="h-5 w-5" />
          <span className="text-xs font-black uppercase tracking-wider">
            Detailed explanation
          </span>
        </div>
        <p className="text-sm leading-6 text-[#667085]">{question.explanation}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-md border border-[#eaecf0] bg-white px-3 py-2 text-xs font-bold text-[#667085]">
          <FileText className="h-4 w-4 text-[#20b486]" />
          Reference: {question.reference}
        </div>
      </div>
    </article>
  );
}
