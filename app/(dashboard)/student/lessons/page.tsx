"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  Flag,
  HelpCircle,
  Image,
  Maximize2,
  MessageCircle,
  NotebookPen,
  Pause,
  Play,
  Send,
  Settings,
  Sparkles,
  Star,
  ThumbsDown,
  ThumbsUp,
  Volume2,
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

const feedbackOptions = [
  "Concept explanation too fast",
  "Video quality issues",
  "Need more practical examples",
  "Other",
];

const playlist = [
  {
    title: "Limits and continuity recap",
    time: "18:20",
    status: "Done",
  },
  {
    title: "Derivatives of trig functions",
    time: "45:00",
    status: "Playing",
  },
  {
    title: "Chain rule admission shortcuts",
    time: "32:45",
    status: "Next",
  },
  {
    title: "Mixed derivative MCQ drill",
    time: "22:10",
    status: "Locked",
  },
];

const resources = [
  {
    title: "Lecture_Notes_U4.pdf",
    detail: "4.2 MB - Updated yesterday",
    tone: "PDF",
  },
  {
    title: "Practice_Problems.pdf",
    detail: "1.8 MB - Updated 2 days ago",
    tone: "Drill",
  },
];

const timestamps = [
  ["02:10", "Limit definition"],
  ["12:45", "First principle"],
  ["24:30", "Trig derivative table"],
  ["36:10", "Admission shortcut"],
];

const initialSavedNotes = [
  {
    time: "12:45",
    body: "First principle setup before substituting h = 0.",
  },
  {
    time: "24:30",
    body: "Memorize sin, cos, tan derivative table before MCQ drill.",
  },
];

const initialAskedQuestions = [
  {
    time: "Today, 10:24 AM",
    body: "Could you explain why we keep the limit expression before substituting h = 0?",
  },
];

const lessonPoster =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCWJefcI5HzVF9tJlWruGZbM4lPNq9BzJVYnQ0FcpROzGYR8i4eWhHWotL_o368ZsdKaAh35y8JOKOmARV8FZbFZYM3U6guX35Aph2Qyx1Zp7HfiWQ2auk9Hh8li_yOgOHleo3QVvmwk2yafLvfmLzETdUM3gpZ3pGPVkA3mrgGPwDlfRGmJ9-x02n4N7DtJ7aB93kG0rymM8DVYb3JV1fnpkwtQ73RK7C4zdORTeUD4OM2EybnFdF1_ZCKoAyAPUBirNWG9Mq2CWQ";

export default function VideoLessonPage() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [noteDraft, setNoteDraft] = useState("");
  const [noteStamps, setNoteStamps] = useState(["12:45"]);
  const [savedNotes, setSavedNotes] = useState(initialSavedNotes);
  const [questionDraft, setQuestionDraft] = useState("");
  const [askedQuestions, setAskedQuestions] = useState(initialAskedQuestions);
  const [activeLessonTab, setActiveLessonTab] = useState("ask");

  useEffect(() => {
    const tab = new URLSearchParams(window.location.search).get("tab");
    if (tab === "comments") {
      setActiveLessonTab("comments");
    }
  }, []);

  function handleAddStamp() {
    const nextStamp = timestamps
      .map(([time]) => time)
      .find((time) => !noteStamps.includes(time));

    if (!nextStamp) return;
    setNoteStamps([...noteStamps, nextStamp]);
  }

  function handleSaveNote() {
    const body = noteDraft.trim();
    if (!body) return;

    setSavedNotes([{ time: noteStamps.join(", "), body }, ...savedNotes]);
    setNoteDraft("");
    setNoteStamps(["12:45"]);
  }

  function handlePostQuestion() {
    const body = questionDraft.trim();
    if (!body) return;

    setAskedQuestions([{ time: "Just now", body }, ...askedQuestions]);
    setQuestionDraft("");
  }

  return (
    <main className="min-h-screen bg-[#f8fbfa] px-4 py-5 pb-28 text-[#101828] sm:px-6 lg:px-8 lg:py-8 md:pb-8">
      <div className="mx-auto grid w-full max-w-[1240px] gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="min-w-0 space-y-5">
          <Card className="overflow-hidden rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_18px_44px_rgba(16,24,40,0.07)]">
            <CardContent className="p-0">
              <section className="relative aspect-video overflow-hidden bg-[#101828]">
                <img
                  alt="Lecture"
                  className="absolute inset-0 h-full w-full object-cover"
                  src={lessonPoster}
                />
                <div className="absolute inset-0 bg-[#101828]/28" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.18),transparent_34%)]" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <Badge className="rounded-md border-0 bg-white text-[#101828] hover:bg-white">
                    1080p
                  </Badge>
                  <Badge className="rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]">
                    Unit 4
                  </Badge>
                </div>

                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#20b486] shadow-[0_22px_50px_rgba(16,24,40,0.22)] transition hover:scale-105"
                  aria-label="Play lesson"
                >
                  <Play className="h-9 w-9 fill-current" />
                </button>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 via-black/42 to-transparent p-5">
                  <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/28">
                    <div className="h-full w-[35%] rounded-full bg-[#f5c542]" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 text-white">
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-md text-white hover:bg-white/12 hover:text-white"
                        aria-label="Pause"
                      >
                        <Pause className="h-5 w-5" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-md text-white hover:bg-white/12 hover:text-white"
                        aria-label="Volume"
                      >
                        <Volume2 className="h-5 w-5" />
                      </Button>
                      <span className="text-xs font-bold">12:45 / 45:00</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-md text-white hover:bg-white/12 hover:text-white"
                        aria-label="Settings"
                      >
                        <Settings className="h-5 w-5" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-md text-white hover:bg-white/12 hover:text-white"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <Badge className="rounded-md border-0 bg-[#edfff9] px-3 py-1.5 text-[#1a906b] hover:bg-[#edfff9]">
                    Advanced calculus
                  </Badge>
                  <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-[#101828]">
                    Derivatives of Trigonometric Functions
                  </h1>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#667085]">
                    <span>Unit 4: Calculus</span>
                    <span className="mx-1 h-1 w-1 rounded-full bg-[#d0d5dd]" />
                    <span>Dr. Ariful Islam</span>
                    <span className="mx-1 h-1 w-1 rounded-full bg-[#d0d5dd]" />
                    <span>45 min lesson</span>
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-2">
                  <Button
                    variant="outline"
                    className="h-10 rounded-md border-[#d0d5dd] bg-white !px-5 font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    1.2k
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFeedbackOpen(true)}
                    className="h-10 rounded-md border-[#d0d5dd] bg-white !px-5 font-extrabold text-[#101828] hover:border-[#ba1a1a] hover:bg-[#fff5f4] hover:text-[#ba1a1a]"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    Feedback
                  </Button>
                  <Button className="h-10 rounded-md bg-[#20b486] !px-5 font-extrabold text-white hover:bg-[#1a906b]">
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs
            value={activeLessonTab}
            onValueChange={setActiveLessonTab}
            className="space-y-5"
          >
            <Card className="overflow-hidden rounded-lg border-[#c9efe4] bg-white shadow-[0_14px_32px_rgba(16,24,40,0.06)]">
              <CardContent className="p-2 sm:p-3">
                <TabsList className="grid h-auto w-full grid-cols-2 gap-2 rounded-lg bg-[#f0faf7] p-1.5 lg:grid-cols-4">
                  {[
                    {
                      value: "ask",
                      label: "Ask Instructor",
                      detail: "Send a question",
                      icon: HelpCircle,
                    },
                    {
                      value: "comments",
                      label: "Comments",
                      detail: "24 discussions",
                      icon: MessageCircle,
                    },
                    {
                      value: "resources",
                      label: "Resources",
                      detail: "Files and drills",
                      icon: FileText,
                    },
                    {
                      value: "notes",
                      label: "Take Note",
                      detail: "At 12:45",
                      icon: NotebookPen,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="group min-h-[68px] w-full justify-start rounded-lg border border-transparent !px-4 !py-2.5 text-left data-[state=active]:border-[#c9efe4] data-[state=active]:bg-white data-[state=active]:text-[#101828] data-[state=active]:shadow-[0_10px_24px_rgba(16,24,40,0.08)] lg:!px-5"
                      >
                        <span className="flex w-full min-w-0 items-center gap-4">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)] group-data-[state=active]:bg-[#20b486] group-data-[state=active]:text-white">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-black text-[#101828]">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block truncate text-xs font-semibold text-[#667085]">
                              {item.detail}
                            </span>
                          </span>
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </CardContent>
            </Card>

            <TabsContent value="ask" className="m-0">
              <Card className="rounded-lg border-[#c9efe4] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
                <CardHeader className="p-5 pb-0 sm:p-6 sm:pb-0">
                  <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                    Instructor support
                  </CardDescription>
                  <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                    Ask about a specific step
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-5 sm:p-6 sm:pt-5">
                  <div className="rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-4">
                    <textarea
                      rows={4}
                      value={questionDraft}
                      onChange={(event) => setQuestionDraft(event.target.value)}
                      placeholder="Type your question here..."
                      className="min-h-[112px] w-full resize-none rounded-lg border border-[#d0d5dd] bg-white p-4 text-sm font-semibold text-[#101828] outline-none transition placeholder:text-[#98a2b3] focus:border-[#20b486] focus:ring-2 focus:ring-[#20b486]/20"
                    />
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 rounded-md border-[#d0d5dd] bg-white text-[#667085] hover:border-[#20b486] hover:bg-[#f2fffb] hover:text-[#20b486]"
                          aria-label="Attach image"
                        >
                          <Image className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        type="button"
                        onClick={handlePostQuestion}
                        disabled={!questionDraft.trim()}
                        className="h-10 rounded-md bg-[#20b486] !px-6 font-extrabold text-white hover:bg-[#1a906b] disabled:opacity-45"
                      >
                        Post question
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    <p className="text-xs font-extrabold uppercase text-[#667085]">
                      Submitted questions
                    </p>
                    {askedQuestions.map((question) => (
                      <div
                        key={`${question.time}-${question.body}`}
                        className="rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] px-5 py-4"
                      >
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <Badge className="rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]">
                            Sent to instructor
                          </Badge>
                          <span className="text-xs font-semibold text-[#98a2b3]">
                            {question.time}
                          </span>
                        </div>
                        <p className="text-sm font-semibold leading-6 text-[#667085]">
                          {question.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="comments" className="m-0">
              <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
                <CardHeader className="p-5 pb-0 sm:p-6 sm:pb-0">
                  <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                    Lesson discussion
                  </CardDescription>
                  <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                    Comments and instructor replies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 p-5 pt-5 sm:p-6 sm:pt-5">
                  <PinnedInstructorThread />
                  <Separator className="bg-[#eaecf0]" />
                  <div className="space-y-4">
                    <Comment
                      name="Maliha"
                      time="12 min ago"
                      body="The chain-rule shortcut at 36:10 helped. Please add one more example with tan x."
                    />
                    <Comment
                      name="Rafi"
                      time="1 hour ago"
                      body="At 12:45, why is the limit written before substituting h = 0?"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="m-0">
              <ResourcesList />
            </TabsContent>

            <TabsContent value="notes" className="m-0">
              <Card className="rounded-lg border-[#c9efe4] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
                <CardHeader className="p-6 pb-0 sm:p-7 sm:pb-0">
                  <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                    Timestamp notes
                  </CardDescription>
                  <CardTitle className="mt-1 text-2xl font-black text-[#101828]">
                    Take a note at 12:45
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-5 p-6 pt-5 sm:p-7 sm:pt-5 lg:grid-cols-[minmax(0,1fr)_300px]">
                  <div className="rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div className="mb-4 rounded-lg bg-white/70 px-3 py-3">
                      <div className="mb-2 flex flex-wrap gap-2">
                        {noteStamps.map((stamp) => (
                          <Badge
                            key={stamp}
                            className="rounded-md border border-[#c9efe4] bg-white px-3 py-1.5 font-mono text-[#1a906b] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-white"
                          >
                            {stamp}
                          </Badge>
                        ))}
                      </div>
                      <span className="block text-xs font-bold text-[#667085]">
                        Linked to current playback time
                      </span>
                    </div>
                    <textarea
                      rows={5}
                      value={noteDraft}
                      onChange={(event) => setNoteDraft(event.target.value)}
                      placeholder="Write the exact point you want to remember from this timestamp..."
                      className="min-h-[132px] w-full resize-none rounded-lg border border-[#d0d5dd] bg-white px-5 py-4 text-sm font-semibold text-[#101828] outline-none transition placeholder:text-[#98a2b3] focus:border-[#20b486] focus:ring-2 focus:ring-[#20b486]/20"
                    />
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddStamp}
                        disabled={noteStamps.length >= timestamps.length}
                        className="h-10 w-full justify-center rounded-lg border-[#c9efe4] bg-white !px-5 font-extrabold text-[#101828] shadow-[0_8px_18px_rgba(16,24,40,0.06)] hover:border-[#20b486] hover:bg-white disabled:opacity-45"
                      >
                        <Clock3 className="h-4 w-4" />
                        Add another stamp
                      </Button>
                      <Button
                        type="button"
                        onClick={handleSaveNote}
                        disabled={!noteDraft.trim()}
                        className="h-10 w-full justify-center rounded-lg bg-[#20b486] !px-5 font-extrabold text-white shadow-[0_12px_24px_rgba(32,180,134,0.22)] hover:bg-[#1a906b] disabled:opacity-45"
                      >
                        <NotebookPen className="h-4 w-4" />
                        Save note
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-extrabold uppercase text-[#667085]">
                      Saved stamps
                    </p>
                    {savedNotes.map((note) => (
                      <div
                        key={`${note.time}-${note.body}`}
                        className="rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-4"
                      >
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="font-mono text-xs font-black text-[#20b486]">
                            {note.time}
                          </span>
                          <CheckCircle2 className="h-4 w-4 text-[#20b486]" />
                        </div>
                        <p className="text-sm font-semibold leading-5 text-[#667085]">
                          {note.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <aside className="space-y-5">
          <Card className="rounded-lg border-[#ffe1bd] bg-[#fff9f3] shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-5 flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#101828] text-[#f5c542]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase text-[#b25b00]">
                    Lesson progress
                  </p>
                  <h2 className="mt-1 text-xl font-black text-[#101828]">
                    35% complete
                  </h2>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[35%] rounded-full bg-[#20b486]" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white p-4">
                  <p className="text-2xl font-black text-[#101828]">12:45</p>
                  <p className="mt-1 text-xs font-bold text-[#667085]">current time</p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <p className="text-2xl font-black text-[#101828]">32m</p>
                  <p className="mt-1 text-xs font-bold text-[#667085]">remaining</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="p-5 pb-0">
              <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                Playlist
              </CardDescription>
              <CardTitle className="mt-1 text-xl font-black text-[#101828]">
                Calculus sequence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-5">
              {playlist.map((item, index) => (
                <div
                  key={item.title}
                  className={
                    item.status === "Playing"
                      ? "rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-4"
                      : "rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-4"
                  }
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                      {item.status === "Done" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : item.status === "Playing" ? (
                        <Play className="h-4 w-4 fill-current" />
                      ) : (
                        <span className="text-xs font-black">{index + 1}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-black leading-snug text-[#101828]">
                        {item.title}
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#667085]">{item.time}</span>
                        <Badge
                          className={
                            item.status === "Playing"
                              ? "rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]"
                              : "rounded-md border-0 bg-white text-[#667085] hover:bg-white"
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
            <CardHeader className="p-5 pb-0">
              <CardDescription className="text-xs font-extrabold uppercase text-[#20b486]">
                Timestamps
              </CardDescription>
              <CardTitle className="mt-1 text-xl font-black text-[#101828]">
                Jump points
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 p-5">
              {timestamps.map(([time, label]) => (
                <button
                  key={time}
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg bg-[#f9fafb] px-3 py-2 text-left transition hover:bg-[#f2fffb]"
                >
                  <span className="text-sm font-black text-[#101828]">{label}</span>
                  <span className="font-mono text-xs font-bold text-[#20b486]">{time}</span>
                </button>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>

      {feedbackOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-md rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-2xl">
            <CardHeader className="flex-row items-start justify-between gap-4 space-y-0 p-5 pb-0">
              <div>
                <CardDescription className="text-xs font-extrabold uppercase text-[#ba1a1a]">
                  Help us improve
                </CardDescription>
                <CardTitle className="mt-1 text-xl font-black text-[#101828]">
                  What was unclear?
                </CardTitle>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setFeedbackOpen(false)}
                className="h-9 w-9 rounded-md text-[#667085] hover:bg-[#f8fbfa]"
                aria-label="Close feedback"
              >
                <Flag className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-5">
              <div className="space-y-3">
                {feedbackOptions.map((option) => (
                  <label
                    key={option}
                    className={
                      feedback === option
                        ? "flex cursor-pointer items-center gap-3 rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-3"
                        : "flex cursor-pointer items-center gap-3 rounded-lg border border-[rgba(216,216,216,0.65)] bg-white p-3 hover:bg-[#f8fbfa]"
                    }
                  >
                    <input
                      type="radio"
                      name="feedback"
                      checked={feedback === option}
                      onChange={() => setFeedback(option)}
                      className="h-4 w-4 border-[#d0d5dd] text-[#20b486] focus:ring-[#20b486]"
                    />
                    <span className="text-sm font-semibold text-[#101828]">{option}</span>
                  </label>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <Button
                  type="button"
                  onClick={() => setFeedbackOpen(false)}
                  className="h-11 rounded-md bg-[#20b486] font-extrabold text-white hover:bg-[#1a906b]"
                >
                  Submit feedback
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setFeedbackOpen(false)}
                  className="h-11 rounded-md font-extrabold text-[#667085] hover:bg-[#f8fbfa]"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}

function Comment({ name, time, body }: { name: string; time: string; body: string }) {
  return (
    <div className="flex gap-3 rounded-lg bg-[#f9fafb] p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#edfff9] text-sm font-black text-[#1a906b]">
        {name.slice(0, 1)}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-black text-[#101828]">{name}</p>
          <span className="text-xs font-semibold text-[#98a2b3]">{time}</span>
        </div>
        <p className="mt-1 text-sm leading-6 text-[#667085]">{body}</p>
      </div>
    </div>
  );
}

function PinnedInstructorThread() {
  return (
    <section className="rounded-lg border border-[#c9efe4] bg-[#f2fffb] p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase text-[#20b486]">
            Teacher replied
          </p>
          <h3 className="mt-1 text-lg font-black text-[#101828]">
            Pinned answer for this lesson
          </h3>
        </div>
        <Badge className="gap-1.5 rounded-md border-0 bg-white px-3 py-1.5 text-[#1a906b] shadow-[0_1px_2px_rgba(16,24,40,0.05)] hover:bg-white">
          <Star className="h-3.5 w-3.5 fill-current" />
          Pinned
        </Badge>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="text-sm font-black text-[#101828]">Farhan Tahir</span>
            <span className="rounded-md bg-[#f8fbfa] px-2 py-1 font-mono text-xs font-bold text-[#20b486]">
              12:40
            </span>
            <span className="text-xs font-semibold text-[#98a2b3]">Student question</span>
          </div>
          <p className="text-sm leading-6 text-[#667085]">
            Sir, in the derivation at 12:40, why do we choose this setup before
            substituting the limit? I understand the formula but not the reason behind
            the step.
          </p>
        </div>

        <article className="relative rounded-lg border border-[#20b486]/25 bg-white p-4 shadow-[0_14px_30px_rgba(16,24,40,0.08)] sm:p-5">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#101828] text-sm font-black text-white">
                AI
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-black text-[#101828]">
                    Dr. Ariful Islam
                  </span>
                  <Badge className="rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]">
                    Instructor
                  </Badge>
                </div>
                <p className="mt-1 text-xs font-semibold text-[#667085]">
                  Pinned 18 minutes ago
                </p>
              </div>
            </div>
            <CheckCircle2 className="h-5 w-5 text-[#20b486]" />
          </div>

          <div className="rounded-lg border-l-4 border-[#20b486] bg-[#f8fbfa] p-4">
            <p className="text-sm font-semibold leading-6 text-[#101828]">
              Good question. We keep the limit form until the expression is simplified
              because direct substitution would create an indeterminate form. Once the
              algebra removes the problematic term, substituting the value becomes valid.
            </p>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-6 text-[#667085]">
            <p>
              For admission MCQs, the important habit is to identify whether the limit
              needs simplification before substitution. If the denominator becomes zero,
              simplify first.
            </p>
            <p className="font-bold text-[#1a906b]">
              Key takeaway: do not substitute until the expression is no longer
              indeterminate.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#eaecf0] pt-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="h-9 rounded-md border-[#d0d5dd] bg-white !px-4 text-xs font-extrabold text-[#101828] hover:border-[#20b486] hover:bg-[#f2fffb]"
              >
                <ThumbsUp className="h-4 w-4" />
                84 Helpful
              </Button>
              <Button
                variant="ghost"
                className="h-9 rounded-md !px-4 text-xs font-extrabold text-[#667085] hover:bg-[#f8fbfa]"
              >
                Reply
              </Button>
            </div>
            <span className="text-xs font-bold uppercase text-[#98a2b3]">
              Teacher answer is pinned
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

function ResourcesList() {
  return (
    <Card className="rounded-lg border-[rgba(216,216,216,0.65)] bg-white shadow-[0_12px_28px_rgba(16,24,40,0.05)]">
      <CardContent className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
        {resources.map((resource) => (
          <article
            key={resource.title}
            className="rounded-lg border border-[rgba(216,216,216,0.65)] bg-[#f9fafb] p-4 transition hover:border-[#20b486] hover:bg-white"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                <FileText className="h-5 w-5" />
              </div>
              <Badge className="rounded-md border-0 bg-[#edfff9] text-[#1a906b] hover:bg-[#edfff9]">
                {resource.tone}
              </Badge>
            </div>
            <h3 className="truncate text-base font-black text-[#101828]">{resource.title}</h3>
            <p className="mt-2 text-sm font-semibold text-[#667085]">{resource.detail}</p>
            <Button
              variant="ghost"
              className="mt-4 h-9 rounded-md px-0 text-sm font-extrabold text-[#1a906b] hover:bg-transparent hover:text-[#1a906b]"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </article>
        ))}
        <Link
          href="/student/lessons/notes"
          className="flex min-h-[156px] flex-col justify-between rounded-lg border border-dashed border-[#c9efe4] bg-[#f2fffb] p-4 transition hover:bg-[#edfff9]"
        >
          <div>
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-white text-[#20b486] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="text-base font-black text-[#101828]">Open timestamp notes</h3>
            <p className="mt-2 text-sm font-semibold text-[#667085]">
              Save notes while watching and review them by timestamp.
            </p>
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#1a906b]">
            View notes
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}
