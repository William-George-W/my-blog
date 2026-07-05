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
      year: "2026.04 — 2026.06",
      title: "“职引星”大学生求职导航与生涯规划平台",
      subtitle: "项目主导开发者 · React + Vite + Ant Design",
      description: "主导“职引星”前端全模块开发。基于 React + Vite 构建应用骨架，引入 Ant Design 实现简历向导表单与生涯规划路径；整合 ECharts 完成雷达图、折线图、柱状图等多维度可视化；使用 dayjs 处理日程倒计时与时间格式化，深度参与前后端联调与接口协议设计。",
      type: "work",
    },
    {
      id: "2",
      year: "2025 — 2026",
      title: "全国大学生计算机设计大赛 · 软件应用与开发赛道",
      subtitle: "省级三等奖",
      description: "参加全国大学生计算机设计大赛软件应用与开发赛道，作品入围并荣获省级三等奖。比赛历练了从需求分析、原型设计到工程实现的完整产品研发流程，强化了团队协作与项目交付能力。",
      type: "award",
    },
    {
      id: "3",
      year: "2025.05 — 2025.06",
      title: "“photolog” 照片日志全栈项目",
      subtitle: "独立全栈开发 · React + Node.js + Express + MySQL",
      description: "独立完成 photolog 照片日志应用的前后端全栈开发。前端使用 React + CSS3 Grid 构建瀑布流卡片布局；后端搭建 Node.js + Express REST API 服务，使用 MySQL 存储照片元数据；解决了跨域（CORS）、文件上传、接口鉴权等联调难点，完整经历了产品从 0 到 1 的全链路闭环。",
      type: "project",
    },
    {
      id: "4",
      year: "2025",
      title: "蓝桥杯全国软件和信息技术专业人才大赛",
      subtitle: "Java 软件开发赛道 · 参赛经历",
      description: "参加蓝桥杯 Java 软件开发赛道，经历算法题、编程实现等多轮考核，锻炼了面向对象设计、数据结构与算法实现能力，对 Java 语法与工程编码规范有了更系统的认知。",
      type: "award",
    },
    {
      id: "5",
      year: "2024.02 — 2025",
      title: "自学前端开发 · 从零到全栈",
      subtitle: "自驱学习 · HTML / CSS / JavaScript → React",
      description: "从 HTML5、CSS3 基础入门，系统掌握 JavaScript ES6+ 核心语法（解构、async/await、模块化等）；进而学习 React 组件化开发、Hooks、状态管理；同步了解 Node.js、Express 与 MySQL 基础，逐步建立起前后端分离项目的完整开发能力，并借助 Cursor、Antigravity 等 AI 工具大幅提升学习与开发效率。",
      type: "work",
    },
    {
      id: "6",
      year: "2023.09",
      title: "江西软件职业技术大学 · 区块链工程专业",
      subtitle: "本科在读 · 2027届",
      description: "就读于江西软件职业技术大学区块链工程专业（本科），系统学习计算机网络、数据结构与算法、数据库原理、智能合约开发等课程。在扎实的计算机基础之上，主动拓展前端工程化方向，探索区块链与 Web 前端技术的融合应用。",
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
