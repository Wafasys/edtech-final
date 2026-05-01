"use client";

const STUDENTS = [
  { roll: 102, name: "Rahim Khan", initials: "RK", initialsBg: "bg-primary-fixed", initialsText: "text-primary", progress: 45, total: 50, status: "in_progress" },
  { roll: 105, name: "Fatima Ahmed", initials: "FA", initialsBg: "bg-secondary-fixed", initialsText: "text-secondary", progress: 50, total: 50, status: "submitted" },
  { roll: 112, name: "Arif Islam", initials: "AI", initialsBg: "bg-primary-fixed", initialsText: "text-primary", progress: 32, total: 50, status: "in_progress" },
];

export default function ExamMonitorPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-30 flex justify-between items-center px-5 h-16 bg-white border-b border-slate-200">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#003087] cursor-pointer md:hidden">menu</span>
          <h1 className="text-base font-semibold text-[#003087]">Live Exam Monitoring</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-primary">System Admin</p>
            <p className="text-[10px] text-outline">Active Now</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center border border-outline-variant overflow-hidden">
            <img
              alt="Admin"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0g962RpGiDHxiFvrdNYZL3ddbaQZ4XGZsDvsrHit0tXNpVs0-1innJfO6xfSEpVqoHKbX1kbbAo6wxE9F24STBnguIaUMkK7TWUd2n9Wr2Qpvf-HSOMxtEdImtrX6syRtxJYwBOndzns5H_36eiwZOGTspOu1IGH4q8queVdfJPhDVypqfVbZDuCoAGB-UhHAN7bCgemqgLZNXnYl0NuiseV_7PK3OSahXBXWUVx2EI1x87dk1fl-xRUV8pj1faNnqrh1gEb7v6E"
            />
          </div>
        </div>
      </header>

      <main className="pt-8 pb-12 px-container-margin">
        <section className="mb-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white p-card-padding rounded border border-[#E9ECEF] shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-error rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider uppercase">Live Now</span>
              </div>
              <h2 className="font-display-lg text-display-lg text-primary mb-2">
                Live Exam – Medical Admission Mock Test
              </h2>
              <p className="text-outline font-body-md max-w-2xl">
                Real-time surveillance and status tracking for the 2024 Biology Mock Series. All
                security protocols active.
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 h-tap-target-min px-8 bg-tertiary-container text-white font-label-sm rounded-lg hover:bg-tertiary transition-colors shadow-lg shadow-red-900/10">
              <span className="material-symbols-outlined">cancel</span>
              End Exam for All
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
          <div className="bg-white p-card-padding rounded border border-[#E9ECEF] flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">groups</span>
            </div>
            <div>
              <p className="text-outline text-xs uppercase font-bold tracking-widest">Total Registered</p>
              <p className="text-2xl font-black text-primary">87</p>
            </div>
          </div>
          <div className="bg-white p-card-padding rounded border border-[#E9ECEF] flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary">play_arrow</span>
            </div>
            <div>
              <p className="text-outline text-xs uppercase font-bold tracking-widest">Currently Active</p>
              <p className="text-2xl font-black text-secondary">65</p>
            </div>
          </div>
          <div className="bg-white p-card-padding rounded border border-[#E9ECEF] flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-outline">check_circle</span>
            </div>
            <div>
              <p className="text-outline text-xs uppercase font-bold tracking-widest">Total Submitted</p>
              <p className="text-2xl font-black text-on-surface">22</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-card-padding rounded border border-[#E9ECEF] mb-gutter">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">insights</span>
              Overall Completion
            </h3>
            <span className="font-label-sm text-secondary">74.7% Progress</span>
          </div>
          <div className="w-full h-4 bg-surface-container-low rounded-full overflow-hidden flex">
            <div className="h-full bg-secondary" style={{ width: "25.3%" }} />
            <div className="h-full bg-primary" style={{ width: "49.4%" }} />
          </div>
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-xs font-medium text-outline">Submitted (22)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-medium text-outline">In Progress (65)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-surface-container-high" />
              <span className="text-xs font-medium text-outline">Not Started (0)</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <section className="lg:col-span-7 bg-white rounded border border-[#E9ECEF] overflow-hidden flex flex-col">
            <div className="p-card-padding border-b border-[#E9ECEF] flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-label-sm text-primary uppercase tracking-widest">Active Candidates</h3>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-lg">search</span>
                <input
                  className="border-none text-sm focus:ring-0 w-32 bg-transparent outline-none"
                  placeholder="Search Roll..."
                  type="text"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low">
                  <tr>
                    <th className="px-6 py-4 font-label-sm text-outline uppercase text-[11px]">Roll</th>
                    <th className="px-6 py-4 font-label-sm text-outline uppercase text-[11px]">Student Name</th>
                    <th className="px-6 py-4 font-label-sm text-outline uppercase text-[11px]">Progress</th>
                    <th className="px-6 py-4 font-label-sm text-outline uppercase text-[11px]">Status</th>
                    <th className="px-6 py-4 font-label-sm text-outline uppercase text-[11px] text-right">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9ECEF]">
                  {STUDENTS.map((s) => {
                    const pct = (s.progress / s.total) * 100;
                    const submitted = s.status === "submitted";
                    return (
                      <tr key={s.roll} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="px-6 py-4 font-bold text-primary">{s.roll}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${s.initialsBg} ${s.initialsText} text-[10px] flex items-center justify-center font-black`}>
                              {s.initials}
                            </div>
                            <span className="font-medium text-on-surface">{s.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <span className={`text-xs font-bold ${submitted ? "text-secondary" : "text-primary"}`}>
                              {s.progress}/{s.total}
                            </span>
                            <div className="w-24 h-1.5 bg-slate-100 rounded-full">
                              <div
                                className={`h-full rounded-full ${submitted ? "bg-secondary" : "bg-primary"}`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={
                              submitted
                                ? "px-3 py-1 bg-secondary-container text-secondary text-[10px] font-bold rounded uppercase"
                                : "px-3 py-1 bg-blue-50 text-primary text-[10px] font-bold rounded uppercase"
                            }
                          >
                            {submitted ? "Submitted" : "In Progress"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="material-symbols-outlined text-outline group-hover:text-primary cursor-pointer">
                            visibility
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section className="lg:col-span-5 flex flex-col gap-gutter">
            <div className="bg-white rounded border border-[#E9ECEF] flex-1 flex flex-col shadow-lg shadow-primary/5">
              <div className="p-4 border-b border-[#E9ECEF] bg-primary flex justify-between items-center rounded-t">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <h3 className="font-label-sm text-white uppercase text-xs tracking-widest">
                    Live Preview: Roll 102
                  </h3>
                </div>
                <span className="material-symbols-outlined text-white/70">fullscreen</span>
              </div>

              <div className="p-6 bg-[#F8F9FA] flex-1 rounded-b">
                <div className="bg-white border border-[#E9ECEF] rounded-lg shadow-sm overflow-hidden flex flex-col min-h-[400px]">
                  <div className="px-6 py-4 border-b border-[#E9ECEF] bg-white flex justify-between items-center">
                    <span className="text-xs font-bold text-primary">Question 46/50</span>
                    <div className="flex items-center gap-2 px-3 py-1 bg-tertiary-fixed rounded">
                      <span className="material-symbols-outlined text-tertiary text-sm">schedule</span>
                      <span className="text-xs font-black text-tertiary">14:52</span>
                    </div>
                  </div>

                  <div className="p-8 flex-1">
                    <h4 className="font-question-text text-question-text text-on-surface mb-8">
                      Which organelle is the powerhouse of the cell?
                    </h4>
                    <div className="space-y-4">
                      {[
                        { letter: "A", text: "Ribosome", selected: false },
                        { letter: "B", text: "Golgi Body", selected: false },
                        { letter: "C", text: "Mitochondria", selected: true },
                        { letter: "D", text: "Lysosome", selected: false },
                      ].map((opt) => (
                        <label
                          key={opt.letter}
                          className={
                            opt.selected
                              ? "flex items-center p-4 border-2 border-primary-fixed bg-blue-50/50 rounded-lg cursor-pointer"
                              : "flex items-center p-4 border border-[#E9ECEF] rounded-lg hover:border-primary-fixed-dim transition-colors cursor-pointer group"
                          }
                        >
                          <div
                            className={
                              opt.selected
                                ? "w-6 h-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center mr-4"
                                : "w-6 h-6 rounded-full border-2 border-[#E9ECEF] flex items-center justify-center mr-4 group-hover:border-primary"
                            }
                          >
                            <span
                              className={
                                opt.selected
                                  ? "text-[10px] font-bold text-white"
                                  : "text-[10px] font-bold text-outline group-hover:text-primary"
                              }
                            >
                              {opt.letter}
                            </span>
                          </div>
                          <span
                            className={
                              opt.selected
                                ? "font-body-md font-semibold text-primary"
                                : "font-body-md text-on-surface-variant"
                            }
                          >
                            {opt.text}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-surface border-t border-[#E9ECEF] flex justify-between">
                    <button className="px-6 py-2 border border-[#E9ECEF] text-outline font-label-sm rounded bg-white">
                      Previous
                    </button>
                    <button className="px-6 py-2 bg-primary text-white font-label-sm rounded shadow-md">
                      Next Question
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 justify-center">
                  <span className="material-symbols-outlined text-outline text-sm">lock</span>
                  <span className="text-[10px] text-outline uppercase font-bold tracking-tighter">
                    Encrypted Student View Session
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-tertiary-fixed text-on-tertiary-fixed-variant p-4 rounded border border-tertiary-container flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary">warning</span>
              <div>
                <p className="font-bold text-xs">Security Alert</p>
                <p className="text-[11px] leading-tight">
                  Student (Roll: 112) has switched browser tabs twice. Auto-warning has been issued
                  to their screen.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
