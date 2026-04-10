import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TopicPill from "../components/TopicPill";
import articles from "../data/reactBlogs.json";

const levelClasses = {
  Advanced: {
    badge: "bg-indigo-500/15 text-indigo-400",
    border: "border-indigo-400/25",
  },
  Intermediate: {
    badge: "bg-orange-400/15 text-orange-400",
    border: "border-orange-400/25",
  },
  Beginner: {
    badge: "bg-green-500/15 text-green-400",
    border: "border-green-400/25",
  },
};

function MasonryCard({ article }) {
  const navigate = useNavigate();
  const level = levelClasses[article.level] || levelClasses.Intermediate;
  const isBig = article.featured;

  return (
    <div
      onClick={() => navigate(`/articles/${article.id}`)}
      className={`bg-card border border-line rounded-[14px] cursor-pointer transition-all duration-200 flex hover:border-line-soft hover:bg-card-hover ${
        isBig
          ? "p-6 flex-col gap-4 items-start row-span-2"
          : "p-4 flex-row items-center gap-3.5"
      }`}
    >
      {/* Icon */}
      <div
        className={`rounded-xl flex items-center justify-center mb-8 shrink-0 relative ${
          isBig ? "w-12 h-12 text-[22px]" : "w-10 h-10 text-[18px]"
        }`}
        style={{ background: article.iconBg }}
      >
        {article.icon}
        {isBig && (
          <span
            className={`absolute -top-1 -right-70 text-[10px] font-bold px-1.5 py-0.5 rounded border ${level.badge} ${level.border}`}
          >
            {article.level}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {isBig ? (
          <>
            <h3 className="font-bold text-lg mb-2.5 leading-snug">
              {article.title}
            </h3>
            <p className="text-ink-dim text-[13px] leading-relaxed mb-4">
              {article.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: article.authorColor }}
                >
                  {article.authorInitial}
                </div>
                <div>
                  <div className="text-xs font-semibold">{article.author}</div>
                  <div className="text-[11px] text-ink-faint">
                    {article.authorRole}
                  </div>
                </div>
              </div>
              <span className="text-xs text-ink-faint">
                ⏱ {article.readTime} min
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="font-semibold text-sm mb-1 truncate">
              {article.title}
            </div>
            <div className="text-xs text-ink-dim mb-1.5">{article.author}</div>
            <div className="flex gap-1.5 flex-wrap">
              {article.tags.map((t) => (
                <TopicPill key={t} label={t} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Articles() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-[26px] font-extrabold mb-6">All Articles</h1>

      {/* Search bar */}
      <div className="flex gap-3 mb-4">
        <div className="flex-1 flex items-center gap-2.5 bg-card border border-line rounded-[10px] px-4 py-2.5">
          <Search size={16} className="text-ink-faint shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, authors, or tags..."
            className="flex-1 bg-transparent border-none outline-none text-ink text-sm placeholder:text-ink-faint"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-ink-faint">
              <X size={14} />
            </button>
          )}
        </div>
        <button className="flex items-center gap-2 bg-card border border-line rounded-[10px] px-4 py-2.5 text-ink-dim text-sm font-medium shrink-0">
          <SlidersHorizontal size={16} />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      {/* Count */}
      <p className="text-[13px] text-ink-dim mb-5">
        Showing <strong className="text-ink">{filtered.length}</strong> of{" "}
        {articles.length} articles
      </p>

      {/* Grid or empty state */}
      {filtered.length === 0 ? (
        <div className="text-center pt-20">
          <div className="w-16 h-16 rounded-full bg-card border border-line flex items-center justify-center mx-auto mb-5">
            <Search size={24} className="text-ink-faint" />
          </div>
          <h3 className="font-bold text-lg mb-2">No articles found</h3>
          <p className="text-ink-dim mb-6">
            Try adjusting your search or filters
          </p>
          <button
            onClick={() => setQuery("")}
            className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold text-sm border-none"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[160px] gap-4">
          {filtered.map((article) => (
            <MasonryCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
