import { useState } from 'react';
import Beams from '../background/Beams';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faObjectUngroup, faAtom } from '@fortawesome/free-solid-svg-icons';

const events = [
  {
    icon: faScrewdriverWrench,
    title: ' Git & GitHub Workshop',
    date: 'Sunday, August 11 - 3:00 PM',
    details:
      'Learn version control + GitHub basics\n🧠 Speaker: Nikhil Chhokar\n📍 Room 204 / Google Meet',
  },
  {
    icon: faObjectUngroup,
    title: ' Web Design Mini Jam',
    date: 'Sunday, August 18 - 4:00 PM',
    details: 'Team up to build cool UIs\n🧑‍💻 Tools: Figma + Tailwind\n🎁 Swags for winners',
  },
  {
    icon: faAtom,
    title: ' Intro to React.js',
    date: 'Sunday, August 25 - 2:30 PM',
    details: 'Build your first React app step-by-step\n🎤 Speaker: Riya Arora\n📍 Computer Lab 1',
  },
];

export default function Calendar() {
  const [open, setOpen] = useState(Array(events.length).fill(false));

  const toggle = (idx) => {
    setOpen((open) => open.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold text-brand mb-2">Calendar</h3>

      <div className="max-w-xl mx-auto bg-[#0e0e10] border border-brand rounded-xl p-4">
        {events.map((event, idx) => (
          <div
            key={event.title}
            className={`p-4 mb-4 border-l-4 border-brand cursor-pointer transition-colors duration-200 ${
              open[idx] ? 'bg-[#1a1a1d]' : ''
            }`}
            onClick={() => toggle(idx)}
          >
            <FontAwesomeIcon icon={event.icon} className="text-brand"/>
            <h4 className="text-lg font-bold text-brand m-0">{event.title}</h4>
            <p className="m-0 text-[#d0d0d0]">{event.date}</p>
            {open[idx] && (
              <div className="pt-2 text-sm text-[#d0d0d0] whitespace-pre-line">
                {event.details}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Optional: neon glow on hover for titles/icons */}
      <style>{`
        .neon-blue { 
          color: #45D4FF;
          text-shadow:
            0 0 6px #45D4FF,
            0 0 14px #45D4FF,
            0 0 24px #45D4FF66,
            0 0 34px #45D4FFaa;
        }
        .event-block:hover h4,
        .event-block:hover svg {
          color: #45D4FF !important;
          filter: drop-shadow(0 0 6px #45D4FF) drop-shadow(0 0 14px #45D4FF);
        }
      `}</style>
    </div>
  );
}
