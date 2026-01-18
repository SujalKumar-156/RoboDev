/* ================== CARD SCROLL LISTENER ================== */

document.addEventListener("DOMContentLoaded", () => {
  // Select all scrollable areas in the project cards
  const scrollAreas = document.querySelectorAll(".card-scroll-area");

  scrollAreas.forEach((area) => {
    area.addEventListener("scroll", () => {
      // Find the cue (arrow) inside this specific card
      const cue = area.querySelector(".scroll-cue");

      // Logic: scrollTop + clientHeight = scrollHeight (approx)
      // If user is within 20px of the bottom, hide the arrow
      if (area.scrollTop + area.clientHeight >= area.scrollHeight - 20) {
        if (cue) cue.classList.add("hidden");
      } else {
        if (cue) cue.classList.remove("hidden");
      }
    });
  });
});
