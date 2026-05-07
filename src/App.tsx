import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "May 2025 - Jan 2026",
    role: "Web Application Developer",
    company: "Impact Palmares R&D SAS",
    location: "Abidjan, Cote d'Ivoire",
    summary:
      "Modernized an internal business platform with Next.js, Spring Boot, Docker, PostgreSQL, ELK Stack, MDM tooling, and SOLID principles.",
  },
  {
    period: "Jul 2024 - Aug 2024",
    role: "Full-Stack Developer & IT Support",
    company: "Atlas Amadil Hotel",
    location: "Agadir, Morocco",
    summary:
      "Built a reservation system for room booking, stay management, and Stripe payment flows while supporting hotel IT operations.",
  },
  {
    period: "Jan 2022 - Jun 2022",
    role: "MERN Stack Developer",
    company: "Cyberground",
    location: "Casablanca, Morocco",
    summary:
      "Developed and maintained a real estate web application, web services, databases, Firebase features, and Agile delivery workflows.",
  },
  {
    period: "Jul 2021 - Sep 2021",
    role: "Software Engineer",
    company: "Badeel",
    location: "Casablanca, Morocco",
    summary:
      "Maintained the official website, internal databases, CMS features, APIs, and vehicle management services.",
  },
];

const projects = [
  {
    name: "Hotel Reservation Platform",
    type: "MERN + Payments",
    description:
      "Booking, stay management, authentication, and Stripe payment flows for hospitality operations.",
    stack: ["React", "Node.js", "TypeScript", "MongoDB", "JWT", "Stripe"],
  },
  {
    name: "Impact Palmares Internal Platform",
    type: "Enterprise Platform",
    description:
      "Internal platform modernization focused on scalability, maintainability, observability, and device management.",
    stack: ["Next.js", "Spring Boot", "Docker", "PostgreSQL", "ELK"],
  },
  {
    name: "Real Estate Web Application",
    type: "MERN Application",
    description:
      "Property platform with maintained services, database features, Firebase integrations, and team delivery workflows.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
  },
];

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    text: "React, Next.js, Angular, TypeScript, Redux, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    text: "Node.js, Express, Spring Boot, REST APIs, JWT, Stripe",
  },
  {
    icon: Database,
    title: "Database",
    text: "MongoDB, PostgreSQL, SQL Server, Firebase",
  },
  {
    icon: Layers3,
    title: "Delivery",
    text: "Docker, AWS, Render, ELK Stack, Git, GitHub, Agile",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [photoSrc, setPhotoSrc] = useState("/profile.jpg");

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);
    return () => document.body.classList.remove("nav-open");
  }, [navOpen]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Youssef Louzani home">
          <span>YL</span>
          <strong>Youssef Louzani</strong>
        </a>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          {navOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          className={navOpen ? "nav visible" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={() => setNavOpen(false)}>
            Work
          </a>
          <a href="#skills" onClick={() => setNavOpen(false)}>
            Skills
          </a>
          <a href="#experience" onClick={() => setNavOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setNavOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">
              <Sparkles size={16} /> MERN Stack & Full-Stack Developer
            </p>
            <h1>
              Building sharp, modern web products with React, Node.js, and clean
              UX.
            </h1>
            <p className="hero-text">
              I design and develop business-ready web applications: dashboards,
              booking systems, APIs, database-backed platforms, and internal
              tools that feel fast, clear, and easy to use.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href="mailto:youssef.louzani99@gmail.com"
              >
                <Mail size={18} /> Hire me
              </a>
              <a className="button ghost" href="#work">
                View projects <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="profile-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="profile-card">
              <div className="photo-shell">
                <img
                  src={photoSrc}
                  alt="Youssef Louzani"
                  onError={() => setPhotoSrc("/profile-placeholder.svg")}
                />
              </div>
              <div>
                <p>Available for</p>
                <h2>Full-stack developer roles</h2>
              </div>
              <div className="floating-tags" aria-label="Technology highlights">
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node.js</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="metrics" aria-label="Profile highlights">
          <div>
            <strong>5</strong>
            <span>Professional missions</span>
          </div>
          <div>
            <strong>MERN</strong>
            <span>Main application stack</span>
          </div>
          <div>
            <strong>UI/UX</strong>
            <span>Responsive, animated interfaces</span>
          </div>
          <div>
            <strong>API</strong>
            <span>REST, auth, payments, databases</span>
          </div>
        </section>

        <motion.section className="section" id="work" {...fadeUp}>
          <div className="section-title">
            <p className="eyebrow">
              <BriefcaseBusiness size={16} /> Featured work
            </p>
            <h2>Projects with product thinking, not just code.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <span>{project.description}</span>
                <div>
                  {project.stack.map((tech) => (
                    <small key={tech}>{tech}</small>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="section split" id="skills" {...fadeUp}>
          <div className="section-title sticky-title">
            <p className="eyebrow">
              <Code2 size={16} /> Stack
            </p>
            <h2>
              Modern stack for web apps that need to look good and work well.
            </h2>
          </div>
          <div className="skill-grid">
            {skills.map(({ icon: Icon, title, text }) => (
              <article className="skill-card" key={title}>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="section" id="experience" {...fadeUp}>
          <div className="section-title">
            <p className="eyebrow">
              <Layers3 size={16} /> Experience
            </p>
            <h2>
              Practical experience across products, APIs, dashboards, and IT
              systems.
            </h2>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.period}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.role}</h3>
                  <p>
                    {item.company} · {item.location}
                  </p>
                  <span>{item.summary}</span>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <section className="contact-band" id="contact">
          <motion.div {...fadeUp}>
            <p className="eyebrow">
              <Mail size={16} /> Contact
            </p>
            <h2>
              Ready for interviews, freelance missions, and full-time developer
              roles.
            </h2>
            <div className="contact-actions">
              <a href="mailto:youssef.louzani99@gmail.com">
                <Mail size={18} /> youssef.louzani99@gmail.com
              </a>
              <a href="tel:+212610521190">
                <Phone size={18} /> +212 610 521190
              </a>
              <span>
                <MapPin size={18} /> Agadir, Morocco
              </span>
              <a
                href="https://github.com/youssefLou"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> Add your GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
