// src/components/ProjectCard.tsx
import { Link } from "react-router-dom";
import "./ProjectCard.css";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  stack: string[];
  index: number;
}

function ProjectCard({
  id,
  title,
  description,
  image,
  stack,
  index,
}: ProjectCardProps) {
  return (
    <div
      className="project-card reveal"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Link to={`/projects/${id}`} className="project-card-link">
        {image && (
          <div className="project-card-image">
            <img src={image} alt={title} />
          </div>
        )}

        <div className="project-card-content">
          <h3>{title}</h3>
          <p>{description}</p>

          <ul className="project-card-stack">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
