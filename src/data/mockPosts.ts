export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  gradient: string;
  likes: number;
  imageUrl?: string;
}

export const mockPosts: Post[] = [
  {
    id: "project-zhiyinxing",
    title: "基于 React 与 Ant Design 的“职引星”求职导航与生涯规划平台实践",
    excerpt: "“职引星”是一个专注于大学生职业规划与求职导航的平台。本文将介绍如何使用 React、Vite 与 Ant Design 快速搭建应用框架，以及如何整合 ECharts 进行生涯数据可视化与联调优化。",
    date: "2026-06-25",
    readTime: "6 min read",
    category: "项目实战",
    tags: ["React", "Ant Design", "ECharts", "dayjs", "项目实战"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    likes: 45,
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>在当前竞争激烈的求职环境下，如何帮助大学生清晰定位自身优势、获取精准的求职路径，是核心痛点。我们主导并研发了<strong>“职引星”——大学生求职导航与生涯规划平台</strong>。</p>

      <p>作为一个典型的前后端分离项目，其前端采用了 <strong>React (Vite) + Ant Design + ECharts</strong> 的技术方案。本文将分享在搭建该项目过程中的架构设计与核心组件开发经验。</p>

      <h2>1. 基于 Ant Design 的高一致性 UI 设计</h2>
      <p>求职导航平台包含个人简历生成器、职业性格测试、求职进度看板等多个复杂模块。为了保证视觉一致性与开发速度，我们深度整合了 Ant Design 组件库：</p>
      <ul>
        <li><strong>动态向导表单</strong>：利用 <code>Steps</code> 步骤条配合 <code>Form</code>，让用户循序渐进地录入个人专业背景、意向岗位与技能包，实时生成个性化职业规划书。</li>
        <li><strong>仪表盘栅栏布局</strong>：使用 <code>Row</code> 和 <code>Col</code> 构建响应式网格布局，确保生涯数据图表与推荐卡片在移动端和 PC 端都有出色的展示。</li>
      </ul>

      <h2>2. 构建效率与 Vite 极致体验</h2>
      <p>传统的 Webpack 构建在模块较多时会有显著的冷启动延迟。由于“职引星”需要高频迭代、接入多个可视化图表，我们选择了 <strong>Vite</strong> 作为构建工具。利用 ESM 加载机制，开发服务器启动耗时降至毫秒级，配合 HMR 实现了秒级的界面热更新，极大地提升了研发的“Vibe 状态”。</p>

      <h2>3. 融合 dayjs 进行时间规划与日程管理</h2>
      <p>在“求职日程管理器”模块中，用户需要跟踪每一次简历投递、面试邀请和面试反馈。为了方便计算面试倒计时、格式化展示日程时间，我们引入了轻量级的 <strong>dayjs</strong> 库：</p>
      <pre><code>import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

// 计算距离下面试还有多久
const getCountdown = (interviewDate) => {
  return dayjs(interviewDate).fromNow(); // 输出 \"2天后\" 或 \"3小时前\"
};</code></pre>
      <p>相比于体积庞大的 Moment.js，dayjs 仅有 2KB 左右的大小，不仅减小了包体积，而且链式调用非常符合直觉。</p>

      <h2>4. 总结与反思</h2>
      <p>“职引星”的上线帮助数万名应届生迈出了求职的第一步。在开发过程中，前端与后端的契约式联调（如使用 JSON Schema 提前锁定接口字段）保证了项目的按期交付。接下来的文章中，我将详细分享我们如何在其中实现 ECharts 可视化图表的高性能自适应重绘。</p>
    `
  },
  {
    id: "project-photolog",
    title: "用 React, Express 与 MySQL 打造一个轻量个人照片日志 “photolog”",
    excerpt: "“photolog” 是一个极简主义的照片记录与生活日志应用。本文分享如何基于 React 搭建高颜值的照片墙卡片流，并使用 Node.js / Express 配合 MySQL 实现基础的照片上传与数据存取。",
    date: "2026-06-12",
    readTime: "8 min read",
    category: "全栈开发",
    tags: ["React", "Express", "MySQL", "Node.js", "全栈"],
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    likes: 38,
    imageUrl: "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>照片是记录生活最直观的方式。为了构建一个没有社交压力、完全属于自己的视觉树洞，我发起了 <strong>photolog</strong> 照片日志项目的开发。这也是一个检验自身前后端全栈开发、数据库建模以及项目联调能力的实战案例。</p>

      <h2>1. 前端：CSS3 网格布局与精致悬停特效</h2>
      <p>photolog 的核心视觉是一个画廊瀑布流。我们利用 CSS3 的 <code>grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))</code> 配合 <code>aspect-ratio: 1 / 1</code>（或者黄金比例）实现了完美自适应的卡片网格。</p>
      <p>为了营造高品质的视觉冲击力，每个卡片都加入了微小的 3D 浮动与光泽效果：</p>
      <pre><code>.photo-card {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
}
.photo-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}</code></pre>

      <h2>2. 后端：基于 Node.js 与 Express 的极简 API 服务</h2>
      <p>后端选用轻量、高性能的 <strong>Express</strong> 框架来搭建 RESTful 服务。我们设计了照片日志的核心 API 接口，并使用 <code>multer</code> 中间件解析多媒体表单数据，完成文件安全存取。</p>
      <pre><code>const express = require("express");
const mysql = require("mysql2/promise");
const app = express();

app.use(express.json());

// 数据库连接池初始化
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "photolog",
  connectionLimit: 10
});

// 获取日志列表 API
app.get("/api/logs", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM logs ORDER BY created_at DESC");
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});</code></pre>

      <h2>3. 数据库设计：MySQL 基础结构</h2>
      <p>项目虽然小，但表设计必须严谨。对于 <code>logs</code> 表，包含主键 ID、照片 URL、日志文字描述、拍摄时间、发布时间以及标签字段。使用 MySQL 索引优化了基于时间的排序查询，确保随着照片的增多，画廊仍能保持秒开的查询响应。</p>

      <h2>4. 全栈联调中的跨域 (CORS) 踩坑</h2>
      <p>联调过程中，最经典的问题莫过于跨域报错。在开发环境中，React 运行在 <code>http://localhost:5173</code>，而 Express 部署在 <code>http://localhost:3000</code>。</p>
      <p>我们没有在 Express 中粗暴地添加 <code>cors(*)</code>，而是在 Vite 的 <code>vite.config.ts</code> 中配置了开发代理 (Proxy)：</p>
      <pre><code>server: {
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
    }
  }
}</code></pre>
      <p>这种做法既能避免浏览器的同源策略限制，又能使生产环境的接口路径保持一致，是标准的商业项目处理方案。</p>
    `
  },
  {
    id: "vibe-coding-experience",
    title: "Vibe Coding 时代：利用 Cursor, Antigravity 等 AI 编程助手实现极速开发",
    excerpt: "AI 辅助编程正在重塑开发者的工作流。本文探讨在开发“职引星”和“photolog”的过程中，如何深度协同 Cursor、Codex、Antigravity、Trae 和 Claude 等 AI 工具，体验全新的 “Vibe Coding” 开发范式。",
    date: "2026-07-02",
    readTime: "5 min read",
    category: "AI 辅助",
    tags: ["Vibe Coding", "AI 协同", "Cursor", "Antigravity", "提效"],
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    likes: 52,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>在过去的一年里，“<strong>Vibe Coding</strong>”成为了技术社区的热词——开发者不再一行行敲打重复的 boilerplate 代码，而是转为“产品导演”和“架构架构师”，通过精准陈述需求（Prompting），驱动强大的 AI 编程工具来辅助编码。</p>

      <p>在构建“职引星”以及全栈“photolog”项目的进程中，我深度测试并协同了 <strong>Cursor, Codex, Antigravity, Trae, Claudecode</strong> 等主流 AI 工具。以下是我的一些实战体验与提效秘诀。</p>

      <h2>1. 主流 AI 工具定位与擅长场景</h2>
      <ul>
        <li><strong>Antigravity / Claudecode</strong>：在宏观重构和跨多文件联动修改（例如重构整个路由体系、配置全栈联调）时拥有极其恐怖的上下文连贯度与逻辑严密性。</li>
        <li><strong>Cursor / Trae</strong>：优秀的编辑器级整合。在编写行内逻辑、利用 Copilot tab 自动补全或执行快速选中重构时，带来了丝滑无摩擦的编码爽感。</li>
        <li><strong>Codex</strong>：作为早期代码补全先驱，提供了坚实的底层代码预测能力。</li>
      </ul>

      <h2>2. Vibe Coding 并不是“甩手掌柜”</h2>
      <p>很多人误以为 Vibe Coding 就是把需求一股脑塞给 AI，然后祈祷它工作。实际上，要想让 AI 输出完美的代码，你需要建立<strong>“需求描述 - 边界约束 - 校验循环”</strong>：</p>
      <ol>
        <li><strong>精确定义上下文</strong>：在提问前，先告诉 AI 当前文件的设计模式（例如“我们统一使用 React Hooks 和 CSS 变量”）。</li>
        <li><strong>小步快跑（Short Feedback Loops）</strong>：不要指望 AI 一次性写出 1000 行包含完整登录、鉴权、数据库交互的全套系统。先让它写出 Express 的接口骨架，测试通过后，再让它补充 MySQL 的存储逻辑。</li>
        <li><strong>严格 Code Review</strong>：AI 生成的代码可能包含过期 API（例如 React 19 新钩子的细微语法变动）。作为架构师，你需要把控质量关。</li>
      </ol>

      <h2>3. 效率提升 10 倍的真实感受</h2>
      <p>以“photolog”项目的 Express 后端搭建为例，以前手动打字配置 <code>multer</code>、MySQL 连接池、跨域头和路由可能需要 2 小时；在 AI 工具의 辅助下，通过一句“<em>基于 Express 编写一个支持单张图片上传至 /uploads 并将文件名与文字存储至 MySQL 的 API，包含异常处理与 CORS 代理配置</em>”，AI 仅用了 15 秒便生成了高质量骨架，经人工审核与微调后，15 分钟内即实现了接口的成功通调。</p>

      <p>拥抱 AI 并不是弱化开发者的基本功，相反，它对我们的系统架构设计能力、前后端契约规范意识以及调试（Debugging）直觉提出了更高的要求。把握好这个方向，你将成为下一代“超级个体”开发者。</p>
    `
  },
  {
    id: "data-visualization-charts",
    title: "基于 ECharts / Recharts 的现代数据可视化图表设计与响应式适配",
    excerpt: "图表是洞察数据价值的窗口。本文结合“职引星”项目，详述如何利用 React 封装高性能 of ECharts / Recharts 容器，并解决在复杂弹性布局下的图表动态 resize 适配与主题色同步问题。",
    date: "2026-05-28",
    readTime: "7 min read",
    category: "数据可视化",
    tags: ["ECharts", "Recharts", "数据可视化", "React", "响应式"],
    gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    likes: 29,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>在“职引星”项目的个人主页与人才看板模块中，我们需要为学生直观展示其各项能力的雷达图、求职状态的柱状图，以及行业就业走势的折线图。我们最终结合了 <strong>ECharts</strong>（负责复杂、大数据量报表）与 <strong>Recharts</strong>（负责优雅的极简指标小图表）。</p>

      <h2>1. React 容器内封装 ECharts 的正确姿势</h2>
      <p>在 React 中直接操作 DOM（如 <code>echarts.init(dom)</code>）容易引起生命周期冲突或内存泄漏。我们采用 <code>useRef</code> 缓存 DOM 节点，并在 <code>useEffect</code> 内进行初始化与垃圾回收：</p>
      <pre><code>import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export const CareerRadarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
      const option = {
        radar: {
          indicator: [
            { name: "前端基础", max: 100 },
            { name: "后端理解", max: 100 },
            { name: "可视化工程", max: 100 },
            { name: "联调效率", max: 100 },
            { name: "AI 协同", max: 100 }
          ]
        },
        series: [{
          type: "radar",
          data: [{ value: data, name: "能力模型" }]
        }]
      };
      chartInstance.current.setOption(option);
    }

    return () => {
      // 销毁实例防止内存泄漏
      chartInstance.current?.dispose();
    };
  }, [data]);

  return &lt;div ref={chartRef} style={{ width: "100%", height: "300px" }} /&gt;;
};</code></pre>

      <h2>2. 攻克响应式 Resize 难题</h2>
      <p>许多前端工程师在使用 ECharts 时会遇到一个头疼问题：当屏幕尺寸改变（或侧边栏收缩）时，图表无法自动拉伸或缩小，直接溢出了容器。</p>
      <p>在“职引星”中，我们引入了 <code>ResizeObserver</code> 或者通过防抖监听 <code>window.resize</code> 事件来动态触发 <code>chartInstance.current.resize()</code>：</p>
      <pre><code>useEffect(() => {
  const handleResize = () => {
    chartInstance.current?.resize();
  };
  
  // 增加防抖处理，防止频繁渲染拖慢主线程
  let timer;
  const debouncedResize = () => {
    clearTimeout(timer);
    timer = setTimeout(handleResize, 100);
  };

  window.addEventListener("resize", debouncedResize);
  return () => window.removeEventListener("resize", debouncedResize);
}, []);</code></pre>

      <h2>3. 用 Recharts 打造像素级优雅的趋势指标</h2>
      <p>相比于 ECharts 复杂的配置，<strong>Recharts</strong> 基于 SVG 且天生对 React 友好，在绘制如“月度投递简历成功率”这种轻量级曲线图时非常顺滑。它的组件式写法（如 <code>&lt;ResponsiveContainer&gt;</code>、<code>&lt;AreaChart&gt;</code>）让前端排版变得像写普通 HTML 一样直观，完美与我们的 Glassmorphism 毛玻璃卡片融合在一起，提供了极高的高端质感。</p>
    `
  },
  {
    id: "api-integration-dayjs",
    title: "前后端分离项目联调实战：从 CORS 跨域到 dayjs 统一时间格式",
    excerpt: "开发阶段的核心在于联调。本文总结了在 “职引星” 和 “photolog” 两个项目中，如何处理 Express 后端与 React 客户端的高效对接，包括 CORS 配置、MySQL 数据映射以及 dayjs 的妙用。",
    date: "2026-05-18",
    readTime: "6 min read",
    category: "联调优化",
    tags: ["前后端联调", "Express", "MySQL", "dayjs", "CORS"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    likes: 33,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>在现代前后端分离项目的开发中，70% 的低级 Bug 都发生在接口对接和数据传输层面。典型的症状包括：<em>跨域拦截报错、入参格式不匹配、数据库取出的 UTC 时间在前端展示为乱码或格式错误。</em></p>
      <p>我们在联调“职引星”和“photolog”项目时，沉淀了一套高效、可复用的通调工作流。这里与大家分享最核心的几个实践要点。</p>

      <h2>1. Swagger 契约先行，锁定数据结构</h2>
      <p>在后端基于 Node.js/Express 编码前，先通过 Swagger 或 Apifox 拟定双方的 API 契约：</p>
      <ul>
        <li>规定标准的统一响应格式：<code>{ success: boolean, data: any, message: string }</code>。</li>
        <li>定义强类型参数规范，前端基于 TypeScript 定义对应接口（Interface），防止把 <code>log_id</code> 错传成 <code>logId</code>。</li>
      </ul>

      <h2>2. 时序难题：使用 dayjs 统一时间转换</h2>
      <p>MySQL 的 <code>DATETIME</code> 字段在通过 Node.js 查询出来后，默认会被 <code>mysql2</code> 序列化为 ISO 8601 格式的字符串（如 <code>2026-05-18T10:15:30.000Z</code>），如果直接扔给 React 渲染，界面会非常难看。</p>
      <p>在 photolog 中，我们在前端使用 <strong>dayjs</strong> 拦截并格式化展示：</p>
      <pre><code>import dayjs from "dayjs";

// 处理列表中的发布时间
export const formatPublishTime = (rawTime) => {
  if (!rawTime) return "-";
  // 转换成 “2026年05月18日 18:15”
  return dayjs(rawTime).format("YYYY年MM月DD日 HH:mm");
};

// 或者是相对人性化的社交时间线格式
export const getRelativeTimeline = (rawTime) => {
  const diffDays = dayjs().diff(dayjs(rawTime), "day");
  if (diffDays === 0) {
    return "今天发布";
  } else if (diffDays === 1) {
    return "昨天发布";
  } else if (diffDays <= 7) {
    return \`\${diffDays}天前发布\`;
  }
  return dayjs(rawTime).format("MM-DD");
};</code></pre>
      <p>无论是复杂的时间计算（比如计算倒计时），还是各种格式的互转，dayjs 的 API 都十分一致且强大，是目前前端项目的首选时间处理利器。</p>

      <h2>3. MySQL 参数防注入与防御性编程</h2>
      <p>联调时还要时刻关注后端 SQL 安全。在 Express 与 MySQL 进行联调时，绝对不能将前端传参使用模板字符串直接拼入 SQL。例如：</p>
      <pre><code>// ⚠️ 极其危险的注入漏洞写法
const sql = \`SELECT * FROM logs WHERE title = '\${req.query.title}'\`;

// 🛡️ 正确的占位符写法
const sql = "SELECT * FROM logs WHERE title = ?";
const [rows] = await pool.query(sql, [req.query.title]);</code></pre>
      <p>通过这些安全实践，我们在联调阶段不仅实现了功能闭环，还保障了接口数据的安全性与健壮性。</p>
    `
  },
  {
    id: "project-react-performance",
    title: "基于 Vite + React 的前端性能监控与性能优化的探索与实践",
    excerpt: "优异的用户体验离不开极致的性能。本文将详述如何利用 React Profiler API、Lighthouse 指标，并结合 Vite 构建优化手段，对 Web 应用进行全方位性能监控与瓶颈优化。",
    date: "2026-05-10",
    readTime: "7 min read",
    category: "性能优化",
    tags: ["React", "Vite", "Performance", "前端优化"],
    gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    likes: 31,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>在现代 Web 应用中，页面的加载速度和交互流畅度直接关系到用户的留存率。特别是在大型单页应用（SPA）中，首屏渲染耗时与组件渲染卡顿往往是核心痛点。本文将结合实际项目，探讨如何通过一套全链路的性能监控与优化体系，实现网站的极致加载和运行性能。</p>

      <h2>1. 使用 React Profiler 捕获组件重绘瓶颈</h2>
      <p>React 的虚拟 DOM diff 虽快，但多余的重渲染仍会白白浪费 CPU。我们使用 React 官方提供的 <code>Profiler</code> 组件来追踪各个组件渲染的实际耗时与频率：</p>
      <pre><code>import React, { Profiler } from "react";

const onRenderCallback = (
  id, // 发生提交的 Profiler 树的 \"id\"
  phase, // \"mount\"（挂载）或 \"update\"（更新）
  actualDuration, // 本次更新在渲染子树上花费的时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整棵树所需的时间
) => {
  console.log(\`[\${id}] \${phase} duration: \${actualDuration}ms\`);
};

// 包裹待测组件
&lt;Profiler id=\"MyBigDashboard\" onRender={onRenderCallback}&gt;
  &lt;MyBigDashboard /&gt;
&lt;/Profiler&gt;</code></pre>
      <p>通过这种方式，我们能精确抓出因父组件 state 改变而导致子组件无意义重绘的问题，配合 <code>React.memo</code> 或 <code>useMemo</code> 阻断不必要的 diff 流程。</p>

      <h2>2. Lighthouse 核心 Web 指标调优</h2>
      <p>我们的优化目标主要锁定在三个核心指标上：<strong>LCP (最大内容绘制)</strong>、<strong>FID (首次输入延迟)</strong> 以及 <strong>CLS (累计布局偏移)</strong>。为此，我们实施了以下手段：</p>
      <ul>
        <li><strong>动态加载与代码分割</strong>：在 React 路由中使用 <code>React.lazy</code> 与 <code>Suspense</code>，使初始只加载 Core 模块，次要模块在后台按需懒加载。</li>
        <li><strong>图片自适应与懒加载</strong>：统一使用 <code>loading=\"lazy\"</code>，并对大图使用现代 <code>WebP</code> 格式以减少 60% 左右的带宽消耗。</li>
      </ul>

      <h2>3. Vite 构建侧打包体积深度调优</h2>
      <p>Vite 默认的打包策略在包体积较大时可能会生成巨大的 chunk 文件。我们在 <code>vite.config.ts</code> 中配置了 <code>rollupOptions</code>，将第三方庞大的依赖（如 Ant Design, ECharts, dayjs）进行合理的单独分包（Manual Chunks）：</p>
      <pre><code>build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("node_modules")) {
          if (id.includes("react")) return "react-vendor";
          if (id.includes("echarts")) return "echarts-vendor";
          if (id.includes("antd")) return "antd-vendor";
          return "vendor";
        }
      }
    }
  }
}</code></pre>
      <p>通过精细化的分包和开启 Gzip 压缩，首屏 JS 的体积成功削减了 45%，首屏加载时间从 2.4s 缩短到了 0.7s 以内，极大地提升了用户访问的爽快感。</p>
    `
  },
  {
    id: "canvas-charts-sketchpad",
    title: "如何用 Canvas 绘制完美流畅的图表与画板组件",
    excerpt: "在“photolog”项目的数据统计和画板模块中，Canvas 扮演了核心角色。本文将讨论如何在 React 中高效操作 Canvas，实现高帧率图表绘制、撤销重做历史记录以及防抖像素压缩处理。",
    date: "2026-04-28",
    readTime: "8 min read",
    category: "图形技术",
    tags: ["Canvas", "HTML5", "React", "画板开发"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    likes: 41,
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>在轻量级照片日志 “photolog” 的图片标注和简易画板功能中，我们需要给用户提供一个可以在照片上涂鸦、书写文字并导出合成的交互面板。而在复杂的动态场景下，操作 DOM 会带来严重的卡顿，<strong>HTML5 Canvas</strong> 是实现此功能的最佳技术路径。</p>

      <h2>1. 高清屏 (Retina) 下的模糊问题及其解决</h2>
      <p>许多开发者在高清屏幕上绘制 Canvas 时，会发现画出来的线条和文字有明显的锯齿或模糊。这是由于设备的**物理像素比 (devicePixelRatio)** 大于 1，而 Canvas 却只用 1:1 的逻辑像素渲染导致的。</p>
      <p>我们在 React 中对 Canvas 进行缩放适配，以解决此模糊问题：</p>
      <pre><code>const initCanvas = (canvas, width, height) => {
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  
  // 1. 设置 canvas 元素的物理分辨率（实际像素）
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  
  // 2. 使用 CSS 限制 canvas 元素的视口显示大小
  canvas.style.width = \`\${width}px\`;
  canvas.style.height = \`\${height}px\`;
  
  // 3. 缩放画布坐标系，后续所有绘制均按常规逻辑单位计算即可
  ctx.scale(dpr, dpr);
  return ctx;
};</code></pre>
      <p>这一缩放机制使涂鸦线条和合并导出的图片在 2K、4K 高分屏上依然保持极其锐利、清晰的细节。</p>

      <h2>2. 涂鸦撤销/重做 (Undo/Redo) 状态历史栈设计</h2>
      <p>作为一个画板，历史记录回退是不可或缺的功能。我们使用了一个历史栈（History Stack）来存储每一次鼠标释放（mouseup）时画布的像素数据快照（ImageData）：</p>
      <pre><code>const [history, setHistory] = useState&lt;ImageData[]&gt;([]);
const [historyIndex, setHistoryIndex] = useState(-1);

// 保存当前快照
const saveState = (ctx, width, height) => {
  const state = ctx.getImageData(0, 0, width, height);
  const newHistory = history.slice(0, historyIndex + 1);
  setHistory([...newHistory, state]);
  setHistoryIndex(newHistory.length);
};

// 执行撤销
const undo = (ctx) => {
  if (historyIndex > 0) {
    const prevIndex = historyIndex - 1;
    ctx.putImageData(history[prevIndex], 0, 0);
    setHistoryIndex(prevIndex);
  }
};</code></pre>
      <p>这种纯像素级的备份和恢复极具普适性，无论是线段、圆形还是滤镜处理，都可以用统一的 <code>putImageData</code> 零延迟还原，极大增强了交互舒适度。</p>

      <h2>3. 高帧率动画与 requestAnimationFrame</h2>
      <p>当用户在画布上绘制曲线时，如果使用 <code>mousemove</code> 直接触发 <code>ctx.lineTo</code> 和 <code>ctx.stroke</code>，在低配置设备上可能会因为高频的事件触发导致掉帧。我们结合 <code>requestAnimationFrame</code> 驱动绘制循环，把点的坐标缓存到队列中，在下一帧渲染周期统一画出，让书写笔触始终保持在 60FPS 满帧运行，给用户如同实体纸笔的流畅写画体验。</p>
    `
  },
  {
    id: "html5-semantic-web",
    title: "HTML5 语义化标签深度指南：从 div 地狱走向可读、可维护的 Web 结构",
    excerpt: "你还在用 div 包揽一切吗？HTML5 带来的语义化标签不仅让代码可读性大幅提升，更是 SEO 优化、无障碍访问与搜索引擎索引的关键所在。本文带你系统掌握语义化 HTML 的精髓。",
    date: "2026-04-15",
    readTime: "5 min read",
    category: "HTML",
    tags: ["HTML5", "语义化", "SEO", "可访问性", "Web标准"],
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    likes: 36,
    imageUrl: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>在早期的 Web 开发中，我们习惯于用大量嵌套的 <code>&lt;div&gt;</code> 来搭建页面结构。这种做法虽然能实现视觉效果，但会让 HTML 源码变得晦涩难懂——搜索引擎爬虫不理解你的意图，屏幕阅读器也无法给视障用户准确导航。HTML5 的语义化标签彻底改变了这一局面。</p>

      <h2>1. 常见语义化标签一览</h2>
      <p>HTML5 引入了一批具有明确语义含义的结构标签，使页面结构一目了然：</p>
      <ul>
        <li><code>&lt;header&gt;</code>：页面或区块的头部，通常包含 Logo、主导航、搜索框。</li>
        <li><code>&lt;nav&gt;</code>：导航链接区域，用于主菜单、面包屑、分页。</li>
        <li><code>&lt;main&gt;</code>：页面核心内容区，每个页面只应有一个 <code>&lt;main&gt;</code>。</li>
        <li><code>&lt;article&gt;</code>：独立的、可复用的内容单元，如博文、新闻、评论。</li>
        <li><code>&lt;section&gt;</code>：主题相关的内容分组，通常含有标题。</li>
        <li><code>&lt;aside&gt;</code>：与主内容相关但非核心的侧边内容，如侧边栏、广告、相关推荐。</li>
        <li><code>&lt;footer&gt;</code>：页面或区块的底部，通常包含版权信息、联系方式。</li>
        <li><code>&lt;figure&gt;</code> 与 <code>&lt;figcaption&gt;</code>：带说明的图文单元，如图表、代码示例图。</li>
      </ul>

      <h2>2. 对比：div 地狱 vs 语义化结构</h2>
      <p>来看一个最直观的对比——同样渲染一篇博客文章，两种写法的可读性天差地别：</p>
      <pre><code>&lt;!-- ❌ div 地狱写法 --&gt;
&lt;div class="header"&gt;
  &lt;div class="nav"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="content"&gt;
  &lt;div class="post"&gt;
    &lt;div class="post-body"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="footer"&gt;&lt;/div&gt;

&lt;!-- ✅ 语义化写法 --&gt;
&lt;header&gt;
  &lt;nav&gt;&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;
    &lt;section&gt;&lt;/section&gt;
  &lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;&lt;/footer&gt;</code></pre>
      <p>语义化写法不仅让源码自解释，更让 Google 等搜索引擎能精准理解每块内容的权重，有效提升页面的 SEO 排名。</p>

      <h2>3. 无障碍访问（a11y）的基石</h2>
      <p>语义化标签是实现无障碍 Web（Accessibility / a11y）的重要基础。使用 <code>&lt;button&gt;</code> 而非 <code>&lt;div&gt;</code> 模拟按钮，可以让屏幕阅读器正确播报"按钮"角色；使用 <code>&lt;label for&gt;</code> 关联表单控件，让视障用户清楚知道每个输入框的用途。掌握语义化 HTML，是每个有责任心的前端工程师的必修课。</p>
    `
  },
  {
    id: "css-modern-layout",
    title: "CSS 现代布局终极指南：Flexbox 与 Grid 的深度对比与实战应用",
    excerpt: "Flexbox 和 CSS Grid 是现代前端布局的两大利器。本文深入讲解二者的设计哲学、适用场景，以及在实际项目中如何将两者结合，实现从简单单行到复杂二维网格的高效布局。",
    date: "2026-04-05",
    readTime: "7 min read",
    category: "CSS",
    tags: ["CSS3", "Flexbox", "Grid", "响应式布局", "现代CSS"],
    gradient: "linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)",
    likes: 48,
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>在 CSS 发展的早期，前端工程师依赖浮动（<code>float</code>）和定位（<code>position</code>）来实现复杂页面布局，这不仅代码繁琐，还充满了各种清浮动的"魔法代码"。CSS Flexbox 和 Grid 的出现，彻底解放了前端工程师的布局生产力。</p>

      <h2>1. Flexbox：一维弹性布局之王</h2>
      <p>Flexbox（弹性盒子模型）专为<strong>单轴方向</strong>（水平或垂直）的元素排列而设计。它的核心在于让容器能够动态调整子元素的大小与顺序，以填充可用空间。</p>
      <pre><code>.nav-bar {
  display: flex;
  justify-content: space-between; /* 主轴分布 */
  align-items: center;            /* 交叉轴对齐 */
  gap: 16px;                      /* 元素间距 */
}

/* flex-grow 让某个子元素自动撑满剩余空间 */
.search-input {
  flex: 1;
}</code></pre>
      <p>Flexbox 适用于：导航栏、卡片水平排列、表单行、按钮组等典型的单行/列布局场景。</p>

      <h2>2. CSS Grid：二维网格布局霸主</h2>
      <p>CSS Grid 是专为<strong>二维布局</strong>（同时控制行与列）设计的布局系统，它的强大之处在于可以精确地将元素放置在网格的任意位置，甚至实现跨行跨列的复杂版面。</p>
      <pre><code>.dashboard {
  display: grid;
  /* 3列：固定 250px 侧边栏 + 弹性主区 + 固定 300px 右侧 */
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: 64px 1fr auto;
  gap: 24px;
  min-height: 100vh;
}

/* 指定区域：让头部横跨所有列 */
.header {
  grid-column: 1 / -1;
}</code></pre>
      <p>Grid 适用于：整体页面骨架、博客文章列表网格、数据看板多栏布局等复杂二维场景。</p>

      <h2>3. 两者结合：实现"完美自适应卡片网格"</h2>
      <p>在"职引星"项目的求职信息卡片列表中，我们使用 Grid 管理宏观的卡片排列，在卡片内部则用 Flexbox 控制图标、文字的微观对齐：</p>
      <pre><code>/* 外层：Grid 驱动自适应网格 */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

/* 内层：Flexbox 处理单卡片的行内布局 */
.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}</code></pre>
      <p>这种"Grid 管大局，Flexbox 管细节"的组合策略，是目前最成熟、最高效的现代 CSS 布局实践。</p>
    `
  },
  {
    id: "javascript-es6-modern",
    title: "JavaScript ES6+ 核心特性精讲：从解构赋值到异步 async/await 全掌握",
    excerpt: "ES6 及后续版本为 JavaScript 注入了强大的现代化特性。本文精讲解构赋值、扩展运算符、模板字符串、Promise 与 async/await 等日常高频语法，帮助你彻底告别 ES5 时代的冗余写法。",
    date: "2026-03-20",
    readTime: "8 min read",
    category: "JavaScript",
    tags: ["JavaScript", "ES6+", "async/await", "Promise", "现代语法"],
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    likes: 61,
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=80",
    content: `
      <p>自 2015 年 ES6（ECMAScript 2015）发布以来，JavaScript 每年都会推出新特性，语言表达力飞速跃升。掌握这些现代语法，不仅能让代码更简洁优雅，更是参与 React、Vue 等现代框架项目的必备基础。</p>

      <h2>1. 解构赋值：告别冗长的变量提取</h2>
      <p>解构赋值允许你从数组或对象中，用简洁的语法一次性提取多个值：</p>
      <pre><code>// ✅ ES6 对象解构
const user = { name: "王浩楠", city: "深圳", role: "前端工程师" };
const { name, city, role } = user;
console.log(name); // "王浩楠"

// 重命名 + 默认值
const { name: userName, age = 18 } = user;

// ✅ 数组解构（React useState 的经典用法）
const [count, setCount] = useState(0);

// ✅ 函数参数中的对象解构
const greet = ({ name, city }) => \`你好，\${name}，来自\${city}！\`;</code></pre>

      <h2>2. 扩展运算符（...）：解锁对象与数组的无限可能</h2>
      <p>扩展运算符（<code>...</code>）是 ES6+ 最高频的语法之一，它在数组合并、对象浅拷贝、函数传参等场景中大放异彩：</p>
      <pre><code>// 数组合并
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// 对象浅拷贝与覆盖（React 状态更新常用模式）
const prevState = { name: "王浩楠", city: "深圳", likes: 10 };
const nextState = { ...prevState, likes: prevState.likes + 1 };

// 函数参数收集（Rest 参数）
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
sum(1, 2, 3, 4); // 10</code></pre>

      <h2>3. Promise 与 async/await：驯服异步操作</h2>
      <p>在 ES5 时代，嵌套回调（"回调地狱"）是 JavaScript 异步编程的噩梦。ES6 的 <code>Promise</code> 和 ES2017 的 <code>async/await</code> 彻底解决了这一问题：</p>
      <pre><code>// ❌ 回调地狱（ES5 时代）
fetchUser(userId, function(user) {
  fetchPosts(user.id, function(posts) {
    renderPage(user, posts, function() {
      console.log("done");
    });
  });
});

// ✅ async/await（现代写法，像写同步代码一样优雅）
const loadPage = async (userId) => {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    await renderPage(user, posts);
    console.log("done");
  } catch (error) {
    console.error("加载失败：", error.message);
  }
};</code></pre>

      <h2>4. 可选链（?.）与空值合并（??）：终结 undefined 崩溃</h2>
      <p>这两个 ES2020 特性是日常开发的"防御性编程利器"，极大降低了因 API 返回数据缺失字段而导致的运行时崩溃：</p>
      <pre><code>// 可选链：深层取值不再需要层层判断
const city = user?.address?.city ?? "未知城市";

// 等同于以前繁琐的写法：
const city = user && user.address && user.address.city 
  ? user.address.city 
  : "未知城市";</code></pre>
      <p>将这些 ES6+ 特性融入日常开发，代码的可读性和健壮性都将得到显著提升——这也是在"职引星"和"photolog"项目开发中，我们团队的重要编码规范之一。</p>
    `
  }
];

