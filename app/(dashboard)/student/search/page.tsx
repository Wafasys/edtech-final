"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { clearDemoUser } from "../../../../lib/demo-auth";

const FILTERS = ["All Results", "Videos", "MCQs", "Class Notes"];

export default function SmartSearchPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All Results");
  const [query, setQuery] = useState("Organic Chemistry");

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  return (
    <div className="bg-background text-on-surface min-h-screen pb-20">
      <header className="bg-white flex justify-between items-center w-full px-5 py-3 sticky top-0 z-50 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <Link href="/student/dashboard" className="active:opacity-70 transition-all duration-200">
            <span className="material-symbols-outlined text-blue-900">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold text-blue-900 tracking-tight">Admission Pro</h1>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          title="Sign out"
          className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant"
        >
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN1wnVWnIw2sURSZhanp9-I5aBkUowzjTQGpoEuSVfBrwu7cQDV5waptE-UUNAuKq-MGIfGndYDYo8u3XkyLW1OPeBH4FuxhHJm4QGFzt9u1JFe4e1StxJV7vY-Xl0K7WtCBgA6RALwBHx_rHLWdsPZps9lg4j2bPPrPSeAiloxHrUfbOUZJWeV3qetPUgq7PMtMBMjvHdflQbWwZL7SkPbzUU33sdmksu-qno6yhIsk5k_Xj_91JA21mJnYldrQN6Aqx_WTd-41Y"
          />
        </button>
      </header>

      <main className="px-container-margin pt-6 max-w-4xl mx-auto">
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline">search</span>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search physics, organic chemistry, or BUET previous years..."
            className="w-full h-tap-target-min pl-12 pr-4 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-body-md text-on-surface"
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <span className="material-symbols-outlined text-outline cursor-pointer">mic</span>
          </div>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveFilter(f)}
              className={
                activeFilter === f
                  ? "px-6 py-2 bg-primary text-on-primary rounded-full font-label-sm whitespace-nowrap active:opacity-70 transition-all"
                  : "px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm whitespace-nowrap active:opacity-70 transition-all"
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  quiz
                </span>
                MCQ Questions
              </h2>
              <span className="text-label-sm text-outline">12 matches</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-card-padding rounded-xl border border-outline-variant active:opacity-70 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded text-[10px] font-bold uppercase tracking-wider">
                    DU A-Unit 2022
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">bookmark</span>
                </div>
                <p className="font-question-text text-question-text text-on-surface mb-3">
                  Which of the following is an electrophilic addition reaction?
                </p>
                <p className="font-body-md text-on-surface-variant line-clamp-2">
                  Search snippet: ...reaction of ethene with bromine is a classic example of{" "}
                  <span className="bg-primary-fixed text-on-primary-fixed px-1">
                    electrophilic addition
                  </span>
                  . This happens due to the high electron density of the pi-bond...
                </p>
              </div>

              <div className="bg-white p-card-padding rounded-xl border border-outline-variant active:opacity-70 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant rounded text-[10px] font-bold uppercase tracking-wider">
                    Organic Basics
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">bookmark</span>
                </div>
                <p className="font-question-text text-question-text text-on-surface mb-3">
                  The hybridization of carbon in benzene is—
                </p>
                <p className="font-body-md text-on-surface-variant line-clamp-2">
                  Search snippet: ...each carbon atom in the benzene ring is{" "}
                  <span className="bg-primary-fixed text-on-primary-fixed px-1">sp2 hybridized</span>
                  , forming a delocalized system of electrons...
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>
                Video Lectures
              </h2>
              <span className="text-label-sm text-outline">4 matches</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="group relative aspect-video rounded-xl overflow-hidden bg-surface-dim active:scale-[0.98] transition-transform">
                <img
                  alt="Reaction mechanisms"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIv3dNSSJ74c-HreT-Zp_vWlrNtGL4puLfJgIvC955jswzVzkC_sNmD8Jgx5hTHXwsDuuf5KCwTqXiyLFCGZgbNe1oFwHv0T2z8vOmxcq2a9wuJEX1Tb2pyJq3ErZRNwPqnmQj6fSYONjGtISFVN0HMJUu3Z_5tBpxJinvE2WMhXiudNTr7bdwjl5zHht5ocaFxiPVc9fUvTEAkxSPdFtGegc6yZLKJtEV-5CEFyZgZraW-0qk0J-TLiN3u0urrOQjlPlxBQ6xC1I"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-label-sm truncate">Organic Chemistry: Reaction Mechanisms</p>
                  <p className="text-white/70 text-[12px]">24:15 • Dr. Rahman</p>
                </div>
              </div>

              <div className="group relative aspect-video rounded-xl overflow-hidden bg-surface-dim active:scale-[0.98] transition-transform">
                <img
                  alt="Stereochemistry"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD22yEkQKW4SZI-p0hSiu1DudG520ESLmbjESk6BIwJ6vglSlbwjaeddxAgqdALxx_QWUEPsRVqZ4CotzXxGpipdeXFQBPm_MbSAs0wwQje5vmEORH6olhZ5WzCeDSBtR9v0eFFIENOg7oeC4gSCbes2kUDv1F36Pfs5ly3lsjdKtYZlK6ayVvsbhCJrJuNPf3vjXvCwe-U8nsum_4185U4Frxji589kQA6pt2Wdb_D0cnDnK4gvpWO-2uIQZKOXTpxnjEnMgx2Nd8"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-label-sm truncate">Isomerism &amp; Stereochemistry Masterclass</p>
                  <p className="text-white/70 text-[12px]">42:08 • Prof. Karim</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  description
                </span>
                Class Notes
              </h2>
              <span className="text-label-sm text-outline">7 matches</span>
            </div>

            <div className="bg-white rounded-xl border border-outline-variant overflow-hidden">
              <div className="flex items-center gap-4 p-4 border-b border-outline-variant hover:bg-surface-container transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-on-tertiary-fixed-variant">text_snippet</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-label-sm text-on-surface truncate">
                    Nomenclature of Alkanes &amp; Alkenes
                  </h3>
                  <p className="text-on-surface-variant text-[12px] truncate">
                    Contains IUPAC rules and 50+ naming exercises...
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline">chevron_right</span>
              </div>

              <div className="flex items-center gap-4 p-4 border-b border-outline-variant hover:bg-surface-container transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-on-secondary-fixed-variant">draw</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-label-sm text-on-surface truncate">
                    Handwritten Notes: Benzene Derivatives
                  </h3>
                  <p className="text-on-surface-variant text-[12px] truncate">
                    Detailed diagrams of resonance structures...
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline">chevron_right</span>
              </div>

              <div className="flex items-center gap-4 p-4 hover:bg-surface-container transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg">
                  <span className="material-symbols-outlined text-on-primary-fixed-variant">article</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-label-sm text-on-surface truncate">
                    Quick Revision: Functional Groups
                  </h3>
                  <p className="text-on-surface-variant text-[12px] truncate">
                    One-page cheat sheet for quick memorization...
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline">chevron_right</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
