import { useLocation } from "react-router-dom";
import { Search, Bell } from "lucide-react";

const pageTitles = {
  "/": "Dashboard",
  "/articles": "Articles",
  "/playground": "Playground",
  "/about": "About",
};

export default function TopNav() {
  const { pathname } = useLocation();
  const baseRoute = "/" + pathname.split("/")[1];
  const title = pageTitles[baseRoute] || "ReactHub";

  return (
    <header className="h-14 border-b border-line bg-surface-alt flex items-center px-4 sm:px-6 gap-3 shrink-0">
      {/* Page title */}
      <div className="flex items-center gap-2.5 flex-1 min-w-0">
        <span
          className="font-bold truncate"
          style={{
            background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
            fontSize: "20px",
          }}
        >
          {title}
        </span>
        <span className="hidden sm:inline text-[11px] font-medium text-ink-faint bg-elevated border border-line-soft rounded-full px-2 py-0.5 shrink-0">
          v18.3.0
        </span>
      </div>

      {/* Search — hidden on small screens */}
      <button className="hidden sm:flex items-center gap-2 bg-card border border-line rounded-lg px-3 py-1.5 text-ink-faint text-[13px] min-w-40 shrink-0">
        <Search size={14} />
        <span>Search...</span>
        <kbd className="ml-auto text-[11px] text-ink-faint bg-elevated border border-line-soft rounded px-1.5 py-px font-[inherit]">
          ⌘K
        </kbd>
      </button>

      {/* Search icon only on mobile */}
      <button className="sm:hidden w-9 h-9 rounded-lg flex items-center justify-center text-ink-faint bg-card border border-line">
        <Search size={16} />
      </button>

      {/* Bell */}
      <button className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-faint relative bg-card border border-line shrink-0">
        <Bell size={16} />
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent border-[1.5px] border-surface-alt" />
      </button>

      {/* Avatar */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white cursor-pointer shrink-0"
        style={{ background: "linear-gradient(135deg, #5b6ef5, #a855f7)" }}
      >
        JD
      </div>
    </header>
  );
}
