"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import clsx from "clsx";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" aria-label="Armakat - Home" className="relative z-50 group flex items-center space-x-3">
            <Logo />
            <span className="font-outfit text-2xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors hidden sm:block">
              ARMAKAT
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-white relative",
                  pathname === link.href ? "text-white" : "text-zinc-400"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex items-center space-x-6"
        >
          <button className="flex items-center space-x-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-colors"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "font-outfit text-2xl font-medium transition-colors",
                    pathname === link.href ? "text-white" : "text-zinc-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col space-y-6">
                <button className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors w-max">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">English</span>
                </button>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 bg-white text-black text-center font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
