/* ================== CARD SCROLL LISTENER ================== */

document.addEventListener("DOMContentLoaded", () => {
  // Select all scrollable areas in the project cards
  const scrollAreas = document.querySelectorAll(".card-scroll-area");

  scrollAreas.forEach((area) => {
    // Note: The cue is now a SIBLING of the scroll area, effectively placed
    // in the parent .project-card container.
    // We need to traverse up to the parent (.project-card) then find .scroll-cue
    const card = area.closest(".project-card");
    const cue = card.querySelector(".scroll-cue");

    area.addEventListener("scroll", () => {
      // Logic: If user has scrolled down more than 5px, HIDE the cue.
      // If user is at the very top, SHOW the cue.
      if (area.scrollTop > 5) {
        if (cue) cue.classList.add("hidden");
      } else {
        if (cue) cue.classList.remove("hidden");
      }
    });
  });
});
