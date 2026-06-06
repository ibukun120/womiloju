"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 90, category: "Framework" },
  { name: "Next.js", level: 85, category: "Framework" },
  { name: "TypeScript", level: 80, category: "Language" },
  { name: "JavaScript", level: 92, category: "Language" },
  { name: "HTML & CSS", level: 95, category: "Core" },
  { name: "Tailwind CSS", level: 88, category: "Styling" },
  { name: "React Query", level: 78, category: "State" },
  { name: "Git & GitHub", level: 82, category: "Tools" },
];

const tools = [
  "VS Code", "Figma", "Vercel", "GitHub", "npm", "Postman",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      style={{ padding: "100px 24px", background: "rgba(0,0,0,0.1)", position: "relative" }}
      ref={ref}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Technical Skills
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
            What I bring to the table
          </motion.h2>
        </div>

        {/* Skill bars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginBottom: 60,
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ padding: "20px 24px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <div>
                  <span
                    style={{
                      
                      fontWeight: 700,
                      fontSize: 15,
                      color: "var(--text-primary)",
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      marginLeft: 8,
                      fontSize: 11,
                      padding: "2px 8px",
                      borderRadius: 20,
                      background: "rgba(54,173,163,0.1)",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
                <span
                  style={{
                    
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--accent)",
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: 5,
                  borderRadius: 100,
                  background: "var(--border)",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.07, ease: "easeOut" }}
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, var(--accent), #4ECDC4)",
                    borderRadius: 100,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 20,
            }}
          >
            Tools I use
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.06 }}
                whileHover={{ y: -2 }}
                style={{
                  padding: "8px 20px",
                  borderRadius: 50,
                  border: "1px solid var(--border)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  background: "var(--card-bg)",
                  cursor: "default",
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
