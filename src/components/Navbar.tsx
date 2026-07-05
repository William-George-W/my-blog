import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "首页" },
    { id: "blog", label: "博客" },
    { id: "about", label: "关于" },
    { id: "contact", label: "联系" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNavClick("home")}>
          <Terminal className="logo-icon" />
          <span>王浩楠<span className="logo-dot">.</span>blog</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link-btn ${activeTab === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
              {activeTab === item.id && <span className="active-indicator" />}
            </button>
          ))}

          {/* Theme Toggle Button */}
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "light" ? <Moon size={20} className="icon-rotate" /> : <Sun size={20} className="icon-rotate" />}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="navbar-mobile-actions">
          <button className="theme-toggle-btn-mobile" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="menu-toggle-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="navbar-links-mobile fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link-btn-mobile ${activeTab === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
