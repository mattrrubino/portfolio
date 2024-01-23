import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views";
import Experience from "./views/experience";
import ESC from "./views/experience/esc";
import Publications from "./views/publications";
import Projects from "./views/projects";
import COVID from "./views/projects/covid";
import Christmas from "./views/projects/christmas";
import Hackathons from "./views/hackathons";

export default function App() {
  return (
    <div className="w-full h-full overflow-x-clip font-grotesque text-xl">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/esc" element={<ESC />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/covid" element={<COVID />} />
          <Route path="/projects/christmas" element={<Christmas />} />
          <Route path="/hackathons" element={<Hackathons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
