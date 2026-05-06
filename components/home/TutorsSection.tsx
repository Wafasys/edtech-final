type Subject =
  | "physics"
  | "chemistry"
  | "biology"
  | "math"
  | "english"
  | "bangla";

type Tutor = {
  name: string;
  subject: Subject;
  subjectLabel: string;
  institution: string;
  founder: string;
  bio: string;
  photo: string;
};

const TUTORS: Tutor[] = [
  {
    name: "Apurbo Mashrur",
    subject: "physics",
    subjectLabel: "Physics",
    institution: "BUET",
    founder: "Founder, Lobdhi",
    bio: "Coordinates the Engineering Physics track — Mechanics to Modern, drilled to BUET admission pattern.",
    photo: "/home/Avatar5@2x.png",
  },
  {
    name: "Mottasin Pahlovi",
    subject: "chemistry",
    subjectLabel: "Chemistry",
    institution: "BUET",
    founder: "Founder, Aloronxyz",
    bio: "Designs the Varsity + GST Chemistry curriculum. Mentors Public Unit aspirants every cycle.",
    photo: "/home/Avatar7@2x.png",
  },
  {
    name: "Dr. Tofael Ahmed",
    subject: "biology",
    subjectLabel: "Biology",
    institution: "DMC 5th",
    founder: "Founder, DMC Dreamers",
    bio: "Heads Pre-Medical and Second Timer batches — alumnus of Dhaka Medical College.",
    photo: "/home/Avatar1@2x.png",
  },
  {
    name: "Kazi Rakibul Hasan",
    subject: "math",
    subjectLabel: "Higher Math",
    institution: "BUET CSE",
    founder: "Founder, Math &amp; Science Nerds",
    bio: "Heads Higher Math for the Engineering track and writes the weekly model-test bank.",
    photo: "/home/Avatar3@2x.png",
  },
  {
    name: "Sanjoy Chakraborty",
    subject: "chemistry",
    subjectLabel: "Chemistry",
    institution: "BUET ME&apos;10",
    founder: "Founder, ChemShifu",
    bio: "Builds the Chemistry concept-builder series — from atomic theory to organic mechanisms.",
    photo: "/home/Avatar2@2x.png",
  },
  {
    name: "Hemel",
    subject: "chemistry",
    subjectLabel: "Chemistry",
    institution: "BUET EEE&apos;17",
    founder: "Founder, Learn with Hemel Bhai",
    bio: "Basic-to-advanced Chemistry for HSC and admission. Famous for breaking down hard equations.",
    photo: "/home/Avatar6@2x.png",
  },
  {
    name: "Dr. Rizvi Touhid",
    subject: "biology",
    subjectLabel: "Biology",
    institution: "DMC 1st",
    founder: "Founder, ROAD To DMC",
    bio: "Trains MBBS aspirants on plant and animal physiology — patterns that DGHS keeps repeating.",
    photo: "/home/Avatar4@2x.png",
  },
  {
    name: "Dr. Fahad Ibna Mahafuz",
    subject: "biology",
    subjectLabel: "Biology",
    institution: "DMC, MPhil RMC",
    founder: "Founder, Fahad Academy (FAB)",
    bio: "Asst. Professor of Anatomy. VP, Bangladesh Biology Olympiad — Rajshahi region.",
    photo: "/home/Avatar1@2x.png",
  },
  {
    name: "Sheikh Hasnat Shuvro",
    subject: "biology",
    subjectLabel: "Biology",
    institution: "Sir Salimullah MC",
    founder: "Founder, Biomission",
    bio: "Builds the Biology Cycle for HSC 27 — clean, exam-pattern revision tied to NCTB chapters.",
    photo: "/home/Avatar5@2x.png",
  },
  {
    name: "Sharoare Hosan Emon",
    subject: "physics",
    subjectLabel: "Physics",
    institution: "Biomedical, BUET",
    founder: "Engineering Physics",
    bio: "Co-leads Engineering Physics drills. Specialises in problem-solving over rote derivation.",
    photo: "/home/Avatar3@2x.png",
  },
  {
    name: "Chowdhury Md Rezaul Karim",
    subject: "english",
    subjectLabel: "English",
    institution: "BA English (Hons), AUB",
    founder: "Founder, হ য ব র ল English",
    bio: "Admission English with a focus on grammar foundations and the GST/DU MCQ patterns.",
    photo: "/home/Avatar7@2x.png",
  },
  {
    name: "Omar Faruq",
    subject: "bangla",
    subjectLabel: "Bangla",
    institution: "BSS &amp; MSS, DU",
    founder: "Bangla Admission",
    bio: "Bangla second-paper for Public Unit aspirants — author of two Bangla-medium prep guides.",
    photo: "/home/Avatar2@2x.png",
  },
  {
    name: "Baki Billah",
    subject: "english",
    subjectLabel: "English",
    institution: "School of Excellence",
    founder: "Founder, English with Baki",
    bio: "GST and DU English MCQ specialist — clear, confidence-first instruction for nervous testers.",
    photo: "/home/Avatar6@2x.png",
  },
  {
    name: "Md. Mir Jalal Sumon",
    subject: "english",
    subjectLabel: "English",
    institution: "Unlock English",
    founder: "Founder, Unlock English with Sumon",
    bio: "Reading-comprehension and vocab drills tuned to the GST cluster question style.",
    photo: "/home/Avatar4@2x.png",
  },
  {
    name: "Joynal Abedin",
    subject: "english",
    subjectLabel: "English",
    institution: "IBA MBA, DU",
    founder: "Founder, Joynal Academy",
    bio: "IBA-track English. Sentence correction, error-detection and high-scoring vocabulary.",
    photo: "/home/Avatar@2x.png",
  },
];

export default function TutorsSection() {
  const loop = [...TUTORS, ...TUTORS];

  return (
    <section className="hp-tutors">
      <div className="hp-shell">
        <div className="hp-tutors-head">
          <div>
            <span className="hp-eyebrow">Mentors</span>
            <h2 className="hp-section-title">
              Mentors who&apos;ve actually sat the exam.
            </h2>
          </div>
          <p className="hp-section-lede" style={{ marginTop: 0 }}>
            Every mentor on Stitch is a verified BUET, DU, DMC or
            GST-public alum — not a coaching broker. They&apos;ve sat the
            exam you&apos;re sitting, and they remember the chapters that
            cost them marks.
          </p>
        </div>
      </div>

      <div className="hp-marquee" aria-roledescription="carousel">
        <div className="hp-marquee-track">
          {loop.map((tutor, idx) => (
            <article
              key={`${tutor.name}-${idx}`}
              className={`hp-mentor-card hp-subject-${tutor.subject}`}
            >
              <div className="hp-mentor-photo">
                <span className="hp-mentor-subject">
                  <span className="hp-mentor-subject-dot" />
                  {tutor.subjectLabel}
                </span>
                <img src={tutor.photo} alt={tutor.name} />
              </div>
              <div className="hp-mentor-body">
                <h3 className="hp-mentor-name">{tutor.name}</h3>
                <span
                  className="hp-mentor-inst"
                  dangerouslySetInnerHTML={{ __html: tutor.institution }}
                />
                <span
                  className="hp-mentor-founder"
                  dangerouslySetInnerHTML={{ __html: tutor.founder }}
                />
                <p
                  className="hp-mentor-bio"
                  dangerouslySetInnerHTML={{ __html: tutor.bio }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
