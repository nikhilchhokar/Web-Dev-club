import ScrollFloat from "./scrollFloat/ScrollFloat";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 px-4 max-w-3xl mx-auto">
      <ScrollFloat
  animationDuration={3}
  ease='back.inOut(4)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=50%'
  stagger={0.3}
  className="text-3xl font-bold text-[#6EFFC4] mb-4"
>
  About us
</ScrollFloat>
      <p className="mb-4">We are a group of passionate web developers, designers, and tech enthusiasts at our college. Connect with us on LinkedIn and GitHub!</p>
      {/* TODO: Add LinkedIn, GitHub links for team members */}
     
    </section>
  );
} 
