import ScrollFloat from "./scrollFloat/ScrollFloat";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-4xl mx-auto">
      <ScrollFloat
        animationDuration={3}
        ease='back.inOut(4)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=50%'
        stagger={0.3}
        className="text-3xl font-bold text-[#6EFFC4] mb-4"
      > Projects</ScrollFloat>
      {/* TODO: Display members' projects */}
    </section>
  );
} 