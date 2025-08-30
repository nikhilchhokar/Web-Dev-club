import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Projects", href: "#projects" },
  { name: "Resources", href: "#resources" },
  { name: "JoinUs", href: "#join" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth scroll Home
  const handleHomeClick = (e) => {
    if (e.target.getAttribute("href") === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setExpanded(false);
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pointer-events-none">
      {/* --- Mobile + Tablet Navbar (lg:hidden) --- */}
      <div className="w-full bg-[#18181b]/90 px-4 py-3 flex items-center justify-between lg:hidden pointer-events-auto shadow-lg border-b border-white/20">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <span className="flex items-center gap-2 text-lg font-extrabold tracking-wide text-brand drop-shadow-sm">
    <img
      src="logo.png"   // <-- your society icon path
      alt="a"
      aria-hidden="true"
      className="h-10 w-10 select-none pointer-events-none"
    />
     
  </span>
      </div>

      {/* Mobile + Tablet dropdown menu with slide animation */}
      <div
        className={`lg:hidden w-full bg-[#18181b] shadow-lg border-b border-white/20 pointer-events-auto overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-start px-6 py-4 gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleHomeClick}
              className="text-base font-semibold text-white hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* --- Desktop Fancy Navbar (lg+) --- */}
      <div
        className={`hidden lg:flex transition-all duration-[700ms] ease-in-out pointer-events-auto select-none shadow-lg border-b border-white/20 mt-4 rounded-2xl items-center justify-center
          ${
            expanded
              ? "bg-[#18181b]/60 px-8 py-2 scale-90 z-20 backdrop-blur-sm"
              : "bg-[#18181b]/90 px-12 py-4 scale-100 z-30 backdrop-blur-md"
          }`}
        style={{
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
          minWidth: "180px",
        }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        tabIndex={0}
      >
        <span className="flex [word-spacing:-0.4rem] tracking-normal items-center gap-3 text-2xl font-extrabold text-brand drop-shadow-sm whitespace-nowrap transition-all duration-[700ms]">
    <img
      src="logo.png"
      alt=""
      aria-hidden="true"
      className="h-7 w-7 select-none pointer-events-none"
    />
    <l>The Web Dev Club</l>
  </span>
      </div>

      {/* Expanded navbar links (desktop only) */}
      <div
        className={`hidden lg:block absolute left-1/2 -translate-x-1/2 transition-all duration-[700ms] ease-in-out pointer-events-auto
          ${
            expanded
              ? "opacity-100 scale-100 translate-y-2 z-10"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none z-0"
          }`}
        style={{
          top: "68px",
          width: "100%",
          maxWidth: "900px",
          paddingLeft: "8px",
          paddingRight: "8px",
          transition:
            "height 0.4s cubic-bezier(0.4,0.2,0.2,1), opacity 0.7s, transform 0.7s",
        }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <nav className="bg-[#18181b] border-b border-white/20 shadow-lg rounded-2xl flex items-center justify-center px-2 py-4 md:px-8">
          <div
            className="flex flex-1 justify-center flex-wrap
              gap-x-4 gap-y-2
              md:flex-nowrap md:gap-x-10 md:gap-y-0
              max-w-full"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleHomeClick}
                className="text-base lg:text-lg font-semibold text-white transition-colors duration-200 px-2 lg:px-3 py-1 rounded-lg nav-neon-text"
                style={{
                  transitionDelay: expanded ? `${i * 60}ms` : "0ms",
                }}
              >
                <span className="inline-block nav-link-inner">{link.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-20 lg:h-16" />

      {/* Neon link hover effect */}
      <style>{`
        .nav-neon-text .nav-link-inner {
  transition:
    color 0.2s cubic-bezier(0.4,0.2,0.2,1),
    text-shadow 0.3s cubic-bezier(0.4,0.2,0.2,1);
  color: #fff; /* default text color */
  text-shadow: none;
}

.nav-neon-text:hover .nav-link-inner,
.nav-neon-text:focus .nav-link-inner {
  color: #3DA0FF; /* your base brand color */
  text-shadow:
    0 0 6px #3DA0FF,
    0 0 14px #3DA0FF,
    0 0 24px #3DA0FF66, /* lighter transparency */
    0 0 34px #3DA0FFaa; /* stronger transparency */
}

      `}</style>
    </header>
  );
}
