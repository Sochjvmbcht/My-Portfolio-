/* menu bar */

let menuIcon = document.querySelector("#menu-bar-icone");
let navbar = document.querySelector(".nav-list");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav ul li a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
/* live dashboards code */

function liveDashboard(event) {
  const button = event.currentTarget;
  const cardContainer = button.closest(".card-container");
  const dashboard = cardContainer.querySelector(".dashboard-main");

  dashboard.style.display = "block";
  document.body.classList.add("dashboard-open");
}

function closeDashboard(event) {
  const dashboard = event.target.closest(".dashboard-main");

  dashboard.style.display = "none";
  document.body.classList.remove("dashboard-open");
}

document.querySelectorAll("button[id^='button']").forEach((button) => {
  button.addEventListener("click", liveDashboard);
});

document.querySelectorAll(".close-icon").forEach((icon) => {
  icon.addEventListener("click", closeDashboard);
});

document.getElementById("topmate-logo").addEventListener("click", function () {
  // Simulate a click on the Topmate button to show the profile
  const topmateButton = document.querySelector(".topmate-button");
  if (topmateButton) {
    topmateButton.click();
  }
});

/*right click */

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

ScrollReveal({
  distance: "120px",
  duration: 2000,
  delay: 180,
});

ScrollReveal().reveal(".home-container h1, section .headings .headings-para", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-container .social-media-profiles a, .skills p, .social-media-icons a, .social-media-icons img, .certificate-card",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(
  ".home-container .button-1, .profile-picture, .about-image, .form-content h1, .form-content p",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(
  ".home-container p, .home-container .button-2, section .headings .section-heading, .about-content, .form-content-container form",
  {
    origin: "right",
  }
);
