import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedPostId, setSelectedPostId] = useState<string>("");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={setActiveTab} setSelectedPostId={setSelectedPostId} />;
      case "blog":
        return <Blog setActiveTab={setActiveTab} setSelectedPostId={setSelectedPostId} />;
      case "blog-post":
        return <BlogPost postId={selectedPostId} setActiveTab={setActiveTab} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} setSelectedPostId={setSelectedPostId} />;
    }
  };

  return (
    <div className="app-shell" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Dynamic Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main style={{ flexGrow: 1 }}>
        {renderContent()}
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
