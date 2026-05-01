"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { clearDemoUser } from "../../../../../lib/demo-auth";

type Note = { time: string; body: string };

const INITIAL_NOTES: Note[] = [
  {
    time: "01:45",
    body: "The definition of derivative as the slope of the secant line as h approaches zero.",
  },
  {
    time: "02:30",
    body: "Power rule shortcut is only applicable for constant exponents.",
  },
];

export default function VideoPlayerNotesPage() {
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);
  const [draft, setDraft] = useState("");

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  function handleSaveNote() {
    const body = draft.trim();
    if (!body) return;
    setNotes([{ time: "03:12", body }, ...notes]);
    setDraft("");
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 flex justify-between items-center px-5 h-16">
        <div className="flex items-center gap-3">
          <Link href="/student/dashboard" className="active:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[#003087]">arrow_back</span>
          </Link>
          <h1 className="text-xl font-black text-[#003087] tracking-tight">Admission PRO</h1>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          title="Sign out"
          className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden"
        >
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3avy4eZuhsibClz2B1LMqap4nAOfr3l8WiY5vmOHMlzNw83lPlCigJcvFSWQAkmFwnvg_TY2VXD_eF-5mt0vxUXb3DpSGoua8pGuG8xRYlkuyHXCtd25Yyg5I8VZpJ-Q6AW91U1w7ku8E1ctbxYS7Pa4efPFIuan_PDd0SuroDuV9ShYDIIt5r8v81aiT00jKwIOUwoJEz2bFNF0czaYLukw6-Kh4-zD3dsDifN3q-xmLSRvrqlB5igRwtp28XAmcDgqlAADkqsE"
          />
        </button>
      </header>

      <main>
        <section className="w-full bg-black relative group">
          <div className="aspect-video relative flex items-center justify-center overflow-hidden">
            <img
              alt="Lecture"
              className="w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABKvDLAP_mzHF5uC7jzV4q2yhk-7dXNE9ze66eCXYyEwyl9-ON176Zqgvl58IPKf-7e_VEeWusUx1hYji1vTtgZ3zVQzS_Id8YckS4UKlMxQj4wx11UXLt30W_fDUX1eiZ4E4k7kFE_G85A49zMV1GVV7qXTtwhlvuuK5b-EqsAoCpMm5pwhlEJpE44jduz9Dssp4qECNyWznv-e3yp5xMtn3OZ88As_iOJr1dl7VD8EQcbk2_qeX7smaqJkDmg21x8W2I9pWuZr4"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <span className="bg-black/50 text-white px-2 py-1 rounded text-xs font-mono">1080p</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-6xl opacity-90 cursor-pointer">
                  play_circle
                </span>
              </div>
              <div className="space-y-2">
                <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
                  <div className="bg-[#003087] h-full w-[35%]" />
                </div>
                <div className="flex justify-between text-white text-xs font-mono">
                  <span>03:12</span>
                  <span>12:45</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-container-margin py-4 bg-white">
            <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
              Differential Calculus: Basic Derivatives &amp; Limits
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Instructor: Sabbir Rahman • Module 4
            </p>
          </div>
        </section>

        <section className="p-container-margin space-y-gutter mt-4">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setDraft((d) => d || "")}
              className="w-full h-tap-target-min bg-primary-container text-white rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">edit_note</span>
              Take Note at 03:12
            </button>

            <div className="bg-white p-card-padding rounded-xl border border-primary/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#003087]">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span className="font-label-sm text-label-sm">03:12 - Timestamped Note</span>
              </div>
              <div className="relative">
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Explain the relationship between limits and tangents here..."
                  className="w-full border border-outline-variant rounded-lg p-3 text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none min-h-[100px] resize-none"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setDraft("")}
                  className="px-4 py-2 text-primary font-bold font-label-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveNote}
                  className="px-6 py-2 bg-primary text-white rounded-lg font-bold font-label-sm"
                >
                  Save Note
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-md text-headline-md text-on-background text-lg">
                My Timestamped Notes
              </h3>
              <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-bold">
                {notes.length} NOTES
              </span>
            </div>
            <div className="space-y-3">
              {notes.map((n, i) => (
                <div
                  key={`${n.time}-${i}`}
                  className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col gap-2"
                >
                  <div className="flex justify-between items-start">
                    <button className="bg-blue-50 text-[#003087] px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 active:bg-blue-100">
                      <span className="material-symbols-outlined text-xs">play_arrow</span>
                      {n.time}
                    </button>
                    <span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer">
                      more_vert
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">{n.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
