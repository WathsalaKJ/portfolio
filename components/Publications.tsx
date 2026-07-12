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
    title: "How to Build a Scalable REST API with Spring Boot",
    excerpt:
      "A practical walkthrough of designing clean, versioned REST endpoints, layered architecture, and error handling for production services.",
    date: "Mar 2025",
    readTime: "8 min read",
    tag: "Backend",
    link: "https://medium.com/@dev/how-to-build-a-scalable-rest-api-with-spring-boot",
  },
  {
    title: "Understanding React Server Components in Next.js 15",
    excerpt:
      "Breaking down the mental model behind server components, streaming, and when to reach for the client boundary in the App Router.",
    date: "Feb 2025",
    readTime: "6 min read",
    tag: "Frontend",
    link: "https://medium.com/@dev/understanding-react-server-components-in-nextjs-15",
  },
  {
    title: "A Beginner's Guide to Cybersecurity Incident Response",
    excerpt:
      "The core phases of incident response, from detection to recovery, and the lessons I learned building an AI-driven reporting platform.",
    date: "Jan 2025",
    readTime: "10 min read",
    tag: "Security",
    link: "https://medium.com/@dev/a-beginners-guide-to-cybersecurity-incident-response",
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
