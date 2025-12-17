// Select the button and the status text
const button = document.getElementById("exploreBtn");
const statusText = document.getElementById("status-msg");

// Add an event listener for a 'click'
button.addEventListener("click", function () {
  // 1. Change the text content
  statusText.innerText = "System Online... Welcome, User!";

  // 2. Change the style dynamically
  statusText.style.color = "#00f3ff"; // Turns text Cyan
  statusText.style.marginTop = "20px";

  // 3. Optional: Alert the user
  alert("Welcome to the Robotics Challenge Interface!");
});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Number of dots
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#ffffff" }, // Color of dots
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true, // This creates the lines connecting them
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true, // This makes them move constantly
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // THIS IS THE IMPORTANT PART: "repulse" makes them run away
      },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
  },
  retina_detect: true,
});
