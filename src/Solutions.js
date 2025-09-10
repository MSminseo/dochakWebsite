import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Import solution images
import dash from './assets/dash.png';
import simulator from './assets/내포3D모델.png';
import vr from './assets/로봇.png';
import visual from './assets/visual.png';
import multi from './assets/multi.png';
import tele from './assets/teledriving.png';

const solutionImages = [tele, simulator, multi, dash, vr, visual];

export default function Solutions() {
  const { t } = useContext(LanguageContext);

  // Animation component for individual elements
  const AnimatedElement = ({ children, animation = 'slide-up', delay = 0, className = '' }) => {
    const { elementRef, isVisible } = useScrollAnimation({
      threshold: 0.1,
      triggerOnce: true
    });

    return (
      <div
        ref={elementRef}
        className={`animate-on-scroll ${animation} ${isVisible ? 'visible' : ''} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  const solutions = [
    {
      title: t('solutions.items.teleDriving.title'),
      desc: t('solutions.items.teleDriving.desc'),
      path: '/solutions/remote-driving',
      icon: '🎮',
      category: 'Control'
    },
    {
      title: t('solutions.items.digitalTwin.title'),
      desc: t('solutions.items.digitalTwin.desc'),
      path: '/solutions/digital-twin',
      icon: '🏗️',
      category: 'Infrastructure'
    },
    {
      title: t('solutions.items.multimodal.title'),
      desc: t('solutions.items.multimodal.desc'),
      path: '/solutions/multimodal-simulator',
      icon: '🚗',
      category: 'Simulation'
    },
    {
      title: t('solutions.items.trafficAnalysis.title'),
      desc: t('solutions.items.trafficAnalysis.desc'),
      path: '/solutions/traffic-analysis-tools',
      icon: '📊',
      category: 'Analytics'
    },
    {
      title: t('solutions.items.lifeSavingRobot.title'),
      desc: t('solutions.items.lifeSavingRobot.desc'),
      path: '/solutions/vr-road-design',
      icon: '🥽',
      category: 'Design'
    },
    {
      title: t('solutions.items.visualisation.title'),
      desc: t('solutions.items.visualisation.desc'),
      path: '/solutions/visualization',
      icon: '📈',
      category: 'Visualization'
    }
  ];

  return (
    <div className="solutions-page">
      {/* Hero Section - Matching other pages */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <AnimatedElement animation="slide-up" delay={0}>
            <h1 className="solutions-hero-title">{t('solutions.heroTitle')}</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200}>
            <p className="solutions-hero-subtitle">{t('solutions.heroSubtitle')}</p>
          </AnimatedElement>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-main">
        <div className="solutions-container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <AnimatedElement key={`solution-${index}`} animation="slide-up" delay={index * 100}>
                <div className="solution-card">
                  <Link to={solution.path} className="solution-card-link">
                    <div className="solution-header">
                      <h3 className="solution-title">{solution.title}</h3>
                    </div>

                    <div className="solution-image-container">
                      <img
                        src={solutionImages[index]}
                        alt={solution.title}
                        className="solution-image"
                      />
                      <div className="solution-image-overlay"></div>
                    </div>

                    <div className="solution-content">
                      <p className="solution-description"
                         dangerouslySetInnerHTML={{
                           __html: Array.isArray(solution.desc) 
                             ? `${solution.desc[0]} ${solution.desc[1] || ''}`.trim()
                             : solution.desc
                         }}
                      />
                    </div>

                    <div className="solution-footer">
                      <span className="solution-learn-more">
                        {t('solutions.learnMore', 'Learn More')}
                        <svg className="solution-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="project-get-in-touch-section">
        <div className="get-in-touch-container">
          <div className="get-in-touch-content">
            <h3 className="section-title">{t('projects.content.getInTouchTitle')}</h3>
            <p className="get-in-touch-description">
              {t('projects.content.getInTouchDescription')}
            </p>
            <div className="get-in-touch-buttons">
              <Link to="/get-in-touch" className="contact-button primary">
                {t('projects.content.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
