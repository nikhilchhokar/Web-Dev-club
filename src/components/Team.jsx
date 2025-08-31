import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

// Example team data
const teamMembers = [
  {
    title: "Nikhil Chhokar",
    description: "President",
    link: "https://www.linkedin.com/in/nikhil-chhokar-321922226/",
    image: "src/components/gallery/nikhil.jpeg"
  },
  {
    title: "Medhavee Singh",
    description: "Vice President",
    link: "https://www.linkedin.com/in/medhavee-singh-408424317",
    image: "src/components/gallery/medhave.jpg"
  },
  {
    title: "Abhinav Chowdhary",
    description: "Technical Lead",
    link: "https://www.linkedin.com/in/abhinav-chowdhary-277b1a275/",
    image: "src/components/gallery/abhinav.jpg"
  },
  {
    title: "Devesh Rawat",
    description: "Operations Head",
    link: "https://www.linkedin.com/in/devesh-rawat-240836323/",
    image: "src/components/gallery/devesh.jpg"
  },
  {
    title: "Ananya Chawla",
    description: "General Secretary",
    link: "https://www.linkedin.com/in/ananyachawla4605/",
    image: "src/components/gallery/ananya.jpeg"
  },
  {
    title: "Gurtej Bamrah",
    description: "Social Media Head",
    link: "https://www.linkedin.com/in/gurtej-bamrah-a1757331a/",
    image: "src/components/gallery/gurtej.jpg"
  }
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="my-8">
      <h3 className="text-2xl font-semibold text-brand mb-2">Our Team</h3>

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
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#45d4ff3d] block rounded-3xl"
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
              {member.image && (
                <img
                  src={member.image}
                  alt={member.title}
                  className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-2 border-brand"
                  loading="lazy"
                />
              )}
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-brand-dark/10 group-hover:border-brand-dark/20 relative z-20",
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
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
}
