// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";
import profile from "../assets/profile.png";
import { projects } from "./projectsData";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";

function Home() {
  useEffect(() => {
    document.title = "하은 | 프론트엔드 개발자 포트폴리오";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="home">
        <div className="home-grid">
          <div className="home-text">
            <p className="home-eyebrow">PORTFOLIO</p>

            <h1 className="home-title">
              구조와 흐름을 고민하며<br />
              하나씩 구현해 나갑니다.
              
            </h1>

            <p className="home-desc">
              React · TypeScript 기반으로<br />
              사용자 경험을 고려한 웹 서비스를 만듭니다.
            </p>

            <div className="home-actions">
              <Link to="/contact" className="btn-primary">
                연락하기
              </Link>
            </div>

            <ul className="home-stack">
              <li>React</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>React Router</li>
            </ul>
          </div>

          <div className="home-image">
            <img src={profile} alt="프로필 이미지" />
          </div>
        </div>
      </section>

      {/* ✅ Featured Projects (projects 섹션 역할) */}
      <section id="projects" className="home-projects">
        <div className="home-projects-inner">
          <h2 className="section-title">Projects</h2>

          <div className="home-project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>

          {/* ✅ 전체 프로젝트 페이지로 이동 */}
          <div className="home-project-more">
            <Link to="/projects">프로젝트 전체 보기 →</Link>
          </div>
        </div>
      </section>

      {/* About / Skills / Resume / Contact */}
      <Section id="about" variant="right">
        <About />
      </Section>

      <Section id="skills" variant="right">
        <Skills />
      </Section>

      <Section id="resume" variant="left">
        <Resume />
      </Section>

      <Section id="contact" variant="center">
        <Contact />
      </Section>
    </>
  );
}

export default Home;
