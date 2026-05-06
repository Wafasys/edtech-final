"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bookmark,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  FileText,
  Filter,
  GraduationCap,
  HelpCircle,
  Mic,
  PlayCircle,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const quickFilters = [
  "Organic Chemistry",
  "BUET Physics",
  "Medical Biology",
  "GST English",
];

type TrackKey = "medical" | "engineering" | "du";

type McqItem = {
  source: string;
  title: string;
  snippet: string;
  meta: string;
  difficulty: string;
};

type VideoItem = {
  title: string;
  mentor: string;
  duration: string;
  progress: string;
  tone: string;
};

type NoteItem = {
  title: string;
  detail: string;
  type: string;
};

const trackData: Record<
  TrackKey,
  {
    label: string;
    shortLabel: string;
    query: string;
    context: string;
    focusTags: string[];
    totals: { results: number; videos: number; notes: number };
    difficulty: { label: string; count: string; active?: boolean }[];
    sources: { label: string; count: string; icon: React.ElementType }[];
    mcqs: McqItem[];
    videos: VideoItem[];
    notes: NoteItem[];
  }
> = {
  medical: {
    label: "Medical admission",
    shortLabel: "Medical",
    query: "Medical Organic Chemistry",
    context: "Organic is your current weak area.",
    focusTags: ["Chapter 7", "Admission pattern", "Weak area"],
    totals: { results: 23, videos: 4, notes: 7 },
    difficulty: [
      { label: "Easy", count: "18" },
      { label: "Medium", count: "23", active: true },
      { label: "Hard", count: "9" },
    ],
    sources: [
      { label: "MCQ bank", count: "12", icon: HelpCircle },
      { label: "Video lessons", count: "4", icon: PlayCircle },
      { label: "Class notes", count: "7", icon: FileText },
    ],
    mcqs: [
      {
        source: "Medical 2021",
        title: "Which reagent identifies unsaturation in hydrocarbons?",
        snippet:
          "Bromine water decolorizes in the presence of a carbon-carbon double bond under standard test conditions.",
        meta: "12 matches",
        difficulty: "High yield",
      },
      {
        source: "Organic Basics",
        title: "The hybridization of carbon in benzene is-",
        snippet:
          "Each carbon atom in the benzene ring is sp2 hybridized, forming a delocalized system of electrons.",
        meta: "8 matches",
        difficulty: "Easy",
      },
      {
        source: "Medical Model 08",
        title: "Which compound gives a positive iodoform test?",
        snippet:
          "Methyl ketones and ethanol-type structures produce the yellow iodoform precipitate in alkaline iodine.",
        meta: "5 matches",
        difficulty: "Medium",
      },
    ],
    videos: [
      {
        title: "Organic Chemistry: Reaction Mechanisms",
        mentor: "Dr. Rahman",
        duration: "24:15",
        progress: "Watched 62%",
        tone: "Recommended",
      },
      {
        title: "Isomerism and Stereochemistry Masterclass",
        mentor: "Prof. Karim",
        duration: "42:08",
        progress: "New lesson",
        tone: "Core concept",
      },
    ],
    notes: [
      {
        title: "Nomenclature of Alkanes and Alkenes",
        detail: "IUPAC rules with 50+ naming exercises",
        type: "PDF",
      },
      {
        title: "Handwritten Notes: Benzene Derivatives",
        detail: "Resonance structures and directing effects",
        type: "Scan",
      },
      {
        title: "Quick Revision: Functional Groups",
        detail: "One-page cheat sheet for fast memorization",
        type: "Sheet",
      },
    ],
  },
  engineering: {
    label: "Engineering admission",
    shortLabel: "Eng.",
    query: "BUET Physics Vector",
    context: "Mechanics and vectors need the most review.",
    focusTags: ["BUET pattern", "Vector algebra", "Mechanics"],
    totals: { results: 31, videos: 6, notes: 5 },
    difficulty: [
      { label: "Easy", count: "10" },
      { label: "Medium", count: "17" },
      { label: "Hard", count: "14", active: true },
    ],
    sources: [
      { label: "MCQ bank", count: "20", icon: HelpCircle },
      { label: "Video lessons", count: "6", icon: PlayCircle },
      { label: "Class notes", count: "5", icon: FileText },
    ],
    mcqs: [
      {
        source: "BUET 2020",
        title: "A projectile has maximum range when the launch angle is-",
        snippet:
          "For same launch speed on level ground, range is maximum when sin 2 theta reaches its maximum value.",
        meta: "20 matches",
        difficulty: "Hard",
      },
      {
        source: "KUET Model",
        title: "The dot product of two perpendicular vectors is-",
        snippet:
          "When vectors are perpendicular, cos 90 degrees is zero, so their scalar product becomes zero.",
        meta: "7 matches",
        difficulty: "Medium",
      },
      {
        source: "Engineering Drill",
        title: "Which condition gives translational equilibrium?",
        snippet:
          "The vector sum of all external forces must be zero for a rigid body to stay in translational equilibrium.",
        meta: "4 matches",
        difficulty: "High yield",
      },
    ],
    videos: [
      {
        title: "BUET Mechanics: Projectile Motion Shortcuts",
        mentor: "Imtiaz Rahman",
        duration: "36:40",
        progress: "Watched 28%",
        tone: "BUET focus",
      },
      {
        title: "Vectors for Engineering Admission",
        mentor: "Rifat Hossain",
        duration: "29:12",
        progress: "New lesson",
        tone: "Formula drill",
      },
    ],
    notes: [
      {
        title: "Vector Formula Sheet",
        detail: "Dot, cross, projection, and quick geometry rules",
        type: "Sheet",
      },
      {
        title: "Projectile Motion Problem Bank",
        detail: "40 BUET-style problems with answer keys",
        type: "PDF",
      },
      {
        title: "Newtonian Mechanics Summary",
        detail: "Force diagrams and common trap questions",
        type: "Notes",
      },
    ],
  },
  du: {
    label: "DU admission",
    shortLabel: "DU",
    query: "DU A Unit English",
    context: "English grammar is costing speed in mocks.",
    focusTags: ["DU A-Unit", "Grammar", "Timed practice"],
    totals: { results: 27, videos: 3, notes: 9 },
    difficulty: [
      { label: "Easy", count: "14" },
      { label: "Medium", count: "19", active: true },
      { label: "Hard", count: "6" },
    ],
    sources: [
      { label: "MCQ bank", count: "15", icon: HelpCircle },
      { label: "Video lessons", count: "3", icon: PlayCircle },
      { label: "Class notes", count: "9", icon: FileText },
    ],
    mcqs: [
      {
        source: "DU A-Unit 2022",
        title: "Choose the correct synonym of 'meticulous'.",
        snippet:
          "Meticulous means extremely careful and precise, especially when handling detailed work.",
        meta: "15 matches",
        difficulty: "Medium",
      },
      {
        source: "DU Grammar Drill",
        title: "Identify the incorrect part: He prefers tea than coffee.",
        snippet:
          "The correct idiom is prefer one thing to another, so 'than' should be replaced by 'to'.",
        meta: "9 matches",
        difficulty: "High yield",
      },
      {
        source: "DU Model Test",
        title: "Select the correctly punctuated sentence.",
        snippet:
          "Comma placement and semicolon usage are common DU English speed traps in timed tests.",
        meta: "3 matches",
        difficulty: "Medium",
      },
    ],
    videos: [
      {
        title: "DU English Grammar: Error Detection",
        mentor: "Sanjida Rahman",
        duration: "31:05",
        progress: "Watched 44%",
        tone: "DU focus",
      },
      {
        title: "Vocabulary That Repeats in DU A-Unit",
        mentor: "Riyad Chowdhury",
        duration: "18:22",
        progress: "New lesson",
        tone: "Speed drill",
      },
    ],
    notes: [
      {
        title: "DU English Grammar Rulebook",
        detail: "Common correction patterns with examples",
        type: "PDF",
      },
      {
        title: "Vocabulary Repeat List",
        detail: "300 words from recent DU and GST questions",
        type: "Sheet",
      },
      {
        title: "Bangla and English Mixed Revision",
        detail: "Fast review pack for A-Unit candidates",
        type: "Notes",
      },
    ],
  },
};

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-[#fff3c4] px-1 font-semibold text-[#101828]">
      {children}
    </span>
  );
}

export default function SmartSearchPage() {
  const [activeTrack, setActiveTrack] = useState<TrackKey>("medical");
  const [query, setQuery] = useState(trackData.medical.query);
  const activeData = trackData[activeTrack];

  function selectTrack(track: TrackKey) {
    setActiveTrack(track);
    setQuery(trackData[track].query);
  }

  return (
    <main className="min-h-screen bg-[#f8fbfa] px-4 py-5 pb-28 text-[#101828] sm:px-6 lg:px-8 lg:py-8 md:pb-8">
      <div className="mx-auto w-full max-w-[1240px] space-y-5">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_18px_44px_rgba(16,24,40,0.07)]">
            <CardContent className="p-5 sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <Badge className="rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9]">
                    Smart course search
                  </Badge>
                  <h1 className="mt-4 text-3xl font-black leading-tight text-[#101828] sm:text-4xl">
                    Find the exact lesson, MCQ, or note you need next.
                  </h1>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#646464]">
                    Search across lectures, model-test questions, saved explanations, and
                    class notes without leaving your study flow.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-md border-[#d0d5dd] bg-white px-5 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
                >
                  <Link href="/student/lessons">
                    Open lessons
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-7 rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-3">
                <div className="flex min-h-[56px] items-center gap-3 rounded-md bg-white px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                  <Search className="h-5 w-5 shrink-0 text-[#20b486]" />
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search physics, organic chemistry, or BUET previous years..."
                    className="h-12 min-w-0 flex-1 border-0 bg-transparent p-0 text-base font-semibold text-[#101828] outline-none placeholder:text-[#98a2b3] focus:ring-0"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-md text-[#667085] hover:bg-[#f0faf7] hover:text-[#20b486]"
                    aria-label="Voice search"
                  >
                    <Mic className="h-5 w-5" />
                  </Button>
                  <Button className="hidden h-10 rounded-md bg-[#20b486] px-4 font-extrabold text-white hover:bg-[#1a906b] sm:inline-flex">
                    Search
                  </Button>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setQuery(filter)}
                    className="rounded-md border border-[rgba(216,216,216,0.65)] bg-white px-3 py-2 text-xs font-extrabold text-[#667085] transition hover:border-[#20b486] hover:bg-[#f2fffb] hover:text-[#1a906b]"
                  >
                    {filter}
                  </button>
                ))}
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
                    Search context
                  </p>
                  <h2 className="mt-1 text-xl font-black text-[#101828]">
                    {activeData.context}
                  </h2>
                </div>
              </div>
              <div className="space-y-3">
                {activeData.focusTags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center justify-between rounded-lg bg-white p-3 shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
                  >
                    <span className="text-sm font-bold text-[#667085]">{tag}</span>
                    <CheckCircle2 className="h-4 w-4 text-[#20b486]" />
                  </div>
                ))}
              </div>
              <Separator className="my-5 bg-[#f1d4af]" />
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-2xl font-black text-[#101828]">
                    {activeData.totals.results}
                  </p>
                  <p className="text-xs font-bold text-[#667085]">results</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#101828]">
                    {activeData.totals.videos}
                  </p>
                  <p className="text-xs font-bold text-[#667085]">videos</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#101828]">
                    {activeData.totals.notes}
                  </p>
                  <p className="text-xs font-bold text-[#667085]">notes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
          <Card className="overflow-hidden rounded-lg border-[#c9efe4] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)] xl:sticky xl:top-6 xl:h-fit">
            <CardHeader className="bg-[#f2fffb] p-5">
              <CardDescription className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#20b486]">
                <Filter className="h-4 w-4" />
                Search scope
              </CardDescription>
              <CardTitle className="mt-1 text-xl font-black text-[#101828]">
                {activeData.label}
              </CardTitle>
              <p className="mt-2 text-sm font-semibold leading-5 text-[#667085]">
                Showing high-yield results from your current target track.
              </p>
            </CardHeader>
            <CardContent className="space-y-5 p-5">
              <div className="grid grid-cols-3 gap-2 rounded-lg bg-[#f8fbfa] p-1">
                {(Object.keys(trackData) as TrackKey[]).map((track) => (
                  <button
                    key={track}
                    type="button"
                    onClick={() => selectTrack(track)}
                    className={
                      track === activeTrack
                        ? "h-9 rounded-md bg-[#20b486] text-xs font-black text-white shadow-[0_8px_18px_rgba(32,180,134,0.18)]"
                        : "h-9 rounded-md text-xs font-black text-[#667085] transition hover:bg-white hover:text-[#101828]"
                    }
                  >
                    {trackData[track].shortLabel}
                  </button>
                ))}
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase text-[#667085]">
                    Difficulty
                  </p>
                  <Badge className="rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]">
                    {activeData.difficulty.find((item) => item.active)?.label ?? "All"}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {activeData.difficulty.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={
                        item.active
                          ? "rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-3 text-left"
                          : "rounded-lg border border-[rgba(216,216,216,0.65)] bg-white p-3 text-left transition hover:border-[#20b486] hover:bg-[#f2fffb]"
                      }
                    >
                      <span className="block text-sm font-black text-[#101828]">
                        {item.count}
                      </span>
                      <span className="mt-1 block text-[11px] font-bold text-[#667085]">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <Separator className="bg-[#eaecf0]" />

              <div className="space-y-2">
                {activeData.sources.map(({ label, count, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    className="flex w-full items-center gap-3 rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-3 text-left transition hover:border-[#20b486] hover:bg-[#f2fffb]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-black text-[#101828]">
                        {label}
                      </span>
                      <span className="text-xs font-semibold text-[#667085]">
                        {count} matches
                      </span>
                    </span>
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#20b486]" />
                  </button>
                ))}
              </div>

              <div className="rounded-lg bg-[#fff9f3] p-4">
                <div className="flex items-start gap-3">
                  <Star className="mt-0.5 h-4 w-4 shrink-0 text-[#b25b00]" />
                  <p className="text-sm font-semibold leading-5 text-[#667085]">
                    Prioritizing saved weak chapters and recent model-test mistakes.
                  </p>
                </div>
              </div>

              <Button
                className="h-10 w-full rounded-md bg-[#101828] font-extrabold text-white hover:bg-[#243044]"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Adjust scope
              </Button>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="min-w-0">
            <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
              <CardContent className="p-4 sm:p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-[#20b486]">
                      Results for
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-[#101828]">
                      {query || "Search results"}
                    </h2>
                  </div>
                  <TabsList className="h-auto w-full justify-start overflow-x-auto rounded-lg bg-[#f0faf7] p-1 lg:w-auto">
                    {[
                      ["all", "All"],
                      ["mcqs", "MCQs"],
                      ["videos", "Videos"],
                      ["notes", "Notes"],
                    ].map(([value, label]) => (
                      <TabsTrigger
                        key={value}
                        value={value}
                        className="rounded-md px-4 py-2 text-sm font-bold data-[state=active]:bg-white data-[state=active]:text-[#101828]"
                      >
                        {label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </CardContent>
            </Card>

            <TabsContent value="all" className="mt-5 space-y-5">
              <ResultGroup title="MCQ Questions" count={`${activeData.sources[0].count} matches`} icon={HelpCircle}>
                <div className="space-y-3">
                  {activeData.mcqs.slice(0, 2).map((item) => (
                    <McqResult key={item.title} item={item} />
                  ))}
                </div>
              </ResultGroup>
              <ResultGroup title="Video Lectures" count={`${activeData.sources[1].count} matches`} icon={PlayCircle}>
                <VideoGrid videos={activeData.videos} />
              </ResultGroup>
              <ResultGroup title="Class Notes" count={`${activeData.sources[2].count} matches`} icon={FileText}>
                <NotesList notes={activeData.notes} />
              </ResultGroup>
            </TabsContent>

            <TabsContent value="mcqs" className="mt-5">
              <ResultGroup title="MCQ Questions" count={`${activeData.sources[0].count} matches`} icon={HelpCircle}>
                <div className="space-y-3">
                  {activeData.mcqs.map((item) => (
                    <McqResult key={item.title} item={item} />
                  ))}
                </div>
              </ResultGroup>
            </TabsContent>

            <TabsContent value="videos" className="mt-5">
              <ResultGroup title="Video Lectures" count={`${activeData.sources[1].count} matches`} icon={PlayCircle}>
                <VideoGrid videos={activeData.videos} />
              </ResultGroup>
            </TabsContent>

            <TabsContent value="notes" className="mt-5">
              <ResultGroup title="Class Notes" count={`${activeData.sources[2].count} matches`} icon={FileText}>
                <NotesList notes={activeData.notes} />
              </ResultGroup>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
}

function ResultGroup({
  title,
  count,
  icon: Icon,
  children,
}: {
  title: string;
  count: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
      <CardHeader className="flex-row items-center justify-between gap-4 space-y-0 p-5 pb-0 sm:p-6 sm:pb-0">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#edfff9] text-[#20b486]">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <CardTitle className="truncate text-xl font-black text-[#101828]">
              {title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm font-semibold text-[#667085]">
              {count}
            </CardDescription>
          </div>
        </div>
        <Button
          variant="ghost"
          className="hidden h-9 rounded-md px-3 text-sm font-extrabold text-[#1a906b] hover:bg-[#edfff9] hover:text-[#1a906b] sm:inline-flex"
        >
          View all
        </Button>
      </CardHeader>
      <CardContent className="p-5 pt-5 sm:p-6 sm:pt-5">{children}</CardContent>
    </Card>
  );
}

function McqResult({
  item,
}: {
  item: {
    source: string;
    title: string;
    snippet: string;
    meta: string;
    difficulty: string;
  };
}) {
  return (
    <article className="rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-4 transition hover:border-[#20b486] hover:bg-white">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <Badge className="rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]">
            {item.source}
          </Badge>
          <Badge className="rounded-md border-0 bg-[#fff9f3] text-[#b25b00] hover:bg-[#fff9f3]">
            {item.difficulty}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 shrink-0 rounded-md text-[#98a2b3] hover:bg-[#f0faf7] hover:text-[#20b486]"
          aria-label="Save question"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
      <h3 className="text-base font-black leading-snug text-[#101828]">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#667085]">
        <Highlight>Search snippet:</Highlight> {item.snippet}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-bold text-[#98a2b3]">{item.meta}</span>
        <Button
          variant="ghost"
          className="h-9 rounded-md px-3 text-sm font-extrabold text-[#1a906b] hover:bg-[#edfff9] hover:text-[#1a906b]"
        >
          Practice now
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}

function VideoGrid({ videos }: { videos: VideoItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {videos.map((video) => (
        <article
          key={video.title}
          className="overflow-hidden rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] transition hover:border-[#20b486] hover:bg-white"
        >
          <div className="relative aspect-video bg-[#101828]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#101828_0%,#1a906b_55%,#f5c542_100%)] opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#20b486] shadow-[0_12px_24px_rgba(16,24,40,0.18)]">
                <PlayCircle className="h-7 w-7" />
              </div>
            </div>
            <Badge className="absolute left-3 top-3 rounded-md border-0 bg-white text-[#101828] hover:bg-white">
              {video.tone}
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="line-clamp-2 min-h-[44px] text-base font-black leading-snug text-[#101828]">
              {video.title}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-bold text-[#667085]">
              <span className="inline-flex items-center gap-1">
                <GraduationCap className="h-3.5 w-3.5" />
                {video.mentor}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5" />
                {video.duration}
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#20b486]">{video.progress}</span>
              <Button
                size="sm"
                className="h-8 rounded-md bg-[#20b486] px-3 font-extrabold text-white hover:bg-[#1a906b]"
              >
                Watch
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function NotesList({ notes }: { notes: NoteItem[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgba(216,216,216,0.65)]">
      {notes.map((note, index) => (
        <Link
          key={note.title}
          href="/student/lessons/notes"
          className={
            index === notes.length - 1
              ? "flex items-center gap-4 bg-[#f9fafb] p-4 transition hover:bg-[#f2fffb]"
              : "flex items-center gap-4 border-b border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-4 transition hover:bg-[#f2fffb]"
          }
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <FileText className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-black text-[#101828]">{note.title}</h3>
            <p className="mt-1 truncate text-xs font-semibold text-[#667085]">
              {note.detail}
            </p>
          </div>
          <Badge className="rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]">
            {note.type}
          </Badge>
          <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#98a2b3] sm:block" />
        </Link>
      ))}
    </div>
  );
}
