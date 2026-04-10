import { useNavigate } from "react-router-dom";
import {
  Star,
  TrendingUp,
  FileText,
  Users,
  Tag,
  ArrowRight,
} from "lucide-react";
import ArticleCard from "../components/ArticleCard";
import CodePreview from "../components/CodePreview";
import articles from "../data/reactBlogs.json";

const spotlightCode = `// React 19: Automatic Memoization
function ExpensiveComponent({ data }) {
  // No useMemo needed!
  // Compiler handles optimization
  const processed = heavyComputation(data);

  return <View data={processed} />;
}`;

export default function Home() {
  const navigate = useNavigate();
  const featured = articles.filter((a) => a.featured);
  const recent = articles.slice(0, 3);

  return (
    <div className="max-w-[960px] mx-auto flex flex-col gap-8">
      {/* Hero banner */}
      <div
        className="border border-[#2e2070] rounded-2xl p-6 sm:p-9 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a1060 0%, #0f0c3a 40%, #1a0a40 70%, #2d1060 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, #7c3aed 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 text-xs text-violet-400 font-medium bg-violet-400/10 border border-violet-400/20 rounded-full px-2.5 py-0.5 mb-3.5">
            ⚡ New: React 19 Compiler
          </div>
          <h1 className="text-2xl sm:text-[32px] font-extrabold mb-2.5 text-white leading-tight">
            Master Modern React
          </h1>
          <p className="text-violet-300 text-sm sm:text-[15px] mb-6 max-w-[460px] leading-relaxed">
            Deep dives into React internals, hooks, patterns, and the ecosystem.
            Written by core team members and industry experts.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => navigate("/articles")}
              className="bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-1.5 border-none"
            >
              Explore Articles <ArrowRight size={14} />
            </button>
            <button
              onClick={() => navigate("/playground")}
              className="bg-white/8 text-white px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/12"
            >
              Try Playground
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: <FileText size={20} />, value: "50+", label: "Articles" },
          { icon: <Users size={20} />, value: "12", label: "Authors" },
          { icon: <Tag size={20} />, value: "8", label: "Topics" },
        ].map(({ icon, value, label }) => (
          <div
            key={label}
            className="bg-card border border-line rounded-xl p-5 flex flex-col items-center gap-2"
          >
            <div className="text-accent">{icon}</div>
            <div className="text-[26px] font-extrabold">{value}</div>
            <div className="text-[13px] text-ink-dim">{label}</div>
          </div>
        ))}
      </div>

      {/* Featured deep dives */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Star size={16} color="#facc15" fill="#facc15" />
          <h2 className="font-bold text-base">Featured Deep Dives</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="featured"
            />
          ))}
        </div>
      </div>

      {/* Bottom two-column: recently published + code spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recently published */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} color="#22c55e" />
            <h2 className="font-bold text-base">Recently Published</h2>
          </div>
          <div className="flex flex-col gap-2.5">
            {recent.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="default"
              />
            ))}
          </div>
        </div>

        {/* Code spotlight */}
        <div>
          <h2 className="font-bold text-base mb-4">Code Spotlight</h2>
          <CodePreview code={spotlightCode} language="jsx" />
        </div>
      </div>
    </div>
  );
}
