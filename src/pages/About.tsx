import React from "react";
import { Timeline } from "../components/Timeline";
import { Code2, Compass, Layers, Zap } from "lucide-react";

export const About: React.FC = () => {
  const skills = [
    { name: "React / HTML5 / CSS3", level: 93, category: "Frontend" },
    { name: "Vite / Ant Design", level: 90, category: "Frontend" },
    { name: "ECharts / Recharts", level: 88, category: "Visualization" },
    { name: "Node.js / Express / MySQL", level: 80, category: "Backend" },
    { name: "dayjs / Git / 接口联调", level: 88, category: "Engineering" },
    { name: "AI 辅助开发 (Vibe Coding)", level: 95, category: "Efficiency" },
  ];

  return (
    <div className="about-page-container container">
      {/* Bio / Profile Section */}
      <section className="profile-intro-section glass-panel">
        <div className="profile-grid">
          {/* Avatar Area */}
          <div className="profile-avatar-column">
            <div className="avatar-wrapper-outer">
              <div className="avatar-glow"></div>
              <div className="avatar-wrapper-inner">
                {/* Visual SVG Avatar Representing Code Artist */}
                <svg viewBox="0 0 100 100" className="svg-avatar">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8a2be2" />
                      <stop offset="50%" stopColor="#ff007f" />
                      <stop offset="100%" stopColor="#4facfe" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="url(#avatarGrad)" />
                  {/* Floating particles */}
                  <circle cx="25" cy="30" r="3" fill="#fff" opacity="0.8" />
                  <circle cx="75" cy="35" r="2.5" fill="#fff" opacity="0.6" />
                  <circle cx="35" cy="75" r="2" fill="#fff" opacity="0.9" />
                  {/* Terminal bracket */}
                  <text x="50" y="58" fontSize="26" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="monospace">
                    &lt;/&gt;
                  </text>
                </svg>
              </div>
            </div>
            <h2 className="profile-name">王浩楠</h2>
            <p className="profile-tagline">全栈前端工程师 | Vibe Coding 实践者</p>
          </div>

          {/* Description Area */}
          <div className="profile-desc-column">
            <h1 className="profile-title">关于我</h1>
            <p className="profile-text">
              你好！我是一名全栈前端工程师，具备丰富的前后端分离项目联调经验。在日常开发中，我热衷于探索高效率的开发工作流，擅长借助 <strong>Cursor、Codex、Antigravity、Trae、Claude</strong> 等 AI 工具进行 <strong>Vibe Coding</strong>，能够将复杂的模块拆解并驱动 AI 辅助高质量产出。
            </p>
            <p className="profile-text">
              在过往的项目中，我作为核心开发者打造了 <strong>“职引星”</strong>（求职导航与生涯规划平台）与 <strong>“photolog”</strong>（轻量级个人照片日志系统）。我熟练运用 <strong>React</strong> 与 <strong>Vite</strong> 快速构建响应式页面，使用 <strong>Ant Design</strong> 体系以及 <strong>ECharts/Recharts</strong> 进行交互式数据可视化展现，并对 <strong>Node.js、Express、MySQL</strong> 具备扎实的项目实操经验。
            </p>

            <div className="feature-badges-grid">
              <div className="badge-item">
                <Zap className="badge-icon" />
                <span>极速响应</span>
              </div>
              <div className="badge-item">
                <Code2 className="badge-icon" />
                <span>优雅逻辑</span>
              </div>
              <div className="badge-item">
                <Layers className="badge-icon" />
                <span>像素追求</span>
              </div>
              <div className="badge-item">
                <Compass className="badge-icon" />
                <span>设计直觉</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section className="skills-section">
        <h2 className="section-title text-center">我的技能矩阵</h2>
        <p className="section-subtitle text-center">工程实力与技术厚度展示</p>

        <div className="skills-grid glass-panel">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-progress-bar-bg">
                <div 
                  className="skill-progress-bar-fill" 
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundImage: index % 2 === 0 
                      ? "linear-gradient(90deg, #ff007f, #7f00ff)" 
                      : "linear-gradient(90deg, #00f2fe, #4facfe)"
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="experience-section">
        <h2 className="section-title text-center">技术成长履历</h2>
        <p className="section-subtitle text-center">一路走来的成长印记与关键节点</p>
        <Timeline />
      </section>
    </div>
  );
};
