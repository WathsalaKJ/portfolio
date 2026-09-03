type Publication = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  link: string;
};

const PUBLICATIONS: Publication[] = [
  {
    title: "How to Build an AI Recommendation Engine for Business Dashboards",
    excerpt:
      "A practical guide to building an LLM-powered recommendation engine on Claude — system architecture, prompt engineering, API integration, and production considerations, without training a custom model.",
    date: "Aug 2026",
    readTime: "16 min read",
    tag: "AI",
    link: "https://medium.com/@sandunikekulawala/how-to-build-an-ai-recommendation-engine-for-business-dashboards-02f208bdc73b",
  },
  {
    title: "The 500 Error That Only Happened on Our Biggest Customers",
    excerpt:
      "A debugging story about an intermittent 500 error that only hit our biggest customers — tracing it to PostgREST's URL-length limits and fixing it with sequential batching instead of parallelism.",
    date: "Aug 2026",
    readTime: "3 min read",
    tag: "Backend",
    link: "https://medium.com/@sandunikekulawala/the-500-error-that-only-happened-on-our-biggest-customers-d42fac1e7bd5",
  },
];

export default function Publications() {
  return (
    <section className="publications" id="publications">
      <h2 className="section-title">Publications</h2>
      <p className="section-subtitle">
        Articles I&apos;ve written on Medium about software engineering,
        security, and the things I learn along the way.
      </p>

      <div className="publications__grid">
        {PUBLICATIONS.map((post) => (
          <a
            className="publications__card"
            key={post.title}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="publications__top">
              <span className="publications__brand">Medium</span>
              <span className="publications__tag">{post.tag}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="publications__meta">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
