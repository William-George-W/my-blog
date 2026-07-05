# 🌟 王浩楠的个人博客

> 一个基于 React + Vite 构建的现代化个人技术博客，记录前端开发实践与项目经验。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-已部署-success?logo=github)](https://william-george-w.github.io/my-blog/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)

**🔗 在线访问：[https://william-george-w.github.io/my-blog/](https://william-george-w.github.io/my-blog/)**

---

## 📖 项目简介

这是我的个人技术博客，用于分享在前端开发过程中的项目实战、技术探索与开发心得。博客包含以下内容：

- 🚀 **项目实战**：职引星求职平台、photolog 照片日志等完整项目经验
- 🤖 **AI 辅助开发**：Vibe Coding 理念与 Cursor、Antigravity 等 AI 编程工具实践
- 📊 **数据可视化**：ECharts / Recharts 在业务场景中的深度应用
- 💻 **前端基础**：HTML5 语义化、CSS 现代布局、JavaScript ES6+ 等核心知识
- ⚙️ **工程实践**：前后端联调、性能优化、Canvas 画板开发等进阶主题

---

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| **前端框架** | React 19 + TypeScript |
| **构建工具** | Vite 8 |
| **UI 图标** | Lucide React |
| **样式方案** | 原生 CSS3（CSS Variables + Flexbox + Grid） |
| **路由方案** | 自定义 Hash 路由 |
| **代码检查** | Oxlint |
| **部署平台** | GitHub Pages（gh-pages） |

---

## ✨ 功能特性

- 🌗 **深色 / 浅色主题切换**：基于 CSS Variables 实现，支持系统主题跟随
- 📱 **响应式布局**：完整适配手机、平板、桌面端
- 🔍 **文章分类与标签筛选**：按技术分类快速定位感兴趣的文章
- 💖 **点赞互动**：文章点赞计数
- ⏱️ **阅读时长估算**：每篇文章显示预计阅读时间
- 🎨 **渐变封面**：每篇文章配有主题相关的 Unsplash 真实摄影封面
- ✨ **打字机动效**：首页技能词汇动态轮播
- 📬 **联系表单**：集成邮件链接与 GitHub 跳转

---

## 📂 项目结构

```
blog/
├── public/               # 静态资源
├── src/
│   ├── components/       # 公共组件
│   │   ├── Navbar.tsx    # 顶部导航栏
│   │   ├── Footer.tsx    # 底部版权信息
│   │   ├── PostCard.tsx  # 文章卡片
│   │   └── Timeline.tsx  # 成长时间线
│   ├── context/
│   │   └── ThemeContext.tsx  # 全局主题 Context
│   ├── data/
│   │   └── mockPosts.ts  # 文章数据（10 篇）
│   ├── pages/
│   │   ├── Home.tsx      # 首页
│   │   ├── Blog.tsx      # 文章列表
│   │   ├── BlogPost.tsx  # 文章详情
│   │   ├── About.tsx     # 关于我
│   │   └── Contact.tsx   # 联系方式
│   ├── App.tsx           # 根组件 + 路由
│   └── index.css         # 全局样式 / 设计 Token
├── vite.config.ts
└── package.json
```

---

## 🚀 本地开发

**环境要求**：Node.js >= 18

```bash
# 克隆仓库
git clone https://github.com/William-George-W/my-blog.git
cd my-blog

# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev
```

---

## 📦 构建与部署

```bash
# 构建生产包
npm run build

# 本地预览构建产物
npm run preview

# 一键部署到 GitHub Pages
npm run deploy
```

> `npm run deploy` 会自动执行 `build` 并将 `dist/` 目录推送到 `gh-pages` 分支。

---

## 📝 新增文章

在 `src/data/mockPosts.ts` 中按照以下结构添加新对象即可：

```ts
{
  id: "unique-post-id",
  title: "文章标题",
  excerpt: "摘要，显示在卡片上",
  date: "2026-07-06",
  readTime: "5 min read",
  category: "分类名",
  tags: ["标签1", "标签2"],
  gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  likes: 0,
  imageUrl: "https://images.unsplash.com/photo-xxx?w=800&auto=format",
  content: `<p>HTML 格式的正文内容</p>`,
}
```

---

## 👤 关于作者

**王浩楠**  
📍 深圳 | 前端开发工程师  
📧 [3105024527@qq.com](mailto:3105024527@qq.com)  
🐙 [GitHub @William-George-W](https://github.com/William-George-W)

**技能方向**：React / Vite / Ant Design / ECharts / TypeScript / Node.js / Express / MySQL  
**AI 辅助开发**：Cursor · Antigravity · Trae · Claude Code · Codex

---

## 📄 License

[MIT](./LICENSE) © 2026 王浩楠
