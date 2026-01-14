import "./About.css";

function About() {
  return (
    <section className="section">
      <h2 className="section-title">About</h2>

      <div className="about-grid">
        {/* 나에 대한 소개 */}
        <div className="about-card">
          <h3>저는 이런 개발자입니다</h3>
          <p>
            단순히 화면을 구현하는 것을 넘어,
            <br />
            <strong>데이터 구조와 사용자 흐름을 함께 고민하는</strong>
            <br />
            프론트엔드 개발자입니다.
          </p>
        </div>

        {/* 개발 태도 */}
        <div className="about-card">
          <h3>개발을 대하는 태도</h3>
          <p>
            기능 구현보다 <strong>왜 이렇게 설계해야 하는지</strong>를
            먼저 고민합니다.
            <br />
            유지보수와 확장을 고려한 구조를 만드는 것을 중요하게 생각합니다.
          </p>
        </div>

        {/* 성장 방향 */}
        <div className="about-card">
          <h3>성장 방향</h3>
          <p>
            React · TypeScript 기반의 SPA 경험을 바탕으로,
            <br />
            사용자 경험과 코드 품질을 함께 높이는 개발자로
            성장하고자 합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
