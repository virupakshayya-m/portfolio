// script.js

// Mobile Navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Active Navbar Links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

  sections.forEach(sec => {

    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height){

      navLinks.forEach(link => {
        link.classList.remove("active");
      });

      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // Sticky Header

  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Close Navbar

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};


// Scroll Reveal

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  reset: false
});

// Top Reveal
ScrollReveal().reveal(".heading", {
  origin: "top"
});

// Left Reveal
ScrollReveal().reveal(
  ".home-content h1, .about-img",
  {
    origin: "left"
  }
);

// Right Reveal
ScrollReveal().reveal(
  ".home-content p, .about-content",
  {
    origin: "right"
  }
);

// Bottom Reveal
ScrollReveal().reveal(
  ".home-img, .project-box, .skills-box, .contact-item, .social-card",
  {
    origin: "bottom",
    interval: 200
  }
);

// Top Content Reveal
ScrollReveal().reveal(
  ".home-content h3, .home-content .btn, .social-media",
  {
    origin: "top",
    interval: 200
  }
);

// Typed JS

const typed = new Typed(".multiple-text", {

  strings: [
    "Full Stack Developer",
    "Software Developer",
    "MERN Developer"
  ],

  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});