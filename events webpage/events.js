document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
});

let currentIndex = 0;
const stackContainer = document.getElementById("upcomingStack");
let cards = Array.from(document.querySelectorAll(".stack-card"));

function initCarousel() {
  updateStack();
}

function moveCarousel(direction) {
  let newIndex = currentIndex + direction;

  // Loop Logic
  if (newIndex >= cards.length) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = cards.length - 1;
  }

  currentIndex = newIndex;
  updateStack();
}

function updateStack() {
  cards.forEach((card, index) => {
    card.className = "stack-card glass-panel";
    card.style.transform = "";
    card.style.opacity = "";

    if (index === currentIndex) {
      card.classList.add("active");
    } else if (index === currentIndex + 1) {
      card.classList.add("next-1");
    } else if (index === currentIndex + 2) {
      card.classList.add("next-2");
    } else if (index < currentIndex) {
      card.classList.add("hidden");
      card.style.transform = "translateY(-150px) scale(0.9)";
      card.style.opacity = "0";
    } else {
      card.classList.add("hidden");
    }
  });
}

function sortEvents() {
  const criteria = document.getElementById("eventSort").value;
  const sortedCards = cards.sort((a, b) => {
    if (criteria === "date") {
      return (
        new Date(a.getAttribute("data-date")) -
        new Date(b.getAttribute("data-date"))
      );
    } else if (criteria === "name") {
      return a
        .getAttribute("data-name")
        .toLowerCase()
        .localeCompare(b.getAttribute("data-name").toLowerCase());
    }
  });

  stackContainer.innerHTML = "";
  sortedCards.forEach((card) => stackContainer.appendChild(card));
  cards = sortedCards;
  currentIndex = 0;
  updateStack();
}
