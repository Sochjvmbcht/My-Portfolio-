const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Animated headline: cycles through the work's real focus areas.
const typedWord = document.querySelector("#typed-word");
const phrases = ["working software", "useful AI tools", "connected systems", "cloud automation"];
let phraseIndex = 0;
let charIndex = phrases[0].length;
let deleting = false;
function typeHeadline() {
  if (!typedWord || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const phrase = phrases[phraseIndex];
  if (deleting) {
    charIndex--;
    typedWord.textContent = phrase.slice(0, charIndex);
  } else {
    charIndex++;
    typedWord.textContent = phrase.slice(0, charIndex);
  }
  let delay = deleting ? 48 : 82;
  if (!deleting && charIndex === phrase.length) {
    deleting = true;
    delay = 1700;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 350;
  }
  window.setTimeout(typeHeadline, delay);
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setTimeout(typeHeadline, 1800);
}

// Reveal content as it enters the viewport.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Subtle pointer light on devices with a fine pointer.
const cursorGlow = document.querySelector(".cursor-glow");
if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
  }, { passive: true });
}

// Stagger project and skill reveals without adding a framework.
document.querySelectorAll(".project-card, .skill-group, .timeline-item").forEach((item, index) => {
  item.style.transitionDelay = (index % 3) * 90 + "ms";
});