export default function HeroSection() {
  return (
    <section className="hp-hero">
      <div className="hp-shell hp-hero-grid">
        <div className="hp-hero-copy">
          <span className="hp-eyebrow">Admission engine · 2026 cohort</span>
          <h1 className="hp-hero-headline">
            Up your <span className="hp-emph">skills</span> to{" "}
            <span className="hp-emph">advance</span> the path you&apos;re on.
          </h1>
          <p className="hp-hero-lede">
            A focused learning system for ambitious candidates — modern
            material, practiced mentors, and a study cadence designed around
            results.
          </p>

          <div className="hp-hero-actions">
            <a href="/signup" className="hp-btn hp-btn-primary">
              Get started
              <span className="hp-btn-arrow">→</span>
            </a>
            <a href="#programs" className="hp-btn hp-btn-ghost">
              Get free trial
            </a>
          </div>

          <div className="hp-hero-tags">
            <span className="hp-chip">
              <img src="/home/Group-518.svg" alt="" />
              Public Speaking
            </span>
            <span className="hp-chip">
              <img src="/home/Briefcase.svg" alt="" />
              Career-Oriented
            </span>
            <span className="hp-chip">
              <img src="/home/idea.svg" alt="" />
              Creative Thinking
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
            <img src="/home/Mask-group@2x.png" alt="Featured student" />
          </div>

          <span className="hp-stage-live">
            <span className="hp-stage-live-dot" />
            Live cohort · 12 spots
          </span>

          <div className="hp-stat-card is-floating is-tutors">
            <div className="hp-stat-icon">
              <img src="/home/icon4.svg" alt="" />
            </div>
            <div className="hp-stat-text">
              <p className="hp-stat-num">250+</p>
              <p className="hp-stat-label">Expert tutors on call</p>
            </div>
          </div>

          <div className="hp-stat-card is-floating is-courses">
            <div className="hp-stat-icon">
              <img src="/home/Progress-circle.svg" alt="" />
            </div>
            <div className="hp-stat-text">
              <p className="hp-stat-num">5,200</p>
              <p className="hp-stat-label">Live courses today</p>
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
              <p className="hp-stat-label">From 16,325 learners</p>
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
