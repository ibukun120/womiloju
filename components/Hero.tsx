"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

const floatVariants: any = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(54,173,163,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(47,87,138,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="hero-layout" style={{ maxWidth: 1100, width: "100%", position: "relative", zIndex: 1 }}>
        <div className="hero-copy">
          {/* Status badge */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(54,173,163,0.1)",
            border: "1px solid rgba(54,173,163,0.3)",
            borderRadius: 50,
            padding: "6px 16px",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#36ADA3",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", letterSpacing: 1 }}>
            Available for new projects
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            
            fontSize: "clamp(44px, 8vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "var(--text-primary)",
            marginBottom: 8,
          }}
        >
          Hezekiah
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            
            fontSize: "clamp(44px, 8vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 32,
          }}
          className="gradient-text"
        >
          Womiloju
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto 48px",
            fontWeight: 300,
          }}
        >
          Frontend Developer crafting clean, performant web experiences with{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>React</span>,{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>Next.js</span> &{" "}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>TypeScript</span>.
          Based in Ogun State, Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="#projects" className="btn-primary">
            See My Work <ExternalLink size={15} />
          </a>
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 6vw, 64px)",
            marginTop: 72,
            flexWrap: "wrap",
          }}
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "6+", label: "Projects Delivered" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 6,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-figure"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Image
          src="/images/womiloju.jpeg"
          alt="Womiloju Hezekiah Ibukunoluwa"
          // width={100}
          // height={100}
          // className="w-full h-full"
          fill
          sizes="(max-width: 868px) 80vw, 420px"
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </div>

      {/* Scroll indicator */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{
          position: "absolute",
          bottom: 6,
          left: "45%",
          transform: "translateX(-50%)",
          color: "var(--text-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>scroll</span>
        <ArrowDown size={16} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
