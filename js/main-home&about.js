// ================== MAIN UI LOGIC ==================

// 1. Preloader Logic
window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");
  if (loader) {
    // Slight delay to ensure the user sees the cool animation
    setTimeout(() => {
      loader.classList.add("loaded");
    }, 1200);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // 2. Elastic Navigation Logic
  const nav = document.querySelector("nav > ul");
  const items = document.querySelectorAll("nav > ul li a");
  let anim = null;
  let currentActiveItem = null;

  const animate = (from, to) => {
    if (anim) clearInterval(anim);

    const start = Date.now();
    anim = setInterval(() => {
      const p = Math.min((Date.now() - start) / 500, 1);
      const e = 1 - Math.pow(1 - p, 3);

      const x = from + (to - from) * e;
      const y = -40 * (4 * e * (1 - e));
      const r = 200 * Math.sin(p * Math.PI);

      if (nav) {
        nav.style.setProperty("--translate-x", `${x}px`);
        nav.style.setProperty("--translate-y", `${y}px`);
        nav.style.setProperty("--rotate-x", `${r}deg`);
      }

      if (p >= 1) {
        clearInterval(anim);
        anim = null;
        if (nav) {
          nav.style.setProperty("--translate-y", "0px");
          nav.style.setProperty("--rotate-x", "0deg");
        }
      }
    }, 16);
  };

  const getCurrentPosition = () => {
    if (!nav) return 0;
    return parseFloat(nav.style.getPropertyValue("--translate-x")) || 0;
  };

  const getItemCenter = (item) => {
    return (
      item.getBoundingClientRect().left +
      item.offsetWidth / 2 -
      nav.getBoundingClientRect().left -
      5
    );
  };

  const moveToItem = (item) => {
    const current = getCurrentPosition();
    const center = getItemCenter(item);
    animate(current, center);
    if (nav) nav.classList.add("show-indicator");
  };

  const setActiveItem = (item) => {
    if (currentActiveItem) {
      currentActiveItem.classList.remove("active");
    }

    currentActiveItem = item;
    item.classList.add("active");
    moveToItem(item);
  };

  const handleMouseLeave = () => {
    if (currentActiveItem) {
      moveToItem(currentActiveItem);
    } else {
      if (nav) nav.classList.remove("show-indicator");
      if (anim) clearInterval(anim);
    }
  };

  // Attach Hover Events to Nav Items
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => moveToItem(item));
    item.addEventListener("mouseleave", handleMouseLeave);
  });

  if (nav) nav.addEventListener("mouseleave", handleMouseLeave);

  // 3. Set Initial Active State
  const initialActive = document.querySelector("nav > ul li a.active");
  if (initialActive) {
    setTimeout(() => {
      setActiveItem(initialActive);
    }, 100);
  } else if (items.length > 0) {
    // Fallback if no active class is found
    setTimeout(() => {
      setActiveItem(items[0]);
    }, 100);
  }

  // 4. Hamburger Menu Logic
  const hamburger = document.querySelector(".hamburger-menu");
  const navElement = document.querySelector("nav");

  if (hamburger && navElement) {
    const icon = hamburger.querySelector("i");

    hamburger.addEventListener("click", () => {
      // Toggle the menu visibility
      navElement.classList.toggle("mobile-active");

      // Toggle the rotation class on the button itself
      hamburger.classList.toggle("rotate");

      // Toggle the icon between 'bars' and 'X' (close)
      if (navElement.classList.contains("mobile-active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll("nav > ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navElement.classList.remove("mobile-active");
        hamburger.classList.remove("rotate");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }
});
