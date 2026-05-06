export default function HeroSection() {
  return (
    <section className="hp-hero">
      <div className="hp-shell hp-hero-grid">
        <div className="hp-hero-copy">
          <span className="hp-eyebrow">HSC &apos;26 batch · Admission prep</span>
          <h1 className="hp-hero-headline">
            Crack <span className="hp-emph">admission</span>, secure the{" "}
            <span className="hp-emph">seat</span>, start the{" "}
            <span className="hp-emph">career</span> you came for.
          </h1>
          <p className="hp-hero-lede">
            A focused prep system for Bangladeshi admission seekers — daily
            live classes from BUET, DU and DMC alumni, weekly model tests, and
            a study cadence built around your target unit.
          </p>

          <div className="hp-hero-actions">
            <a href="/signup" className="hp-btn hp-btn-primary">
              Start free week
              <span className="hp-btn-arrow">→</span>
            </a>
            <a href="#programs" className="hp-btn hp-btn-ghost">
              Browse all tracks
            </a>
          </div>

          <div className="hp-hero-tags">
            <span className="hp-chip">
              <img src="/home/Group-518.svg" alt="" />
              Engineering · BUET · RUET
            </span>
            <span className="hp-chip">
              <img src="/home/Briefcase.svg" alt="" />
              MBBS · BDS
            </span>
            <span className="hp-chip">
              <img src="/home/idea.svg" alt="" />
              GST · DU · JU
            </span>
          </div>
        </div>

        <div className="hp-stage" aria-hidden="false">
          <div className="hp-stage-bg">
            <div className="hp-stage-aurora" />
            <div className="hp-stage-grid" />
          </div>

          <div className="hp-stage-ring">
            <div className="hp-stage-ring-inner" />
          </div>

          <div className="hp-stage-portrait">
            <img src="/home/Mask-group@2x.png" alt="Stitch admission mentor" />
          </div>

          <span className="hp-stage-live">
            <span className="hp-stage-live-dot" />
            Live batch · 24 seats left
          </span>

          <div className="hp-stat-card is-floating is-tutors">
            <div className="hp-stat-icon">
              <img src="/home/icon4.svg" alt="" />
            </div>
            <div className="hp-stat-text">
              <p className="hp-stat-num">1,200+</p>
              <p className="hp-stat-label">Mentors from BUET, DU, DMC</p>
            </div>
          </div>

          <div className="hp-stat-card is-floating is-courses">
            <div className="hp-stat-icon">
              <img src="/home/Progress-circle.svg" alt="" />
            </div>
            <div className="hp-stat-text">
              <p className="hp-stat-num">5,200</p>
              <p className="hp-stat-label">Hours of live class</p>
              <div className="hp-stat-avatars">
                <img src="/home/Avatar@2x.png" alt="" />
                <img src="/home/Avatar1@2x.png" alt="" />
                <img src="/home/Avatar2@2x.png" alt="" />
                <img src="/home/Avatar3@2x.png" alt="" />
              </div>
            </div>
          </div>

          <div className="hp-stat-card is-floating is-rating">
            <div className="hp-stat-icon">
              <img src="/home/icon3.svg" alt="" />
            </div>
            <div className="hp-stat-text">
              <p className="hp-stat-num">4.9 / 5</p>
              <div className="hp-stat-stars" aria-label="rating">
                <img src="/home/Les-Pouilles.svg" alt="" />
                <img src="/home/Les-Pouilles.svg" alt="" />
                <img src="/home/Les-Pouilles.svg" alt="" />
                <img src="/home/Les-Pouilles.svg" alt="" />
                <img src="/home/Les-Pouilles.svg" alt="" />
              </div>
              <p className="hp-stat-label">From 16,325 admission seekers</p>
            </div>
          </div>

          <span className="hp-stage-spark is-mentor">
            <span className="hp-spark-dot" />
            Verified mentor
          </span>
        </div>
      </div>
    </section>
  );
}
