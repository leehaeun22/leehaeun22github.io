import "./Resume.css";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <section className="section">
      <h2 className="section-title">Resume</h2>

      <p className="resume-subtitle">
        데이터 중심 UI 설계와 사용자 경험을 고민합니다.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>학력</h3>
          <p>
            ○○대학교 소프트웨어학과<br />
            <span className="card-desc">
              웹 서비스 구조와 UI 설계 중심 학습
            </span>
          </p>
        </div>

        <div className="card">
          <h3>관심 분야</h3>
          <p>
            웹 서비스 설계<br />
            UI/UX<br />
            사용자 경험
          </p>
        </div>

        <div className="card">
          <h3>사용 기술</h3>
          <p>React · TypeScript · Vite · Git</p>
        </div>
      </div>

      {/* ✅ 이력서 전용 페이지로 이동만 */}
      <div className="resume-actions">
        <Link to="/resume/view" className="resume-btn">
          이력서 보기 →
        </Link>
      </div>
    </section>
  );
}

export default Resume;
