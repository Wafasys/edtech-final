type Tutor = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

const TUTORS: Tutor[] = [
  {
    name: "Theresa Webb",
    role: "Application Support Lead",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    photo: "/home/Avatar5@2x.png",
  },
  {
    name: "Courtney Henry",
    role: "Director, Undergraduate Analytics",
    bio: "Has led engineering teams at Figma, Pitch and Protocol Labs.",
    photo: "/home/Avatar7@2x.png",
  },
  {
    name: "Albert Flores",
    role: "Career Educator",
    bio: "Former product manager at Linear, Lambda School and On Deck.",
    photo: "/home/Avatar1@2x.png",
  },
  {
    name: "Marvin McKinney",
    role: "Co-op &amp; Internships Lead",
    bio: "Former frontend lead at Linear, Coinbase and Postscript.",
    photo: "/home/Avatar3@2x.png",
  },
];

export default function TutorsSection() {
  return (
    <section className="hp-tutors">
      <div className="hp-shell">
        <div className="hp-tutors-head">
          <div>
            <span className="hp-eyebrow">Tutors</span>
            <h2 className="hp-section-title">Meet the heroes behind the work.</h2>
          </div>
          <p className="hp-section-lede" style={{ marginTop: 0 }}>
            Instructors from companies you actually recognise — teaching the
            craft they practise every day. We hire for taste and lived
            experience, not academic credentials.
          </p>
        </div>

        <div className="hp-tutors-grid">
          {TUTORS.map((tutor) => (
            <article key={tutor.name} className="hp-tutor">
              <div className="hp-tutor-photo">
                <img src={tutor.photo} alt={tutor.name} />
                <div className="hp-tutor-socials">
                  <a href="#" aria-label="Profile">
                    <img src="/home/Social-icon.svg" alt="" />
                  </a>
                  <a href="#" aria-label="Profile">
                    <img src="/home/Social-icon1.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="hp-tutor-body">
                <h3 className="hp-tutor-name">{tutor.name}</h3>
                <span
                  className="hp-tutor-role"
                  dangerouslySetInnerHTML={{ __html: tutor.role }}
                />
                <p className="hp-tutor-bio">{tutor.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
