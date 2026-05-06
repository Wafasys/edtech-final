"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  CheckCircle2,
  Crown,
  Eye,
  Search,
  Sparkles,
  Target,
  Trophy,
  Users,
  X,
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

const podium = [
  {
    rank: 2,
    name: "Arpita Rahman",
    score: "98.5",
    unit: "Medical",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaJhF5zssq6gDKOZWE1meLPUtp9Uo53eJmNvpA45YuHHuyEyRlHZ4befwVhlDi1T6sxsUgAjOwjRfQneRdBa6kdRkaTPKuyq15AB6MNGQC33VgeR3pvT9F3JM7WHqVbe-TtrCv6hQL-NglY03oCdVI98XtyMLGUahG4X6_AxapBtukPKPvH5ulu0FhVDFccPXROS3I-WLGsv-TjDB9qtTdMvkwF_XK_F-q78mTBwqA06h6hmlNWQvz_dNhLJ7iDfMKXLUpqurKc3c",
    accent: "border-[#d0d5dd]",
    badge: "bg-[#f2f4f7] text-[#667085]",
    height: "md:mt-10",
  },
  {
    rank: 1,
    name: "Tanvir Ahmed",
    score: "99.2",
    unit: "Engineering",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqvwyKCvO2DYbHnUKdAq44QTsBUSLY-ylQ7WGd27nnQ28LlIWVQlHIwFYC0nGDJwMlLj-tIHqXTxwMb8ihfPEJzLWdg-sPdnwMjZ68LUQYdLkmnQzpKxQbThVt7sShPVTvFKOGix1UZPuTmaH0oidVkDUqMfT_9wlk6_AHsBDl0r4GtYAzeUUoAQPT1UmGA1uhW30_xNN9oK3evkkDp4FXdfuwUCmxBxzwGVIYDx1qTvTTovxfpgPmTb0hJOfXIJFUksHhHhGG5_Q",
    accent: "border-[#f5c542]",
    badge: "bg-[#fff9f3] text-[#b25b00]",
    height: "",
    winner: true,
  },
  {
    rank: 3,
    name: "Sifat Ullah",
    score: "97.8",
    unit: "DU A-Unit",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuMY9w__ql87uTv-fahFmW0gRFAMeaUmgvmnJwzu_g86vmcPoEmfUxbByE7NGBA241zWOPbDVbKP9bEYc10hMTMfIfEB-dtHf0YHOBCw9yquy3JXIVJioMGExhTx1LenWs_nb03s-9sWail1ECTCPQ-z_pd8dA59Nruk2XUyJfFcxJ5PwOH5PtjMWCK5Uurtod-JPnkBvDAvFaMAtHIM8_Nz5N_6ICUW-l75e0Utc69fPo-aw2hmpGiw_5lcT8gW4uHLurtpzhCiM",
    accent: "border-[#ffbd7a]",
    badge: "bg-[#fff9f3] text-[#b25b00]",
    height: "md:mt-16",
  },
];

const leaders = [
  { rank: 4, name: "Nadia Islam", unit: "Medical", score: "96.5", delta: "+4" },
  { rank: 5, name: "Zubayer Al-Mahmud", unit: "Engineering", score: "95.8", delta: "+2" },
  { rank: 6, name: "Farhana Haque", unit: "DU A-Unit", score: "94.2", delta: "-1" },
  { rank: 7, name: "Rakibul Hasan", unit: "Medical", score: "93.9", delta: "+8" },
  { rank: 8, name: "Sakib Chowdhury", unit: "Engineering", score: "93.5", delta: "0" },
  { rank: 9, name: "Sumaiya Akhter", unit: "Medical", score: "93.1", delta: "+1" },
  { rank: 10, name: "Joydeep Sen", unit: "DU A-Unit", score: "92.8", delta: "-3" },
];

const leaderboardPages = [
  leaders,
  [
    { rank: 11, name: "Maliha Tabassum", unit: "Medical", score: "92.4", delta: "+6" },
    { rank: 12, name: "Rafi Hossain", unit: "Engineering", score: "91.9", delta: "+1" },
    { rank: 13, name: "Tanjim Hasan", unit: "DU A-Unit", score: "91.3", delta: "-2" },
    { rank: 14, name: "Nusrat Jahan", unit: "Medical", score: "90.8", delta: "+3" },
    { rank: 15, name: "Fardin Ahmed", unit: "Engineering", score: "90.4", delta: "0" },
    { rank: 16, name: "Ayesha Karim", unit: "Medical", score: "89.9", delta: "+2" },
    { rank: 17, name: "Samiul Alam", unit: "DU A-Unit", score: "89.5", delta: "-1" },
  ],
  [
    { rank: 18, name: "Tasnim Rahman", unit: "Medical", score: "89.1", delta: "+5" },
    { rank: 19, name: "Omar Faruk", unit: "Engineering", score: "88.7", delta: "-4" },
    { rank: 20, name: "Jannat Ara", unit: "DU A-Unit", score: "88.2", delta: "+1" },
    { rank: 21, name: "Abrar Mahmud", unit: "Engineering", score: "87.8", delta: "0" },
    { rank: 22, name: "Nabila Noor", unit: "Medical", score: "87.4", delta: "+2" },
    { rank: 23, name: "Mahin Islam", unit: "DU A-Unit", score: "86.9", delta: "-3" },
    { rank: 24, name: "Raisa Chowdhury", unit: "Medical", score: "86.5", delta: "+4" },
  ],
];

const stats = [
  { label: "Your rank", value: "#337", detail: "Top 15%", icon: Trophy },
  { label: "Your score", value: "78.4", detail: "+6.4 this week", icon: Target },
  { label: "Candidates", value: "2,248", detail: "Active in batch", icon: Users },
];

const answerPattern = [
  {
    subject: "Chemistry",
    question: "Which reagent identifies unsaturation in hydrocarbons?",
    selected: "Bromine water",
    correct: "Bromine water",
    result: "correct",
  },
  {
    subject: "Chemistry",
    question: "The hybridization of carbon in benzene is-",
    selected: "sp2",
    correct: "sp2",
    result: "correct",
  },
  {
    subject: "Physics",
    question: "Maximum projectile range occurs at which angle?",
    selected: "30 degrees",
    correct: "45 degrees",
    result: "wrong",
  },
  {
    subject: "Physics",
    question: "Which condition gives translational equilibrium?",
    selected: "Net force is zero",
    correct: "Net force is zero",
    result: "correct",
  },
  {
    subject: "Biology",
    question: "Which organelle is responsible for ATP synthesis?",
    selected: "Mitochondria",
    correct: "Mitochondria",
    result: "correct",
  },
  {
    subject: "English",
    question: "Choose the correct synonym of 'meticulous'.",
    selected: "Careful",
    correct: "Careful",
    result: "correct",
  },
  {
    subject: "Math",
    question: "If f(x)=x^2, then f'(3) equals-",
    selected: "6",
    correct: "6",
    result: "correct",
  },
  {
    subject: "General",
    question: "Which law explains inertia?",
    selected: "Newton's Second Law",
    correct: "Newton's First Law",
    result: "wrong",
  },
];

export default function LeaderboardPage() {
  const [tab, setTab] = useState("exam");
  const [selectedPattern, setSelectedPattern] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[#f8fbfa] px-4 py-5 pb-28 text-[#101828] sm:px-6 lg:px-8 lg:py-8 md:pb-8">
      <div className="mx-auto w-full max-w-[1240px] space-y-5">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_18px_44px_rgba(16,24,40,0.07)]">
            <CardContent className="p-5 sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <Badge className="rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9]">
                    Leaderboard
                  </Badge>
                  <h1 className="mt-4 text-3xl font-black leading-tight text-[#101828] sm:text-4xl">
                    Track your rank against the strongest candidates.
                  </h1>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#646464]">
                    See where you stand this exam, compare weekly movement, and study
                    the answer analysis of top performers.
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => setSelectedPattern(podium[1])}
                  className="h-11 rounded-md bg-[#20b486] !px-6 font-extrabold text-white shadow-[0_12px_24px_rgba(32,180,134,0.22)] hover:bg-[#1a906b]"
                >
                  View analysis
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[#ffe1bd] bg-[#fff9f3] shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-5 flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#101828] text-[#f5c542]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase text-[#b25b00]">
                    Your performance
                  </p>
                  <h2 className="mt-1 text-xl font-black text-[#101828]">
                    Rank #337 this exam
                  </h2>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[85%] rounded-full bg-[#20b486]" />
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-[#667085]">
                You are in the top 15%. Solve 34 more high-yield questions to target
                top 10%.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]"
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#667085]">{stat.label}</p>
                    <p className="mt-1 text-3xl font-black text-[#101828]">{stat.value}</p>
                    <p className="mt-1 text-xs font-bold text-[#20b486]">{stat.detail}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <Tabs value={tab} onValueChange={setTab} className="space-y-5">
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <TabsList className="grid h-auto w-full grid-cols-2 gap-2 rounded-lg bg-[#f0faf7] p-1.5 lg:w-[440px]">
                  <TabsTrigger
                    value="exam"
                    className="min-h-[48px] rounded-lg !px-5 !py-3 text-sm font-black data-[state=active]:bg-white data-[state=active]:text-[#101828] data-[state=active]:shadow-[0_8px_18px_rgba(16,24,40,0.08)]"
                  >
                    This Exam
                  </TabsTrigger>
                  <TabsTrigger
                    value="weekly"
                    className="min-h-[48px] rounded-lg !px-5 !py-3 text-sm font-black data-[state=active]:bg-white data-[state=active]:text-[#101828] data-[state=active]:shadow-[0_8px_18px_rgba(16,24,40,0.08)]"
                  >
                    Weekly
                  </TabsTrigger>
                </TabsList>
                <div className="flex min-h-[48px] items-center gap-3 rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] px-4 py-2">
                  <Search className="h-4 w-4 shrink-0 text-[#98a2b3]" />
                  <span className="text-sm font-semibold text-[#667085]">
                    Filter by unit or student
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <TabsContent value="exam" className="m-0 space-y-5">
            <Podium onViewPattern={setSelectedPattern} />
            <LeaderboardTable onViewPattern={setSelectedPattern} />
          </TabsContent>

          <TabsContent value="weekly" className="m-0 space-y-5">
            <Card className="rounded-lg border-[#c9efe4] bg-[#f2fffb] shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-[#101828]">
                      Weekly movement is recalculated every Friday.
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-[#667085]">
                      Current weekly data uses the same sample leaderboard with movement
                      deltas shown in the table.
                    </p>
                  </div>
                </div>
                <Button className="h-10 rounded-md bg-[#101828] !px-5 font-extrabold text-white hover:bg-[#243044]">
                  Weekly report
                </Button>
              </CardContent>
            </Card>
            <Podium onViewPattern={setSelectedPattern} />
            <LeaderboardTable onViewPattern={setSelectedPattern} />
          </TabsContent>
        </Tabs>
      </div>
      {selectedPattern && (
        <PatternAnalysisModal
          student={selectedPattern}
          onClose={() => setSelectedPattern(null)}
        />
      )}
    </main>
  );
}

function Podium({ onViewPattern }: { onViewPattern: (student: any) => void }) {
  return (
    <section className="grid gap-4 md:grid-cols-3 md:items-end">
      {podium.map((student) => (
        <Card
          key={student.rank}
          className={`relative overflow-hidden rounded-lg border-2 ${student.accent} bg-white shadow-[0_14px_32px_rgba(16,24,40,0.07)] ${student.height} ${student.winner ? "md:scale-[1.04]" : ""}`}
        >
          <CardContent className={student.winner ? "p-6 text-center sm:p-8" : "p-6 text-center sm:p-7"}>
            <div className="mb-5 flex justify-center">
              <div
                className={
                  student.winner
                    ? "relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#f5c542] bg-[#101828] shadow-[0_18px_34px_rgba(16,24,40,0.16)]"
                    : "h-24 w-24 overflow-hidden rounded-full border-4 border-[#edfff9] bg-[#f0faf7] shadow-[0_12px_24px_rgba(16,24,40,0.08)]"
                }
              >
                <img
                  src={student.img}
                  alt={student.name}
                  className="h-full w-full object-cover"
                />
                {student.winner && (
                  <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-[#f5c542] text-[#101828] shadow-[0_8px_16px_rgba(16,24,40,0.14)]">
                    <Crown className="h-4 w-4 fill-current" />
                  </span>
                )}
              </div>
            </div>
            <Badge className={`rounded-md border-0 px-3 py-1.5 ${student.badge} hover:${student.badge}`}>
              Rank #{student.rank}
            </Badge>
            <h3 className="mt-5 text-xl font-black text-[#101828]">{student.name}</h3>
            <p className="mt-1 text-sm font-semibold text-[#667085]">{student.unit}</p>
            <p className={student.winner ? "mt-5 text-5xl font-black text-[#101828]" : "mt-5 text-4xl font-black text-[#101828]"}>
              {student.score}
            </p>
            <p className="mt-1 text-xs font-bold uppercase text-[#98a2b3]">score</p>
            <div className="mt-5">
              <Button
                type="button"
                variant="default"
                onClick={() => onViewPattern(student)}
                className="h-11 rounded-md bg-[#20b486] !px-6 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(32,180,134,0.18)] hover:bg-[#1a906b]"
              >
                Analysis
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

function LeaderboardTable({ onViewPattern }: { onViewPattern: (student: any) => void }) {
  const [page, setPage] = useState(1);
  const rows = leaderboardPages[page - 1];
  const firstRank = rows[0].rank;
  const lastRank = rows[rows.length - 1].rank;

  return (
    <Card className="overflow-hidden rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
      <CardHeader className="flex-row items-center justify-between gap-4 space-y-0 bg-[#f9fafb] p-5 sm:p-6">
        <div>
          <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
            Full ranking
          </CardDescription>
          <CardTitle className="mt-1 text-xl font-black text-[#101828]">
            Candidates {firstRank}-{lastRank}
          </CardTitle>
        </div>
        <Award className="h-5 w-5 text-[#20b486]" />
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-[#eaecf0]">
          {rows.map((student) => (
            <div
              key={student.rank}
              role="button"
              tabIndex={0}
              onClick={() => onViewPattern(student)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  onViewPattern(student);
                }
              }}
              className="grid cursor-pointer grid-cols-[56px_minmax(0,1fr)_86px] items-center gap-3 px-5 py-4 transition hover:bg-[#f8fbfa] sm:grid-cols-[64px_minmax(0,1fr)_120px_86px_132px] sm:px-6"
            >
              <div className="text-sm font-black text-[#20b486]">#{student.rank}</div>
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#edfff9] text-xs font-black text-[#1a906b]">
                  {student.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-[#101828]">{student.name}</p>
                  <p className="mt-1 truncate text-xs font-semibold text-[#667085]">
                    {student.unit}
                  </p>
                </div>
              </div>
              <Badge
                className={
                  student.delta.startsWith("+")
                    ? "hidden rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9] sm:inline-flex"
                    : "hidden rounded-md border-0 bg-[#f2f4f7] text-[#667085] hover:bg-[#f2f4f7] sm:inline-flex"
                }
              >
                {student.delta === "0" ? "No change" : student.delta}
              </Badge>
              <div className="text-right text-lg font-black text-[#101828]">{student.score}</div>
              <Button
                type="button"
                variant="outline"
                onClick={(event) => {
                  event.stopPropagation();
                  onViewPattern(student);
                }}
                className="col-span-3 h-10 rounded-md border-[#d0d5dd] bg-white !px-5 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb] sm:col-span-1"
              >
                <Eye className="h-4 w-4" />
                Analysis
              </Button>
            </div>
          ))}
        </div>
        <div className="border-t border-[#eaecf0] bg-[#f9fafb] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={page === 1}
              className="h-10 rounded-md border-[#d0d5dd] bg-white !px-4 font-extrabold text-[#667085] hover:border-[#20b486] hover:bg-[#f2fffb] hover:text-[#101828]"
            >
              Prev
            </Button>
            {[1, 2, 3].map((pageNumber) => (
              <Button
                key={pageNumber}
                type="button"
                variant={pageNumber === page ? "default" : "outline"}
                onClick={() => setPage(pageNumber)}
                className={
                  pageNumber === page
                    ? "h-10 min-w-10 rounded-md bg-[#20b486] !px-4 font-extrabold text-white hover:bg-[#1a906b]"
                    : "h-10 min-w-10 rounded-md border-[#d0d5dd] bg-white !px-4 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
                }
              >
                {pageNumber}
              </Button>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setPage((current) => Math.min(leaderboardPages.length, current + 1))
              }
              disabled={page === leaderboardPages.length}
              className="h-10 rounded-md border-[#d0d5dd] bg-white !px-4 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PatternAnalysisModal({
  student,
  onClose,
}: {
  student: any;
  onClose: () => void;
}) {
  const correctCount = answerPattern.filter((item) => item.result === "correct").length;
  const wrongCount = answerPattern.length - correctCount;
  const accuracy = Math.round((correctCount / answerPattern.length) * 100);
  const initials = student.name
    .split(" ")
    .map((part: string) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-3 backdrop-blur-sm sm:p-4">
      <Card className="max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-xl border-surface-container bg-background text-on-surface shadow-2xl">
        <CardHeader className="flex-row items-center justify-between gap-4 space-y-0 border-b border-surface-container bg-white p-4 sm:p-5">
          <div className="flex min-w-0 items-center gap-4">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-surface-container text-primary ring-2 ring-primary/10 sm:h-14 sm:w-14">
              {student.img ? (
                <img
                  src={student.img}
                  alt={student.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full w-full place-items-center text-sm font-black">
                  {initials}
                </div>
              )}
            </div>
            <div className="min-w-0">
              <CardTitle className="truncate text-lg font-black text-primary sm:text-xl">
                {student.name}
              </CardTitle>
              <CardDescription className="mt-1 text-sm font-semibold text-on-surface-variant">
                Rank #{student.rank} - {student.unit} - Score {student.score}
              </CardDescription>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-10 w-10 shrink-0 rounded-md text-on-surface-variant hover:bg-surface-container hover:text-primary"
            aria-label="Close answer analysis"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>

        <CardContent className="max-h-[calc(92vh-88px)] overflow-y-auto bg-background p-0">
          <section className="border-b border-surface-container bg-white px-5 py-7 text-center sm:px-8">
            <div className="mb-4 inline-flex rounded-full bg-primary-fixed px-4 py-1 text-label-sm font-label-sm text-on-primary-fixed">
              Leaderboard analysis
            </div>
            <div className="text-display-lg font-display-lg text-primary">
              {student.score}
              <span className="text-headline-md text-outline"> score</span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-on-surface-variant">
              <Trophy className="h-4 w-4 text-primary" />
              Rank #{student.rank} - {student.unit}
            </div>

            <div className="mt-7 text-left">
              <p className="px-1 text-label-sm font-label-sm uppercase text-outline">
                Summary
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-secondary/10 bg-secondary-container/20 p-4 text-center">
                  <span className="text-headline-md font-headline-md text-secondary">
                    {accuracy}%
                  </span>
                  <span className="mt-1 block text-label-sm font-label-sm text-on-secondary-container">
                    accuracy
                  </span>
                </div>
                <div className="rounded-xl border border-outline-variant/30 bg-surface-container p-4 text-center">
                  <span className="text-headline-md font-headline-md text-outline">24m</span>
                  <span className="mt-1 block text-label-sm font-label-sm text-on-surface-variant">
                    time
                  </span>
                </div>
                <div className="rounded-xl border border-secondary/10 bg-secondary-container/20 p-4 text-center">
                  <span className="text-headline-md font-headline-md text-secondary">
                    {correctCount}
                  </span>
                  <span className="mt-1 block text-label-sm font-label-sm text-on-secondary-container">
                    correct
                  </span>
                </div>
                <div className="rounded-xl border border-error/10 bg-error-container/20 p-4 text-center">
                  <span className="text-headline-md font-headline-md text-error">
                    {wrongCount}
                  </span>
                  <span className="mt-1 block text-label-sm font-label-sm text-on-error-container">
                    wrong
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6 px-5 py-6 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-[1fr_220px]">
              <div className="rounded-xl border border-surface-container bg-white p-card-padding">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-label-sm font-label-sm uppercase tracking-wider">
                    Insight
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface">
                  Strong recall, one conceptual trap.
                </h3>
                <p className="mt-2 text-body-md font-body-md leading-relaxed text-on-surface-variant">
                  Fast on direct recall, but loses marks when similar physics laws
                  compete. Review conceptual mechanics before the next mock.
                </p>
              </div>

              <div className="rounded-xl border border-surface-container bg-white p-card-padding">
                <p className="mb-3 text-label-sm font-label-sm uppercase text-outline">
                  Subject spread
                </p>
                <div className="space-y-2">
                  {["Chemistry", "Physics", "Biology", "English", "Math"].map((subject) => (
                    <div
                      key={subject}
                      className="flex items-center justify-between rounded-lg bg-surface-container-low px-3 py-2"
                    >
                      <span className="text-sm font-bold text-on-surface">{subject}</span>
                      <span className="text-[11px] font-bold uppercase text-secondary">
                        Reviewed
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-3 px-1">
              <h2 className="text-headline-md font-headline-md text-primary">
                Question Analysis
              </h2>
              <Badge className="rounded-md border-0 bg-white px-3 py-1.5 text-on-surface-variant hover:bg-white">
                {answerPattern.length} questions
              </Badge>
            </div>

            <div className="space-y-4">
              {answerPattern.map((item, index) => (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-xl border border-surface-container bg-white"
                >
                  <div className="p-card-padding">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <span className="text-label-sm font-label-sm text-outline">
                          Question {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="ml-2 text-label-sm font-label-sm text-outline">
                          {item.subject}
                        </span>
                      </div>
                      <span
                        className={
                          item.result === "correct"
                            ? "rounded bg-secondary-container px-2 py-0.5 text-[12px] font-bold uppercase text-secondary"
                            : "rounded bg-error-container px-2 py-0.5 text-[12px] font-bold uppercase text-error"
                        }
                      >
                        {item.result === "correct" ? "Correct" : "Incorrect"}
                      </span>
                    </div>

                    <p className="mb-6 text-question-text font-question-text text-on-surface">
                      {item.question}
                    </p>

                    <div className="space-y-3">
                      {item.result === "wrong" && (
                        <div className="flex items-center gap-3 rounded-lg border-2 border-error bg-error/5 p-4">
                          <X className="h-5 w-5 shrink-0 text-error" />
                          <div>
                            <p className="text-[11px] font-bold uppercase text-error">
                              Selected
                            </p>
                            <p className="font-medium text-on-surface">{item.selected}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-3 rounded-lg border-2 border-secondary bg-secondary/5 p-4">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                        <div>
                          <p className="text-[11px] font-bold uppercase text-secondary">
                            Correct answer
                          </p>
                          <p className="font-medium text-on-surface">{item.correct}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between border-t border-surface-container bg-surface-container-low p-4">
                      <div className="flex items-center gap-2 text-primary">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-label-sm font-label-sm uppercase tracking-wider">
                          Show Explanation
                        </span>
                      </div>
                      <span className="text-lg font-black text-primary transition-transform group-open:rotate-180">
                        +
                      </span>
                    </summary>
                    <div className="bg-surface-container-low px-card-padding pb-card-padding">
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        {item.result === "correct"
                          ? `The selected answer matches the expected concept for ${item.subject}. Keep the same pace, but review the surrounding examples to protect this mark in mixed drills.`
                          : `The selected answer misses the key ${item.subject.toLowerCase()} concept. Compare the wrong option with the correct one, then solve two similar MCQs before the next mock.`}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
