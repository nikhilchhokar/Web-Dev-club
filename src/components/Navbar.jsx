import React, { useState } from "react";

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

  // Optional: Smooth scroll to top for Home
  const handleHomeClick = (e) => {
    if (e.target.getAttribute('href') === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setExpanded(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pointer-events-none">
      {/* Animated pill with club name */}
      <div
        className={`transition-all duration-[700ms] ease-in-out pointer-events-auto select-none shadow-lg border-b border-white/20 mt-4 rounded-2xl flex items-center justify-center
          ${expanded
            ? "bg-[#18181b]/60 px-8 py-2 scale-90 z-20 backdrop-blur-sm"
            : "bg-[#18181b]/90 px-12 py-4 scale-100 z-30 backdrop-blur-md"}
        `}
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
        <span className="text-2xl font-extrabold tracking-wide text-[#6EFFC4] drop-shadow-sm whitespace-nowrap transition-all duration-[700ms]">
          The Web Dev Club
        </span>
      </div>
      {/* Expanded navbar with only links, appears to grow from the pill */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 transition-all duration-[700ms] ease-in-out pointer-events-auto
          ${expanded
            ? "opacity-100 scale-100 translate-y-2 z-10"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none z-0"}
        `}
        style={{
          top: "68px",
          width: "100%",
          maxWidth: "700px",
        }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <nav className="bg-[#18181b] border-b border-white/20 shadow-lg rounded-2xl flex items-center justify-center px-8 py-4">
          <div className="flex flex-1 justify-center space-x-10">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleHomeClick}
                className="text-lg font-semibold text-white/90 hover:text-[#6EFFC4] transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-white/10 nav-link-creative"
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
      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-20 md:h-16" />
      {/* Custom creative animation styles */}
      <style>{`
        .nav-link-creative .nav-link-inner {
          transition: transform 0.3s cubic-bezier(0.4,0.2,0.2,1), box-shadow 0.3s, color 0.2s;
          display: inline-block;
        }
        .nav-link-creative:hover .nav-link-inner {
          transform: scale(1.12);
          box-shadow: 0 2px 16px 0 #6EFFC4aa;
          color: #6EFFC4;
        }
      `}</style>
    </header>
  );
} 