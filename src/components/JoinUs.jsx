import { FaDiscord, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";

const JOIN_LINKS = [
   {
    name: "Interview Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSftwSB5AKVGxER4FycYr9GzfZCkEb1rsXbL_6MvQlGs5MUc9A/viewform?usp=preview",
    color: "bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800",
    icon: <FaWpforms className="w-6 h-6" />
  },
  {
    name: "WhatsApp",
    href: "https://chat.whatsapp.com/IVLOiJQKhN58mQv4D9AADX?mode=ems_copy_c",
    color: "bg-green-500",
    icon: <FaWhatsapp className="w-6 h-6" />
  },
  {
    name: "Discord",
    href: "https://discord.gg/32P4GtJ9",
    color: "bg-indigo-500",
    icon: <FaDiscord className="w-6 h-6" />
  },/*
  {
    name: "Twitter",
    href: "YOUR-TWITTER-LINK",
    color: "bg-blue-400",
    icon: <FaTwitter className="w-6 h-6" />
  },
  {
    name: "LinkedIn",
    href: "YOUR-LINKEDIN-LINK",
    color: "bg-blue-700",
    icon: <FaLinkedin className="w-6 h-6" />
  },*/
  {
    name: "Main Project (GitHub)",
    href: "https://github.com/nikhilchhokar/Web-Dev-club",
    color: "bg-gray-800",
    icon: <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.4 9.2 8 10.7.5.1.7-.2.7-.5v-1.6c-3.3.7-4-1.5-4-1.5-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.7-.3-5.6-1.3-5.6-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 1.9 1.2 3.2 0 4.5-2.9 5.5-5.6 5.8.4.3.8 1 .8 2v2.9c0 .3.2.6.7.5a11.53 11.53 0 0 0 8-10.7C23.5 5.7 18.3.5 12 .5z"/></svg>
  }
];

export default function JoinUs() {
  return (
    <section id="joinus" className="px-8 py-12 rounded-xl shadow-xl flex flex-col items-center animate-fade-in">

      <h2 className="text-4xl font-extrabold text-blue-600 mb-3 tracking-tight">
  Join The Web Dev Club
</h2>
      <p className="text-lg text-white mb-10 text-center max-w-lg">
        Be part of a passionate dev community. Get exclusive access to events, projects,<br/> and resources. Connect with us on any platform:
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        {JOIN_LINKS.map((item, i) => (
          <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer"
             className={`group flex items-center gap-3 px-4 py-3 rounded-lg font-semibold shadow-lg ${item.color} text-white hover:scale-105 transition duration-150`}>
            {item.icon}
            <span className="group-hover:underline">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
