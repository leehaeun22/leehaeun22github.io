import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">
        직접 기획하고 구현한 프로젝트 모음입니다.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card"
          >
            {/* 썸네일 영역 */}
            <div className="project-card-thumb" />

            {/* 제목 */}
            <h3 className="project-title">{project.title}</h3>

            {/* 설명 */}
            <p className="project-desc">{project.description}</p>

            {/* 기술 스택 */}
            <ul className="project-stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
