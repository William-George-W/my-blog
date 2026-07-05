import React, { useEffect, useState } from "react";
import { mockPosts } from "../data/mockPosts";
import { PostCard } from "../components/PostCard";
import { ArrowRight, Sparkles, Brain, Award, Coffee } from "lucide-react";

interface HomeProps {
  setActiveTab: (tab: string) => void;
  setSelectedPostId: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, setSelectedPostId }) => {
  const [typedText, setTypedText] = useState("");
  const titles = ["React 全栈工程师", "Vibe Coding 践行者", "数据可视化爱好者", "前后端联调能手"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const activeWord = titles[titleIdx];
    const typingSpeed = isDeleting ? 30 : 80;

    const handleType = () => {
      if (!isDeleting && charIdx < activeWord.length) {
        setTypedText(activeWord.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      } else if (isDeleting && charIdx > 0) {
        setTypedText(activeWord.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      } else if (!isDeleting && charIdx === activeWord.length) {
        // Hold before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIdx === 0) {
        setIsDeleting(false);
        setTitleIdx((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, titleIdx]);

  // Select top 2 posts for featured
  const featuredPosts = mockPosts.slice(0, 2);

  const stats = [
    { label: "写代码的年限", value: "5+", icon: <Coffee className="stat-icon" /> },
    { label: "核心技能栈", value: "12+", icon: <Brain className="stat-icon" /> },
    { label: "发表文章数", value: "48+", icon: <Sparkles className="stat-icon" /> },
    { label: "项目经验值", value: "30+", icon: <Award className="stat-icon" /> },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        <div className="hero-content text-center">
          <div className="hero-badge">
            <Sparkles size={16} /> <span>欢迎来到我的数字花园</span>
          </div>
          <h1 className="hero-title">
            创造体验，构建未来
          </h1>
          <div className="hero-subtitle-container">
            <span>我是一个 </span>
            <span className="typewriter-text">{typedText}</span>
            <span className="typewriter-cursor">|</span>
          </div>
          <p className="hero-description">
            欢迎来到我的数字花园！这里记录了我在 “职引星” 与 “photolog” 等全栈项目研发中的实践心得。我专注于 React、Vite、Ant Design 和 ECharts 开发，拥有丰富的接口联调经验，并倡导以 AI 工具协同提效的 Vibe Coding 模式。
          </p>
          <div className="hero-cta-group">
            <button className="cta-btn primary" onClick={() => setActiveTab("blog")}>
              阅读博客 <ArrowRight size={18} />
            </button>
            <button className="cta-btn secondary" onClick={() => setActiveTab("about")}>
              关于我
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section container">
        <div className="section-header text-center">
          <h2 className="section-title">我的技术探索指标</h2>
          <p className="section-subtitle">用数据直观展现开发热情与积累</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card glass-panel text-center">
              <div className="stat-icon-wrapper">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="featured-posts-section container">
        <div className="section-header">
          <div>
            <h2 className="section-title">精选文章</h2>
            <p className="section-subtitle">探索深层的前端概念与开发实践</p>
          </div>
          <button className="view-all-btn" onClick={() => setActiveTab("blog")}>
            查看全部 <ArrowRight size={16} />
          </button>
        </div>
        <div className="featured-grid">
          {featuredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => {
                setSelectedPostId(post.id);
                setActiveTab("blog-post");
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
