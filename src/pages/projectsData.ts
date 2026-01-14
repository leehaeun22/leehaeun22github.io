import profileImg from "../assets/profile.png";

export const projects = [
  {
    id: "portfolio",
    title: "포트폴리오 웹사이트",
    description: "React + TypeScript 기반 개인 포트폴리오",
    image: profileImg,

    overview:
      "개인 프로젝트와 기술 역량을 한눈에 보여주기 위해 제작한 포트폴리오 웹사이트입니다.",
    problem:
      "정적인 이력서만으로는 프로젝트 경험과 사고 과정을 충분히 전달하기 어려웠습니다.",
    solution:
      "카드형 프로젝트 미리보기와 상세 페이지 구조를 도입했습니다.",
    result:
      "프로젝트 이해도가 높아지고 유지보수가 쉬운 구조를 만들 수 있었습니다.",

    role: "기획, UI 설계, 프론트엔드 개발",
    stack: ["React", "TypeScript", "Vite", "React Router"],
    github: "",
    demo: "",
  },
  {
    id: "chatbot",
    title: "AI 챗봇 서비스",
    description: "RAG 기반 문서 질의응답 챗봇",
    image: profileImg,

    overview:
      "문서를 기반으로 질문에 답변하는 RAG 구조의 AI 챗봇 서비스입니다.",
    problem:
      "기존 검색 방식은 문맥 이해가 부족했습니다.",
    solution:
      "문서 임베딩과 검색을 결합한 RAG 구조를 적용했습니다.",
    result:
      "질문 의도에 맞는 정확한 응답을 제공할 수 있었습니다.",

    role: "프론트엔드 UI 및 챗봇 인터페이스",
    stack: ["React", "Python", "RAG"],
    github: "",
    demo: "",
  },
  {
    id: "dashboard",
    title: "관리자 대시보드",
    description: "데이터 시각화 중심의 관리자 페이지",
    image: profileImg,

    overview:
      "관리자가 데이터를 직관적으로 확인할 수 있는 대시보드입니다.",
    problem:
      "텍스트 기반 데이터는 분석에 시간이 많이 소요됐습니다.",
    solution:
      "Chart.js를 활용한 시각화 UI를 구성했습니다.",
    result:
      "데이터 파악 속도와 관리 효율이 향상되었습니다.",

    role: "대시보드 화면 구성",
    stack: ["React", "Chart.js"],
    github: "",
    demo: "",
  },
  {
    id: "expense-tracker",
    title: "가계부 웹 서비스",
    description: "월별 지출을 관리하는 개인 가계부 서비스",
    image: profileImg,

    overview:
      "지출 내역을 기록하고 소비 패턴을 분석하는 웹 서비스입니다.",
    problem:
      "소비 흐름을 한눈에 보기 어려웠습니다.",
    solution:
      "월별 요약과 카테고리 분석 UI를 설계했습니다.",
    result:
      "소비 습관을 시각적으로 파악할 수 있었습니다.",

    role: "프론트엔드 UI 개발",
    stack: ["React", "TypeScript"],
    github: "",
    demo: "",
  },
  {
    id: "todo-app",
    title: "투두 관리 앱",
    description: "할 일을 체계적으로 관리하는 생산성 앱",
    image: profileImg,

    overview:
      "할 일을 카테고리별로 관리하는 투두 앱입니다.",
    problem:
      "단순 목록은 관리가 어려웠습니다.",
    solution:
      "상태 기반 UI와 필터 기능을 추가했습니다.",
    result:
      "작업 관리 효율이 향상되었습니다.",

    role: "UI 설계 및 상태 관리",
    stack: ["React", "Vite"],
    github: "",
    demo: "",
  },
];
