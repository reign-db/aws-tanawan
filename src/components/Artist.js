import React, { useState, useEffect } from 'react';

const Artist = () => {
  const artistImages = [
    '/assets/images/artist/1.png',
    '/assets/images/artist/2.png',
    '/assets/images/artist/3.png',
    '/assets/images/artist/4.png',
    '/assets/images/artist/5.png',
    '/assets/images/artist/6.png',
    '/assets/images/artist/7.png',
    '/assets/images/artist/8.png',
    '/assets/images/artist/9.png',
    '/assets/images/artist/10.png',
    '/assets/images/artist/13.png',
    '/assets/images/artist/14.png',
  ];

  const localArtworkImages = [
    '/assets/images/local-artworks/7.png',
    '/assets/images/local-artworks/8 (1).png',
    '/assets/images/local-artworks/11.png',
    '/assets/images/local-artworks/12.png',
    '/assets/images/local-artworks/12 (1).png',
    '/assets/images/local-artworks/13.png',
    '/assets/images/local-artworks/16.png',
    '/assets/images/local-artworks/18.png',
    '/assets/images/local-artworks/18 (1).png',
    '/assets/images/local-artworks/18 (2).png',
    '/assets/images/local-artworks/23.png',
    '/assets/images/local-artworks/24.png',
    '/assets/images/local-artworks/30.png',
    '/assets/images/local-artworks/34.png',
    '/assets/images/local-artworks/40.png',
    '/assets/images/local-artworks/41.png',
    '/assets/images/local-artworks/43.png',
    '/assets/images/local-artworks/54.png',
    '/assets/images/local-artworks/57.png',
    '/assets/images/local-artworks/57 (1).png',
    '/assets/images/local-artworks/66.png',
    '/assets/images/local-artworks/67.png',
    '/assets/images/local-artworks/69.png',
    '/assets/images/local-artworks/69 (1).png',
    '/assets/images/local-artworks/70.png',
    '/assets/images/local-artworks/74.png',
    '/assets/images/local-artworks/Artwork 1 - Unbreakable Bonds.png',
    '/assets/images/local-artworks/Immunity through Generations.png',
    '/assets/images/local-artworks/Legacy and Inheritance.png',
  ];

  const [artistSlideIndex, setArtistSlideIndex] = useState(0);
  const [localArtworkSlideIndex, setLocalArtworkSlideIndex] = useState(0);

  const changeSlide = (gallery, direction) => {
    if (gallery === 'artist') {
      setArtistSlideIndex((prev) => {
        if (direction === 1) {
          return (prev + 1) % artistImages.length;
        } else {
          return prev === 0 ? artistImages.length - 1 : prev - 1;
        }
      });
    } else {
      setLocalArtworkSlideIndex((prev) => {
        if (direction === 1) {
          return (prev + 1) % localArtworkImages.length;
        } else {
          return prev === 0 ? localArtworkImages.length - 1 : prev - 1;
        }
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalArtworkSlideIndex((prev) => (prev + 1) % localArtworkImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [localArtworkImages.length]);

  return (
    <>
      <section className="section artist" id="artist">
        <div className="container">
          <h2 className="h2 section-title underline">A Tanauaeño Artist</h2>
          <div className="artist-content">
            <div className="artist-gallery" style={{ width: '100%' }}>
              <div className="slideshow-container">
                {artistImages.map((image, index) => (
                  <div
                    key={index}
                    className={`slide fade ${index === artistSlideIndex ? 'active' : ''}`}
                  >
                    <img
                      src={image}
                      alt={`Artist ${index + 1}`}
                      className="slide-image"
                      loading="lazy"
                    />
                  </div>
                ))}
                <a className="prev" onClick={() => changeSlide('artist', -1)}>&#10094;</a>
                <a className="next" onClick={() => changeSlide('artist', 1)}>&#10095;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section artist" id="artist2">
        <div className="container">
          <div className="artist-content">
            <div className="artist-gallery" style={{ width: '100%' }}>
              <div className="slideshow-container">
                {localArtworkImages.map((image, index) => (
                  <div
                    key={index}
                    className={`slide fade ${index === localArtworkSlideIndex ? 'active' : ''}`}
                  >
                    <img
                      src={image}
                      alt={`Local Artwork ${index + 1}`}
                      className="slide-image"
                      loading="lazy"
                    />
                  </div>
                ))}
                <a className="prev" onClick={() => changeSlide('local', -1)}>&#10094;</a>
                <a className="next" onClick={() => changeSlide('local', 1)}>&#10095;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Artist;


