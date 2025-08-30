import Team from './Team';
import Calendar from './Calendar';
import JoinUs from './JoinUs';
import TechStack from './TechStack';


export default function Resources() {
  return (
    <section id="resources" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-brand mb-4"></h2>
      <Team />
      <Calendar />
      <JoinUs />
      <TechStack />
      
    </section>
  );
} 