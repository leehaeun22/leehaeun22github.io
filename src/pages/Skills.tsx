// src/pages/Skills.tsx
import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Vite</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
