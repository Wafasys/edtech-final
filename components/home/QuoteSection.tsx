export default function QuoteSection() {
  return (
    <section className="hp-quote">
      <div className="hp-shell">
        <div className="hp-quote-card">
          <span className="hp-quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <div className="hp-quote-body">
            <p className="hp-quote-text">
              Stitch was fantastic — a master platform for anyone starting a
              new career, or re-skilling after a break. The cohorts, the
              pacing, the feedback loop: all of it just works.
            </p>
            <div className="hp-quote-author">
              <img src="/home/Avatar4@2x.png" alt="Jacob Jones" />
              <div className="hp-quote-author-meta">
                <strong>Jacob Jones</strong>
                <span>Student, National University</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
