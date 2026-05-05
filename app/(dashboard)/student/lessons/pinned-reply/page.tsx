import Link from "next/link";

const questionActions = [
  { icon: "thumb_up", label: "12" },
  { icon: "reply", label: "Reply" },
];

export default function PinnedInstructorReplyPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 flex justify-between items-center px-5 h-16">
        <div className="flex items-center gap-4">
          <Link href="/student/lessons" className="active:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[#003087]">arrow_back</span>
          </Link>
          <h1 className="text-xl font-black text-[#003087] tracking-tight">Admission PRO</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="active:opacity-80 transition-opacity" aria-label="Search">
            <span className="material-symbols-outlined text-slate-600">search</span>
          </button>
          <img
            alt="User Profile"
            className="w-8 h-8 rounded-full border-2 border-primary-container object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCobTLKQkgzFdr1o53NvHIuQ-LGpfvuh12_GLgkWVqkTda7WoicartPFpXssnPZx1HnW3DUEJSmfzSsDvYMAhZNQikjMzbpHRY2xQtoOHj7Hk76qLXYgC3YvgxSfibiFqdkEOQjeCH59MkFd5isbALhPZy-9oScVeZ48dGeU7nYK7PxzP-xF6zFiTtwtZLYoCCClva0I3_93E5QITCGmNo0zszXyNkOUfD_-UMSA9CM2nQZ-12drKGmBqNPwOnRuj_OF_0l9-iXUGc"
          />
        </div>
      </header>

      <main className="pb-24 max-w-5xl mx-auto">
        <section className="w-full bg-black aspect-video relative overflow-hidden md:rounded-xl md:mt-4 shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-slate-900/40 absolute inset-0" />
            <img
              alt="Video Placeholder"
              className="w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvEXARIE0QATFTL62Fi7ZHUzEoL4Ae3zBtcVElD0hIo3tWlQO069fnfIEUPpBmHwlk2eFMcdJAl8LIIyW0IYPKcsPiIBBMdOAgiF6R4F5L9T-G2YPVlmP8yISLfacmq6uVkXOu6ieZu6_rpMvjmh4--3jdYvAEmn8q7ST0iTvILv0sSTL9bKMmWf4w1xjJQRtMNeZbgvtK40uAXSzf-7i3zJQwMkzZDPwQF0xH5tv4h460y_6hI4uEPwQCNsKRQNduqu4Gj_1sVmc"
            />
            <button className="z-10 bg-primary/90 text-white p-6 rounded-full shadow-2xl hover:scale-105 transition-transform">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
            </button>
          </div>
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2">
            <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-[#003087] w-[45%]" />
            </div>
            <div className="flex justify-between items-center text-white text-xs font-semibold">
              <span>12:45 / 28:00</span>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-sm">settings</span>
                <span className="material-symbols-outlined text-sm">fullscreen</span>
              </div>
            </div>
          </div>
        </section>

        <div className="px-container-margin py-6">
          <h2 className="font-headline-md text-headline-md text-primary mb-2">
            Advanced Electromagnetism: Gauss&apos;s Law Applications
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1 bg-secondary-container/30 px-2 py-1 rounded text-secondary font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-xs">school</span>
              Physics
            </div>
            <div className="text-outline text-label-sm font-label-sm">45 mins ago</div>
          </div>

          <section className="mt-8">
            <div className="flex items-center justify-between mb-6 border-b border-surface-container-high pb-4">
              <h3 className="font-headline-md text-headline-md flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">quiz</span>
                Student Q&amp;A
              </h3>
              <button className="text-primary font-label-sm text-label-sm underline">
                View all questions
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <img
                  alt="Student profile"
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8FB2UXzZA7pAgO-5IteMIMo6Mwkc6dF-Lmr3oairSO8P7qgNhTXdDTi14ZNLdhAT5isJayGeBYxeRSV-J1xrX9CIetnXf3heZCSu_T7NsnKWTjZxIyJd3PtZcpnE1Q7TATYV7QBC3VO-2R_uI9CaWsHC5wf3PblqOWiWUO0jkIel8hwRVyyHQClNHOcAge5AYpc3xFpDnvAyhYv6ZVQhlcd74AD6VzoKhsrE0AAY6PzANyzpO10wkAhh--QPj3dJBkkdORISQaNo"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-bold text-on-surface">Farhan Tahir</span>
                    <span className="text-outline text-xs">Aspirant | 04:12</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Sir, in the derivation at 12:40, why do we assume the Gaussian surface to be a
                    cylinder rather than a sphere for an infinite line charge? Does it affect the
                    final flux calculation?
                  </p>
                  <div className="mt-3 flex gap-4 text-outline">
                    {questionActions.map((action) => (
                      <button
                        key={action.icon}
                        className="flex items-center gap-1 text-xs hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-sm">{action.icon}</span>
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative pl-6 md:pl-12">
                <div className="absolute left-[20px] md:left-[44px] top-0 bottom-0 w-0.5 bg-surface-container-highest" />
                <article className="bg-white border-2 border-primary-container/20 rounded-xl p-card-padding shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary-container text-white px-4 py-1.5 rounded-bl-xl flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      push_pin
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Pinned Answer
                    </span>
                  </div>

                  <div className="flex gap-4 pt-8 sm:pt-0">
                    <div className="relative shrink-0">
                      <img
                        alt="Instructor Profile"
                        className="w-12 h-12 rounded-full border-2 border-primary-container object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtbGxlX2wEnx6na7fgtqJGsvLxf94cyiO7zUOaptkQT56ClAvY4rvj2RG4ejRKX5HC6Yv2V_tzNxI5fPoXdHfTf1EOIYOQ7XOun7OuF0V7oxH2sRjiTJDE06ujIAmD9sYvyTmBspLi5uCZFqUhR5zVDlo5RfZ5Eh_3AsbashefsZIEpiUvUioedEWUUeLwb4R4n04pRCdQoxTZDf1zInHYoJ-vqHkkLPg7f2OMvc08ha3Lsjrsw69U-f-OKkDTlJ1lGIQiBUjxH2k"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-0.5 border-2 border-white">
                        <span
                          className="material-symbols-outlined text-[10px] text-white"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          verified
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-bold text-primary">Dr. Ahsan Habib</span>
                        <span className="bg-primary-container/10 text-primary-container text-[10px] px-2 py-0.5 rounded-full font-bold">
                          INSTRUCTOR
                        </span>
                      </div>
                      <div className="bg-blue-50/50 rounded-lg p-4 mb-4 border-l-4 border-primary">
                        <p className="font-body-md text-on-surface leading-relaxed italic">
                          &quot;Excellent question, Farhan. This is a common point of confusion in
                          Electrostatics.&quot;
                        </p>
                      </div>
                      <div className="font-body-md text-on-surface-variant space-y-4">
                        <p>
                          We choose a <strong>cylindrical Gaussian surface</strong> specifically
                          because of the <strong>symmetry</strong> of the infinite line charge.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>For an infinite line, the electric field is radial.</li>
                          <li>
                            A sphere would not maintain a constant angle between the field lines and
                            the surface normal at every point.
                          </li>
                          <li>
                            In a cylinder, the field is perpendicular to the curved surface and
                            parallel to the end caps, making the integral{" "}
                            <code className="bg-slate-100 px-1 rounded text-primary">E.dA</code>{" "}
                            much simpler to evaluate as{" "}
                            <code className="bg-slate-100 px-1 rounded text-primary">
                              E(2*pi*rL)
                            </code>
                            .
                          </li>
                        </ul>
                        <p className="text-secondary font-bold flex items-center gap-2">
                          <span className="material-symbols-outlined">lightbulb</span>
                          Key Takeaway: Symmetry dictates the shape of the Gaussian surface to
                          ensure E is constant and can be taken out of the integral.
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-4 border-t border-surface-container pt-4 flex-wrap">
                        <div className="flex gap-4">
                          <button className="flex items-center gap-1 text-primary font-bold text-xs">
                            <span
                              className="material-symbols-outlined text-sm"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              thumb_up
                            </span>
                            84 Helpful
                          </button>
                          <button className="flex items-center gap-1 text-outline font-bold text-xs">
                            <span className="material-symbols-outlined text-sm">share</span>
                            Share
                          </button>
                        </div>
                        <span className="text-outline text-[10px] uppercase tracking-widest">
                          Revised by Instructor
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="mt-10 p-card-padding bg-surface-container rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center text-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                <span className="material-symbols-outlined text-3xl">add_comment</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Still confused about this topic?</h4>
                <p className="text-label-sm text-outline">
                  Our instructors usually reply within 2 hours during class hours.
                </p>
              </div>
              <Link
                href="/student/lessons/ask"
                className="bg-primary text-white px-8 h-tap-target-min rounded-full font-bold shadow-lg active:scale-95 transition-transform inline-flex items-center justify-center"
              >
                Ask a Question
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
