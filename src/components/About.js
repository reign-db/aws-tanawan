import React from 'react';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img
            src="/assets/images/fsc-logo-black.png"
            width="700"
            height="532"
            loading="lazy"
            alt="about banner"
            className="w-100 banner-animation"
          />
        </figure>

        <div className="about-content">
          <h2 className="h2 section-title underline">About The Project</h2>
          <p className="about-text">
            This website project is a cultural initiative by Trisha Francine Timog, a former candidate of The Search for Young ASEAN Diplomat, together with the FAITH Student Council. This collaborative project aims to promote and preserve the rich cultural heritage of Tanauan City through this digital platform, serving as a comprehensive showcase of the city's local traditions, culinary delights, and must-visit destinations.
          </p>
          <p className="about-text">
            Through this interactive website, visitors can explore Tanauan's unique identity, from its traditional delicacies and local artworks to its historical landmarks and natural attractions. This platform serves as a bridge between the city's proud heritage and modern digital accessibility, fostering cultural appreciation and tourism development in the heart of Batangas.
          </p>

          <ul className="social-list">
            <li>
              <a href="https://www.facebook.com/FaithSCOfficial" className="social-link" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/faithscofficial/" className="social-link" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;


