type Service = {
  index: string;
  icon: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    index: "01",
    icon: "/home/Icon2@2x.png",
    title: "Live admission classes",
    description:
      "Daily evening classes from BUET, DU and DMC alumni — recorded, indexed by chapter, and replayable with synced notes for revision.",
  },
  {
    index: "02",
    icon: "/home/Icon.svg",
    title: "Weekly model tests",
    description:
      "Real-pattern mocks for BUET, GST, DU and DGHS units. Auto-graded with rank, percentile and chapter-wise weak-spot reports.",
  },
  {
    index: "03",
    icon: "/home/Icon1@2x.png",
    title: "24/7 doubt solving",
    description:
      "Snap a question, get a worked-out solution from a verified mentor within minutes — even at 2 a.m. the night before exam day.",
  },
];

export default function ServicesSection() {
  return (
    <section className="hp-services">
      <div className="hp-shell">
        <div className="hp-section-head">
          <span className="hp-eyebrow">What you get</span>
          <h2 className="hp-section-title">
            Everything you need to crack admission,
            <br />
            in one place.
          </h2>
          <p className="hp-section-lede">
            Three things you&apos;ll use every single day — live class, model
            test, and a mentor on call when a question won&apos;t budge.
          </p>
        </div>

        <div className="hp-services-grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="hp-service-card">
              <span className="hp-service-num">{service.index}</span>
              <div className="hp-service-icon">
                <img src={service.icon} alt="" />
              </div>
              <div className="hp-service-body">
                <h3 className="hp-service-title">{service.title}</h3>
                <p className="hp-service-desc">{service.description}</p>
              </div>
              <a href="#programs" className="hp-service-link">
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
