//  nav bar 

// Open the side navigation (from the right side)
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Close the side navigation
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Close the menu when a link is clicked
var sidenavLinks = document.querySelectorAll('.sidenav a');
sidenavLinks.forEach(link => {
  link.addEventListener('click', closeNav);
});

// nav bar code end 



let currentIndex = 0; // Starting slide index
let slides = document.querySelectorAll(".slide");

// Function to show the current slide
function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0; // Loop to the first slide
  } else if (index < 0) {
    currentIndex = slides.length - 1; // Loop to the last slide
  } else {
    currentIndex = index;
  }

  // Hide all slides
  slides.forEach((slide, i) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slides[currentIndex].style.display = "block";
}

// Function to change the slide (next or previous)
function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Show the first slide by default
showSlide(currentIndex);

// Auto slideshow every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);


