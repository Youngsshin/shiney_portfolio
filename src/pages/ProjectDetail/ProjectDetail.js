import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import CheckSquareIcon from '../../components/icons/CheckSquareIcon';
import './ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [activeVideoTab, setActiveVideoTab] = useState('pc');
  const heroImageRef = useRef(null);

  const sectionRefs = {
    overview: useRef(null),
    challenge: useRef(null),
    solution: useRef(null),
    techstack: useRef(null),
    features: useRef(null),
    demo: useRef(null),
    links: useRef(null),
    results: useRef(null)
  };

  useEffect(() => {
    // 스크롤 강제 복구 - 최우선
    document.body.style.overflow = '';
    document.body.style.overflowY = '';
    document.documentElement.style.overflow = '';
    document.documentElement.style.overflowY = '';
    
    // 모든 wheel 이벤트 리스너 제거
    const events = ['wheel', 'mousewheel', 'DOMMouseScroll'];
    events.forEach(event => {
      window.removeEventListener(event, () => {}, { passive: false });
    });
    
    window.scrollTo(0, 0);
    
    const foundProject = projectsData.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [project]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        const translateValue = scrollY * 0.3;
        heroImageRef.current.style.transform = `translateY(${translateValue}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [project]);

  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return (
      <div className="project-detail-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <button onClick={() => navigate('/')} className="back-button">
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="project-hero-title">{project.title}</h1>
          <p className="hero-subtitle">{project.subtitle}</p>
        </div>
        <div className="hero-image-container">
          <img 
            ref={heroImageRef}
            src={project.heroImage} 
            alt={project.title} 
            className="hero-main-image" 
          />
        </div>
      </div>

      <div className="project-layout">
        {/* 왼쪽 네비게이션 */}
        <nav className="project-nav">
          <div className="project-nav-sticky">
            <ul className="project-nav-list">
              <li 
                className={activeSection === 'overview' ? 'active' : ''}
                onClick={() => scrollToSection('overview')}
              >
                Overview
              </li>
              <li 
                className={activeSection === 'challenge' ? 'active' : ''}
                onClick={() => scrollToSection('challenge')}
              >
                Challenge
              </li>
              <li 
                className={activeSection === 'solution' ? 'active' : ''}
                onClick={() => scrollToSection('solution')}
              >
                Solution
              </li>
              <li 
                className={activeSection === 'techstack' ? 'active' : ''}
                onClick={() => scrollToSection('techstack')}
              >
                Tech Stack
              </li>
              <li 
                className={activeSection === 'features' ? 'active' : ''}
                onClick={() => scrollToSection('features')}
              >
                Features
              </li>
              <li 
                className={activeSection === 'demo' ? 'active' : ''}
                onClick={() => scrollToSection('demo')}
              >
                Demo
              </li>
              <li 
                className={activeSection === 'links' ? 'active' : ''}
                onClick={() => scrollToSection('links')}
              >
                Links
              </li>
              <li 
                className={activeSection === 'results' ? 'active' : ''}
                onClick={() => scrollToSection('results')}
              >
                Results
              </li>
            </ul>
          </div>
        </nav>

        {/* 오른쪽 콘텐츠 */}
        <main className="project-content">
          {/* Overview Section */}
          <section id="overview" ref={sectionRefs.overview} className="content-section">
            <div className="meta-info">
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{project.overview.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.overview.role}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Team</span>
                <span className="meta-value">{project.overview.team}</span>
              </div>
            </div>
            <p className="description">{project.overview.description}</p>
          </section>

          {/* Challenge Section */}
          <section id="challenge" ref={sectionRefs.challenge} className="content-section">
            <h2 className="section-title">{project.challenge.title}</h2>
            <p className="section-text">{project.challenge.description}</p>
          </section>

          {/* Solution Section */}
          <section id="solution" ref={sectionRefs.solution} className="content-section">
            <h2 className="section-title">{project.solution.title}</h2>
            <p className="section-text">{project.solution.description}</p>
          </section>

          {/* Tech Stack Section */}
          <section id="techstack" ref={sectionRefs.techstack} className="content-section">
            <h2 className="section-title">Tech Stack</h2>
            <div className="tech-list">
              <div className="tech-group">
                <h3>Frontend</h3>
                <ul>
                  {project.techStack.frontend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-group">
                <h3>Backend</h3>
                <ul>
                  {project.techStack.backend.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-group">
                <h3>Deployment</h3>
                <ul>
                  {project.techStack.deployment.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" ref={sectionRefs.features} className="content-section">
            <h2 className="section-title">Key Features</h2>
            <div className="features-list">
              {project.features.map((feature, index) => (
                <div key={index} className="feature">
                  <img src={feature.image} alt={feature.title} className="feature-image" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Demo Section */}
          <section id="demo" ref={sectionRefs.demo} className="content-section">
            <h2 className="section-title">Demo Video</h2>
            
            {/* Video Tabs - cctv-anomaly-detection 프로젝트에서만 표시 */}
            {project.slug === 'cctv-anomaly-detection' && (
              <div className="video-tabs">
                <button 
                  className={`video-tab ${activeVideoTab === 'pc' ? 'active' : ''}`}
                  onClick={() => setActiveVideoTab('pc')}
                >
                  PC Version
                </button>
                <button 
                  className={`video-tab ${activeVideoTab === 'mobile' ? 'active' : ''}`}
                  onClick={() => setActiveVideoTab('mobile')}
                >
                  Mobile Version
                </button>
              </div>
            )}

            <div className="demo-video-container">
              {project.slug === 'cctv-anomaly-detection' ? (
                <iframe
                  key={activeVideoTab}
                  width="100%"
                  height="600"
                  src={`https://www.youtube.com/embed/${
                    activeVideoTab === "pc" ? project.demoVideoPC : project.demoVideoMobile
                  }?start=0&rel=0&controls=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="demo-video"
                />
              ) : (
                <iframe
                  width="100%"
                  height="600"
                  src={`https://www.youtube.com/embed/${project.demoVideoId}?start=0&rel=0&controls=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="demo-video"
                />
              )}
            </div>
          </section>

          {/* Links Section */}
          <section id="links" ref={sectionRefs.links} className="content-section">
            <h2 className="section-title">Project Links</h2>
            <div className="links-container">
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>GitHub Repository</span>
                <span className="material-icons">open_in_new</span>
              </a>
              <a 
                href={project.links.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>YouTube Demo</span>
                <span className="material-icons">open_in_new</span>
              </a>
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>Live Demo</span>
                <span className="material-icons">open_in_new</span>
              </a>
            </div>
          </section>

          {/* Results Section */}
          <section id="results" ref={sectionRefs.results} className="content-section">
            <h2 className="section-title">{project.results.title}</h2>
            <ul className="results-list">
              {project.results.achievements.map((achievement, index) => (
                <li key={index}>
                  <CheckSquareIcon size={20} color="#000" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProjectDetail;