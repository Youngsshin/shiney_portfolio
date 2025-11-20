// src/data/aboutData.js
import aboutImage from '../assets/Images/aboutme.jpg';
import profileImage from '../assets/Images/profile.jpeg';

export const aboutData = {
  // 기본 정보
  profile: {
    name: "김영신",
    nameEng: "Young-Shin, Kim",
    heroImage: aboutImage,      // 상단 hero 이미지
    profileImage: profileImage, // 하단 증명사진
  },

  // Quote Section
  quote: {
    small: "DEVELOPER IN PROGRESS",
    large: "Learning through challenges,<br/>building with purpose,<br/>growing with every project,<br/>one line of code at a time"
  },

  // My Story Section
  story: {
    leftTitle: "MY",
    leftSubtitle: "Journey",
    mainTitle: "MY STORY",
    content: [
      "3년간 웹 퍼블리셔로 일하며 웹사이트 제작과 디자인 업무를 담당했습니다. 사용자 인터페이스를 만들며 '데이터 기반으로 더 나은 경험을 제공할 수 있지 않을까?'라는 질문을 하게 되었고, 이것이 AI 개발자로의 전환을 결심한 계기가 되었습니다.",
      "웹 퍼블리셔로 일하며 쌓은 3년의 경험이 AI 개발에 큰 도움이 되었습니다. 사용자가 직접 사용할 수 있는 웹 서비스로 AI 모델을 구현하는 것이 자연스러웠고, UI/UX를 고려한 서비스 설계까지 할 수 있게 되었습니다. 팀 프로젝트를 진행하며 프론트엔드, 백엔드, 데이터 분석 등 다양한 역할을 경험했고, 각 분야의 팀원들과 소통하며 필요한 부분을 빠르게 학습해 기여했습니다.",
      "개발자이기 전에 웹 퍼블리셔로 일하며 사용자 경험의 중요성을 체득했습니다. 아무리 정확한 AI 모델도 사용자가 이해하고 활용할 수 없다면 의미가 없다고 생각합니다. 복잡한 AI 기술을 직관적인 인터페이스로 풀어내고, 데이터 속에서 발견한 인사이트를 실질적인 가치로 전환하는 개발자가 되고 싶습니다."
    ]
  },

  // Skills Section
  skills: {
    title: "SKILLS",
    categories: [
      {
        name: "Languages",
        items: ["Python", "JavaScript", "HTML5", "CSS3"]
      },
      {
        name: "Frameworks",
        items: ["Django", "Flask", "React", "Bootstrap", "Jinja2", "jQuery"]
      },
      {
        name: "AI/ML",
        items: ["TensorFlow", "PyTorch", "scikit-learn", "LLM (RAG)", "Transformer", "NLP", "CNN", "RNN", "DNN", "Computer Vision", "YOLO"]
      },
      {
        name: "Database",
        items: ["MySQL", "SQLite", "Oracle", "Pandas", "NumPy"]
      },
      {
        name: "Tools & Platform",
        items: ["Git", "AWS EC2", "VS Code", "Hugging Face", "Ollama", "OpenAI API", "Jupyter Notebook", "PyCharm"]
      }
    ]
  },

  // Career Section (비IT 경력)
  career: {
    title: "CAREER",
    items: [
      {
        company: "㈜에이와이엠",
        role: "홈페이지 제작 및 디자인",
        period: "2022.01 — 2024.11"
      },
      {
        company: "제주퍼시픽호텔",
        role: "웨딩홀 & 프론트 데스크",
        period: "2019.02 — 2021.02"
      }
    ]
  },

  // Timeline Section
  // timeline: {
  //   title: "TIMELINE",
  //   items: [
  //     { year: "2020", text: "웹 퍼블리셔로 커리어 시작" },
  //     { year: "2021", text: "웹 디자인 & 영상편집 과정 수료" },
  //     { year: "2024", text: "AI/ML 학습 시작 (Python·데이터분석·DL)" },
  //     { year: "2025", text: "CV, NLP, RAG 기반 AI 프로젝트 수행" },
  //     { year: "2025", text: "AI 포트폴리오 웹사이트 & RAG 챗봇 구축" }
  //   ]
  // },

  // Featured Projects
  // projects: {
  //   title: "FEATURED PROJECTS",
  //   items: [
  //     {
  //       name: "CCTV 이상행동 감지 AI",
  //       description: "Bi-LSTM + Pose 기반 실시간 전도 감지 시스템",
  //       tech: ["TensorFlow", "OpenCV", "MediaPipe", "FastAPI", "React"],
  //       link: "/project/cctv"
  //     },
  //     {
  //       name: "금융상품 추천 AI",
  //       description: "LightGBM/XGBoost 기반 다중 금융상품 보유 예측 모델",
  //       tech: ["scikit-learn", "EDA", "XGBoost", "Django"],
  //       link: "/project/finance"
  //     },
  //     {
  //       name: "포트폴리오 RAG 챗봇",
  //       description: "내 포트폴리오 정보를 기반으로 응답하는 AI 챗봇",
  //       tech: ["OpenAI API", "Vector DB", "React", "FastAPI"],
  //       link: "/project/chatbot"
  //     }
  //   ]
  // },

  // Certifications
  certifications: {
    title: "EDUCATION & CERTIFICATION",
    items: [
      { name: "GTQ 2급 (그래픽기술자격)", source: "한국생산성본부" },
      { name: "[플립드러닝] 멀티미디어콘텐츠제작(영상편집&웹제작) 양성과정A 수료", source: "2021" },
      { name: "KDT 기업맞춤형 AI-X 융복합 인재 양성 과정 수료", source: "2025" },
      { name: "심화_인공지능 YOLO기반 부트캠프 수료", source: "2025" }
    ]
  },

  // Awards
  awards: {
    title: "AWARDS & ACTIVITIES",
    category: "",
    items: [
      { name: "2025 제7회 K-디지털 트레이닝 해커톤 공모전 예선 참여", date: "2025" }
    ]
  },

  // Contact Section
  contact: {
    title: "GET IN TOUCH",
    items: [
      { 
        label: "Email", 
        value: "youngsshin0917@gmail.com",
        link: "mailto:youngsshin0917@gmail.com"
      },
      { 
        label: "Phone", 
        value: "010-7387-8357",
        link: "tel:010-7387-8357"
      },
      { 
        label: "GitHub", 
        value: "github.com/youngsshin",
        link: "https://github.com/youngsshin"
      },
      // { 
      //   label: "LinkedIn", 
      //   value: "Add your LinkedIn here",
      //   link: "#" // 나중에 LinkedIn 주소로 변경
      // }
    ]
  }
};