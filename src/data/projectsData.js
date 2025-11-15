// src/assets/projectsData.js
import mockupImage1 from '../assets/Images/projects_mockup_01.png';
import keyfeatureImage1 from '../assets/Images/Key_Features_img_01.png';
import keyfeatureImage2 from '../assets/Images/Key_Features_img_02.png';
import keyfeatureImage3 from '../assets/Images/Key_Features_img_03.png';
import demoVideo1 from '../assets/videos/금융챗봇금융서비스.mp4';

import mockupImage2 from '../assets/Images/projects_mockup_02.png';
import keyfeature2Image1 from '../assets/Images/Key_Features_img2_06.png';
import keyfeature2Image2 from '../assets/Images/Key_Features_img2_10.png';
import keyfeature2Image3 from '../assets/Images/Key_Features_img2_11.png';
import demoVideo2 from '../assets/videos/장마철침수위험예측시스템.mp4';

import mockupImage3 from '../assets/Images/projects_mockup_03.png';
import keyfeature3Image1 from '../assets/Images/Key_Features_img3_01.png';
import keyfeature3Image2 from '../assets/Images/Key_Features_img3_02.png';
import keyfeature3Image3 from '../assets/Images/Key_Features_img3_03.png';

export const projectsData = [
  {
    id: 1,
    slug: 'cctv-anomaly-detection',
    title: 'AI 기반 CCTV 이상행동 감지 시스템',
    subtitle: 'CCTV 영상 분석 및 이상행동 탐지 플랫폼',
    shortDescription: 'React + Flask 기반 8가지 이상행동 실시간 감지 및 전도 모델 정확도 97.9% 달성',
    heroImage: mockupImage3,
    
    overview: {
      duration: '2024.09.27 - 2024.11.11 (6주)',
      role: 'React 프론트엔드 개발, 전도 감지 모델 개발, EDA 및 데이터 전처리, UI/UX 설계, 반응형 구현 (40% 기여)',
      team: '5명',
      description: 'CCTV 영상을 분석해 폭행, 절도 등의 이상행동을 감지하는 웹 기반 시스템입니다. 회원 전용 대시보드에서 영상 분석을 통해 이상행동을 감지하고, 감지된 순간의 이미지를 저장할 수 있습니다. 이 프로젝트에서 UI/UX 설계, React를 활용한 프론트엔드 개발을 담당했으며, 데이터 전처리 및 EDA를 진행하고 전도 감지 모델을 개발했습니다.'
    },
    
    challenge: {
      title: 'Challenge',
      description: '실시간 CCTV 영상에서 다양한 이상행동을 정확하게 감지해야 하는 과제가 있었습니다. 특히 전도(쓰러짐) 감지의 경우, 카메라 구도(Front, Side, Top, Diagonal)에 따라 시각적 특징이 크게 달라지는 문제와 일상 행동(앉기, 눕기, 숙이기)과의 구분이 어려운 문제가 있었습니다. 또한 2,899개 영상 데이터에서 전도 데이터는 25%로 클래스 불균형이 존재했으며, 기존 클론 프로젝트의 UI/UX를 한국 사용자에 맞게 전면 개편해야 했습니다.'
    },
    
    solution: {
      title: 'Solution',
      description: 'MediaPipe Pose를 활용하여 33개 관절 좌표를 추출하고, Optical Flow로 움직임 벡터를 계산하여 198차원 Feature를 구성했습니다. Bi-LSTM 양방향 시계열 모델과 Attention Layer를 적용하여 전도 순간의 "하강 → 정지" 패턴을 학습시켰습니다. React 기반 직관적인 대시보드를 설계하여 실시간 CCTV 모니터링, 이상행동 통계, 이벤트 기록 관리 기능을 구현했으며, 모든 페이지에 반응형 디자인을 적용하여 모바일/태블릿 환경을 지원했습니다.'
    },
    
    techStack: {
      frontend: ['React', 'HTML5', 'CSS3', 'JavaScript', 'React Router'],
      backend: ['Python 3.11', 'Flask', 'YOLOv8', 'Bi-LSTM', 'MediaPipe Pose', 'Pandas', 'NumPy', 'scikit-learn'],
      database: ['MongoDB'],
      deployment: ['WebRTC', 'OpenAI API', 'Git']
    },
    
    features: [
      {
        title: '직관적인 메인 인터페이스',
        description: '사용자 친화적인 랜딩 페이지로 서비스의 핵심 기능을 한눈에 파악할 수 있습니다. 로그인 후에는 헤더에 사용자 이메일, 대시보드 접근 아이콘, 로그아웃 버튼이 표시되어 편리한 네비게이션을 제공합니다. 관찰의 끝, 신호의 시작이라는 콘셉트로 CCTV 이상행동 감지 서비스의 목적을 명확하게 전달합니다.',
        image: keyfeature3Image1
      },
      {
        title: '효율적인 카메라 관리 시스템',
        description: '관리자 대시보드에서 CCTV 카메라를 간편하게 등록하고 관리할 수 있습니다. 카메라별 이름, 타입, IP, 포트 정보를 체계적으로 관리하며, 검색 및 필터 기능으로 빠른 접근이 가능합니다.',
        image: keyfeature3Image2
      },
      {
        title: '실시간 이상행동 감지 및 모니터링',
        description: '이상행동(낙상, 흡연, 폭력, 침입, 방화, 실신)을 실시간으로 감지하고 감지 정확도를 퍼센트로 표시합니다. 이상행동이 감지되면 사용자가 예/아니오 버튼을 통해 해당 순간의 이미지 저장 여부를 선택할 수 있으며, CCTV 화면을 통해 현장 상황을 실시간으로 모니터링할 수 있습니다.',
        image: keyfeature3Image3
      }
    ],
    
    results: {
      title: 'Results',
      achievements: [
        'React 기반 실시간 CCTV 모니터링 UI/UX 개발 및 반응형 웹 구현',
        'Bi-LSTM 전도 감지 모델 정확도 97.9%, Recall 88.4% 달성',
        'MediaPipe Pose + Optical Flow 기반 Feature Engineering 파이프라인 구축',
        '2,899개 영상 데이터 EDA 수행 및 클래스 불균형 문제 해결 방안 도출'
      ]
    },
    
    links: {
      github: 'https://github.com/tangerineTaste/Anomaly-detection',
      youtube: 'https://www.youtube.com/@yshin_projects',
      demo: '#'
    },
    
    demoVideo: demoVideo2
  },
  {
    id: 2,
    slug: 'ai-chatbot-assistant',
    title: '지능형 금융상담 챗봇 및 금융상품 추천 AI 시스템',
    subtitle: 'RAG-Based Personalized Financial Consulting Platform',
    shortDescription: 'LightGBM 87.6% 정확도 달성, 22,975건 금융 데이터 처리',
    heroImage: mockupImage1,
    
    overview: {
      duration: '2024.07 - 2024.08 (5주)',
      role: '데이터 수집&정제, ML 모델링, Django 웹 구현 (40% 기여)',
      team: '4명',
      description: '사용자 맞춤 금융 상담과 상품 추천을 제공하는 AI 기반 금융 플랫폼입니다. 챗봇을 통한 금융 상담, 회원 정보 기반 맞춤 상품 추천, 비회원도 이용 가능한 간편 추천 기능을 제공하며, 금융 뉴스, 공지사항, 서비스 가이드 등의 부가 기능을 포함합니다. 이 프로젝트에서 전체 UI/UX 설계 및 디자인, 대부분의 프론트엔드 페이지 개발, 팀원 페이지 통합 작업을 담당했으며, LightGBM과 XGBoost 기반 금융상품 추천 모델을 개발했습니다.'
    },
    
    challenge: {
      title: 'Challenge',
      description: '22,975건의 대용량 금융 데이터 처리 및 불균형 데이터 문제(클래스 비율: 4.2%~59.1% 분포)에 직면했습니다. 5개 금융상품(단기금융상품펀드, 양도성예금증서, 비머니마켓펀드, 주식보유, 퇴직준비금유동성)을 동시에 예측해야 했으며, 복잡한 비즈니스 로직과 사용자 인증을 다루는 Django 백엔드 개발이 필요했습니다.'
    },
    
    solution: {
      title: 'Solution',
      description: 'class_weight="balanced"를 적용하여 불균형 데이터 문제를 해결했습니다. MultiOutputClassifier를 통한 5개 금융상품 다중 출력 분류 구현 및 LightGBM과 XGBoost 모델 하이퍼파라미터 튜닝을 수행했습니다. 11개 핵심 특성 변수를 선별하고, Django 기반 5개 앱 구조(accounts, home, product_recommendation, customer_support 등)를 설계했습니다.'
    },
    
    techStack: {
      frontend: ['Django Templates', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Chart.js'],
      backend: ['Python 3.10', 'Django 5.2', 'Flask 3.1', 'LangChain', 'Pinecone', 'SQLite', 'OpenAI GPT-4o-mini', 'Upstage Embeddings', 'Cohere', 'LightGBM', 'XGBoost', 'scikit-learn', 'Pandas', 'NumPy'],
      deployment: ['AWS EC2', 'Git']
    },
    
    features: [
      {
        title: '금융상품 보유 예측',
        description: 'MultiOutputClassifier를 통한 5개 금융상품(MMMF, CDS, NMMF, STOCKS, RETQLIQ) 동시 예측 구현. 11개 특성 변수(교육수준분류, 연령대분류, 금융위험감수, 금융위험회피, 저축여부, 급여소득, 연령, 가구주성별, 결혼상태, 자녀수, 직업분류1)를 활용한 예측 시스템 구축.',
        image: keyfeatureImage1
      },
      {
        title: 'RAG 시스템 기반 법률 문서 검색',
        description: 'Pinecone 벡터 데이터베이스에 86,103개 텍스트 조각을 업로드하여 법률 문서 검색 시스템 구축. LangChain 프레임워크, Upstage Embeddings(solar-embedding-1-large), OpenAI(gpt-5-nano), Cohere 리랭킹 모델(rerank-multilingual-v3.0) 활용. 객관식 문제 80% 정확도(100문제 중 80개 정답), 주관식 문제 50% 정확도(50문제 중 25개 정답) 달성.',
        image: keyfeatureImage2
      },
      {
        title: 'Django 웹 애플리케이션 개발 및 배포',
        description: 'Django 기반 웹 기획, 설계 및 UI/UX 디자인 담당. 5개 앱 구조 설계(accounts, home, product_recommendation, customer_support, chatbot). 사용자 인증 및 세션 관리 시스템 구현. AWS EC2 환경에서 웹 애플리케이션 배포 완료. 네이버 뉴스 API 연동 10개 카테고리 자동 분류 및 금융감독원 API 6개 카테고리 실시간 금융상품 데이터 수집 시스템 구축.',
        image: keyfeatureImage3
      }
    ],
    
    results: {
      title: 'Results',
      achievements: [
        'LightGBM 정확도 87.6% (F1-score 71.7%, Precision 67.1%, Recall 74.1%) 달성',
        'RAG 시스템 객관식 80%, 주관식 50% 정확도로 86,103개 법률 문서 검색 구현',
        '22,975건 대용량 금융 데이터 성공적 처리 및 5개 금융상품 다중 출력 분류 구현',
        'Django 5개 앱 구조 웹 애플리케이션 개발 및 AWS EC2 클라우드 배포 성공'
      ]
    },
    
    links: {
      github: 'https://github.com/tangerineTaste/CodeDoc',
      youtube: 'https://www.youtube.com/@yshin_projects',
      demo: 'http://3.39.48.77:8000'
    },
    
    demoVideo: demoVideo1
  },
  
  {
    id: 3,
    slug: 'ai-image-generator',
    title: '장마철 침수 위험 예측 시스템',
    subtitle: '4가지 AI 모델 앙상블 기반 침수 예측 시스템',
    shortDescription: 'Flask 기반 실시간 기상 데이터 분석 및 침수 위험 예측',
    heroImage: mockupImage2,
    
    overview: {
      duration: '2024.07 - 2024.07 (2주)',
      role: 'Flask 웹 개발, UI/UX 디자인 (30% 기여)',
      team: '4명',
      description: '장마철 침수 위험을 예측하여 사전 대비를 돕는 AI 기반 웹 서비스입니다. 사용자는 날짜와 지역, AI 모델을 선택하여 침수 위험도를 예측하고, 그래프와 표로 시각화된 결과를 확인할 수 있습니다. 침수 관련 뉴스 조회, 회원 인증 기능도 제공합니다. 이 프로젝트에서 UI/UX 설계 및 디자인, Flask 기반 웹 개발 전반을 담당했습니다.'
    },
    
    challenge: {
      title: 'Challenge',
      description: '약 227,000개의 대용량 기상 데이터를 효율적으로 처리하고 실시간으로 예측해야 하는 과제가 있었습니다. 다양한 기상 변수(강수량, 습도, 기온 등)를 고려한 정확한 침수 위험도 예측이 필요했으며, 사용자가 직관적으로 이해할 수 있는 시각화 인터페이스 구현이 요구되었습니다.'
    },
    
    solution: {
      title: 'Solution',
      description: '4가지 머신러닝 모델을 앙상블하여 예측 정확도를 향상시켰습니다. Flask 프레임워크를 활용한 경량화된 웹 애플리케이션 구조 설계로 1초 이내 실시간 예측 처리를 구현했습니다. Chart.js를 활용한 데이터 시각화로 지역별 침수 위험도를 직관적으로 표현했으며, 12개의 RESTful API를 통해 효율적인 데이터 통신 구조를 구축했습니다.'
    },
    
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Bootstrap'],
      backend: ['Python 3.10', 'Flask 3.1', 'Random Forest', 'XGBoost', 'LightGBM', 'CatBoost', 'scikit-learn', 'Pandas', 'NumPy'],
      deployment: ['Local Server', 'Git']
    },
    
    features: [
      {
        title: '앙상블 기반 침수 위험 예측 모델',
        description: '4가지 머신러닝 모델(Random Forest, XGBoost, LightGBM, CatBoost)을 앙상블하여 높은 예측 정확도 달성. 약 227,000개의 기상청 ASOS 데이터를 학습하여 강수량, 습도, 기온 등 다양한 기상 변수를 고려한 침수 위험도 분석. 실시간 예측 처리 시간 1초 이내로 최적화하여 긴급 상황 대응 가능.',
        image: keyfeature2Image1
      },
      {
        title: '실시간 지역별 침수 위험도 분석',
        description: '날짜, 지역, 모델을 선택하여 침수 위험도를 예측할 수 있는 회원 전용 서비스입니다. 4가지 AI 모델의 예측 결과를 그래프로 비교하고, 일별 상세 데이터를 확인할 수 있습니다. Flask를 통한 사용자 인증과 API 연동, Chart.js를 활용한 데이터 시각화를 구현했습니다.',
        image: keyfeature2Image2
      },
      {
        title: '실시간 뉴스 수집 및 분류',
        description: '날씨, 태풍, 침수 등 재난 관련 키워드로 뉴스를 자동 수집하고 카테고리별로 분류하여 표시합니다. Flask API를 통해 뉴스 데이터를 가져와 사용자가 최신 기상 정보를 한눈에 확인할 수 있도록 구현했습니다.',
        image: keyfeature2Image3
      }
    ],
    
    results: {
      title: 'Results',
      achievements: [
        'Flask 기반 완성된 웹 사이트 구축 (6개 페이지, 12개 API)',
        '약 227,000개 대용량 기상 데이터 성공적 처리',
        '실시간 예측 1초 이내 처리 시스템 완성',
        '4가지 머신러닝 모델 앙상블을 통한 높은 예측 정확도 달성'
      ]
    },
    
    links: {
      github: 'https://github.com/SeohuiJeong0420/crew_soom',
      youtube: 'https://www.youtube.com/@yshin_projects',
      demo: '#'
    },
    
    demoVideo: demoVideo2
  }
];