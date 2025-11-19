// src/assets/projectsData.js
import mockupImage1 from '../assets/Images/projects_mockup_01.png';
import keyfeatureImage1 from '../assets/Images/Key_Features_img_01.png';
import keyfeatureImage2 from '../assets/Images/Key_Features_img_02.png';
import keyfeatureImage3 from '../assets/Images/Key_Features_img_03.png';
// import demoVideo1 from '/videos/금융챗봇금융서비스.mp4';

import mockupImage2 from '../assets/Images/projects_mockup_02.png';
import keyfeature2Image1 from '../assets/Images/Key_Features_img2_06.png';
import keyfeature2Image2 from '../assets/Images/Key_Features_img2_10.png';
import keyfeature2Image3 from '../assets/Images/Key_Features_img2_11.png';
// import demoVideo2 from '/videos/장마철침수위험예측시스템.mp4';

import mockupImage3 from '../assets/Images/projects_mockup_03.png';
import keyfeature3Image1 from '../assets/Images/Key_Features_img3_01.png';
import keyfeature3Image2 from '../assets/Images/Key_Features_img3_02.png';
import keyfeature3Image3 from '../assets/Images/Key_Features_img3_03.png';

// YouTube 영상 ID 세팅
const videoFinancial = "heHTTBztTw8";
const videoCctvPC = "7tWvuyX58bk";
const videoCctvMobile = "yaQc8UEllqU";
const videoFlood = "fvxYQxwCb1I";

export const projectsData = [
  {
    id: 1,
    slug: 'cctv-anomaly-detection',
    title: 'AI 기반 CCTV 이상행동 감지 시스템',
    subtitle: 'CCTV 영상 분석 및 이상행동 탐지 플랫폼',
    shortDescription: 'React + Flask 기반 8가지 이상행동 실시간 감지 시스템',
    heroImage: mockupImage3,
    
    overview: {
      duration: '2024.09.27 - 2024.11.11 (6주)',
      role: 'React 프론트엔드 개발, 전도 감지 모델 개발, EDA 및 데이터 전처리, UI/UX 설계, 반응형 구현 (40% 기여)',
      team: '5명',
      description: 'CCTV 영상을 분석해 폭력, 침입, 방화, 흡연, 실신, 전도(쓰러짐) 등 이상행동을 자동 감지하는 웹 기반 모니터링 시스템입니다. 관리자 대시보드에서 카메라 등록·검색·관리, CCTV 화면, 감지 이미지 저장·조회 기능을 제공하며, React 기반 UI/UX로 PC·태블릿·모바일 환경에서 안정적으로 동작하도록 구현했습니다. 이 프로젝트에서 저는 프론트엔드 UI/UX 설계 및 개발, MediaPipe 기반 전도 감지 모델용 데이터 전처리, Feature Engineering, EDA, 전도 감지 모델 구조 설계 및 개선을 주도적으로 담당했습니다.'
    },
    
    challenge: {
      title: 'Challenge',
      description: '카메라 구도(Front, Side, Top, Diagonal)에 따라 전도 동작의 관절 패턴이 크게 달라져 초기 모델은 Front 구도만 높은 감지율을 보이고 다른 구도에서는 전도와 정상 행동(앉기·숙이기·눕기)이 혼동되는 문제가 있었습니다. 또한 전체 2,899개의 CCTV 영상 중 전도 비율이 약 25%에 불과해 클래스 불균형으로 전도 과소탐지가 발생했고, 폴더 기반 분할로 인해 영상 단위가 섞여 데이터 누수로 accuracy 1.0이 나오는 과적합 문제도 직접 확인했습니다. 프론트엔드 측면에서도 실시간 스트림, 감지 팝업, 이미지 저장 기능을 안정적으로 동작시키고, 다양한 화면 크기에서도 안정적인 UI와 매끄러운 모니터링 경험을 제공해야 하는 프론트엔드 기술적 요구사항도 존재했습니다.'
    },
    
    solution: {
      title: 'Solution',
      description: 'MediaPipe Pose로 추출한 33개 관절 좌표를 중심점 기준으로 정규화하고, 관절 간 거리·속도·각도 특징을 결합한 Feature Fusion 시계열 입력을 구성했습니다. Bi-LSTM을 통해 “하강 → 바닥 접촉 → 정지”로 이어지는 전도 고유 패턴을 학습시키고, Attention을 적용해 핵심 프레임 가중치를 강화했습니다. 전도·정상 데이터 간 불균형은 class_weight로 보정하고, 데이터 누수 문제는 폴더 단위가 아닌 영상(video_id) 단위 GroupKFold 기준으로 재구성하여 해결했습니다. 프론트엔드에서는 React를 기반으로 대시보드, 카메라 관리, 실시간 감시 화면, 감지 이미지 저장·조회 UI를 설계하고, WebRTC 기반 스트림 성능 최적화 및 전 페이지 반응형 구조를 구축했습니다. 또한 전도 영상 약 800개와 추가 정상 행동 데이터를 기반으로 구도별 일반화 성능을 향상시키기 위한 모델 고도화를 지속적으로 진행 중입니다.'
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
        'React 기반 관리자 대시보드 · 카메라 등록 · 감지 이미지 저장/조회 UI/UX 개발',
        'CCTV 모니터링 UI 안정화 및 감지 이벤트 팝업·저장 기능 설계',
        'MediaPipe Pose 기반 전도 감지 Feature Engineering 파이프라인 구축',
        '폴더 기반 데이터 분할로 발생하던 데이터 누수 문제를 영상 단위 GroupKFold 방식으로 재설계',
        '전도·정상 데이터 비율 불균형 문제에 대해 class_weight 조정 및 정상 행동데이터 확장 전략을 수립',
        'Feature Fusion + Bi-LSTM + Attention 기반 전도 감지 모델을 실시간 적용 가능한 형태로 구성'
      ]
    },
    
    links: {
      github: 'https://github.com/tangerineTaste/Anomaly-detection',
      youtube: 'https://www.youtube.com/@yshin_projects',
      demo: 'http://3.26.220.160:3000'
    },
    
    // CCTV 유튜브 영상
    demoVideoPC: videoCctvPC,
    demoVideoMobile: videoCctvMobile,
  },
  {
    id: 2,
    slug: 'ai-chatbot-assistant',
    title: '지능형 금융상담 챗봇 및 금융상품 추천 AI 시스템',
    subtitle: 'RAG-Based Personalized Financial Consulting Platform',
    shortDescription: '5개 금융상품 다중출력 모델 평균 Accuracy 87.6%',
    heroImage: mockupImage1,
    
    overview: {
      duration: '2024.07 - 2024.08 (5주)',
      role: '데이터 수집&정제, ML 모델링, Django 웹 구현 (40% 기여)',
      team: '4명',
      description: '사용자의 금융 성향과 개인 정보를 기반으로 맞춤형 금융상품을 추천하고, RAG 기반 금융 상담 챗봇으로 다양한 금융·법률 정보를 제공하는 AI 금융 플랫폼입니다. 회원가입·상품 추천·뉴스 수집·공지사항·법률 문서 검색 기능을 통합한 웹 서비스로, Django 기반의 구조 설계와 프론트엔드 UI 개발을 담당했습니다. 또한 LightGBM·XGBoost 기반 금융상품 보유 여부 예측 모델을 개발하고, 데이터 전처리·EDA·모델링 전체 파이프라인을 주도했습니다.'
    },
    
    challenge: {
      title: 'Challenge',
      description: '22,975건의 금융 데이터는 각 금융상품의 보유 비율이 크게 달라 심한 클래스 불균형 문제가 존재했고, 5개의 금융상품을 동시에 예측해야 하는 다중출력 구조로 인해 각 타깃의 패턴을 안정적으로 학습시키기 어려웠습니다. 또한 Django에서 회원가입, 로그인, 추천 결과, 상품 상세 페이지 등 여러 기능을 자연스럽게 연결하는 UI 흐름을 구성해야 했으며, 다양한 사용자 입력을 기반으로 예측 결과를 안정적으로 전달하는 웹 구조 설계가 필요했습니다.'
    },
    
    solution: {
      title: 'Solution',
      description: '클래스 불균형 문제를 해결하기 위해 class_weight="balanced"를 적용하고, MultiOutputClassifier와 LightGBM·XGBoost 조합으로 5개 금융상품을 동시에 예측하는 모델을 설계했습니다. EDA를 통해 노이즈 변수를 정리하고 교육수준·연령대·위험성향 등 11개의 핵심 특성을 선별해 모델 효율성과 성능을 향상시켰습니다. Django 기반에서는 회원 인증, 추천 결과 페이지, 상품 상세 페이지, 공지사항 등 주요 기능을 개발하고 Bootstrap과 Chart.js를 활용해 사용자 친화적인 UI/UX를 구현했으며, 팀원들의 기능을 통합하여 전체 서비스 흐름을 안정적으로 구성했습니다.'
    },
    
    techStack: {
      frontend: ['Django Templates', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Chart.js'],
      backend: ['Python 3.10', 'Django 5.2', 'Flask 3.1', 'LangChain', 'Pinecone', 'SQLite', 'OpenAI GPT-4o-mini', 'Upstage Embeddings', 'Cohere', 'LightGBM', 'XGBoost', 'scikit-learn', 'Pandas', 'NumPy'],
      deployment: ['AWS EC2', 'Git']
    },
    
    features: [
      {
        title: 'Django 웹 애플리케이션 개발 및 배포',
        description: 'Django 기반 웹 기획, 설계 및 UI/UX 디자인 담당. 5개 앱 구조 설계(accounts, home, product_recommendation, customer_support, chatbot). 사용자 인증 및 세션 관리 시스템 구현. AWS EC2 환경에서 웹 애플리케이션 배포 완료. 네이버 뉴스 API 연동 10개 카테고리 자동 분류 및 금융감독원 API 6개 카테고리 실시간 금융상품 데이터 수집 시스템 구축.',
        image: keyfeatureImage3
      },
      {
        title: '금융상품 보유 예측',
        description: 'MultiOutputClassifier를 통한 5개 금융상품(MMMF, CDS, NMMF, STOCKS, RETQLIQ) 동시 예측 구현. 11개 특성 변수(교육수준분류, 연령대분류, 금융위험감수, 금융위험회피, 저축여부, 급여소득, 연령, 가구주성별, 결혼상태, 자녀수, 직업분류1)를 활용한 예측 시스템 구축.',
        image: keyfeatureImage1
      },
      {
        title: '비회원 금융상품 간편 추천',
        description: '비회원도 자연어로 자신의 상황을 입력하기만 하면 즉시 금융상품 추천을 받을 수 있는 간편 추천 페이지입니다. 제공된 예시를 클릭하면 자동으로 입력창이 채워져 누구나 쉽게 사용할 수 있으며, 로그인 없이도 AI 추천 결과를 시각화된 형태로 확인할 수 있어 서비스 접근성과 편의성을 크게 높였습니다.',
        image: keyfeatureImage2
      },
    ],
    
    results: {
      title: 'Results',
      achievements: [
        '22,975건 금융 데이터 기반 5개 금융상품 다중출력 추천 모델 개발',
        'LightGBM·XGBoost 기반 모델링 및 클래스 불균형 개선(class_weight 적용)',
        'Django 기반 회원가입·로그인·추천결과·상품 상세·공지사항 UI 직접 구현',
        '팀원 페이지와 백엔드 로직을 통합하여 웹 전체 서비스 흐름 안정화',
        'AWS EC2 클라우드 배포 성공'
      ]
    },
    
    links: {
      github: 'https://github.com/tangerineTaste/CodeDoc',
      youtube: 'https://www.youtube.com/@yshin_projects',
      demo: 'http://3.39.48.77:8000'
    },
    
    // 금융 챗봇 유튜브 영상
    demoVideoId: videoFinancial,
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
      description: '장마철 침수 위험을 예측하여 사용자에게 지역별 위험도를 시각적으로 제공하는 AI 기반 웹 서비스입니다. 랜덤포레스트·XGBoost·LightGBM·CatBoost 모델을 활용해 침수 위험을 계산하고, Flask 기반 웹 애플리케이션으로 예측 결과와 기상 데이터를 실시간으로 제공합니다. 이 프로젝트에서 저는 UI/UX 설계, Flask 기반 웹 서비스 개발, 예측 결과 시각화, 페이지 구조 설계를 중심으로 기여했습니다.'
    },
    
    challenge: {
      title: 'Challenge',
      description: '침수 위험 예측 결과를 사용자에게 직관적으로 전달하기 위해 대용량 기상 데이터를 기반으로 생성된 예측 값을 빠르게 받아와 표시해야 했습니다. Flask 환경에서 여러 페이지와 API를 연결하여 날짜·지역 선택 → 모델 선택 → 예측 요청 → 시각화 결과 표시까지의 흐름을 안정적으로 구성하는 것이 필요했습니다. 또한 지역별 위험 수준을 한눈에 파악할 수 있도록 그래프, 표, 색상 등을 활용한 시각적 UI 설계가 중요한 과제였습니다.'
    },
    
    solution: {
      title: 'Solution',
      description: 'Flask 기반으로 입력값을 전달받아 예측 결과를 반환하는 REST API를 설계하고, 선택된 지역·날짜·모델에 따라 즉시 응답하도록 웹 구조를 최적화했습니다. Chart.js를 활용해 지역별 침수 위험도를 그래프와 표로 시각화하여 사용자가 데이터를 직관적으로 확인할 수 있도록 구현했습니다. 또한 전체 UI/UX 흐름을 재구성하여 예측 페이지, 뉴스 페이지, 회원 기능, 모델 선택 UI 등 다양한 화면을 사용자 친화적으로 설계하고, 서비스 전체를 안정적으로 동작하도록 페이지를 통합했습니다.'
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
        'Flask 기반 실시간 침수 위험 예측 웹 인터페이스 구축',
        'Chart.js 기반 시각화로 지역별 위험도 그래프·표 UI 개발',
        '날짜·지역·모델 선택 기능을 포함한 사용자 중심 인터페이스 설계',
        '12개 Flask API를 연동해 데이터 호출·전달 구조 안정화',
        '예측 페이지·뉴스 페이지·회원 기능 등 전체 페이지 UI/UX 개발 및 통합'
      ]
    },
    
    links: {
      github: 'https://github.com/SeohuiJeong0420/crew_soom',
      youtube: 'https://www.youtube.com/@yshin_projects',
      // demo: '#'
    },
    
    // 침수 예측 유튜브 영상
    demoVideoId: videoFlood,
  }
];