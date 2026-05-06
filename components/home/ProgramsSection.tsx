type Course = {
  category: string;
  title: string;
  description: string;
  duration: string;
  author: string;
  authorImg: string;
  enrolled: string;
  rating: string;
  price: string;
};

const COURSES: Course[] = [
  {
    category: "Design",
    title: "Figma UI · UX Design",
    description:
      "Use Figma to land a job in UI design — practical lessons covering interface, interaction and user experience.",
    duration: "08 hr 12 mins",
    author: "Jane Cooper",
    authorImg: "/home/Avatar@2x.png",
    enrolled: "2,001 enrolled",
    rating: "4.3",
    price: "$17.84",
  },
  {
    category: "Product",
    title: "Learn With Shoaib",
    description:
      "Design websites and mobile apps that users love — and keep coming back to. A pragmatic, project-led course.",
    duration: "06 hr 03 mins",
    author: "Jenny Wilson",
    authorImg: "/home/Avatar6@2x.png",
    enrolled: "1,520 enrolled",
    rating: "3.9",
    price: "$8.99",
  },
  {
    category: "Research",
    title: "Building User Interfaces",
    description:
      "Apply UX principles directly to your interface work, from foundational research through final visual polish.",
    duration: "01 hr 02 mins",
    author: "Esther Howard",
    authorImg: "/home/Avatar2@2x.png",
    enrolled: "832 enrolled",
    rating: "4.2",
    price: "$11.70",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="hp-programs">
      <div className="hp-shell">
        <div className="hp-section-head is-center">
          <span className="hp-eyebrow">Explore programs</span>
          <h2 className="hp-section-title">Our most popular classes</h2>
          <p className="hp-section-lede">
            Hand-picked programs from instructors who&apos;ve actually shipped
            work — chosen for relevance, not popularity.
          </p>
        </div>

        <div className="hp-programs-grid">
          {COURSES.map((course) => (
            <article key={course.title} className="hp-course">
              <div className="hp-course-media">
                <span className="hp-course-duration">{course.duration}</span>
                <span className="hp-course-tag">{course.category}</span>
              </div>
              <div className="hp-course-body">
                <h3 className="hp-course-title">
                  {course.title}
                  <span className="hp-arrow" aria-hidden="true">
                    <img src="/home/arrow-up-right.svg" alt="" />
                  </span>
                </h3>
                <p className="hp-course-desc">{course.description}</p>
                <div className="hp-course-meta">
                  <div className="hp-course-author">
                    <img src={course.authorImg} alt="" />
                    <div>
                      <div className="hp-author-name">{course.author}</div>
                      <div className="hp-author-meta">{course.enrolled}</div>
                    </div>
                  </div>
                  <div className="hp-course-price">
                    <span className="hp-course-price-num">{course.price}</span>
                    <span className="hp-course-price-rate">
                      <img src="/home/Les-Pouilles.svg" alt="" />
                      {course.rating}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hp-programs-cta">
          <a href="#" className="hp-btn hp-btn-primary">
            Explore all programs
            <span className="hp-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
