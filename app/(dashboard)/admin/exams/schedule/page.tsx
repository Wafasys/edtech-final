"use client";

export default function ExamSchedulePage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <header className="sticky top-0 z-30 flex justify-between items-center px-5 h-16 bg-white border-b border-slate-200">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-600 cursor-pointer md:hidden">menu</span>
          <h1 className="text-lg font-bold text-[#003087]">Exam Management</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
          <img
            alt="Admin User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ2HcgQZoEzXPStArep7GNz3vss0s-IK4Y_nXLEI7o47SGKEwiJ9zhXdDV5LWmw3do-vvnCl1YXGivbVCovf5PHgUuyDWgg8MOgWfh60fTpSThUkXe-MPussDaFRkmrgwZ_W0GVElUnaXxBkw24oHw4A1uhA1zQmPrHv2y5TUK3Nr7KGIX8Ejl7RFgwYW7rz_cZRVa5orZWneDAj8x7i3ffeIkRqviapjofZ186lEn7gBFyagRXb60cruTYXY7jhLq4L8uw4s81k8"
          />
        </div>
      </header>

      <main className="p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-display-lg font-display-lg text-primary">Exam Management</h2>
            <p className="text-body-md font-body-md text-outline">
              Configure and schedule upcoming admission tests
            </p>
          </div>
          <button className="bg-primary-container text-on-primary px-8 h-12 flex items-center gap-2 font-label-sm shadow-md hover:bg-primary transition-colors">
            <span className="material-symbols-outlined">add</span>
            Create New Exam
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <div className="bg-white border border-outline-variant p-card-padding">
              <div className="flex items-center gap-2 mb-8 border-b border-surface-container-low pb-4">
                <span className="material-symbols-outlined text-primary-container">event_note</span>
                <h3 className="text-headline-md font-headline-md text-primary">Schedule Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="md:col-span-2">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                    Exam Title
                  </label>
                  <input
                    className="w-full h-12 px-4 border border-outline-variant focus:border-primary-container focus:ring-0 text-body-md bg-white"
                    type="text"
                    defaultValue="Medical Admission Mock Test – Batch 2027"
                  />
                </div>

                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                    Subject Selection
                  </label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 border border-outline-variant focus:border-primary-container focus:ring-0 text-body-md appearance-none bg-white">
                      <option>Full Mock</option>
                      <option>Biology</option>
                      <option>Chemistry</option>
                      <option>Physics</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                      expand_more
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                    Duration (minutes)
                  </label>
                  <div className="flex">
                    <input
                      className="w-full h-12 px-4 border border-outline-variant focus:border-primary-container focus:ring-0 text-body-md bg-white"
                      type="number"
                      defaultValue="60"
                    />
                    <div className="h-12 px-4 flex items-center bg-surface-container text-outline border border-l-0 border-outline-variant text-label-sm">
                      min
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-2">
                    Exam Commencement
                  </label>
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <input
                        className="w-full h-12 px-4 pl-12 border border-outline-variant focus:border-primary-container focus:ring-0 text-body-md bg-white"
                        type="text"
                        defaultValue="June 25, 2024"
                      />
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                        calendar_today
                      </span>
                    </div>
                    <div className="relative flex-1">
                      <input
                        className="w-full h-12 px-4 pl-12 border border-outline-variant focus:border-primary-container focus:ring-0 text-body-md bg-white"
                        type="text"
                        defaultValue="10:00 AM"
                      />
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                        schedule
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-6 pt-8 border-t border-surface-container-low">
                <div className="flex items-center justify-between p-4 bg-surface-container-low">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-error">remove_circle</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm text-primary">Negative Marking</p>
                      <p className="text-xs text-outline">Deduct marks for incorrect answers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-body-md font-bold text-error">-0.25</span>
                    <button className="w-12 h-6 rounded-full bg-secondary relative">
                      <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-surface-container-low">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-container">lock</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm text-primary">Secure Locked Mode</p>
                      <p className="text-xs text-outline">Prevents tab switching and screen recording</p>
                    </div>
                  </div>
                  <button className="w-12 h-6 rounded-full bg-secondary relative">
                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
                  </button>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <button className="flex-1 h-tap-target-min bg-primary-container text-on-primary font-label-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined">save</span>
                  Save &amp; Schedule
                </button>
                <button className="flex-1 h-tap-target-min border border-primary-container text-primary-container font-label-sm flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined">content_copy</span>
                  Duplicate
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white border border-outline-variant p-6 h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-label-sm font-label-sm text-primary uppercase tracking-wider">
                  Upcoming Exams
                </h3>
                <span className="text-xs font-bold text-secondary bg-secondary-container px-2 py-1">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="group border border-surface-container-high p-4 hover:border-primary-container transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 bg-surface-container-low flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">biotech</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-outline">22 June, 2024</p>
                      <p className="text-xs font-medium text-primary">09:00 AM</p>
                    </div>
                  </div>
                  <h4 className="text-label-sm font-label-sm text-on-surface mb-1">
                    Biology Chapter Test 04
                  </h4>
                  <p className="text-xs text-outline mb-4">Cell Structure &amp; Function</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border border-white bg-slate-200 overflow-hidden">
                        <img
                          alt="student"
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB64uv9khMGA6H55gGPcIRlCyVkc4EPeJK4VG4bonRhyloCyLSp4o1thSiQcLdMARPE8bl8s0B2lTsr7U68A0xt2xtPDaFJVvGcbJCZNf7M65Ci4eofyXSFQXMFCXbH2uZhGdYRwqa8uQz6ol26fG5j6gM90eg2-Kxw_oGefSVtW3CS6qaDnGGsToWHjMDo6JtHuxAeATtc3OSwnxoARkos_aF5OU3lRIJbC5CkKOVS3K-77Go6CgKnSwgfF_6rrL26UUJVmkkMuWY"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full border border-white bg-slate-200 overflow-hidden">
                        <img
                          alt="student"
                          className="w-full h-full object-cover"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0wuka4jtB_ZNeP_mr2S-Wm96gaVlBcu2rWmnSFB7VXC4JoY29ch--Yo4_Et-XWD8iU5sFEu2pzc1EVum42eJAsiGHt_OLNeCIXCbDgsbY6G9e4UCrFKnBAdm5e8-7Ww-9DHK6qedoLcL3NnkEXRESrFRMws5yNgg7RFQ7PefYOHG0br_j15v6eKtiPKYkHW1rr5jzqEVZkq4sFmD3h4SenS_wB9f3viwhdrkFNtkVFjScHoZL9f8a4fWf0-d81Jsnb72MyYcuGfc"
                        />
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-outline">842 Enrolled</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 h-9 bg-surface-container-high text-primary font-label-sm text-[12px] flex items-center justify-center hover:bg-primary-fixed transition-colors">
                      Edit
                    </button>
                    <button className="flex-1 h-9 bg-secondary text-on-secondary font-label-sm text-[12px] flex items-center justify-center hover:opacity-90 transition-opacity">
                      Start Now
                    </button>
                  </div>
                </div>

                <div className="group border border-surface-container-high p-4 hover:border-primary-container transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 bg-surface-container-low flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">science</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-outline">24 June, 2024</p>
                      <p className="text-xs font-medium text-primary">02:30 PM</p>
                    </div>
                  </div>
                  <h4 className="text-label-sm font-label-sm text-on-surface mb-1">
                    Organic Chemistry Intro
                  </h4>
                  <p className="text-xs text-outline mb-4">Chemistry Unit 1</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px] font-bold text-primary bg-primary-fixed">
                        JS
                      </div>
                      <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px] font-bold text-secondary bg-secondary-fixed">
                        RA
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-outline">512 Enrolled</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 h-9 bg-surface-container-high text-primary font-label-sm text-[12px] flex items-center justify-center hover:bg-primary-fixed transition-colors">
                      Edit
                    </button>
                    <button className="flex-1 h-9 bg-secondary text-on-secondary font-label-sm text-[12px] flex items-center justify-center hover:opacity-90 transition-opacity">
                      Start Now
                    </button>
                  </div>
                </div>

                <div className="relative h-48 bg-primary-container overflow-hidden p-6 flex flex-col justify-end">
                  <img
                    alt="Learning"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfeJGDUdBGFenbN9PnlVDGZNHaehoj-UaIh50gq2N8odDLJZoURINLlUHCq2tHp-o-htdx1UKrnPzVxb2hq5_qypztbYTZs-nZxCQz4KkgwYlzLc1EE9VmyfMvQ50m5MG5WXT7Y6hvavECmcXsO6QwNYwX0kehLCfen8iQPfeQEgzOClld5h4QFBZ-1SpM25mv5fpqYm-eWNYf0sIf4JXzCSSbfqMZh7vK6bmfDi9y8QYIuEqjYp2B2IYu34Ssma8wvQCEabSx5aE"
                  />
                  <div className="relative z-10">
                    <p className="text-white text-label-sm font-label-sm mb-2">Monitor Live Exams</p>
                    <p className="text-white/80 text-xs mb-4">
                      View real-time student activity and server health metrics.
                    </p>
                    <button className="text-white border border-white/50 px-4 py-2 text-xs font-bold hover:bg-white/10 transition-colors">
                      Go to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
