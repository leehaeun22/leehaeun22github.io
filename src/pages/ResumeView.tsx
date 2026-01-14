import "./ResumeView.css";

function ResumeView() {
  return (
    <section className="resume-view">
      <h1 className="resume-view-title">이력서 미리보기</h1>
      <p className="resume-view-desc">
        아래에서 이력서 PDF를 확인하실 수 있습니다.
      </p>

      <div className="resume-pdf-wrapper">
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          className="resume-pdf"
        />
      </div>

      <div className="resume-view-actions">
        <a
          href="/resume.pdf"
          download
          className="resume-download-btn"
        >
          PDF 다운로드
        </a>
      </div>
    </section>
  );
}

export default ResumeView;
