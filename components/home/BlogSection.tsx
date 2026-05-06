type Post = {
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  tags: { label: string; tone?: "ink" | "amber" }[];
};

const POSTS: Post[] = [
  {
    date: "Apr 02, 2026",
    readTime: "8 min read",
    title: "Planning the last 60 days before BUET admission",
    description:
      "A week-by-week breakdown that mid-tier students have used to push past their HSC plateau — built from data on 480 admits.",
    image: "/home/Image3@2x.png",
    tags: [{ label: "Engineering" }, { label: "Strategy", tone: "ink" }],
  },
  {
    date: "Mar 18, 2026",
    readTime: "6 min read",
    title: "Why MBBS aspirants keep losing marks in Biology MCQs",
    description:
      "Three patterns we see in DGHS papers every cycle — and the chapters where the gap usually shows up first.",
    image: "/home/Image21@2x.png",
    tags: [{ label: "Medical" }, { label: "Biology", tone: "amber" }],
  },
  {
    date: "Feb 10, 2026",
    readTime: "9 min read",
    title: "Cracking the GST cluster: pattern, demystified",
    description:
      "GST has its quirks. What&apos;s actually being asked, what&apos;s noise, and how to pace 100 minutes across 100 marks.",
    image: "/home/Image4@2x.png",
    tags: [
      { label: "GST", tone: "amber" },
      { label: "Pattern" },
      { label: "Strategy", tone: "ink" },
    ],
  },
];

export default function BlogSection() {
  return (
    <section className="hp-blog">
      <div className="hp-shell">
        <div className="hp-blog-head">
          <div>
            <span className="hp-eyebrow">From the journal</span>
            <h2 className="hp-section-title">Reading for the prep grind.</h2>
          </div>
          <a href="#" className="hp-btn hp-btn-ghost">
            View all posts
          </a>
        </div>

        <div className="hp-blog-grid">
          {POSTS.map((post) => (
            <article key={post.title} className="hp-post">
              <div className="hp-post-media">
                <img src={post.image} alt="" />
              </div>
              <div className="hp-post-body">
                <div className="hp-post-meta">
                  <span>{post.date}</span>
                  <span className="hp-post-meta-dot" aria-hidden="true" />
                  <span>{post.readTime}</span>
                </div>
                <h3
                  className="hp-post-title"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
                <p
                  className="hp-post-desc"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                <div className="hp-post-tags">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`hp-tag${
                        tag.tone === "amber"
                          ? " is-amber"
                          : tag.tone === "ink"
                            ? " is-ink"
                            : ""
                      }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
