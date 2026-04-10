import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { LayoutDashboard, FileText, Terminal, User } from "lucide-react";

const mobileNavItems = [
  { to: "/", icon: LayoutDashboard, label: "Home" },
  { to: "/articles", icon: FileText, label: "Articles" },
  { to: "/playground", icon: Terminal, label: "Playground" },
  { to: "/about", icon: User, label: "About" },
];

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 bg-surface pb-20 md:pb-8">
          <Outlet />
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-alt border-t border-line flex items-center justify-around px-2 h-14 shrink-0">
        {mobileNavItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-colors duration-150 ${
                isActive
                  ? "text-accent"
                  : "text-ink-faint hover:text-ink-dim"
              }`
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
