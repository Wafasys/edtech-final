"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flame,
  GraduationCap,
  LineChart,
  ListChecks,
  Play,
  Search,
  Sparkles,
  Target,
  Trophy,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weeklyScores = [48, 56, 52, 64, 71, 69, 78];

const stats = [
  {
    label: "Weekly accuracy",
    value: "78%",
    change: "+6.4%",
    icon: Target,
  },
  {
    label: "Questions solved",
    value: "485",
    change: "+82",
    icon: CheckCircle2,
  },
  {
    label: "Current rank",
    value: "#337",
    change: "Top 12%",
    icon: Trophy,
  },
];

const plan = [
  {
    title: "Physics lesson",
    detail: "Electromagnetic induction",
    meta: "31 min",
    icon: Play,
    active: true,
  },
  {
    title: "Mistake review",
    detail: "Model test 07 weak spots",
    meta: "18 items",
    icon: ListChecks,
  },
  {
    title: "Timed quiz",
    detail: "20-question mixed drill",
    meta: "20 min",
    icon: Clock3,
  },
];

const courses = [
  {
    name: "Medical Physics Mastery",
    area: "Physics",
    progress: 78,
    next: "Magnetism L-12",
  },
  {
    name: "Organic Chemistry Sprint",
    area: "Chemistry",
    progress: 61,
    next: "Aldehydes quiz",
  },
  {
    name: "Biology Rapid Revision",
    area: "Biology",
    progress: 84,
    next: "Cell cycle mock",
  },
];

const subjects = [
  { label: "Physics", value: 82, color: "bg-[#20b486]" },
  { label: "Chemistry", value: 64, color: "bg-[#4ac8ae]" },
  { label: "Biology", value: 72, color: "bg-[#ff9b26]" },
  { label: "English", value: 46, color: "bg-[#101828]" },
];

const upcoming = [
  {
    date: "09",
    month: "May",
    title: "Medical Model Test 08",
    time: "10:00 AM",
    tone: "Live in 3 days",
  },
  {
    date: "12",
    month: "May",
    title: "Botany Topic Quiz",
    time: "08:30 PM",
    tone: "Practice",
  },
  {
    date: "15",
    month: "May",
    title: "Full Syllabus Mock",
    time: "09:00 PM",
    tone: "Ranked",
  },
];

function MiniLineChart() {
  const points = weeklyScores
    .map((score, index) => {
      const x = 16 + index * 44;
      const y = 104 - ((score - 40) / 42) * 78;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 296 128"
      className="h-40 w-full"
      role="img"
      aria-label="Weekly score trend"
    >
      {[28, 56, 84, 112].map((y) => (
        <line
          key={y}
          x1="0"
          x2="296"
          y1={y}
          y2={y}
          stroke="#e7eee9"
          strokeWidth="1"
        />
      ))}
      <polyline
        points={points}
        fill="none"
        stroke="#20b486"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {weeklyScores.map((score, index) => {
        const x = 16 + index * 44;
        const y = 104 - ((score - 40) / 42) * 78;
        return (
          <g key={index}>
            <circle cx={x} cy={y} r="5" fill="#fff" stroke="#20b486" strokeWidth="3" />
            {index === weeklyScores.length - 1 && (
              <text x={x - 9} y={y - 14} fill="#1a906b" fontSize="12" fontWeight="800">
                {score}%
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function ProgressBar({
  value,
  className = "bg-[#20b486]",
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-[#edf2ef]">
      <div className={`h-full rounded-full ${className}`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default function StudentDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f8fbfa] px-4 py-5 pb-28 text-[#101828] sm:px-6 lg:px-8 lg:py-8 md:pb-8">
      <div className="mx-auto w-full max-w-[1240px] space-y-5">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]">
          <div className="grid gap-5">
            <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_18px_44px_rgba(16,24,40,0.07)]">
              <CardContent className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
                <div className="min-w-0">
                  <Badge className="rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9]">
                    Student dashboard
                  </Badge>
                  <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-[#101828] sm:text-4xl">
                    Today&apos;s prep plan is ready.
                  </h1>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#646464]">
                    One lesson, one mistake review, one timed drill. Keep the day simple
                    and finish the highest-impact work first.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="h-11 rounded-md bg-[#20b486] px-5 font-extrabold text-white shadow-[0_12px_24px_rgba(32,180,134,0.22)] hover:bg-[#1a906b]"
                    >
                      <Link href="/student/lessons">
                        Start plan
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 rounded-md border-[#d0d5dd] bg-white px-5 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
                    >
                      <Link href="/exam/secure-desktop">Timed quiz</Link>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                  <div className="rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-4">
                    <div className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                      <Flame className="h-[18px] w-[18px]" />
                    </div>
                    <p className="text-2xl font-black text-[#101828]">12 days</p>
                    <p className="mt-1 text-xs font-bold text-[#667085]">current streak</p>
                  </div>
                  <div className="rounded-lg border border-[#ffe1bd] bg-[#fff9f3] p-4">
                    <div className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-white text-[#b25b00] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                      <Trophy className="h-[18px] w-[18px]" />
                    </div>
                    <p className="text-2xl font-black text-[#101828]">Top 12%</p>
                    <p className="mt-1 text-xs font-bold text-[#667085]">this week</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.96fr)]">
              <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
                <CardHeader className="p-5 pb-0 sm:p-6 sm:pb-0">
                  <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                    Today&apos;s sequence
                  </CardDescription>
                  <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                    Three focused tasks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-5 pt-5 sm:p-6 sm:pt-5">
                  {plan.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className={
                          item.active
                            ? "flex items-center gap-4 rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-4"
                            : "flex items-center gap-4 rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-4"
                        }
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                          <Icon className="h-[18px] w-[18px]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-black text-[#101828]">
                            {index + 1}. {item.title}
                          </p>
                          <p className="mt-1 truncate text-xs font-semibold text-[#667085]">
                            {item.detail}
                          </p>
                        </div>
                        <Badge className="shrink-0 rounded-md border-0 bg-white text-[#667085] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-white">
                          {item.meta}
                        </Badge>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="rounded-lg border-[#dce8e2] bg-[#f0faf7] shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#101828] text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-extrabold uppercase text-[#20b486]">
                        Current focus
                      </p>
                      <h2 className="mt-2 text-2xl font-black leading-tight text-[#101828]">
                        Electromagnetic Induction
                      </h2>
                      <p className="mt-2 text-sm font-semibold text-[#667085]">
                        Physics Unit 4 - 31 minutes remaining
                      </p>
                    </div>
                  </div>

                  <div className="my-6">
                    <div className="mb-2 flex justify-between text-xs font-extrabold uppercase text-[#667085]">
                      <span>Lesson progress</span>
                      <span>68%</span>
                    </div>
                    <ProgressBar value={68} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                      <p className="text-2xl font-black text-[#101828]">18</p>
                      <p className="mt-1 text-xs font-bold text-[#667085]">
                        mistakes to review
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                      <p className="text-2xl font-black text-[#101828]">20m</p>
                      <p className="mt-1 text-xs font-bold text-[#667085]">
                        target quiz time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]"
                >
                  <CardContent className="p-5">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge className="rounded-md border-0 bg-[#f2fffb] text-[#1a906b] hover:bg-[#f2fffb]">
                        {stat.change}
                      </Badge>
                    </div>
                    <p className="text-sm font-semibold text-[#667085]">{stat.label}</p>
                    <p className="mt-1 text-3xl font-black text-[#101828]">{stat.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 p-5 pb-0 sm:p-6 sm:pb-0">
              <div>
                <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                  Score trend
                </CardDescription>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Weekly performance
                </CardTitle>
              </div>
              <Badge className="rounded-md border-0 bg-[#edfff9] px-3 py-1 text-[#1a906b] hover:bg-[#edfff9]">
                +12.5%
              </Badge>
            </CardHeader>
            <CardContent className="p-5 pt-4 sm:p-6 sm:pt-4">
              <MiniLineChart />
              <div className="mt-2 grid grid-cols-7 text-center text-xs font-bold text-[#98a2b3]">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 p-5 pb-0 sm:p-6 sm:pb-0">
              <div>
                <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                  Study mix
                </CardDescription>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Subject progress
                </CardTitle>
              </div>
              <BarChart3 className="h-5 w-5 text-[#20b486]" />
            </CardHeader>
            <CardContent className="space-y-4 p-5 pt-5 sm:p-6 sm:pt-5">
              {subjects.map((subject) => (
                <div key={subject.label}>
                  <div className="mb-2 flex justify-between gap-3 text-sm">
                    <span className="font-bold text-[#101828]">{subject.label}</span>
                    <span className="font-bold text-[#667085]">{subject.value}%</span>
                  </div>
                  <ProgressBar value={subject.value} className={subject.color} />
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]">
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 p-5 pb-0 sm:p-6 sm:pb-0">
              <div>
                <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                  Courses
                </CardDescription>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Active learning paths
                </CardTitle>
              </div>
              <Button
                asChild
                variant="ghost"
                className="h-9 rounded-md px-3 text-sm font-extrabold text-[#1a906b] hover:bg-[#edfff9] hover:text-[#1a906b]"
              >
                <Link href="/student/search">
                  <Search className="h-4 w-4" />
                  Browse
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="p-5 pt-5 sm:p-6 sm:pt-5">
              <Tabs defaultValue="active" className="w-full">
                <TabsList className="mb-5 h-10 rounded-lg bg-[#f0faf7] p-1">
                  <TabsTrigger
                    value="active"
                    className="rounded-md px-4 text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-[#101828]"
                  >
                    Active
                  </TabsTrigger>
                  <TabsTrigger
                    value="review"
                    className="rounded-md px-4 text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-[#101828]"
                  >
                    Review
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="active" className="m-0">
                  <div className="grid gap-4 md:grid-cols-3">
                    {courses.map((course) => (
                      <article
                        key={course.name}
                        className="rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-4 transition hover:border-[#20b486] hover:bg-white"
                      >
                        <div className="mb-5 flex items-center justify-between gap-3">
                          <div className="grid h-11 w-11 place-items-center rounded-lg bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                            <BookOpenCheck className="h-5 w-5" />
                          </div>
                          <Badge className="rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]">
                            {course.progress}%
                          </Badge>
                        </div>
                        <p className="text-xs font-extrabold uppercase text-[#20b486]">
                          {course.area}
                        </p>
                        <h3 className="mt-2 min-h-[44px] text-base font-black leading-snug text-[#101828]">
                          {course.name}
                        </h3>
                        <p className="mt-2 truncate text-sm text-[#667085]">Next: {course.next}</p>
                        <div className="mt-5">
                          <ProgressBar value={course.progress} />
                        </div>
                      </article>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="review" className="m-0">
                  <div className="rounded-lg border border-dashed border-[#c9efe4] bg-[#f2fffb] p-5">
                    <div className="flex items-start gap-3">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#20b486]" />
                      <div>
                        <h3 className="font-black text-[#101828]">Review queue</h3>
                        <p className="mt-1 text-sm leading-6 text-[#667085]">
                          18 mistakes from the last model test are ready for focused revision.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 p-5 pb-0 sm:p-6 sm:pb-0">
              <div>
                <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                  Schedule
                </CardDescription>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Upcoming exams
                </CardTitle>
              </div>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-lg bg-[#edfff9] text-[#20b486] hover:bg-[#dff8ef] hover:text-[#1a906b]"
              >
                <Link href="/student/results" aria-label="View exam schedule">
                  <CalendarDays className="h-5 w-5" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3 p-5 pt-5 sm:p-6 sm:pt-5">
              {upcoming.map((exam) => (
                <div
                  key={exam.title}
                  className="flex min-w-0 items-center gap-4 rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-4"
                >
                  <div className="w-[58px] shrink-0 rounded-lg bg-white p-2 text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                    <p className="text-xs font-bold uppercase text-[#667085]">{exam.month}</p>
                    <p className="text-2xl font-black text-[#20b486]">{exam.date}</p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-black text-[#101828]">{exam.title}</h3>
                    <p className="mt-1 text-sm text-[#667085]">{exam.time}</p>
                  </div>
                  <Badge className="hidden shrink-0 rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9] sm:inline-flex">
                    {exam.tone}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-lg border-[#ffe1bd] bg-[#fff9f3] text-[#101828] shadow-[0_16px_32px_rgba(16,24,40,0.08)]">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#101828] text-[#f5c542]">
                <LineChart className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-black">This week&apos;s target is still reachable.</h2>
                <p className="mt-1 text-sm leading-6 text-[#667085]">
                  Complete 4 more study hours to hit the weekly goal before Friday night.
                </p>
              </div>
            </div>
            <Button
              asChild
              className="h-11 shrink-0 rounded-md bg-[#f5c542] px-5 font-extrabold text-[#101828] shadow-[0_12px_24px_rgba(245,197,66,0.22)] hover:bg-[#e8b72f]"
            >
              <Link href="/student/lessons">
                Continue learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
