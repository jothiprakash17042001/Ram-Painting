//  nav bar 

// Hamburger Menu Toggle
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
}

// Close menu when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('nav').classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const header = document.querySelector('header');
  if (!header.contains(e.target)) {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('nav').classList.remove('active');
  }
});

// nav bar code end 

let currentIndex = 0;
let slides = document.querySelectorAll(".slide");

// Function to show the current slide
function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  // Hide all slides
  slides.forEach((slide, i) => {
    slide.style.display = "none";
    slide.classList.remove('fade');
  });

  // Show the current slide
  if (slides[currentIndex]) {
    slides[currentIndex].style.display = "block";
    slides[currentIndex].classList.add('fade');
  }
}

// Function to change the slide (next or previous)
function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Show the first slide by default
showSlide(currentIndex);

// Auto slideshow every 4 seconds with smooth transitions
setInterval(() => {
  changeSlide(1);
}, 4000);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced Intersection Observer for scroll reveal animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered animation delay
      entry.target.style.animationDelay = (index * 0.1) + 's';
      entry.target.classList.add('visible');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all animated elements with stagger effect
document.querySelectorAll('.service-box, .feature-item, .testimonial-card, .contact-method, .portfolio-item, .why-choose-item').forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
  observer.observe(el);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('உங்கள் செய்தி பெறப்பட்டது! நாங்கள் விரைவில் உங்களைத் தொடர்புகொள்வோம்.\n\nYour message has been received! We will contact you soon.');
    this.reset();
  });
}


