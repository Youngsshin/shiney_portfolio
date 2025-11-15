import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import mockupImage1 from '../../assets/Images/projects_mockup_01.png';
import mockupImage2 from '../../assets/Images/projects_mockup_02.png';
import mockupImage3 from '../../assets/Images/projects_mockup_03.png';
import mainIcon0 from '../../assets/Images/main_icon_0.svg';
import mainIcon2 from '../../assets/Images/main_icon_2.svg';
import mainIcon3 from '../../assets/Images/main_icon_3.svg';
import mainIconA from '../../assets/Images/main_icon_A.svg';
import mainIconI from '../../assets/Images/main_icon_I.svg';
import mainIconY from '../../assets/Images/main_icon_Y.svg';
import mainIconS from '../../assets/Images/main_icon_S.svg';
import './home.css';
// import Chatbot from "../../components/Chatbot";

function Home() {
  const navigate = useNavigate();
  const horizontalScrollHandlerRef = useRef(null);

  const handleProjectClick = (projectSlug) => {
    // ✅ wheel 이벤트 제거 (남아있을 경우)
    if (horizontalScrollHandlerRef.current) {
      window.removeEventListener('wheel', horizontalScrollHandlerRef.current);
    }

    // ✅ 스크롤 복구
    document.body.style.overflow = '';
    document.body.style.overflowY = '';
    document.documentElement.style.overflow = '';

    sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
    navigate(`/project/${projectSlug}`);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    // 🔥 모바일 체크
    const isMobile = window.innerWidth <= 1024;

    // 페이지 진입 시 스크롤 복구
    document.body.style.overflow = '';
    document.body.style.overflowY = '';
    document.documentElement.style.overflow = '';

    const savedScrollPosition = sessionStorage.getItem('homeScrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      sessionStorage.removeItem('homeScrollPosition');
    }

    let isInHorizontalMode = false;
    let currentBoxIndex = 0;
    let currentX = 0;
    const scrollSensitivity = 3;

    const boxPositions = [0, -950, -1340];

    function updateBoxIndex() {
      if (currentX >= -475) currentBoxIndex = 0;
      else if (currentX >= -1175) currentBoxIndex = 1;
      else currentBoxIndex = 2;
    }

    function moveToBox(targetIndex) {
      if (targetIndex < 0 || targetIndex > 2) return;
      if (targetIndex === currentBoxIndex) return;
      currentBoxIndex = targetIndex;
      const container = document.getElementById('boxContainer');
      if (container)
        container.style.transform = `translateX(${boxPositions[currentBoxIndex]}px)`;
    }

    function handleHorizontalScroll(event) {
      event.preventDefault();
      const container = document.getElementById('boxContainer');
      if (!container) return;

      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
      const scrollAmount = Math.abs(event.deltaY) / scrollSensitivity;

      if (scrollDirection === 'down')
        currentX = Math.max(currentX - scrollAmount, -1340);
      else currentX = Math.min(currentX + scrollAmount, 0);

      updateBoxIndex();
      container.style.transform = `translateX(${currentX}px)`;

      if (currentX >= -10 && scrollDirection === 'up') {
        exitHorizontalMode();
        return;
      }

      if (currentX <= -1340 && scrollDirection === 'down') {
        exitHorizontalMode();
        let scrollAmount = 0;
        const targetScroll = 2;
        const autoScrollInterval = setInterval(() => {
          scrollAmount += 1;
          window.scrollBy(0, 1);
          if (scrollAmount >= targetScroll) clearInterval(autoScrollInterval);
        }, 16);
        return;
      }
    }

    // ✅ 핸들러를 ref에 저장
    horizontalScrollHandlerRef.current = handleHorizontalScroll;

    function enterHorizontalMode() {
      if (isInHorizontalMode) return;
      const container = document.getElementById('boxContainer');
      if (!container) return;

      isInHorizontalMode = true;
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', horizontalScrollHandlerRef.current, {
        passive: false,
      });
    }

    function exitHorizontalMode() {
      if (!isInHorizontalMode) return;
      isInHorizontalMode = false;
      document.body.style.overflow = '';
      if (horizontalScrollHandlerRef.current) {
        window.removeEventListener('wheel', horizontalScrollHandlerRef.current);
      }
    }

    function handleAboutAnimation() {
      const aboutSection = document.querySelector('.about-section');
      if (!aboutSection) return;
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight - 200) {
        aboutSection.classList.add('slide-up-active');
      }
    }

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash === '#projects') {
        setTimeout(() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 100);
      }
    };

    // ------------------ Hero Mouse Effect ------------------
    let balloonShapes = [];
    let isMouseInHero = false;
    let shapeId = 0;
    let lastCreateTime = 0;
    let shapeCreationCount = 0;
    const maxShapes = 5;
    const shapes = [
      mainIcon0,
      mainIcon2,
      mainIcon3,
      mainIconA,
      mainIconI,
      mainIconY,
      mainIconS,
    ];

    function removeBalloonShape(balloonObj) {
      if (!balloonObj || !balloonObj.element) return;
      balloonObj.element.style.transition =
        'opacity 0.2s ease-out, transform 0.2s ease-out';
      balloonObj.element.style.opacity = '0';
      balloonObj.element.style.transform =
        'translate(-50%, -50%) scale(0.98)';
      setTimeout(() => {
        if (balloonObj.element && balloonObj.element.parentNode) {
          balloonObj.element.parentNode.removeChild(balloonObj.element);
        }
      }, 200);
    }

    function createShapesContainer() {
      const hero = document.querySelector('.hero');
      if (!hero || hero.querySelector('.hero-shapes-container')) return;
      const container = document.createElement('div');
      container.className = 'hero-shapes-container';
      hero.appendChild(container);
    }

    function createBalloonShape(x, y) {
      if (balloonShapes.length >= maxShapes) {
        const oldest = balloonShapes.shift();
        removeBalloonShape(oldest);
      }
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      const size = Math.random() * 60 + 120;
      const container = document.querySelector('.hero-shapes-container');
      if (!container) return;

      const balloonWrapper = document.createElement('div');
      balloonWrapper.className = 'balloon-shape-wrapper';
      if (balloonShapes.length === 0) {
        balloonWrapper.classList.add('initial'); // 초기 이미지에 클래스 추가
      }
      balloonWrapper.id = `balloon-shape-${shapeId++}`;
      Object.assign(balloonWrapper.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        transform: 'translate(-50%, -50%) scale(0.9)',
        transition:
          'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
        opacity: '0',
        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))',
      });

      const img = document.createElement('img');
      img.src = randomShape;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      balloonWrapper.appendChild(img);
      container.appendChild(balloonWrapper);

      const balloonObj = { element: balloonWrapper, createdAt: Date.now(), x, y };
      balloonShapes.push(balloonObj);
      shapeCreationCount++;

      setTimeout(() => {
        balloonWrapper.style.opacity = '0.9';
        balloonWrapper.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 10);
    }

    function animateBalloons() {
      const now = Date.now();
      balloonShapes = balloonShapes.filter((balloonObj) => {
        if (now - balloonObj.createdAt > 1200) {
          removeBalloonShape(balloonObj);
          return false;
        }
        return true;
      });
      if (isMouseInHero || balloonShapes.length > 0) {
        requestAnimationFrame(animateBalloons);
      }
    }

    const heroMouseMoveHandler = (e) => {
      if (!isMouseInHero) return;
      const now = Date.now();
      if (now - lastCreateTime < 50) return;
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const heroRect = hero.getBoundingClientRect();
      const relativeY = e.clientY - heroRect.top;
      if (relativeY > heroRect.height - 200) return;

      if (Math.random() < (shapeCreationCount < 5 ? 1.0 : 0.3)) {
        createBalloonShape(e.clientX, e.clientY);
        lastCreateTime = now;
        if (balloonShapes.length === 1) animateBalloons();
      }
    };

    const heroMouseEnterHandler = () => {
      isMouseInHero = true;
    };
    const heroMouseLeaveHandler = () => {
      isMouseInHero = false;
    };

    // ✅ 이미지 즉시 렌더링 및 비동기 프리로드
    function initHeroShapeEffect() {
      if (window.innerWidth <= 768) return;
      const hero = document.querySelector('.hero');
      if (!hero) return;

      // 즉시 컨테이너 생성 및 초기 이미지 생성
      createShapesContainer();
      const heroRect = hero.getBoundingClientRect();
      const centerX = heroRect.width / 2;
      const centerY = heroRect.height / 2;
      createBalloonShape(centerX, centerY - 100); // 초기 이미지 즉시 생성
      animateBalloons();

      // 마우스 이벤트 핸들러 즉시 추가
      hero.addEventListener('mousemove', heroMouseMoveHandler);
      hero.addEventListener('mouseenter', heroMouseEnterHandler);
      hero.addEventListener('mouseleave', heroMouseLeaveHandler);

      // 이미지 비동기 프리로드
      shapes.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`Loaded: ${src}`);
        img.onerror = () => console.error(`Failed to load: ${src}`);
      });
    }

    function cleanupHeroShapeEffect() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      hero.removeEventListener('mousemove', heroMouseMoveHandler);
      hero.removeEventListener('mouseenter', heroMouseEnterHandler);
      hero.removeEventListener('mouseleave', heroMouseLeaveHandler);
      balloonShapes.forEach(removeBalloonShape);
      const container = hero.querySelector('.hero-shapes-container');
      if (container) container.remove();
    }

    // 초기화
    initHeroShapeEffect();

    // 🔥 데스크탑에서만 가로 스크롤 이벤트 등록
    if (!isMobile) {
      const scrollSection = document.getElementById('horizontal-scroll');
      if (scrollSection) {
        scrollSection.addEventListener('mouseenter', enterHorizontalMode);
        scrollSection.addEventListener('mouseleave', exitHorizontalMode);
      }

      const keydownHandler = (e) => {
        if (!isInHorizontalMode) return;
        if (e.key === 'ArrowRight') moveToBox(currentBoxIndex + 1);
        else if (e.key === 'ArrowLeft') moveToBox(currentBoxIndex - 1);
      };
      document.addEventListener('keydown', keydownHandler);

      // cleanup에도 추가
      var cleanupKeydown = () => {
        document.removeEventListener('keydown', keydownHandler);
      };
    }

    window.addEventListener('scroll', handleAboutAnimation);
    handleAboutAnimation();
    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('scroll', handleAboutAnimation);
      if (!isMobile && typeof cleanupKeydown === 'function') {
        cleanupKeydown();
      }
      if (horizontalScrollHandlerRef.current) {
        window.removeEventListener('wheel', horizontalScrollHandlerRef.current);
      }
      document.body.style.overflow = '';
      document.body.style.overflowY = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('hashchange', handleHashScroll);
      cleanupHeroShapeEffect();
    };
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="hero">
        <h1 className="hero-title">SHINEY</h1>
        <div className="hero-description">
          Learning, building, <br />
          and growing with every line of code.
        </div>
        <div className="hero-footer">
          <div className="hero-studio" onClick={scrollToProjects}>
            View Projects <span className="material-icons">arrow_forward</span>
          </div>
          <div className="hero-scroll">(SCROLL)</div>
        </div>
      </section>

      <section className="about-section slide-up-element">
        <div className="about-container">
          <div className="about-top">
            <div className="about-arrow">
              <span className="material-icons">arrow_forward</span>
            </div>

            <div className="about-text_all">
              <h2 className="about-title">
                Starting as a developer, ready to collaborate
                <br />
                and create value through learning
              </h2>
              <div className="about-bottom">
                <div className="about-left">
                  <div className="about-label">[About me]</div>
                </div>

                <div className="about-right">
                  <div className="about-text">
                    3년간 웹퍼블리셔로 일하며 디자인과 코드 작업을 직접 해왔습니다.
                    화면을 만드는 과정에서 작은 움직임 하나가 사용자에게 특별한 경험이 될 수 있다는 것을 배웠습니다.
                    이제는 화면 작업을 넘어, 실제 기능과 데이터를 다루는 개발자로 성장하고자 합니다.<br/><br/>
                    디자인 감각과 UI/UX에 대한 이해를 바탕으로,
                    사용자가 편리하게 쓸 수 있는 서비스를 만들 수 있습니다.
                    이런 경험을 살려 프론트엔드와 백엔드 개발 능력을 키우며,
                    완성도 높은 서비스를 만드는 것이 목표입니다.<br/><br/>
                    다양한 요청과 기술적 문제에 유연하게 대응할 수 있는
                    개발자가 되고자 합니다.
                    앞으로도 더 나은 코드를 만들기 위해
                    끊임없이 배우고 도전하며, 성장하는
                    개발자가 되고 싶습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h2 className="projects-title">PROJECTS</h2>
          <p className="hero-scroll projects-scroll">(SCROLL)</p>
        </div>

        <section className="scroll-section" id="horizontal-scroll">
          <div className="box-container" id="boxContainer">
            <div
              className="box box-1"
              onClick={() => handleProjectClick('cctv-anomaly-detection')}
              style={{ backgroundImage: `url(${mockupImage3})` }}
            >
              <div className="box-content">
                <h2 className="box-title">이상행동 감지 시스템</h2>
                <p className="box-description">
                  CCTV 영상을 실시간 분석하여 매장 내 이상행동을 감지하고 관리자에게 알림을 제공하는 감지 시스템을 개발했습니다.
                </p>
              </div>
            </div>
            <div
              className="box box-2"
              onClick={() => handleProjectClick('ai-chatbot-assistant')}
              style={{ backgroundImage: `url(${mockupImage1})` }}
            >
              <div className="box-content">
                <h2 className="box-title">금융 상담 챗봇 및 금융상품 추천 AI 시스템</h2>
                <p className="box-description">
                  개인 맞춤형 AI 금융 상담 플랫폼 구축을 통한 최적의 금융상품 추천 및 금융정보 서비스를 제공하는 시스템을 개발했습니다.
                </p>
              </div>
            </div>

            <div
              className="box box-3"
              onClick={() => handleProjectClick('ai-image-generator')}
              style={{ backgroundImage: `url(${mockupImage2})` }}
            >
              <div className="box-content">
                <h2 className="box-title">장마철 침수 위험 예측 시스템</h2>
                <p className="box-description">
                  4가지 AI 모델 앙상블 기반 침수 예측 시스템 구축을 통한 실시간 지역별 침수 위험도 분석 및 재난 예방 서비스를 제공하는 플랫폼을 개발했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="large-box-section">
        <div className="large-box">
          <div className="large-box-content">
            <p className="large-box-main-text">
              I'm passionate about turning data into meaningful insights. 
              As a beginning AI developer, I approach every project as an opportunity to learn, grow, and create solutions that make a real difference.
              My goal is simple: build smart systems that solve actual problems.
            </p>
          </div>
          <div className="sliding-text-container">
            <div className="sliding-text">
              <span>
                Machine Learning · Python · Data Analysis · TensorFlow · PyTorch · NLP · Computer Vision · Pandas · Scikit-learn · Model Deployment · Deep Learning · SQL · Jupyter · Machine Learning · Python · Data Analysis · TensorFlow · PyTorch · NLP · Computer Vision · Pandas · Scikit-learn · Model Deployment · Deep Learning · SQL · Jupyter ·
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="contact-title">Work with us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h4>CONTACT US</h4>
            <p>
              <span className="contact-label">E</span>
              <a href="mailto:youngsshin0917@gmail.com">youngsshin0917@gmail.com</a>
            </p>
            <p>
              <span className="contact-label">T</span>010-7387-8357
            </p>
          </div>
          <div className="contact-info">
            <h4>SOCIALS</h4>
            <p>
              <a href="https://github.com/youngsshin" target='_blank'>Github</a>
            </p>
            {/* <p>
              <a href="#">LinkedIn</a>
            </p> */}
          </div>
        </div>
      </section>

      {/* 💬 챗봇 추가 */}
      {/* <Chatbot /> */}
    </motion.div>
  );
}

export default Home;