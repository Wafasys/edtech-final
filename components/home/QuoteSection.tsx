type Result = {
  uni: string;
  count: string;
  unit: string;
};

const RESULTS: Result[] = [
  { uni: "BUET", count: "340", unit: "CSE · EEE · ME" },
  { uni: "DMC", count: "215", unit: "MBBS" },
  { uni: "DU", count: "480", unit: "All units" },
  { uni: "RUET", count: "165", unit: "EEE · CSE" },
  { uni: "KUET", count: "142", unit: "All disciplines" },
  { uni: "CUET", count: "178", unit: "Engineering" },
  { uni: "GST cluster", count: "320", unit: "22 universities" },
  { uni: "IUT", count: "80", unit: "Engineering" },
];

export default function QuoteSection() {
  return (
    <section className="hp-results">
      <div className="hp-shell">
        <div className="hp-results-card">
          <div className="hp-results-orb hp-results-orb-a" aria-hidden="true" />
          <div className="hp-results-orb hp-results-orb-b" aria-hidden="true" />
          <div className="hp-results-noise" aria-hidden="true" />

          <div className="hp-results-grid">
            <div className="hp-results-stat">
              <span className="hp-results-tag">
                <span className="hp-results-tag-dot" />
                2025 admission cycle
              </span>
              <h2 className="hp-results-num">
                1,<span className="hp-results-num-flick">860</span>
              </h2>
              <p className="hp-results-desc">
                Verified admits across <strong>14 top universities</strong>{" "}
                — every credential cross-checked with the college admission
                desks before we publish it.
              </p>
              <div className="hp-results-foot">
                <span className="hp-results-check">✓</span>
                Audited by an independent agency
              </div>
            </div>

            <div className="hp-results-list">
              {RESULTS.map((r) => (
                <div key={r.uni} className="hp-result-item">
                  <span className="hp-result-uni">{r.uni}</span>
                  <span className="hp-result-count">{r.count}</span>
                  <span className="hp-result-unit">{r.unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
