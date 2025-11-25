import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="h2 hero-title">TanaWan: <br />Where Culture Clicks</h2>
          <p className="hero-text">
            This website is a cultural and tourism initiative by the FAITH Student Council, dedicated to showcasing the rich heritage, local delicacies, and must-visit places of Tanauan, Batangas.
          </p>
          <button className="btn" onClick={() => scrollToSection('tanauan')}>Explore TanaWan</button>
        </div>

        <figure className="hero-banner">
          <img src="/assets/images/asean-emblem.png" loading="lazy" alt="hero-banner" className="w-100 banner-animation" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;


