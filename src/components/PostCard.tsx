import React from "react";
import type { Post } from "../data/mockPosts";
import { Calendar, Clock, Heart, ArrowRight } from "lucide-react";

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div className="post-card" onClick={onClick}>
      {/* Visual Cover Image or Gradient */}
      <div 
        className="post-card-cover" 
        style={{ 
          background: post.imageUrl 
            ? `url(${post.imageUrl}) no-repeat center / cover` 
            : post.gradient 
        }}
      >
        <span className="post-card-category">{post.category}</span>
      </div>

      <div className="post-card-body">
        {/* Date & Read Time */}
        <div className="post-card-meta">
          <span className="meta-item">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="meta-item">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="post-card-title">{post.title}</h3>

        {/* Excerpt */}
        <p className="post-card-excerpt">{post.excerpt}</p>

        {/* Tags */}
        <div className="post-card-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag-badge">
              #{tag}
            </span>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="post-card-footer">
          <span className="likes-count">
            <Heart size={14} className="like-icon" />
            {post.likes}赞
          </span>
          <span className="read-more-btn">
            阅读全文 <ArrowRight size={16} className="arrow-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};
