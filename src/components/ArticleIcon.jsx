import {
  Zap,
  Anchor,
  Server,
  Sparkles,
  Accessibility,
  GitBranch,
  Palette,
  Smartphone,
  FileText,
} from "lucide-react";

const iconMap = {
  Zap,
  Anchor,
  Server,
  Sparkles,
  Accessibility,
  GitBranch,
  Palette,
  Smartphone,
  FileText,
};

/**
 * Returns a Lucide icon component by name string.
 * Falls back to FileText if name not found.
 */
export function getIcon(name, props = {}) {
  const Icon = iconMap[name] || FileText;
  return <Icon {...props} />;
}

/**
 * Derives a single initial letter from a full name string.
 */
export function getInitial(name = "") {
  return name.trim().charAt(0).toUpperCase();
}

/**
 * Maps a Tailwind gradient string like "from-purple-500 to-indigo-600"
 * to an inline CSS gradient for use on non-Tailwind bg elements.
 */
const gradientMap = {
  "from-purple-500 to-indigo-600": "linear-gradient(135deg,#a855f7,#4f46e5)",
  "from-blue-400 to-cyan-500": "linear-gradient(135deg,#60a5fa,#06b6d4)",
  "from-emerald-400 to-teal-500": "linear-gradient(135deg,#34d399,#14b8a6)",
  "from-orange-400 to-red-500": "linear-gradient(135deg,#fb923c,#ef4444)",
  "from-pink-400 to-rose-500": "linear-gradient(135deg,#f472b6,#f43f5e)",
  "from-violet-500 to-purple-600": "linear-gradient(135deg,#8b5cf6,#9333ea)",
  "from-yellow-400 to-amber-500": "linear-gradient(135deg,#facc15,#f59e0b)",
  "from-cyan-400 to-blue-500": "linear-gradient(135deg,#22d3ee,#3b82f6)",
};

export function getGradientStyle(colorStr = "") {
  return gradientMap[colorStr] || "linear-gradient(135deg,#5b6ef5,#a855f7)";
}

/**
 * Derives an author avatar color from the gradient string (uses the first color stop).
 */
const avatarColorMap = {
  "from-purple-500 to-indigo-600": "#a855f7",
  "from-blue-400 to-cyan-500": "#60a5fa",
  "from-emerald-400 to-teal-500": "#34d399",
  "from-orange-400 to-red-500": "#fb923c",
  "from-pink-400 to-rose-500": "#f472b6",
  "from-violet-500 to-purple-600": "#8b5cf6",
  "from-yellow-400 to-amber-500": "#facc15",
  "from-cyan-400 to-blue-500": "#22d3ee",
};

export function getAvatarColor(colorStr = "") {
  return avatarColorMap[colorStr] || "#5b6ef5";
}
