"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1100,
          margin: "0 auto",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span
          style={{
            
            fontWeight: 800,
            fontSize: 18,
            color: "var(--text-primary)",
          }}
        >
          HW<span style={{ color: "var(--accent)" }}>.</span>
        </span>

        <p
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Built with{" "}
          <Heart size={12} fill="var(--accent)" style={{ color: "var(--accent)" }} />{" "}
          by  */}
          Hezekiah Womiloju · {new Date().getFullYear()}
        </p>

        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
          Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
