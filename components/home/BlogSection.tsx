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
    date: "Nov 16, 2024",
    readTime: "5 min read",
    title: "Three pillars of user delight",
    description:
      "Delight is felt viscerally, behaviourally and reflectively. A great design earns it on all three fronts.",
    image: "/home/Image3@2x.png",
    tags: [{ label: "Research" }, { label: "UI · UX", tone: "ink" }],
  },
  {
    date: "Sep 24, 2024",
    readTime: "7 min read",
    title: "UX mapping methods, refined",
    description:
      "Visual-design principles, applied consistently, are what turn a rough UX map into a tool the team can trust.",
    image: "/home/Image21@2x.png",
    tags: [{ label: "Research" }, { label: "UI design", tone: "amber" }],
  },
  {
    date: "Mar 13, 2024",
    readTime: "9 min read",
    title: "Agile development &amp; usability",
    description:
      "Agile aims to overcome the usability gaps in traditional development — but introduces new threats to UX quality.",
    image: "/home/Image4@2x.png",
    tags: [
      { label: "Programming", tone: "amber" },
      { label: "Research" },
      { label: "Engineering", tone: "ink" },
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
            <h2 className="hp-section-title">Recent reading.</h2>
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
                <p className="hp-post-desc">{post.description}</p>
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
