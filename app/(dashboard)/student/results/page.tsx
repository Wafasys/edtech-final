"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearDemoUser } from "../../../../lib/demo-auth";

export default function ResultAnalysisPage() {
  const router = useRouter();

  function handleSignOut() {
    clearDemoUser();
    router.push("/login");
  }

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <header className="bg-white text-blue-900 border-b border-slate-100 flex justify-between items-center w-full px-5 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/student/dashboard" className="active:opacity-70 transition-all duration-200">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold text-blue-900">Admission Pro</h1>
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGUlhG5lupqsntjBmi952IFpFFKB-ufw2me4gKTzHvLtVPE0gne7OYkJW1Gt1GvckqWpA5pZrFDdNgFn8T3tLIt29Idoeh-js4C1603-ISCd2V0uu5vKBa4bPOUJYhQa4LGSLvGQEeJN6nxqD5sH6nzNoQfNH0IHDJUbjb-YgBQ0AGyMIRmeaZO89yPLZ_aQjE8bKw8wM-gyiPlCLM1JSTl-Y0qtrXaSuRN99Wu7z3qeyVe6AhynN_gvjKxgQR9ZAQz-8gW4W7jfQ"
          />
        </button>
      </header>

      <main className="max-w-2xl mx-auto pb-24">
        <section className="px-container-margin py-8 text-center bg-white border-b border-surface-container">
          <div className="inline-block p-1 px-4 mb-4 rounded-full bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm">
            Engineering Model Test #42
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-display-lg font-display-lg text-primary">
              42.5<span className="text-outline text-headline-md">/50</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-medium">
              <span className="material-symbols-outlined text-primary">leaderboard</span>
              Current Rank: <span className="text-primary font-bold">337th</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-gutter mt-8">
            <div className="flex flex-col items-center p-4 rounded-xl bg-secondary-container/20 border border-secondary/10">
              <span className="text-secondary font-bold text-headline-md">44</span>
              <span className="text-label-sm font-label-sm text-on-secondary-container">Correct</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-error-container/20 border border-error/10">
              <span className="text-error font-bold text-headline-md">5</span>
              <span className="text-label-sm font-label-sm text-on-error-container">Incorrect</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-surface-container border border-outline-variant/30">
              <span className="text-outline font-bold text-headline-md">1</span>
              <span className="text-label-sm font-label-sm text-on-surface-variant">Skipped</span>
            </div>
          </div>
        </section>

        <section className="px-container-margin py-8 space-y-6">
          <h2 className="text-headline-md font-headline-md text-primary px-2">Question Analysis</h2>

          <div className="bg-white border border-surface-container rounded-xl overflow-hidden">
            <div className="p-card-padding">
              <div className="flex justify-between items-start mb-4">
                <span className="text-label-sm font-label-sm text-outline">Question 01</span>
                <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-error-container text-error uppercase">
                  Incorrect
                </span>
              </div>
              <p className="text-question-text font-question-text text-on-surface mb-6">
                Which of the following describes the Heisenberg Uncertainty Principle correctly?
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-lg border-2 border-error bg-error/5">
                  <span className="material-symbols-outlined text-error">close</span>
                  <span className="font-medium text-on-surface">
                    It is possible to know both position and momentum exactly.
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg border-2 border-secondary bg-secondary/5">
                  <span className="material-symbols-outlined text-secondary">check</span>
                  <span className="font-medium text-on-surface">
                    The product of uncertainties in position and momentum is ≥ h/4π.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-card-padding border-t border-surface-container">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                <span className="font-bold text-label-sm uppercase tracking-wider">Detailed Explanation</span>
              </div>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                The Heisenberg Uncertainty Principle states that the more precisely the position of
                some particle is determined, the less precisely its momentum can be predicted from
                initial conditions, and vice versa. This is a fundamental limit in quantum mechanics,
                not a measurement error.
              </p>
              <div className="mt-4 p-3 bg-white rounded border border-outline-variant/30 text-label-sm italic text-on-surface-variant">
                Reference: Physics Vol II, Chapter 13: Quantum Mechanics.
              </div>
            </div>
          </div>

          <div className="bg-white border border-surface-container rounded-xl overflow-hidden">
            <div className="p-card-padding">
              <div className="flex justify-between items-start mb-4">
                <span className="text-label-sm font-label-sm text-outline">Question 02</span>
                <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-secondary-container text-secondary uppercase">
                  Correct
                </span>
              </div>
              <p className="text-question-text font-question-text text-on-surface mb-6">
                In organic chemistry, what is the primary product of the Kolbe-Schmitt reaction?
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-lg border-2 border-secondary bg-secondary/5">
                  <span className="material-symbols-outlined text-secondary">check</span>
                  <span className="font-medium text-on-surface">Salicylic Acid</span>
                </div>
              </div>
            </div>
            <details className="group">
              <summary className="flex items-center justify-between p-4 bg-surface-container-low border-t border-surface-container cursor-pointer list-none">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-[20px]">menu_book</span>
                  <span className="font-bold text-label-sm uppercase tracking-wider">Show Explanation</span>
                </div>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-card-padding pb-card-padding bg-surface-container-low">
                <p className="text-body-md font-body-md text-on-surface-variant">
                  The Kolbe–Schmitt reaction is a carboxylation chemical reaction that proceeds by
                  heating sodium phenoxide with carbon dioxide under pressure, then treating the
                  product with sulfuric acid. The final product is an aromatic hydroxy acid which is
                  known as Salicylic Acid.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-white border border-surface-container rounded-xl overflow-hidden opacity-80">
            <div className="p-card-padding">
              <div className="flex justify-between items-start mb-4">
                <span className="text-label-sm font-label-sm text-outline">Question 03</span>
                <span className="px-2 py-0.5 rounded text-[12px] font-bold bg-surface-container-highest text-on-surface-variant uppercase">
                  Skipped
                </span>
              </div>
              <p className="text-question-text font-question-text text-on-surface mb-6">
                Calculate the limit of (sin x)/x as x approaches zero.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 rounded-lg border border-outline-variant bg-surface-container-lowest">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-outline text-outline text-[12px]">
                    A
                  </span>
                  <span className="font-medium text-on-surface">1</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-4 text-center">
              <button className="text-primary font-bold text-label-sm hover:underline">
                View solution to learn
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
