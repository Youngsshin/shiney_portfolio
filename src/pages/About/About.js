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

  return (
    <div className="about-page-new">
      {/* Hero Section with Image */}
      <section className="about-hero-with-image">
        <div className="about-hero-text-section">
          <div className="about-hero-about">About</div>
          <div className="about-hero-me">ME</div>
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
            <div className="about-story-header">
              <h4>{aboutData.story.mainTitle}</h4>
            </div>
            <div className="about-story-content">
              {aboutData.story.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="about-story-image-wrapper">
              <img src={aboutData.profile.profileImage} alt={aboutData.profile.name} />
            </div>

            <div className="about-certifications">
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

            <div className="about-awards">
              <h4>{aboutData.awards.title}</h4>
              <div className="about-award-header">
                <span>{aboutData.awards.category}</span>
              </div>
              {aboutData.awards.items.map((award, index) => (
                <div key={index} className="about-award-item">
                  <span className="about-cert-dot">●</span>
                  <span>{award.name}</span>
                  <span className="about-award-date">{award.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact-new">
        <div className="about-contact-script">{aboutData.contact.script}</div>
        <div className="about-contact-bold">{aboutData.contact.bold}</div>
      </section>

      {/* Bottom Links */}
      <section className="about-bottom-links">
        <div className="about-links-left">
          <span>(P)</span>
          {aboutData.bottomLinks.left.map((link, index) => (
            <a key={index} href={link.url}>{link.text}</a>
          ))}
        </div>
        <div className="about-links-right">
          <span>(S)</span>
          {aboutData.bottomLinks.right.map((link, index) => (
            <a key={index} href={link.url}>{link.text}</a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;