"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]; 

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 24px",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "var(--card-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          style={{
            
            fontWeight: 800,
            fontSize: 22,
            color: "var(--text-primary)",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
          whileHover={{ scale: 1.02 }}
        >
          HW<span style={{ color: "var(--accent)" }}>.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-9 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              style={{
                
                fontSize: 14,
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              whileHover={{ color: "var(--accent)" }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 50,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--accent)",
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          <motion.a
            href="#contact"
            className="btn-primary hidden sm:inline-flex"
            style={{ padding: "8px 18px", fontSize: 13 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer",
              padding: 4,
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 70,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "var(--bg-secondary)",
              borderBottom: "1px solid var(--border)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "12px 0" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
