"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "Velarro Estate",
    desc: "A premium real estate web application — my most professional project to date. Clean UI, property listings, and an immersive browsing experience for high-end properties.",
    url: "https://www.velarroestate.com",
    tags: ["Next.js", "React", "Tailwind"],
    featured: true,
  },
  {
    title: "Bayo Adegbite",
    desc: "Custom website for a music minister showcasing services, events, and music portfolio. Responsive design with easy navigation and audience engagement in mind.",
    url: "https://www.bayoadegbite.com",
    tags: ["React", "CSS", "Responsive"],
    featured: false,
  },
  {
    title: "Designer Portfolio",
    desc: "A visually stunning website for a designer highlighting their portfolio and services. Custom theme reflecting the designer's personal brand and style.",
    url: "https://adekunle-theta.vercel.app/",
    tags: ["React", "Tailwind", "Animation"],
    featured: false,
  },
  {
    title: "Massimo Restaurant",
    desc: "Restaurant website for Massimo showcasing their menu, services, and brand story. User-friendly interface designed for easy navigation and ordering.",
    url: "https://restaurant-byl8.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    title: "Extension Landing Page",
    desc: "Browser extension website providing users a seamless experience to learn about and install the extension. Clean and informative layout.",
    url: "https://extension-l7up.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    title: "Ticket Generator",
    desc: "Interactive ticket generator allowing users to create and customize personalized tickets. Fast, secure generation process with an intuitive interface.",
    url: "https://extension-gyo1.vercel.app/",
    tags: ["JavaScript", "HTML", "CSS"],
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      style={{ padding: "100px 24px", background: "rgba(0,0,0,0.1)" }}
      ref={ref}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              margin: "16px 0 0",
              letterSpacing: "-1px",
            }}
          >
            Things I've built
          </motion.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((proj, i) => (
            <motion.a
              key={proj.title}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{
                padding: "24px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                cursor: "pointer",
                position: "relative",
                border: proj.featured
                  ? "1px solid rgba(54,173,163,0.4)"
                  : "1px solid var(--card-border)",
              }}
            >
              {proj.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 11,
                    padding: "3px 10px",
                    borderRadius: 20,
                    background: "rgba(54,173,163,0.12)",
                    color: "var(--accent)",
                    fontWeight: 600,
                  }}
                >
                  <Star size={10} fill="currentColor" /> Featured
                </div>
              )}

              <div>
                <h3
                  style={{
                    
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--text-primary)",
                    margin: "0 0 10px",
                    paddingRight: proj.featured ? 80 : 0,
                  }}
                >
                  {proj.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                  {proj.desc}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: "auto",
                }}
              >
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      padding: "3px 10px",
                      borderRadius: 20,
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--accent)",
                  fontSize: 13,
                  fontWeight: 600,
                  
                }}
              >
                View Project <ExternalLink size={13} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
