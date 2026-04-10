import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Terminal,
  User,
  Settings,
} from "lucide-react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/articles", icon: FileText, label: "Articles" },
  { to: "/playground", icon: Terminal, label: "Playground" },
  { to: "/about", icon: User, label: "About" },
];

export default function Sidebar() {
  return (
    <nav className="hidden md:flex w-16 bg-surface-alt border-r border-line flex-col items-center py-3 gap-1 shrink-0 z-50">
      {/* Logo */}
      <div
        className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-4 shrink-0"
        style={{ background: "linear-gradient(135deg, #5b6ef5, #8b5cf6)" }}
      >
        <Terminal size={18} color="#fff" />
      </div>

      {/* Nav links */}
      <div className="flex-1 flex flex-col gap-1 items-center">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            title={label}
            className={({ isActive }) =>
              `w-10 h-10 rounded-[10px] flex items-center justify-center transition-all duration-150 ${
                isActive
                  ? "bg-accent text-white"
                  : "text-ink-faint hover:bg-elevated hover:text-ink-dim"
              }`
            }
          >
            <Icon size={18} />
          </NavLink>
        ))}
      </div>

      {/* Settings at bottom */}
      <NavLink
        to="/settings"
        title="Settings"
        className="w-10 h-10 rounded-[10px] flex items-center justify-center text-ink-faint hover:bg-elevated hover:text-ink-dim transition-all duration-150 mt-auto"
      >
        <Settings size={18} />
      </NavLink>
    </nav>
  );
}
