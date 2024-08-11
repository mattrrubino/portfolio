import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./views";
import Experience from "./views/experience";
import Publications from "./views/publications";
import Projects from "./views/projects";
import COVID from "./views/projects/covid";
import Christmas from "./views/projects/christmas";
import Hackathons from "./views/hackathons";
import Pokemix from "./views/projects/pokemix";

// Potential future improvements:
//  - Scroll restoration
//  - Smooth scrolling
//  - Game backends
//  - Connect four
//  - Refactor
//  - TypeScript

export default function App() {
  // Page anchors do not always work in Chrome since they
  // are added to the DOM at runtime. This fixes the issue.
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full h-full overflow-x-clip font-grotesque text-xl">
      <BrowserRouter>
        <Header
          paths={[
            { name: "Experience", path: "/experience" },
            { name: "Publications", path: "/publications" },
            { name: "Projects", path: "/projects" },
            { name: "Hackathons", path: "/hackathons" },
          ]}
        />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/pokemix" element={<Pokemix />} />
          <Route path="/projects/covid" element={<COVID />} />
          <Route path="/projects/christmas" element={<Christmas />} />
          <Route path="/hackathons" element={<Hackathons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
