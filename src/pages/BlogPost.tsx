import React, { useEffect, useState } from "react";
import { mockPosts } from "../data/mockPosts";
import { ArrowLeft, Calendar, Clock, Heart, MessageSquare, Send } from "lucide-react";

interface BlogPostProps {
  postId: string;
  setActiveTab: (tab: string) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ postId, setActiveTab }) => {
  const post = mockPosts.find((p) => p.id === postId) || mockPosts[0];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem(`likes-${post.id}`);
    return saved ? parseInt(saved, 10) : post.likes;
  });
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`liked-${post.id}`) === "true";
  });
  
  // Likes micro-animations triggers
  const [showHeartPop, setShowHeartPop] = useState(false);

  // Simulated Comments State
  const [comments, setComments] = useState<Array<{ name: string; content: string; date: string }>>([
    { name: "李小明", content: "写的非常好！正好在搞公司大屏玻璃质感的效果，细节拉满了，特别是边框渐变的写法。", date: "2026-06-26 10:15" },
    { name: "技术探索者", content: "通俗易懂，感谢分享。期待下一期关于 WebGL / Three.js 相关的动画性能分享！", date: "2026-06-25 18:40" },
  ]);
  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentContent, setNewCommentContent] = useState("");

  // Calculate Reading Progress Scroll Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Reset scroll to top when page opens
    window.scrollTo(0, 0);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [postId]);

  const handleLike = () => {
    let nextLikes = likes;
    if (isLiked) {
      nextLikes -= 1;
      setIsLiked(false);
      localStorage.setItem(`liked-${post.id}`, "false");
    } else {
      nextLikes += 1;
      setIsLiked(true);
      setShowHeartPop(true);
      setTimeout(() => setShowHeartPop(false), 800);
      localStorage.setItem(`liked-${post.id}`, "true");
    }
    setLikes(nextLikes);
    localStorage.setItem(`likes-${post.id}`, nextLikes.toString());
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentContent.trim()) return;

    const newComment = {
      name: newCommentName.trim() || "匿名访客",
      content: newCommentContent.trim(),
      date: new Date().toISOString().substring(0, 16).replace("T", " "),
    };

    setComments([newComment, ...comments]);
    setNewCommentName("");
    setNewCommentContent("");
  };

  return (
    <div className="blog-detail-wrapper">
      {/* Scroll Progress Bar */}
      <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <div className="container blog-detail-container">
        {/* Back Button */}
        <button className="back-to-list-btn" onClick={() => setActiveTab("blog")}>
          <ArrowLeft size={18} /> 返回列表
        </button>

        {/* Article Cover Cover Header */}
        <header className="article-header glass-panel">
          <div 
            className="article-banner" 
            style={{ 
              background: post.imageUrl 
                ? `url(${post.imageUrl}) no-repeat center / cover` 
                : post.gradient 
            }}
          ></div>
          <div className="article-header-body">
            <span className="article-cat">{post.category}</span>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-meta">
              <span className="meta-item">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="meta-item">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
            <div className="article-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <article className="article-content-body glass-panel">
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Likes & Interactions Area */}
          <div className="article-interaction-area">
            <button
              className={`like-trigger-btn ${isLiked ? "liked" : ""}`}
              onClick={handleLike}
              aria-label="Like Post"
            >
              <Heart className={`like-icon-detail ${isLiked ? "fill-heart" : ""}`} size={24} />
              <span>{likes} 个点赞</span>
              {showHeartPop && <span className="heart-floating-bubble">❤️ +1</span>}
            </button>
          </div>
        </article>

        {/* Comments Box */}
        <section className="comments-section glass-panel">
          <h2 className="section-title">
            <MessageSquare size={20} className="comments-icon" /> 评论区 ({comments.length})
          </h2>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <div className="comment-form-row">
              <input
                type="text"
                placeholder="昵称 (可选)"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                className="comment-name-input"
              />
            </div>
            <div className="comment-form-row">
              <textarea
                placeholder="在此输入您的精彩评论..."
                value={newCommentContent}
                onChange={(e) => setNewCommentContent(e.target.value)}
                className="comment-text-input"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-comment-btn">
              发表评论 <Send size={16} />
            </button>
          </form>

          {/* Comments List */}
          <div className="comments-list">
            {comments.map((cmt, idx) => (
              <div key={idx} className="comment-item">
                <div className="comment-item-header">
                  <span className="comment-item-author">{cmt.name}</span>
                  <span className="comment-item-date">{cmt.date}</span>
                </div>
                <p className="comment-item-content">{cmt.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
