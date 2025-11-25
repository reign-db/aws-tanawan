import React, { useState, useEffect } from 'react';

const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeNavbar();
    }
  };

  return (
    <>
      <header className={`header ${headerActive ? 'active' : ''}`} data-header>
        <div className="container">
          <div className={`overlay ${navbarActive ? 'active' : ''}`} data-overlay onClick={closeNavbar}></div>

          <a href="#top" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <img src="/assets/images/asean-emblem.png" alt="logo" width="70" height="70" loading="lazy" />
          </a>

          <nav className={`navbar ${navbarActive ? 'active' : ''}`} data-navbar>
            <div className="navbar-top">
              <a href="#top" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>FAITH Student Council</a>
              <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn onClick={closeNavbar}>
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-navbar-link onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
              </li>
              <li className="navbar-item">
                <a href="#tanauan" className="navbar-link" data-navbar-link onClick={(e) => { e.preventDefault(); scrollToSection('tanauan'); }}>Tanauan</a>
              </li>
              <li className="navbar-item">
                <a href="#explore" className="navbar-link" data-navbar-link onClick={(e) => { e.preventDefault(); scrollToSection('explore'); }}>Explore</a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link" data-navbar-link onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About The Project</a>
              </li>
            </ul>
          </nav>

          <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn onClick={toggleNavbar}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;


