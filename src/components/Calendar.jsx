import { useState } from 'react';
import Beams from '../background/Beams';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faObjectUngroup, faAtom } from '@fortawesome/free-solid-svg-icons';
import ScrollFloat from "./scrollFloat/ScrollFloat";

const events = [
  {
    icon : faScrewdriverWrench,
    title: ' Git & GitHub Workshop',
    date: 'Sunday, August 11 – 3:00 PM',
    details: 'Learn version control + GitHub basics\n🧠 Speaker: Nikhil Chhokar\n📍 Room 204 / Google Meet',
  },
  {
    icon : faObjectUngroup,
    title: ' Web Design Mini Jam',
    date: 'Sunday, August 18 – 4:00 PM',
    details: 'Team up to build cool UIs\n🧑‍💻 Tools: Figma + Tailwind\n🎁 Swags for winners',
  },
  {
    icon : faAtom,
    title: ' Intro to React.js',
    date: 'Sunday, August 25 – 2:30 PM',
    details: 'Build your first React app step-by-step\n🎤 Speaker: Riya Arora\n📍 Computer Lab 1',
  },
];

export default function Calendar() {
  const [open, setOpen] = useState(Array(events.length).fill(false));

  const toggle = idx => {
    setOpen(open => open.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="my-8">
      
      <ScrollFloat
  animationDuration={3}
  ease='back.inOut(4)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=50%'
  stagger={0.3}
  className="text-3xl font-bold text-[#6EFFC4] mb-4"
>
  Calendar
</ScrollFloat>
      <div className="max-w-xl mx-auto bg-[#0e0e10] border border-[#6EFFC4] rounded-xl p-4">
        {events.map((event, idx) => (
          <div
            key={event.title}
            className={`p-4 mb-4 border-l-4 border-[#6EFFC4] cursor-pointer transition-colors duration-200 ${open[idx] ? 'bg-[#1a1a1d]' : ''}`}
            onClick={() => toggle(idx)}
          >
            <FontAwesomeIcon icon={event.icon} style={{ color: '#6EFFC4'}}/>
            <h4 className="text-lg font-bold text-[#6EFFC4] m-0">{event.title}</h4>
            <p className="m-0 text-[#d0d0d0]">{event.date}</p>
            {open[idx] && (
              <div className="pt-2 text-sm text-[#d0d0d0] whitespace-pre-line">{event.details}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 