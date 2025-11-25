'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});



/**
 * Artist Slideshow functionality
 */
let slideIndexes = {};

// Initialize all slideshows
function initializeSlideshows() {
  const slideshowContainers = document.querySelectorAll('.slideshow-container');
  
  slideshowContainers.forEach((container, index) => {
    const slides = container.querySelectorAll('.slide');
    const slideshowId = `slideshow-${index}`;
    slideIndexes[slideshowId] = 1;
    
    // Show first slide for this slideshow
    showSlides(slideshowId);
    
    // Set up navigation for this slideshow
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    
    if (prevBtn) {
      prevBtn.onclick = function() { changeSlide(slideshowId, -1); };
    }
    if (nextBtn) {
      nextBtn.onclick = function() { changeSlide(slideshowId, 1); };
    }
  });
}

function changeSlide(slideshowId, n) {
  slideIndexes[slideshowId] += n;
  showSlides(slideshowId);
}

function currentSlide(slideshowId, n) {
  slideIndexes[slideshowId] = n;
  showSlides(slideshowId);
}

function showSlides(slideshowId) {
  const slideshowContainers = document.querySelectorAll('.slideshow-container');
  const containerIndex = parseInt(slideshowId.split('-')[1]);
  const container = slideshowContainers[containerIndex];
  
  if (!container) return;
  
  const slides = container.querySelectorAll('.slide');
  const slideIndex = slideIndexes[slideshowId];
  
  if (slideIndex > slides.length) {slideIndexes[slideshowId] = 1}
  if (slideIndex < 1) {slideIndexes[slideshowId] = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexes[slideshowId]-1].style.display = "block";
}

// Initialize slideshows when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeSlideshows();
  
  // Auto advance only the second slideshow (artist2) every 5 seconds
  setInterval(function() {
    // Only auto-advance slideshow-1 (second artist section)
    if (slideIndexes['slideshow-1']) {
      changeSlide('slideshow-1', 1);
    }
  }, 5000);
});