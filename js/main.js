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
