"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Zitek Ltd",
    role: "Frontend Web Developer",
    period: "Dec 2025 – Present",
    type: "Full-time · Remote",
    description:
      "Design, develop and maintain websites and web applications using modern frameworks. Collaborate with clients to deliver custom solutions, troubleshoot issues, and stay current with the latest web trends.",
    current: true,
  },
  {
    company: "Metasys",
    role: "Frontend Intern",
    period: "Feb 2026 – Apr 2026",
    type: "Internship · Remote",
    description:
      "Assisted in developing web applications using React and Next.js. Collaborated with designers to implement UI/UX designs, wrote clean code following best practices, and consistently met project deadlines.",
    current: false,
  },
  {
    company: "Freelance",
    role: "Freelance Web Developer",
    period: "Jan 2025 – Present",
    type: "Self-employed · Remote",
    description:
      "Independently design and build websites for diverse clients including music ministers, designers, and restaurant brands. Delivered responsive, user-friendly solutions tailored to each client's needs.",
    current: true,
  },
  {
    company: "The Frontend Bootcamp",
    role: "Frontend Intern",
    period: "Jan 2024 – Apr 2024",
    type: "Internship · Remote",
    description:
      "Started my professional journey here — assisting in web app development using HTML, CSS, JavaScript and React. Learned to collaborate with designers, debug codebases, and deliver clean, efficient code.",
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" style={{ padding: "100px 24px" }} ref={ref}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Experience
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
            My journey so far
          </motion.h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 8,
              bottom: 8,
              width: 1,
              background: "linear-gradient(180deg, var(--accent), transparent)",
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ display: "flex", gap: 28, paddingLeft: 0 }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0, width: 40, display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: exp.current
                        ? "rgba(54,173,163,0.15)"
                        : "var(--card-bg)",
                      border: `2px solid ${exp.current ? "var(--accent)" : "var(--border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: exp.current ? "var(--accent)" : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  >
                    <Briefcase size={16} />
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  className="card"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  style={{ flex: 1, padding: "20px 24px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                        
                          fontWeight: 700,
                          fontSize: 17,
                          color: "var(--text-primary)",
                          margin: 0,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <span style={{ fontSize: 14, color: "var(--accent)", fontWeight: 500 }}>
                        {exp.company}
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--text-muted)",
                          fontWeight: 500,
                        }}
                      >
                        {exp.period}
                      </div>
                      {exp.current && (
                        <span
                          style={{
                            fontSize: 11,
                            padding: "2px 8px",
                            borderRadius: 20,
                            background: "rgba(54,173,163,0.12)",
                            color: "var(--accent)",
                            fontWeight: 600,
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: "10px 0 0" }}>
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
