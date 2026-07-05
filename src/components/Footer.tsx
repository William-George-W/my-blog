import React from "react";
import { Github, Twitter, Mail, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <span>&copy; {new Date().getFullYear()} 王浩楠. All rights reserved.</span>
        </div>
        <div className="footer-center">
          <span>
            Made with <Heart size={14} className="heart-icon" /> and React
          </span>
        </div>
        <div className="footer-right">
          <a href="https://github.com/William-George-W" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="mailto:wanghaonan2188@gmail.com" className="social-link" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
