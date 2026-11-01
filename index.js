const menuButton=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
menuButton?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuButton?.setAttribute("aria-expanded","false");}));
const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();
const word=document.querySelector("#rotating-word");
const words=["intelligence.","curiosity.","good engineering.","clear thinking."];
let wi=0,ci=words[0].length,remove=true;
function type(){if(!word||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const current=words[wi];ci+=remove?-1:1;word.textContent=current.slice(0,ci);let wait=remove?45:85;if(ci===0){remove=false;wi=(wi+1)%words.length;wait=300;}else if(ci===words[wi].length&&!remove){remove=true;wait=1600;}window.setTimeout(type,wait);}
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)setTimeout(type,1700);
const targets=document.querySelectorAll(".section-top,.about-grid,.experience-item,.project,.education-item,.tool-grid article,.contact-panel");
if("IntersectionObserver"in window){const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("in-view");obs.unobserve(entry.target);}}),{threshold:.12});targets.forEach((el,i)=>{el.classList.add("reveal");el.style.transitionDelay=(i%3)*75+"ms";observer.observe(el);});}else targets.forEach(el=>el.classList.add("in-view"));