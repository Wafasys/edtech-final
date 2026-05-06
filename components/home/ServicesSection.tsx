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
    title: "Interaction design",
    description:
      "Cohort-based lessons that mirror the way modern teams actually ship — from sketching flows to fine-tuning micro-interactions.",
  },
  {
    index: "02",
    icon: "/home/Icon.svg",
    title: "UX design course",
    description:
      "Pragmatic UX classes covering recent advancements in web. Heavy on case studies, light on lecture-hall fluff.",
  },
  {
    index: "03",
    icon: "/home/Icon1@2x.png",
    title: "User interface design",
    description:
      "Sharpen your eye for type, color and grid. Learn the visual systems thinking that distinguishes professional product work.",
  },
];

export default function ServicesSection() {
  return (
    <section className="hp-services">
      <div className="hp-shell">
        <div className="hp-section-head">
          <span className="hp-eyebrow">Our services</span>
          <h2 className="hp-section-title">
            A playful, engaging place
            <br />
            for serious learning.
          </h2>
          <p className="hp-section-lede">
            Three specialisations built around the careers our learners
            actually walk into — taught by people who&apos;ve done the work.
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
