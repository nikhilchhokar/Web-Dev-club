import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import ScrollFloat from "./scrollFloat/ScrollFloat";
// Example team data
const teamMembers = [
  {
    title: "Alice",
    description: "Frontend Developer",
    link: "https://linkedin.com/in/alice"
  },
  {
    title: "Bob",
    description: "Backend Developer",
    link: "https://linkedin.com/in/bob"
  },
  {
    title: "Charlie",
    description: "UI/UX Designer",
    link: "https://linkedin.com/in/charlie"
  },
  {
    title: "Alice",
    description: "Frontend Developer",
    link: "https://linkedin.com/in/alice"
  },
  {
    title: "Bob",
    description: "Backend Developer",
    link: "https://linkedin.com/in/bob"
  },
  {
    title: "Charlie",
    description: "UI/UX Designer",
    link: "https://linkedin.com/in/charlie"
  }
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="my-8">
      <ScrollFloat
  animationDuration={3}
  ease='back.inOut(4)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=50%'
  stagger={0.3}
  className="text-3xl font-bold text-[#6EFFC4] mb-4"
> Our Team</ScrollFloat>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6")}>
        {teamMembers.map((member, idx) => (
          <a
            href={member.link}
            key={member.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 }
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 }
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{member.title}</CardTitle>
              <CardDescription>{member.description}</CardDescription>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}

function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function CardTitle({ className, children }) {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
}

function CardDescription({ className, children }) {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
}