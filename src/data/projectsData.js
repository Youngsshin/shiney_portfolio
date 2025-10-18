// src/assets/projectsData.js
import mockupImage1 from '../assets/Images/projects_mockup_01.png';
import keyfeatureImage1 from '../assets/Images/Key_Features_img_01.png';
import keyfeatureImage2 from '../assets/Images/Key_Features_img_02.png';
import keyfeatureImage3 from '../assets/Images/Key_Features_img_03.png';
import demoVideo1 from '../assets/videos/금융챗봇금융서비스.mp4';

import mockupImage2 from '../assets/Images/projects_mockup_02.png';
import keyfeature2Image1 from '../assets/Images/Key_Features_img2_06.png';
import keyfeature2Image2 from '../assets/Images/Key_Features_img2_11.png';
import keyfeature2Image3 from '../assets/Images/Key_Features_img2_12.png';
import demoVideo2 from '../assets/videos/장마철침수위험예측시스템.mp4';

import mockupImage3 from '../assets/Images/projects_mockup_03.png';

export const projectsData = [
  {
    id: 1,
    slug: 'ai-chatbot-assistant',
    title: '지능형 금융상담 챗봇 및 금융상품 추천 AI 시스템',
    subtitle: 'RAG-Based Personalized Financial Consulting Platform',
    shortDescription: 'LightGBM 87.6% 정확도 달성, 22,975건 금융 데이터 처리',
    heroImage: mockupImage1,
    
    overview: {
      duration: '2024.07 - 2024.08 (5주)',
      role: '데이터 수집&정제, ML 모델링, Django 웹 구현 (40% 기여)',
      team: '4명',
      description: '미국 연준 소비자 금융 조사(SCF) 데이터 22,975건을 수집 및 전처리하여 LightGBM과 XGBoost 모델을 개발했습니다. LightGBM 모델은 정확도 87.6%, F1-score 71.7%를 달성했으며, MultiOutputClassifier를 통해 5개 금융상품 다중 출력 분류를 구현했습니다. Django 기반 5개 앱 구조를 설계하고 AWS EC2에 배포했습니다.'
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
        title: 'LightGBM 기반 금융상품 보유 예측',
        description: 'LightGBM 모델 개발: 정확도 87.6%, F1-score 71.7%, Precision 67.1%, Recall 74.1% 달성. MultiOutputClassifier를 통한 5개 금융상품(MMMF, CDS, NMMF, STOCKS, RETQLIQ) 동시 예측 구현. 11개 특성 변수(교육수준분류, 연령대분류, 금융위험감수, 금융위험회피, 저축여부, 급여소득, 연령, 가구주성별, 결혼상태, 자녀수, 직업분류1)를 활용한 예측 시스템 구축.',
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
    id: 2,
    slug: 'ai-image-generator',
    title: '장마철 침수 위험 예측 시스템',
    subtitle: '4가지 AI 모델 앙상블 기반 침수 예측 시스템',
    shortDescription: 'Flask 기반 실시간 기상 데이터 분석 및 침수 위험 예측',
    heroImage: mockupImage2,
    
    overview: {
      duration: '2024.07 - 2024.07 (2주)',
      role: 'Flask 웹 개발, UI/UX 디자인 (30% 기여)',
      team: '4명',
      description: '기상청 ASOS 데이터 약 227,000개를 활용하여 4가지 머신러닝 모델(Random Forest, XGBoost, LightGBM, CatBoost) 앙상블 기반 침수 위험 예측 시스템을 개발했습니다. Flask 기반 웹 애플리케이션으로 실시간 지역별 침수 위험도를 분석하고, 6개 페이지와 12개 API를 통해 사용자 친화적인 재난 예방 서비스를 제공합니다.'
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
        description: 'Flask 기반 12개 RESTful API를 통한 효율적인 데이터 통신 구조 구축. Chart.js를 활용한 실시간 데이터 시각화로 지역별 침수 위험도를 직관적으로 표현. 6개 페이지로 구성된 사용자 친화적 인터페이스 제공: 메인 대시보드, 지역별 분석, 과거 데이터 조회, 알림 설정, 통계 리포트, 관리자 페이지.',
        image: keyfeature2Image2
      },
      {
        title: 'Flask 웹 애플리케이션 개발',
        description: 'Flask 프레임워크를 활용한 경량화된 웹 애플리케이션 아키텍처 설계. UI/UX 디자인 및 반응형 웹 인터페이스 구현으로 모바일 환경 지원. 기상 데이터 수집 자동화 시스템 구축 및 데이터 전처리 파이프라인 구현. 사용자 알림 기능 및 침수 위험 지역 시각화 지도 서비스 제공.',
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
  },
  
  {
    id: 3,
    slug: 'ml-data-analyzer',
    title: '불량인간 판별 시스템',
    subtitle: 'Python 머신러닝 기반 이상행동 감지 시스템',
    shortDescription: 'CCTV 영상 분석을 통한 실시간 이상행동 탐지',
    heroImage: mockupImage3,
    
    overview: {
      duration: '2024.06 - 2024.06 (3주)',
      role: '데이터 분석, ML 모델링, 시스템 설계 (50% 기여)',
      team: '3명',
      description: 'Python 머신러닝 기술을 활용하여 CCTV 영상에서 이상행동을 실시간으로 감지하는 시스템을 개발했습니다. scikit-learn 라이브러리를 활용한 분류 모델 구축과 OpenCV를 통한 영상 처리 기술을 결합하여, 매장 내 절도나 폭력 등의 이상행동을 자동으로 탐지하고 관리자에게 즉시 알림을 전송하는 시스템을 구현했습니다.'
    },
    
    challenge: {
      title: 'Challenge',
      description: 'CCTV 영상 데이터의 실시간 처리와 정확한 이상행동 판별이 핵심 과제였습니다. 정상 행동과 이상 행동을 구분하는 명확한 기준 설정의 어려움과 다양한 환경(조명, 각도, 인원 수)에서도 안정적으로 작동하는 모델 개발이 필요했습니다. 또한 실시간 처리 속도와 정확도 간의 균형을 맞추는 것이 중요한 과제였습니다.'
    },
    
    solution: {
      title: 'Solution',
      description: 'OpenCV를 활용한 영상 전처리 파이프라인을 구축하여 다양한 환경에서 안정적인 데이터 추출을 구현했습니다. scikit-learn의 Random Forest와 SVM 모델을 결합한 앙상블 기법으로 정확도를 향상시켰습니다. 행동 패턴 분석을 위한 특징 추출(feature extraction) 알고리즘을 개발하고, 실시간 알림 시스템을 구축하여 관리자가 즉시 대응할 수 있도록 했습니다.'
    },
    
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      backend: ['Python 3.10', 'OpenCV', 'scikit-learn', 'NumPy', 'Pandas', 'Flask'],
      deployment: ['Local Server', 'Git']
    },
    
    features: [
      {
        title: '실시간 이상행동 감지 모델',
        description: 'OpenCV를 활용한 CCTV 영상 실시간 처리 및 분석 시스템 구축. scikit-learn의 Random Forest와 SVM 모델을 앙상블하여 이상행동 분류 정확도 향상. 행동 패턴 분석을 위한 특징 추출 알고리즘 개발: 움직임 속도, 방향, 체류 시간, 자세 등 다차원 특성 분석.',
        image: keyfeature2Image1
      },
      {
        title: '관리자 알림 시스템',
        description: '이상행동 감지 시 관리자에게 실시간 알림 전송 기능 구현. 감지된 이벤트의 스크린샷 자동 저장 및 타임스탬프 기록. Flask 기반 관리자 대시보드 구축으로 실시간 모니터링 및 과거 이벤트 조회 가능. 알림 민감도 조절 기능으로 오탐지 최소화.',
        image: keyfeature2Image2
      },
      {
        title: '데이터 분석 및 시각화',
        description: 'Pandas를 활용한 이상행동 패턴 통계 분석 및 리포트 생성. 시간대별, 요일별 이상행동 발생 빈도 분석 그래프 제공. 머신러닝 모델 성능 지표(정확도, 재현율, F1-score) 실시간 모니터링. 다양한 환경 조건에서의 모델 성능 테스트 및 최적화.',
        image: keyfeature2Image3
      }
    ],
    
    results: {
      title: 'Results',
      achievements: [
        '실시간 CCTV 영상 분석 시스템 성공적 구축',
        '앙상블 모델을 통한 이상행동 감지 정확도 향상',
        '관리자 알림 시스템 및 대시보드 완성',
        '다양한 환경에서 안정적으로 작동하는 시스템 구현'
      ]
    },
    
    links: {
      github: '#',
      youtube: 'https://www.youtube.com/@yshin_projects',
      demo: '#'
    },
    
    demoVideo: demoVideo2
  }
];