const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
 
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});// JavaScript code can be added here if needed


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
