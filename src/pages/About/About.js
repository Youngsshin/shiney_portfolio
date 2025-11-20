import React, { useEffect, useRef } from 'react';
import { aboutData } from '../../data/aboutData';
import './About.css';

function About() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  }, []);

  // Scroll Animation - Intersection Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // 애니메이션 적용할 요소들 선택
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about-page-new">
      {/* Hero Section with Image */}
      <section className="about-hero-with-image">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title">About Me</h1>
            <div className="about-hero-description-row">
              <p className="about-hero-description">
                Building AI services with user experience in mind
              </p>
              <div className="about-hero-scroll">(SCROLL)</div>
            </div>
          </div>
        </div>
        <div className="about-hero-image-container">
          <img 
            ref={heroImageRef}
            src={aboutData.profile.heroImage}
            alt="About Me"
            className="about-hero-main-image" 
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="about-quote-section">
        <p className="about-quote-small">{aboutData.quote.small}</p>
        <h2 className="about-quote-large" dangerouslySetInnerHTML={{ __html: aboutData.quote.large }} />
      </section>

      {/* My Story Section */}
      <section className="about-story-section">
        <div className="about-story-grid">
          <div className="about-story-left">
            <h3 className="about-story-title">{aboutData.story.leftTitle}</h3>
            <div className="about-story-subtitle">{aboutData.story.leftSubtitle}</div>
          </div>
          <div className="about-story-right">
            <div className="about-story-header animate-on-scroll">
              <h4>{aboutData.story.mainTitle}</h4>
            </div>
            <div className="about-story-content">
              {aboutData.story.content.map((paragraph, index) => (
                <p key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-story-image-wrapper animate-on-scroll">
              <img src={aboutData.profile.profileImage} alt={aboutData.profile.name} />
            </div>

            {/* Skills Section */}
            <div className="about-skills animate-on-scroll">
              <h4>{aboutData.skills.title}</h4>
              <div className="about-skills-grid">
                {aboutData.skills.categories.map((category, index) => (
                  <div key={index} className="about-skill-category">
                    <span className="about-skill-category-name">{category.name}</span>
                    <span className="about-skill-items">{category.items.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Section */}
            <section className="about-career-section animate-on-scroll">
              <h4 className="about-section-title">{aboutData.career.title}</h4>

              <div className="about-cert-grid">
                {aboutData.career.items.map((item, index) => (
                  <div key={index} className="about-cert-item">
                    <span className="about-cert-dot">●</span>
                    <span>{item.name}</span>
                    <span className="about-cert-source">{item.source}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline Section
            <section className="about-timeline-section animate-on-scroll">
              <h4 className="about-section-title">{aboutData.timeline.title}</h4>

              <div className="timeline">
                {aboutData.timeline.items.map((item, index) => (
                  <div key={index} className="timeline-row">
                    <span className="timeline-year">{item.year}</span>
                    <span className="timeline-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Featured Projects Section
            <section className="about-projects-section animate-on-scroll">
              <h4 className="about-section-title">{aboutData.projects.title}</h4>

              <div className="about-projects-grid">
                {aboutData.projects.items.map((project, index) => (
                  <div key={index} className="project-card">
                    <h5 className="project-name">{project.name}</h5>
                    <p className="project-description">{project.description}</p>
                    <p className="project-tech">
                      {project.tech.join(" • ")}
                    </p>
                    {project.link && (
                      <a href={project.link} className="project-link">
                        VIEW PROJECT →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section> */}

            <div className="about-certifications animate-on-scroll">
              <h4>{aboutData.certifications.title}</h4>
              <div className="about-cert-grid">
                {aboutData.certifications.items.map((cert, index) => (
                  <div key={index} className="about-cert-item">
                    <span className="about-cert-dot">●</span>
                    <span>{cert.name}</span>
                    {cert.source && <span className="about-cert-source">{cert.source}</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="about-awards animate-on-scroll">
              <h4>{aboutData.awards.title}</h4>
              {aboutData.awards.category && (
                <div className="about-award-header">
                  <span>{aboutData.awards.category}</span>
                </div>
              )}
              {aboutData.awards.items.map((award, index) => (
                <div key={index} className="about-award-item">
                  <span className="about-cert-dot">●</span>
                  <span>{award.name}</span>
                  <span className="about-award-date">{award.date}</span>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="about-contact animate-on-scroll">
              <h4>{aboutData.contact.title}</h4>
              <div className="about-contact-grid">
                {aboutData.contact.items.map((item, index) => (
                  <div key={index} className="about-contact-item">
                    <span className="about-contact-label">{item.label}</span>
                    <a href={item.link} className="about-contact-value">{item.value}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;