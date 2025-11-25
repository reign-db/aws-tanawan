import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MapSection from './components/MapSection';
import Explore from './components/Explore';
import Artist from './components/Artist';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <article>
          <Hero />
          <MapSection />
          <Explore />
          <Artist />
          <About />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;


