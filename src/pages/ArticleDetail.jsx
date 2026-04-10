import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import TopicPill from "../components/TopicPill";
import articles from "../data/reactBlogs.json";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="text-center pt-20">
        <h2 className="mb-4 text-xl font-bold">Article not found</h2>
        <button
          onClick={() => navigate("/articles")}
          className="bg-accent text-white px-5 py-2.5 rounded-lg font-semibold border-none"
        >
          Back to Articles
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[720px] mx-auto px-4">
      {/* Back button */}
      <button
        onClick={() => navigate("/articles")}
        className="flex items-center gap-1.5 text-ink-dim text-[13px] font-medium mb-7 bg-transparent border-none hover:text-ink transition-colors"
      >
        <ArrowLeft size={16} /> Back to Articles
      </button>

      {/* Header */}
      <div className="bg-card border border-line rounded-2xl p-6 sm:p-8 mb-6">
        <div className="flex flex-wrap items-start gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-[14px] flex items-center justify-center text-[26px] shrink-0"
            style={{ background: article.iconBg }}
          >
            {article.icon}
          </div>
          <div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-400 mb-1.5 inline-block">
              {article.level}
            </span>
            <div className="flex gap-1.5 flex-wrap mt-1">
              {article.tags.map((t) => (
                <TopicPill key={t} label={t} />
              ))}
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-[26px] font-extrabold mb-3 leading-snug">
          {article.title}
        </h1>
        <p className="text-ink-dim text-[15px] leading-[1.7] mb-5">
          {article.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0"
              style={{ background: article.authorColor }}
            >
              {article.authorInitial}
            </div>
            <div>
              <div className="font-semibold text-sm">{article.author}</div>
              <div className="text-xs text-ink-faint">{article.authorRole}</div>
            </div>
          </div>
          <div className="flex gap-4 text-ink-faint text-[13px]">
            <span className="flex items-center gap-1">
              <Clock size={13} /> {article.readTime} min read
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={13} /> Full article
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card border border-line rounded-2xl p-6 sm:p-8 text-ink-dim leading-[1.8] text-[15px]">
        <p className="mb-5">{article.content}</p>
        <p className="mb-5">
          This is a deep dive article that covers all aspects of{" "}
          {article.title.toLowerCase()}. The content here would typically span
          several thousand words covering the topic in detail.
        </p>
        <p>
          In a real implementation, you would load the full markdown content
          from your data source, parse it, and render it with proper formatting
          including code blocks, images, and callouts.
        </p>
      </div>
    </div>
  );
}
