import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import ResumeView from "./pages/ResumeView"; // ✅ 추가
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      {/* 공통 레이아웃 (Navbar 포함) */}
      <Route element={<Layout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Standalone Pages */}
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="skills" element={<Skills />} />
        <Route path="resume" element={<Resume />} />

        {/* ✅ 이력서 PDF 보기 페이지 */}
        <Route path="resume/view" element={<ResumeView />} />

        <Route path="contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<p>페이지를 찾을 수 없습니다.</p>} />
      </Route>
    </Routes>
  );
}

export default App;
