import React, { useState, useMemo } from "react";
import { mockPosts } from "../data/mockPosts";
import { PostCard } from "../components/PostCard";
import { Search, Hash, Sparkles } from "lucide-react";

interface BlogProps {
  setActiveTab: (tab: string) => void;
  setSelectedPostId: (id: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ setActiveTab, setSelectedPostId }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    mockPosts.forEach((post) => {
      post.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // Filter posts based on search query and tag selection
  const filteredPosts = useMemo(() => {
    return mockPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="blog-page-container container">
      {/* Blog Page Title */}
      <div className="page-header text-center">
        <div className="header-badge">
          <Sparkles size={14} /> <span>文章列表</span>
        </div>
        <h1 className="page-title">全部文章</h1>
        <p className="page-subtitle">探索前端技术的奥秘，沉淀思考与积累</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="blog-filters-section">
        {/* Search Field */}
        <div className="search-bar-wrapper glass-panel">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="搜索文章标题、内容、分类..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Tags Selection Bar */}
        <div className="tags-container">
          <button
            className={`tag-filter-btn ${selectedTag === null ? "active" : ""}`}
            onClick={() => setSelectedTag(null)}
          >
            全部标签
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tag-filter-btn ${selectedTag === tag ? "active" : ""}`}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            >
              <Hash size={12} />
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Feed Grid */}
      {filteredPosts.length > 0 ? (
        <div className="blog-posts-grid">
          {filteredPosts.map((post) => (
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
      ) : (
        <div className="empty-results glass-panel text-center">
          <p className="empty-text">没有找到匹配的文章。请尝试输入其他关键词。</p>
          <button className="reset-search-btn" onClick={() => { setSearchQuery(""); setSelectedTag(null); }}>
            清除过滤
          </button>
        </div>
      )}
    </div>
  );
};
