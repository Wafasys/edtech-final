type Course = {
  category: string;
  title: string;
  description: string;
  author: string;
  authorImg: string;
  enrolled: string;
  rating: string;
  price: string;
};

const COURSES: Course[] = [
  {
    category: "Engineering",
    title: "Engineering Private Batch 2026 (Full Syllabus)",
    description:
      "Full BUET, RUET, CUET and KUET prep — Physics, Chemistry and Math drilled to the latest admission MCQ pattern, with weekly model tests and answer-key review.",
    author: "Imtiaz Rahman",
    authorImg: "/home/Avatar@2x.png",
    enrolled: "12,420 enrolled",
    rating: "4.9",
    price: "৳ 8,500",
  },
  {
    category: "Medical",
    title: "Pre-Medical Batch 2026",
    description:
      "Six-month intensive on Biology, Chemistry, Physics, English and General Knowledge — fully aligned with the latest DGHS syllabus and DMC pattern.",
    author: "Dr. Faiyaz Karim",
    authorImg: "/home/Avatar6@2x.png",
    enrolled: "9,850 enrolled",
    rating: "4.9",
    price: "৳ 7,500",
  },
  {
    category: "Public Unit",
    title: "Varsity + GST Special Programme 2026",
    description:
      "Full coverage of the GST cluster plus DU, JU and RU patterns — weekly model tests, rank reports and chapter-wise weak-spot analysis.",
    author: "Sumaiya Akter",
    authorImg: "/home/Avatar2@2x.png",
    enrolled: "6,210 enrolled",
    rating: "4.8",
    price: "৳ 5,500",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="hp-programs">
      <div className="hp-shell">
        <div className="hp-section-head is-center">
          <span className="hp-eyebrow">Explore tracks</span>
          <h2 className="hp-section-title">Most-enrolled admission tracks.</h2>
          <p className="hp-section-lede">
            Hand-picked tracks for the units our students actually target —
            live classes, weekly mocks and a mentor on call.
          </p>
        </div>

        <div className="hp-programs-grid">
          {COURSES.map((course) => (
            <article key={course.title} className="hp-course">
              <div className="hp-course-media">
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
            Browse all admission tracks
            <span className="hp-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
