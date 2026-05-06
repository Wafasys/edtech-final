"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Bell,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Download,
  Edit3,
  FileText,
  Flame,
  GraduationCap,
  LogOut,
  MessageSquareText,
  Play,
  Trophy,
  Video,
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
import { clearDemoUser } from "../../../../lib/demo-auth";

const profileStats = [
  { label: "Exams attempted", value: "09", detail: "+2 this month", icon: FileText },
  { label: "Videos completed", value: "42/68", detail: "62% library", icon: Video },
  { label: "Current streak", value: "7 days", detail: "Best 12 days", icon: Flame },
  { label: "Average score", value: "78%", detail: "+6.4% weekly", icon: Trophy },
];

const lessons = [
  {
    module: "Chemistry 02",
    title: "Organic Chemistry Basics",
    progress: 65,
    resume: "12:45",
    time: "18:45",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6J49e7Xs0kY4_jKtR20PtiPfgmWz5Gknd0Y88ItaukF7hOcBpHTNnCXFU3PemQIeA8K2_p7ZTJOOlC7Kaewt3uGsLUogA5nOycxNQNUIIiHsRrtNZPekNArW_JMw6Vrmzx8ZesvmDJD2-iwrCleSbQk4KwthWNRn8KLDcGFdqtZ_mzlns4TWiKXioL1ZMqRimb0xmz3fr8MskuJAt7nAtkbxEG4oWIFTmaMKMCCLHFQB-jmkYTc9frfO9vIbNoGL2YJNWjoDRjx4",
  },
  {
    module: "Biology 04",
    title: "Molecular Genetics",
    progress: 30,
    resume: "08:20",
    time: "24:10",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNns9L7czKkwBA1BGCdsENJXQ9iL5akuMFilcFdPKihyFDGGcJ1q61Uq2rwSG0HG0SSaTiPPyCq2QvKd2p9U1jGgv1TdmH_4kvPUwR5eYAgO8KWaWJvOSlZFGiE_4U-mgQ3kN9855gh3AHqrwEqbNHsYP9gHTvLMUXQI5Ovljw1Yfh1xfAGLbs1HtEmtj_VXyjpWt0df1XAqY-kl2xPUJtfjctssD3qK4D-8UwmwusOCpDkciqx-5HUzVmj99XaC4KLuRGYVvMicU",
  },
];

const subjectScores = [
  { subject: "Bangla", score: "200/300", pct: 67, tone: "bg-[#ba1a1a]", note: "Weak area" },
  { subject: "English", score: "250/300", pct: 83, tone: "bg-[#20b486]", note: "Stable" },
  { subject: "General Knowledge", score: "270/300", pct: 90, tone: "bg-[#101828]", note: "Strong" },
];

const recentResults = [
  { date: "June 18, 2024", title: "Physics Paper 01", score: "45/50", rank: "12th" },
  { date: "June 15, 2024", title: "Chemistry Full Mock", score: "82/100", rank: "45th" },
  { date: "June 10, 2024", title: "Weekly English Test", score: "18/20", rank: "4th" },
];

const files = [
  { file: "Biology_Lecture_Notes.pdf", meta: "2.4 MB - June 20" },
  { file: "Chemistry_Question_Bank.pdf", meta: "14.8 MB - June 15" },
  { file: "Summary_Sheets.pdf", meta: "1.1 MB - June 12" },
];

export default function StudentProfilePage() {
  const router = useRouter();

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-[#f8fbfa] px-4 py-5 pb-28 text-[#101828] sm:px-6 lg:px-8 lg:py-8 md:pb-8">
      <div className="mx-auto w-full max-w-[1240px] space-y-5">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          <Card className="overflow-hidden rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_18px_44px_rgba(16,24,40,0.07)]">
            <CardContent className="p-5 sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl border-4 border-[#edfff9] bg-[#f0faf7] shadow-[0_12px_24px_rgba(16,24,40,0.08)]">
                    <img
                      alt="Rahim Khan"
                      className="h-full w-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS0aQGDpbu6dcqSa9qLdxsALV-pUIZpbB4dfPlhm_DJYnFo7pB402Y5T0f17hkZtU-S_J4DRnJ5vksQVp8TcT5g0UbenXUaUsDzIZqgWPBBU36zMYYcmhKb2Qv9LbJH7Lw6Vqpc3upffZ-N-ePIGUKcOrRrHqRekGO_Ws9l3U_XszlJVZK3619cguLAiYEwGR3AUyAqSuP77TWlLdBEnZstoA4lK25iokl80r8HGdtzWnhPYfuig8dE0qaKOE888-CgPwxlk_sZlA"
                    />
                  </div>
                  <div className="min-w-0">
                    <Badge className="rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9]">
                      Medical Batch B
                    </Badge>
                    <h1 className="mt-4 text-3xl font-black leading-tight text-[#101828] sm:text-4xl">
                      Rahim Khan
                    </h1>
                    <p className="mt-2 text-sm font-semibold text-[#667085]">
                      01712345678 - Target: Medical Admission 2027
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="rounded-md border-0 bg-[#f2f4f7] px-3 py-1.5 text-[#667085] hover:bg-[#f2f4f7]">
                        Dhaka Board
                      </Badge>
                      <Badge className="rounded-md border-0 bg-[#fff9f3] px-3 py-1.5 text-[#b25b00] hover:bg-[#fff9f3]">
                        Scholarship candidate
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="h-11 rounded-md bg-[#20b486] !px-5 font-extrabold text-white hover:bg-[#1a906b]">
                    <Edit3 className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSignOut}
                    className="h-11 rounded-md border-[#ffd8d3] bg-white !px-5 font-extrabold text-[#ba1a1a] hover:bg-[#fff5f4]"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {profileStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-[#eaecf0] bg-[#f9fafb] p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-extrabold uppercase text-[#667085]">
                          {stat.label}
                        </p>
                        <Icon className="h-4 w-4 text-[#20b486]" />
                      </div>
                      <p className="mt-3 text-3xl font-black text-[#101828]">{stat.value}</p>
                      <p className="mt-1 text-xs font-bold text-[#667085]">{stat.detail}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[#c9efe4] bg-[#f2fffb] shadow-[0_18px_44px_rgba(16,24,40,0.05)]">
            <CardHeader className="p-5 sm:p-6">
              <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                Next exam
              </CardDescription>
              <CardTitle className="mt-2 text-2xl font-black text-[#101828]">
                Biology Unit Test
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5 pt-0 sm:p-6 sm:pt-0">
              <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3">
                <CalendarDays className="h-5 w-5 text-[#20b486]" />
                <div>
                  <p className="text-sm font-black text-[#101828]">June 24, 10:00 AM</p>
                  <p className="text-xs font-semibold text-[#667085]">Cell biology and genetics</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button className="h-10 rounded-md bg-[#20b486] !px-4 font-extrabold text-white hover:bg-[#1a906b]">
                  Syllabus
                </Button>
                <Button
                  variant="outline"
                  className="h-10 rounded-md border-[#c9efe4] bg-white !px-4 font-extrabold text-[#101828] hover:bg-[#edfff9]"
                >
                  <Bell className="h-4 w-4" />
                  Remind
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:p-6">
              <div>
                <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                  Continue watching
                </CardDescription>
                <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                  Resume lessons
                </CardTitle>
              </div>
              <Button
                variant="outline"
                className="h-10 rounded-md border-[#d0d5dd] bg-white !px-4 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4 p-5 pt-0 sm:p-6 sm:pt-0 xl:grid-cols-2">
              {lessons.map((lesson) => (
                <article
                  key={lesson.title}
                  className="overflow-hidden rounded-lg border border-[#eaecf0] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
                >
                  <div className="relative aspect-[16/9] bg-[#eef8f4]">
                    <img
                      alt={lesson.title}
                      className="h-full w-full object-cover"
                      src={lesson.img}
                    />
                    <span className="absolute bottom-3 right-3 rounded-md bg-[#101828] px-2.5 py-1 text-xs font-black text-white">
                      {lesson.time}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-extrabold uppercase text-[#20b486]">
                      {lesson.module}
                    </p>
                    <h3 className="mt-2 text-lg font-black text-[#101828]">
                      {lesson.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#667085]">
                      <span>Progress</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#f2f4f7]">
                      <div
                        className="h-full rounded-full bg-[#20b486]"
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                    <Button className="mt-4 h-10 w-full rounded-md bg-[#101828] !px-4 font-extrabold text-white hover:bg-[#243044]">
                      <Play className="h-4 w-4" />
                      Resume at {lesson.resume}
                    </Button>
                  </div>
                </article>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="p-5 sm:p-6">
              <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                My Q&A
              </CardDescription>
              <CardTitle className="mt-1 text-xl font-black text-[#101828]">
                Instructor replies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5 pt-0 sm:p-6 sm:pt-0">
              <div className="rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-4">
                <div className="flex items-center gap-2">
                  <Badge className="rounded-md border-0 bg-[#20b486] px-2.5 py-1 text-white hover:bg-[#20b486]">
                    Pinned
                  </Badge>
                  <p className="text-xs font-black uppercase text-[#20b486]">
                    Instructor reply
                  </p>
                </div>
                <p className="mt-3 text-sm font-black leading-6 text-[#101828]">
                  How do we determine boiling point difference between isomers?
                </p>
                <p className="mt-3 text-sm leading-6 text-[#667085]">
                  Focus on surface area and branching. More branching creates weaker
                  Van der Waals forces.
                </p>
              </div>
              <div className="rounded-lg border border-[#eaecf0] bg-white p-4">
                <div className="flex items-start gap-3">
                  <MessageSquareText className="mt-0.5 h-5 w-5 text-[#20b486]" />
                  <div>
                    <p className="text-sm font-black text-[#101828]">
                      Will cellular respiration be covered next?
                    </p>
                    <p className="mt-2 text-xs font-bold text-[#98a2b3]">
                      Awaiting instructor response
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="p-5 sm:p-6">
              <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                Exam history
              </CardDescription>
              <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                Performance by subject
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-5 p-5 pt-0 sm:p-6 sm:pt-0 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-5">
                {subjectScores.map((item) => (
                  <div key={item.subject} className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-black text-[#101828]">{item.subject}</p>
                        <p className="text-xs font-bold text-[#667085]">{item.note}</p>
                      </div>
                      <p className="text-sm font-black text-[#101828]">{item.score}</p>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#f2f4f7]">
                      <div
                        className={`h-full rounded-full ${item.tone}`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {recentResults.map((result) => (
                  <button
                    key={result.title}
                    type="button"
                    className="flex w-full items-center justify-between gap-3 rounded-lg border border-[#eaecf0] bg-[#f9fafb] px-4 py-3 text-left transition hover:border-[#20b486] hover:bg-[#f2fffb]"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#98a2b3]">{result.date}</p>
                      <p className="mt-1 text-sm font-black text-[#101828]">{result.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-[#20b486]">{result.score}</p>
                      <p className="text-xs font-bold text-[#667085]">Rank {result.rank}</p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="p-5 sm:p-6">
              <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                Downloads
              </CardDescription>
              <CardTitle className="mt-1 text-xl font-black text-[#101828]">
                Saved materials
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-5 pt-0 sm:p-6 sm:pt-0">
              {files.map((item) => (
                <div
                  key={item.file}
                  className="flex items-center justify-between gap-3 rounded-lg border border-[#eaecf0] bg-[#f9fafb] px-4 py-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#fff5f4] text-[#ba1a1a]">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-[#101828]">{item.file}</p>
                      <p className="mt-1 text-xs font-bold text-[#667085]">{item.meta}</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 shrink-0 rounded-md text-[#20b486] hover:bg-[#edfff9] hover:text-[#1a906b]"
                    aria-label={`Download ${item.file}`}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-lg border-[#c9efe4] bg-[#f2fffb] shadow-[0_12px_28px_rgba(16,24,40,0.04)]">
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-[#20b486]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-black text-[#101828]">
                  Weekly goal is still reachable.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#667085]">
                  Complete 4 more study hours before Friday night to stay on track.
                </p>
              </div>
            </div>
            <Button className="h-10 rounded-md bg-[#20b486] !px-5 font-extrabold text-white hover:bg-[#1a906b]">
              <BookOpenCheck className="h-4 w-4" />
              Start study plan
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
