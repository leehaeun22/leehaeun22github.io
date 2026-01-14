// src/pages/ProjectDetail.tsx
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "./projectsData";
import Section from "../components/Section";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | 하은 포트폴리오`;
    }
  }, [project]);

  if (!project) {
    return <p style={{ padding: "120px 24px" }}>프로젝트를 찾을 수 없습니다.</p>;
  }

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        {/* Header */}
        <header className="project-detail-header">
          <h1>{project.title}</h1>
          <p className="project-detail-sub">{project.description}</p>
        </header>

        {/* Image */}
        {project.image && (
          <div className="project-detail-image">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        {/* Content Sections */}
        <Section>
          <h2>프로젝트 개요</h2>
          <p>{project.overview}</p>
        </Section>

        <Section>
          <h2>문제 정의</h2>
          <p>{project.problem}</p>
        </Section>

        <Section>
          <h2>해결 방법</h2>
          <p>{project.solution}</p>
        </Section>

        <Section>
          <h2>결과 및 배운 점</h2>
          <p>{project.result}</p>
        </Section>

        <Section>
          <h2>담당 역할</h2>
          <p>{project.role}</p>
        </Section>

        <Section>
          <h2>사용 기술</h2>
          <ul className="project-detail-stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Section>

        <div className="project-detail-back">
          <Link to="/">← 홈으로 돌아가기</Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
