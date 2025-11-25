import React from 'react';

const MapSection = () => {
  return (
    <section className="section map-section" id="tanauan">
      <div className="container">
        <h2 className="h2 section-title underline">Tanauan City</h2>
        <div className="map-content">
          <div className="map-container">
            <a href="https://maps.google.com/?q=Tanauan,Batangas,Philippines" target="_blank" rel="noopener noreferrer" className="map-link">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456.78901234567!2d121.1242223153552!3d14.08693459012347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6d1e2e2e2e2f%3A0x2e2e2e2e2e2e2e2e!2sTanauan%2C%20Batangas!5e0!3m2!1sen!2sph!4v1680000000000!5m2!1sen!2sph" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Tanauan City Map"
              ></iframe>
            </a>
          </div>
          <div className="tanauan-info">
            <h3 className="tanauan-title">Tanauan City</h3>
            <p className="tanauan-description">
              <span className="tanauan-paragraph">
                Tanauan City is a first-class component city in the province of Batangas, Philippines. Located in the CALABARZON region, it is known for its rich history, vibrant culture, and strategic location near Metro Manila. The city serves as a major commercial and educational hub in Southern Luzon, featuring modern infrastructure while preserving its historical heritage and natural beauty.
              </span>
              <br />
              <span className="tanauan-paragraph">
                In addition to its economic and cultural significance, Tanauan City is also home to several tourist attractions, parks, and local festivals that showcase the warmth and hospitality of its people. Its blend of urban development and scenic landscapes makes it an appealing destination for both residents and visitors alike.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;


