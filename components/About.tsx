"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Code2, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }} ref={ref}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-about">

        {/* Left text block */}
        <div>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "var(--text-primary)",
              margin: "16px 0 24px",
              
            }}
          >
            Building the web,
            <br />
            <span className="gradient-text">one pixel at a time.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}
          >
            I'm Hezekiah — a passionate Frontend Developer from Ogun State, Nigeria,
            with a sharp eye for clean UI and seamless user experiences. I started my
            journey in early 2024 and have since grown into building full, production-ready
            web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 16, marginBottom: 36 }}
          >
            From freelance projects to internships and professional roles, I consistently
            deliver solutions that are not just functional — but thoughtfully crafted for
            real users. I love collaborating with clients and teams to turn ideas into
            polished digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-muted)", fontSize: 14 }}
          >
            <MapPin size={15} style={{ color: "var(--accent)" }} />
            Ogun State, Nigeria · Available for Remote Work
          </motion.div>
        </div>

        {/* Right cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            {
              icon: <Code2 size={22} />,
              title: "Clean Code",
              desc: "I write readable, maintainable, and efficient code that follows industry best practices.",
              delay: 0.2,
            },
            {
              icon: <Zap size={22} />,
              title: "Fast Delivery",
              desc: "I understand deadlines. You get quality work on time, every time — without cutting corners.",
              delay: 0.35,
            },
            {
              icon: <MapPin size={22} />,
              title: "Client-First",
              desc: "I collaborate closely with clients to understand their vision and deliver exactly what they need.",
              delay: 0.5,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="card"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: card.delay }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{ padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(54,173,163,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>
              <div>
                <div
                  style={{
                    // fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--text-primary)",
                    marginBottom: 6,
                  }}
                >
                  {card.title}
                </div>
                <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {card.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-about { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
