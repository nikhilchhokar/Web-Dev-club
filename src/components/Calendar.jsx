import { useState } from 'react';
import Beams from '../background/Beams';  // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faScrewdriverWrench,
  faObjectUngroup,
  faAtom,
  faUserTie,
  faLocationDot,
  faLaptopCode,
  faGift,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

const events = [
  {
  icon: faAtom,
  title: 'WDC Workshop',
  date: 'Monday, September 8 - 12:00 PM - 12:30 PM',
  details: [
    { icon: faLaptopCode, text: 'Hands-on coding session to kick off the Web Dev Club' },
    { icon: faMicrophone, text: 'Speaker: Ananya Chawla & Medhavee Singh' },
    { icon: faLocationDot, text: 'Revealing Soon' },
  ],
},
{
  icon: faScrewdriverWrench,
  title: 'Introduction to HTML',
  date: 'Saturday, September 13 - 4:00 PM',
  details: [
    { icon: faLaptopCode, text: 'Learn the basics of HTML and how to structure web pages' },
    { icon: faUserTie, text: 'Speaker: Medhavee Singh' },
    { icon: faLocationDot, text: 'Google Meet' },
  ],
},
{
  icon: faObjectUngroup,
  title: 'Finishing HTML & Portfolio Project',
  date: 'Saturday, September 20 - 4:00 PM',
  details: [
    { icon: faLaptopCode, text: 'Wrap up HTML concepts & Build your own portfolio project' },
    { icon: faMicrophone, text: 'Speaker: Ananya Chawla' },
    { icon: faLocationDot, text: 'Google Meet' },
  ],
},

  
];

export default function Calendar() {
  const [open, setOpen] = useState(Array(events.length).fill(false));

  const toggle = (idx) => {
    setOpen((open) => open.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section id="calendar" className="my-8">
      <h3 className="text-2xl font-semibold text-brand mb-2">Calendar</h3>

      <div className="max-w-xl mx-auto bg-[#0e0e10] border border-brand rounded-xl p-4">
        {events.map((event, idx) => (
          <div
            key={event.title}
            className={`event-block p-4 mb-4 border-l-4 border-brand cursor-pointer transition-colors duration-200 ${
              open[idx] ? 'bg-[#1a1a1d]' : ''
            }`}
            onClick={() => toggle(idx)}
          >
            <FontAwesomeIcon icon={event.icon} className="text-brand" />
            <h4 className="text-lg font-bold text-brand m-0">{event.title}</h4>
            <p className="m-0 text-[#d0d0d0]">{event.date}</p>

            {open[idx] && (
              <div className="pt-2 text-sm text-[#d0d0d0] space-y-1">
                {event.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={detail.icon} className="text-brand" />
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Optional: neon glow on hover for titles/icons */}
      
  </section>
  );
}
