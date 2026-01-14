export type SkillItem = {
  name: string;
  description: string;
  tags: string[];
};

export type SkillCategory = {
  title: "Frontend" | "Backend" | "Tools";
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        description: "컴포넌트 기반 UI 설계 및 페이지 구성 경험",
        tags: ["SPA", "Component Design", "UI"],
      },
      {
        name: "TypeScript",
        description: "타입 기반 안정성 확보 및 유지보수성 개선",
        tags: ["Type Safety", "Refactoring"],
      },
      {
        name: "HTML/CSS",
        description: "시맨틱 마크업과 반응형 레이아웃 구현",
        tags: ["Semantic", "Responsive"],
      },
      {
        name: "Vite",
        description: "빠른 개발 환경 구성 및 빌드 경험",
        tags: ["Dev Server", "Build"],
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        description: "기본 서버 구성 및 API 요청 흐름 이해",
        tags: ["API", "Server"],
      },
      {
        name: "Express",
        description: "라우팅/미들웨어 기반 REST API 구조 경험",
        tags: ["Routing", "Middleware"],
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Git",
        description: "버전 관리 및 브랜치 기반 협업 흐름",
        tags: ["Branch", "PR"],
      },
      {
        name: "GitHub",
        description: "레포 관리 및 이슈/PR 기반 기록",
        tags: ["Issues", "PR"],
      },
      {
        name: "VS Code",
        description: "확장/디버깅 환경 구성",
        tags: ["Extensions", "Debug"],
      },
    ],
  },
];
