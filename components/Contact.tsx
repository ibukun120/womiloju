"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Link, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: <MessageCircle size={22} />,
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/2349036027441",
    color: "#25D366",
    bg: "rgba(37, 211, 102, 0.08)",
    border: "rgba(37, 211, 102, 0.2)",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "ibukunoluwawomiloju@gmail.com",
    href: "mailto:ibukunoluwawomiloju@gmail.com",
    color: "var(--accent)",
    bg: "rgba(54, 173, 163, 0.08)",
    border: "rgba(54, 173, 163, 0.2)",
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+234 903 602 7441",
    href: "tel:+2349036027441",
    color: "#7B8CDE",
    bg: "rgba(123, 140, 222, 0.08)",
    border: "rgba(123, 140, 222, 0.2)",
  },
  {
    icon: <Link size={22} />,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/hezekiah-womiloju",
    color: "#0A66C2",
    bg: "rgba(10, 102, 194, 0.08)",
    border: "rgba(10, 102, 194, 0.2)",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" style={{ padding: "100px 24px 80px" }} ref={ref}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            margin: "16px 0 20px",
            letterSpacing: "-1.5px",
          }}
        >
          Let's build something
          <br />
          <span className="gradient-text">great together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            color: "var(--text-secondary)",
            fontSize: 16,
            lineHeight: 1.8,
            maxWidth: 520,
            margin: "0 auto 60px",
          }}
        >
          I'm always open to new projects, collaborations, and opportunities.
          Whether you have a project in mind or just want to say hi — reach out!
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 60,
          }}
        >
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: 16,
                padding: "24px 20px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: c.bg,
                  border: `1.5px solid ${c.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.color,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div
                  style={{
                    // fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  {c.label}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", wordBreak: "break-all" }}>
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <a href="https://wa.me/2349036027441" className="btn-primary" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} />
            Send me a message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
