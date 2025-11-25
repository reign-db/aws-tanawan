import React from 'react';

const Explore = () => {
  return (
    <section className="section service" id="explore">
      <div className="container">
        <h2 className="h2 section-title underline">Explore Tanauan</h2>

        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="restaurant-outline"></ion-icon>
              </div>
              <h3 className="h3 title">Food, Delicacy, Cuisines</h3>
              <p className="text">
                Discover Tanauan's rich culinary heritage featuring local delicacies like Batangas coffee, suman, and traditional Filipino dishes that showcase the city's unique flavors and culture.
              </p>
              <a href="/pages/food.html" className="card-btn" aria-label="Show More">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <h3 className="h3 title">Tourist Spots & Attractions</h3>
              <p className="text">
                Explore Tanauan's beautiful destinations including scenic viewpoints, natural parks, and recreational areas that offer visitors memorable experiences and stunning views.
              </p>
              <a href="/pages/attractions.html" className="card-btn" aria-label="Show More">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="library-outline"></ion-icon>
              </div>
              <h3 className="h3 title">Cultural Landmarks</h3>
              <p className="text">
                Immerse yourself in Tanauan's rich history through its heritage sites, churches, monuments, and cultural institutions that tell the story of the city's past and traditions.
              </p>
              <a href="/pages/landmarks.html" className="card-btn" aria-label="Show More">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Explore;


