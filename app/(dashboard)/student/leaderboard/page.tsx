"use client";

import Link from "next/link";
import { useState } from "react";

const PODIUM = [
  {
    rank: 2,
    name: "Arpita Rahman",
    score: "98.5/100",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaJhF5zssq6gDKOZWE1meLPUtp9Uo53eJmNvpA45YuHHuyEyRlHZ4befwVhlDi1T6sxsUgAjOwjRfQneRdBa6kdRkaTPKuyq15AB6MNGQC33VgeR3pvT9F3JM7WHqVbe-TtrCv6hQL-NglY03oCdVI98XtyMLGUahG4X6_AxapBtukPKPvH5ulu0FhVDFccPXROS3I-WLGsv-TjDB9qtTdMvkwF_XK_F-q78mTBwqA06h6hmlNWQvz_dNhLJ7iDfMKXLUpqurKc3c",
    barCls: "bg-slate-300",
    rankCls: "text-slate-400",
    avatarSize: "w-16 h-16",
  },
  {
    rank: 1,
    name: "Tanvir Ahmed",
    score: "99.2/100",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqvwyKCvO2DYbHnUKdAq44QTsBUSLY-ylQ7WGd27nnQ28LlIWVQlHIwFYC0nGDJwMlLj-tIHqXTxwMb8ihfPEJzLWdg-sPdnwMjZ68LUQYdLkmnQzpKxQbThVt7sShPVTvFKOGix1UZPuTmaH0oidVkDUqMfT_9wlk6_AHsBDl0r4GtYAzeUUoAQPT1UmGA1uhW30_xNN9oK3evkkDp4FXdfuwUCmxBxzwGVIYDx1qTvTTovxfpgPmTb0hJOfXIJFUksHhHhGG5_Q",
    barCls: "bg-secondary",
    rankCls: "text-secondary",
    avatarSize: "w-20 h-20",
    isWinner: true,
  },
  {
    rank: 3,
    name: "Sifat Ullah",
    score: "97.8/100",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuMY9w__ql87uTv-fahFmW0gRFAMeaUmgvmnJwzu_g86vmcPoEmfUxbByE7NGBA241zWOPbDVbKP9bEYc10hMTMfIfEB-dtHf0YHOBCw9yquy3JXIVJioMGExhTx1LenWs_nb03s-9sWail1ECTCPQ-z_pd8dA59Nruk2XUyJfFcxJ5PwOH5PtjMWCK5Uurtod-JPnkBvDAvFaMAtHIM8_Nz5N_6ICUW-l75e0Utc69fPo-aw2hmpGiw_5lcT8gW4uHLurtpzhCiM",
    barCls: "bg-orange-200",
    rankCls: "text-orange-300",
    avatarSize: "w-16 h-16",
  },
];

const LEADERS = [
  { rank: 4, name: "Nadia Islam", score: "96.5", scoreCls: "text-secondary font-semibold", showPattern: true, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyKeiKB1OGfCVVzkbNlOWSI6MdXSKmu-0OlH10iQxemN2zbI6YpJucE-FrCx-U4jFO7FeF6lUboeDgSvaVjwi7Gf5KYJmXKBBifftx9MWCScAf_djossV4rnWeq75emXUufFYwBXbvRn5t8CN-Y3DMG9M_g_jroTTss6Ot3zeqAjmMa7zX44HP0sVzD9o2WIBlNz8GhwtIdqhKPpxGbALgliJYG-FdDtEZQudcCUHMrhV1Y16kEe_wDv1Wd7WPbPutc_y8MC6H8gA" },
  { rank: 5, name: "Zubayer Al-Mahmud", score: "95.8", scoreCls: "text-secondary font-semibold", showPattern: true, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuConVyc8aq3vaP1kN92w16SfNfTQEL7f0wJLBQB8kybiAs__qnl9RJACVwwyB5nYnOk4OUV9D1ITsDwNS7CfyKY7HzFUp5l7EPpeoJKLiy80YUOT_hQmGVxR_s4NBmPo48v8_GZqeb6Z5Ojf03FyFDkcGL1lSnZ62yKYlnT-Be2wgpJUQCJTXmFg_sZCDkinOqktdVd2P2yUBn1ILRS5g6GI7K5L9Ra8na5e2ZSG64W_r1J5YK9OQPxFALcwK0bwyn8ZSDtJ6B8IDA" },
  { rank: 6, name: "Farhana Haque", score: "94.2", scoreCls: "text-on-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKjzRVtqODVKpL45ZJV2uwNbE4yhev3BwmgEhvhXVi5O5CSb8Q5tP6hwh23BeyrxDooTRnNEBajCI9j3PWfx3BXDiXvvhCV8YlM1erMbZd1dp1AyF3T1TUhDKU1XNVA_krgTcSrSlEnzDgqmWzv9tOKRwOhFcrDyGAaDzg17GhBvW40Aa9ij_97RlUJ59mTR1kbeU5FP4bmWMru0DSB5VPIV3vaYwUdKk7DbzA5NEUNYVStUNlW3WJ0CUWdNiiPVmh1V0gtL1LMh0" },
  { rank: 7, name: "Rakibul Hasan", score: "93.9", scoreCls: "text-on-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcHQPs9PkwBqytR0FonqkuRDUGR6Y-6VneRcnXgtNINltsQ-hNvuBol2-Uk9DT1E5wnKCi-ykK51VINe5orCa5yoZRRLoF_B_s32l-EA-OsG0PSuekq3mdABSpgOOY2S0xgx5v2A3GkhpzCZ0VrisQDyEIHGq_BhoHa-J2iTEKE6zd-BRYfYRm_8Q6YsPFXLJ1jYLS-UkrHc7QgbIgo9GMvsant3XdTJRPPKO2P02ctzVtn0HfwQ8RaejZ05Wop3SLPdx8IYeZsPE" },
  { rank: 8, name: "Sakib Chowdhury", score: "93.5", scoreCls: "text-on-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRU-9ANr1FQ4vOmR_c-g_BrT6jPpYbupvV4kABCkkxnQkasy1JT6w0r-mtNexzlLQaStChmvWYVqY1BNn4KQSgp6yFFcv4D3mJgbaZ-tMkIwHZJL8Vt9T5o0i9osLB-RwNESWkpv0DY43upbc3uv-XrTQFwxeeKM98efDVZxovfDs-mED6z4aKe6ez5K3DEJDYZlqETC1-B5XEanUUiA-TZFYn9B5WYaDKqxYKDGUDAKkwEa3ogvhUBMahpNV_BQ57SoxU0705KiI" },
  { rank: 9, name: "Sumaiya Akhter", score: "93.1", scoreCls: "text-on-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYMrwUlWfIXb0tTFOcxJ1kuJ3skJmSRLE7dITF4lfa2AAaU8qFDgH_Y6-5OQ_fWukzTll_GX26Dgf6V7cYdv0m_UZu1EQQPHPWwUwFMVVEdQ4mmnud7aFr5TBrL0Lgo92ZMIzZRjgrP-vHg1tpeKTAbzFCyZM2H3kQT5Twnu4bM7rcHCezvPv4xkXip3XRDc8mhWPfNoL7OKnahw1-31uu3_I7ImyTM-09f0IXslkjAW0Ihs9A7eAzZkyigMOoYtDvBXx6yqHhN2U" },
  { rank: 10, name: "Joydeep Sen", score: "92.8", scoreCls: "text-on-surface-variant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA32DXIdMe0YwOAK4xefKsSxvqfIbmjjzNL6MdGFD1g6T6XDyVX8asDyN_iEMXUJF_o3h92xctdX85Hs-s0Csxyjnu0FdbtOG8Q6799-KdcHl2GpYyuN-4DRJZdFAwmmCOVTCe0svsK-SJhTOAn6W6nsWgZTVONOP-E11OpWuDi8PdlJ6Mtr2SDVUlRr99Gjj9NQ_1XTQ-JHIRATS3PzbuFpZFBdFWr8CbWe9IhI-aWmzuhuFMHNgsRujsYl51FNAWmXvdUFeP2qZk" },
];

export default function LeaderboardPage() {
  const [tab, setTab] = useState<"exam" | "weekly">("exam");

  const podium = [...PODIUM];

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col">
      <header className="bg-white text-blue-900 border-b border-slate-100 flex justify-between items-center w-full px-5 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/student/dashboard" className="active:opacity-70 transition-all duration-200">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold text-blue-900 tracking-tight">Admission Pro</h1>
        </div>
        <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByMywwLq6pH3mOcKP_Q3BkgAwc84YC5RWXM4zWluKo1K_ruCOaM_yZhsQDQT0arrf0kjcSg2qLtT7ck512KqPO0532_Vp3hz1aoS9T8z44B9zGya7_XKvl62LuRJvcEna8PoHqGe1RJcUUaQpBbcjvbksK9Du8DBs8Jnwn6eQE0M0f-uITsFJjcrja54kC1iJT534RVT9BYr19ZHGYTQCi12h1GdNsg2bmVJ5I6sXCnQVD0Y3Ycitjz8Wwm640VPINTQFFI8yMc_Q"
          />
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-container-margin pb-32">
        <section className="py-gutter">
          <div className="bg-primary text-on-primary rounded-xl p-card-padding flex flex-col items-center justify-center text-center shadow-sm">
            <p className="text-xs font-medium opacity-80 mb-1">YOUR PERFORMANCE</p>
            <h2 className="text-3xl font-extrabold mb-2">Your Current Rank: 337</h2>
            <div className="flex items-center gap-2 bg-primary-container/30 px-4 py-2 rounded-full border border-primary-container/50">
              <span className="material-symbols-outlined text-secondary-fixed">trending_up</span>
              <span className="text-sm font-medium">Top 15% of all candidates</span>
            </div>
          </div>
        </section>

        <nav className="flex w-full bg-surface-container-low rounded-xl p-1 mb-gutter">
          <button
            onClick={() => setTab("exam")}
            className={`flex-1 py-3 text-center rounded-lg text-sm font-medium transition-all ${
              tab === "exam" ? "bg-white text-primary shadow-sm" : "text-outline hover:text-primary"
            }`}
          >
            This Exam
          </button>
          <button
            onClick={() => setTab("weekly")}
            className={`flex-1 py-3 text-center rounded-lg text-sm font-medium transition-all ${
              tab === "weekly" ? "bg-white text-primary shadow-sm" : "text-outline hover:text-primary"
            }`}
          >
            Cumulative (Weekly)
          </button>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
          {podium.map((p, idx) => (
            <div
              key={p.rank}
              className={`relative overflow-hidden bg-white rounded-xl p-card-padding flex flex-col items-center ${
                p.isWinner
                  ? "order-1 md:order-2 border-2 border-secondary-fixed scale-105 shadow-md"
                  : idx === 0
                  ? "order-2 md:order-1 border border-outline-variant"
                  : "order-3 md:order-3 border border-outline-variant"
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${p.barCls}`}></div>
              {p.isWinner && (
                <div className="absolute top-2 right-2">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                </div>
              )}
              <div className={`${p.avatarSize} rounded-full ${p.isWinner ? "border-4 border-secondary-container" : "border-4 border-slate-100"} mb-3 overflow-hidden`}>
                <img className="w-full h-full object-cover" src={p.img} alt="" />
              </div>
              <span className={`text-3xl font-extrabold mb-1 ${p.rankCls}`}>#{p.rank}</span>
              <p className="text-sm font-medium text-primary">{p.name}</p>
              <p className="text-secondary font-bold">{p.score}</p>
              <a className="mt-4 text-xs font-semibold text-primary underline underline-offset-4" href="#">
                View Answer Pattern
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-outline-variant overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
            <span className="text-xs font-medium text-outline">RANK &amp; STUDENT</span>
            <span className="text-xs font-medium text-outline">SCORE</span>
          </div>
          <div className="divide-y divide-outline-variant">
            {LEADERS.map((row) => (
              <div key={row.rank} className="px-6 py-4 flex justify-between items-center hover:bg-surface-container-lowest transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-primary w-6">{row.rank}</span>
                  <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" src={row.img} alt="" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">{row.name}</p>
                    {row.showPattern && (
                      <a className="text-[10px] text-primary-container uppercase font-bold tracking-wider" href="#">
                        Answer Pattern
                      </a>
                    )}
                  </div>
                </div>
                <span className={row.scoreCls}>{row.score}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-gutter flex justify-center">
          <button className="bg-white border border-outline text-primary text-sm font-medium px-6 py-3 rounded-lg active:opacity-70 transition-all">
            Load Next 20 Students
          </button>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-white/95 backdrop-blur-md border-t border-slate-100">
        <Link href="/student/dashboard" className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[11px] font-medium">Home</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[11px] font-medium">Courses</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">quiz</span>
          <span className="text-[11px] font-medium">Exams</span>
        </button>
        <button className="flex flex-col items-center justify-center text-blue-900 bg-blue-50/50 rounded-xl px-3 py-1 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            leaderboard
          </span>
          <span className="text-[11px] font-medium">Leaderboard</span>
        </button>
        <Link href="/student/profile" className="flex flex-col items-center justify-center text-slate-400 px-3 py-1 active:scale-95 transition-transform duration-150">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[11px] font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
