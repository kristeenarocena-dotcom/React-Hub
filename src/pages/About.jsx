import { Mail, MapPin, Calendar } from "lucide-react";

const contributors = [
  { name: "Dan Abramov", role: "React Core", initial: "D", color: "#e17055" },
  {
    name: "Sophie Alpert",
    role: "Engineering",
    initial: "S",
    color: "#a855f7",
  },
  { name: "Sebastian M", role: "Architecture", initial: "S", color: "#3b82f6" },
  { name: "Andrew Clark", role: "Core Team", initial: "A", color: "#22c55e" },
];

const stats = [
  { value: "50+", label: "Articles" },
  { value: "12", label: "Contributors" },
  { value: "10K", label: "Readers" },
  { value: "2024", label: "Since" },
];

export default function About() {
  return (
    <div className="max-w-[720px] mx-auto px-4 flex flex-col gap-8">
      {/* Profile header */}
      <div className="flex items-center gap-6">
        <div
          className="w-20 h-20 rounded-[20px] flex items-center justify-center text-4xl font-extrabold text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #a855f7, #6366f1)" }}
        >
          R
        </div>
        <div>
          <h1 className="text-2xl font-extrabold mb-1">ReactHub</h1>
          <p className="text-ink-dim text-sm">
            Advanced React Learning Platform
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="bg-card border border-line rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-extrabold mb-1">{value}</div>
            <div className="text-xs text-ink-dim">{label}</div>
          </div>
        ))}
      </div>

      {/* About section */}
      <div>
        <h2 className="font-bold text-lg mb-3.5">About</h2>
        <p className="text-ink-dim leading-[1.8] mb-3.5">
          ReactHub is a curated platform for learning advanced React concepts.
          We collaborate with React core team members and industry experts to
          bring you in-depth tutorials, real-world patterns, and insider
          knowledge about the React ecosystem.
        </p>
        <p className="text-ink-dim leading-[1.8]">
          Whether you're mastering hooks, exploring concurrent features, or
          building production applications, our content is designed to
          accelerate your journey from intermediate to expert React developer.
        </p>
      </div>

      {/* Contributors */}
      <div>
        <h2 className="font-bold text-lg mb-4">Contributors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {contributors.map(({ name, role, initial, color }) => (
            <div
              key={name}
              className="bg-card border border-line rounded-lg p-4 text-center flex flex-col items-center gap-2.5 cursor-pointer transition-all hover:border-line-soft hover:bg-card-hover group"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold text-white"
                style={{ background: color }}
              >
                {initial}
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5">{name}</div>
                <div className="text-xs text-ink-faint">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Get in touch */}
      <div className="bg-gradient-to-br from-[#1a1060] to-[#0f0c3a] border border-[#2e2070] rounded-2xl p-7">
        <h2 className="font-bold text-lg mb-5 text-white">Get in Touch</h2>
        <div className="space-y-3.5 sm:grid sm:grid-cols-2 sm:gap-3.5 sm:space-y-0">
          <div className="flex items-center gap-2.5 text-purple-300 text-sm">
            <Mail size={16} /> hello@reacthub.dev
          </div>
          <div className="flex items-center gap-2.5 text-purple-300 text-sm">
            <MapPin size={16} /> San Francisco, CA
          </div>
          <div className="flex items-center gap-2.5 text-purple-300 text-sm sm:col-span-2">
            <Calendar size={16} /> Mon-Fri, 9am-6pm PST
          </div>
        </div>
      </div>
    </div>
  );
}
