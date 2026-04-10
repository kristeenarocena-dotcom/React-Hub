import { useNavigate } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";
import TopicPill from "./TopicPill";

const levelClasses = {
  Advanced: "bg-indigo-500/15 text-indigo-400",
  Intermediate: "bg-orange-400/15 text-orange-400",
  Beginner: "bg-green-500/15 text-green-400",
};

export default function ArticleCard({ article, variant = "default" }) {
  const navigate = useNavigate();
  const levelClass = levelClasses[article.level] || levelClasses.Intermediate;

  if (variant === "featured") {
    return (
      <div
        onClick={() => navigate(`/articles/${article.id}`)}
        className="bg-card border border-line rounded-2xl p-6 cursor-pointer transition-all duration-200 flex flex-col gap-4 relative overflow-hidden hover:border-line-soft hover:bg-card-hover"
      >
        <div className="flex items-start justify-between">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
            style={{ background: article.iconBg }}
          >
            {article.icon}
          </div>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${levelClass}`}>
            {article.level}
          </span>
        </div>

        <div>
          <h3 className="font-bold text-base mb-2 leading-snug">{article.title}</h3>
          <p className="text-ink-dim text-[13px] leading-relaxed">{article.description}</p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
              style={{ background: article.authorColor }}
            >
              {article.authorInitial}
            </div>
            <div>
              <div className="text-xs font-medium">{article.author}</div>
              <div className="text-[11px] text-ink-faint">{article.authorRole}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-ink-faint text-xs">
            <Clock size={12} />
            <span>{article.readTime} min</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    );
  }

  // default / list variant
  return (
    <div
      onClick={() => navigate(`/articles/${article.id}`)}
      className="bg-card border border-line rounded-xl px-5 py-4 cursor-pointer transition-all duration-200 flex items-center gap-4 hover:border-line-soft hover:bg-card-hover"
    >
      <div
        className="w-9 h-9 rounded-[10px] flex items-center justify-center text-base shrink-0"
        style={{ background: article.iconBg }}
      >
        {article.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm mb-1 truncate">{article.title}</div>
        <div className="text-xs text-ink-dim mb-1.5">{article.author}</div>
        <div className="flex gap-1.5 flex-wrap">
          {article.tags.map((tag) => (
            <TopicPill key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
