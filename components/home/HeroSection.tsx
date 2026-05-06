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

        <div className="hp-hero-stage">
          <div className="hp-hero-portrait">
            <img src="/home/Mask-group@2x.png" alt="Featured student" />
          </div>

          <div className="hp-stat-card is-floating is-tutors">
            <div className="hp-stat-icon">
              <img src="/home/icon4.svg" alt="" />
            </div>
            <div>
              <p className="hp-stat-num">250+</p>
              <p className="hp-stat-label">Expert tutors on call</p>
            </div>
          </div>

          <div className="hp-stat-card is-floating is-courses">
            <div className="hp-stat-icon">
              <img src="/home/Progress-circle.svg" alt="" />
            </div>
            <div>
              <p className="hp-stat-num">5K+</p>
              <p className="hp-stat-label">Online courses live today</p>
            </div>
          </div>

          <div className="hp-stat-card is-floating is-rating">
            <div className="hp-stat-icon">
              <img src="/home/icon3.svg" alt="" />
            </div>
            <div>
              <p className="hp-stat-num">4.9 / 5</p>
              <div className="hp-stat-stars" aria-label="rating">
                <img src="/home/Les-Pouilles.svg" alt="" />
                <img src="/home/Les-Pouilles.svg" alt="" />
                <img src="/home/Les-Pouilles.svg" alt="" />
                <img src="/home/Les-Pouilles.svg" alt="" />
                <img src="/home/Les-Pouilles.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hp-shell hp-trusted">
        <span className="hp-trusted-label">
          Trusted by learners from 250+ partner programs
        </span>
        <div className="hp-trusted-row">
          <img src="/home/Group.svg" alt="" />
          <img src="/home/Codecov-logo-Black.svg" alt="" />
          <img src="/home/UserTesting-logo-Black.svg" alt="" />
          <img src="/home/Magic-Leap-logo-Black.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
