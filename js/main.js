// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("toggle"); // Optional for animation
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // API-Ready Comment (As per PDF Section 4.5)
  /* Function to fetch upcoming events from backend
       async function fetchEvents() {
           const response = await fetch('/api/events');
           const data = await response.json();
           // populateEvents(data);
       }
    */
});

/*contact details*/
let mem = document.getElementsByClassName("members");
let logo = document.getElementsByClassName("linkedin");
for (let i = 0; i < logo.length; i++) {
  mem[i].addEventListener("mouseenter", () => {
    let s = `<a href="https://www.linkedin.com/company/robotics-club-nit-patna"><i class="fab fa-linkedin"></i></a>`;
    logo[i].innerHTML = s;
    logo[i].style.backgroundColor = "#1877F2";
    logo[i].style.border = "1px solid #050404ff";
    logo[i].style.borderRadius = "50%";
  });
}
for (let j = 0; j < logo.length; j++) {
  mem[j].addEventListener("mouseleave", () => {
    let s = "";
    logo[j].innerHTML = s;
    logo[j].style.backgroundColor = "transparent";
    logo[j].style.border = "0px";
    logo[j].style.borderRadius = "0px";
  });
}

gsap.from("#header h1", { y: -100, opacity: 0, duration: 1 });
gsap.from("#header h4", { y: 100, opacity: 0, duration: 1, delay: 1 });
// gsap.from("#icon", {
//   scale: 0.5,
//   duration: 1,
//   delay: 0.5,
//   ease: "back.out(1.7)",
//   repeat: -1,
//   yoyo: true,
// });
