document.addEventListener("DOMContentLoaded", () => {
  // Select all filter buttons and project cards
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Add click event to each button
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 1. Remove 'active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // 2. Add 'active' class to the clicked button
      button.classList.add("active");

      // 3. Get the filter category (e.g., "all", "iot", "drone")
      const filterValue = button.getAttribute("data-filter");

      // 4. Loop through cards and show/hide based on category
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || filterValue === cardCategory) {
          card.style.display = "block";
          // Optional: Add fade-in animation
          card.animate(
            [
              { opacity: 0, transform: "scale(0.9)" },
              { opacity: 1, transform: "scale(1)" },
            ],
            { duration: 300, fill: "forwards" }
          );
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
