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
              The Engineering Private Batch was the only thing that made me
              believe BUET was within reach. The model tests were brutal —
              exactly like the real one — and the doubt-solver replied even
              at midnight before exam day. I got CSE on first try.
            </p>
            <div className="hp-quote-author">
              <img src="/home/Avatar4@2x.png" alt="Asif Iqbal" />
              <div className="hp-quote-author-meta">
                <strong>Asif Iqbal</strong>
                <span>Student, BUET CSE &apos;26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
