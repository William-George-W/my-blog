import React from "react";
import { Briefcase, GraduationCap, Trophy, Code } from "lucide-react";

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "work" | "education" | "award" | "project";
}

export const Timeline: React.FC = () => {
  const items: TimelineItem[] = [
    {
      id: "1",
      year: "2025 - 至今",
      title: "“职引星” 生涯求职导航平台项目研发",
      subtitle: "核心开发工程师",
      description: "主导“职引星”项目前端模块。使用 React + Vite 构建开发骨架，引入 Ant Design 快速搭建简历向导表单与生涯规划路径；整合 ECharts 进行多维度数据展示并实现图表自适应 resize；深度负责前后端分离联调与 dayjs 时间线日程转化。",
      type: "work",
    },
    {
      id: "2",
      year: "2023 - 2025",
      title: "“photolog” 个人画廊照片日志全栈项目",
      subtitle: "全栈开发工程师",
      description: "独立闭环开发“photolog”照片日志应用。前端采用 React 和 CSS3 网格构建响应式卡片瀑布流，后端使用 Node.js + Express 部署服务，选用 MySQL 存取照片及日志元数据；处理并调优了前后端联调中的 CORS 跨域请求与接口安全性。",
      type: "project",
    },
    {
      id: "3",
      year: "2022 - 至今",
      title: "AI 协同与 Vibe Coding 提效实战",
      subtitle: "先锋技术探索",
      description: "在项目研发中深度协同 Cursor, Codex, Antigravity, Trae, Claude 等 AI 工具进行 Vibe Coding 实践。通过大语言模型加速原型开发、复杂算法与测试编写，显著缩短项目通调周期，工作流效率提升数倍。",
      type: "award",
    },
    {
      id: "4",
      year: "2019 - 2023",
      title: "软件工程学士学位",
      subtitle: "重点大学",
      description: "系统学习计算机网络、算法与数据结构、数据库原理及前端工程化。掌握 HTML5、CSS3、JavaScript(ES6+) 及 Node.js 基础，具备优秀的全栈工程基础。",
      type: "education",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase size={18} />;
      case "education":
        return <GraduationCap size={18} />;
      case "award":
        return <Trophy size={18} />;
      default:
        return <Code size={18} />;
    }
  };

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>

      {items.map((item, index) => (
        <div key={item.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"} fade-in-up`}>
          {/* Timeline Dot Icon */}
          <div className={`timeline-dot type-${item.type}`}>
            {getIcon(item.type)}
          </div>

          {/* Timeline Content Card */}
          <div className="timeline-card glass-panel">
            <span className="timeline-year">{item.year}</span>
            <h3 className="timeline-card-title">{item.title}</h3>
            <h4 className="timeline-card-subtitle">{item.subtitle}</h4>
            <p className="timeline-card-desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
