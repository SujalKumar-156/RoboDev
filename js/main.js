// ================== MAIN UI LOGIC (MERGED) ==================

// 1. PRELOADER LOGIC (For Index/About)
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
  // 2. HAMBURGER MENU LOGIC (Compatible with Index/About structure)
  // Your HTML uses "hamburger-menu" and "nav", team might use "hamburger" and "nav-links"
  const hamburgerIndex = document.querySelector(".hamburger-menu");
  const navIndex = document.querySelector("nav");
  const hamburgerTeam = document.querySelector(".hamburger"); // For compatibility if team used this
  const navLinksTeam = document.querySelector(".nav-links"); // For compatibility if team used this

  // Logic for Index/About Page Design
  if (hamburgerIndex && navIndex) {
    const icon = hamburgerIndex.querySelector("i");

    hamburgerIndex.addEventListener("click", () => {
      navIndex.classList.toggle("mobile-active");
      hamburgerIndex.classList.toggle("rotate");

      if (navIndex.classList.contains("mobile-active")) {
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
        navIndex.classList.remove("mobile-active");
        hamburgerIndex.classList.remove("rotate");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }

  // Logic for Team/Projects Page Design (Preserving existing logic)
  if (hamburgerTeam && navLinksTeam) {
    hamburgerTeam.addEventListener("click", () => {
      navLinksTeam.classList.toggle("active");
      hamburgerTeam.classList.toggle("toggle");
    });
  }

  // 3. ELASTIC NAVIGATION LOGIC (For Index/About)
  const navList = document.querySelector("nav > ul");
  const items = document.querySelectorAll("nav > ul li a");

  // Only run this if the specific nav structure exists
  if (navList && items.length > 0) {
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

        navList.style.setProperty("--translate-x", `${x}px`);
        navList.style.setProperty("--translate-y", `${y}px`);
        navList.style.setProperty("--rotate-x", `${r}deg`);

        if (p >= 1) {
          clearInterval(anim);
          anim = null;
          navList.style.setProperty("--translate-y", "0px");
          navList.style.setProperty("--rotate-x", "0deg");
        }
      }, 16);
    };

    const getCurrentPosition = () =>
      parseFloat(navList.style.getPropertyValue("--translate-x")) || 0;

    const getItemCenter = (item) => {
      return (
        item.getBoundingClientRect().left +
        item.offsetWidth / 2 -
        navList.getBoundingClientRect().left -
        5
      );
    };

    const moveToItem = (item) => {
      const current = getCurrentPosition();
      const center = getItemCenter(item);
      animate(current, center);
      navList.classList.add("show-indicator");
    };

    const setActiveItem = (item) => {
      if (currentActiveItem) currentActiveItem.classList.remove("active");
      currentActiveItem = item;
      item.classList.add("active");
      moveToItem(item);
    };

    const handleMouseLeave = () => {
      if (currentActiveItem) {
        moveToItem(currentActiveItem);
      } else {
        navList.classList.remove("show-indicator");
        if (anim) clearInterval(anim);
      }
    };

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => moveToItem(item));
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    navList.addEventListener("mouseleave", handleMouseLeave);

    // Set Initial Active State
    const initialActive = document.querySelector("nav > ul li a.active");
    if (initialActive) {
      setTimeout(() => setActiveItem(initialActive), 100);
    }
  }

  // 4. SMOOTH SCROLLING (Global)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 5. GSAP ANIMATIONS (Preserved from Team/Projects)
  if (typeof gsap !== "undefined") {
    if (document.querySelector("#header h1")) {
      gsap.from("#header h1", { y: -100, opacity: 0, duration: 1 });
    }
    if (document.querySelector("#header h4")) {
      gsap.from("#header h4", { y: 100, opacity: 0, duration: 1, delay: 1 });
    }
    if (document.querySelector("#icon")) {
      gsap.from("#icon", {
        scale: 0.5,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.7)",
        repeat: -1,
        yoyo: true,
      });
    }
  }
});

// 6. CONTACT DETAILS LOGIC (Preserved for Team Page)
// This runs outside DOMContentLoaded in your original file,
// but it's safer to check if elements exist first.
const mem = document.getElementsByClassName("members");
const logo = document.getElementsByClassName("linkedin");

if (mem.length > 0 && logo.length > 0) {
  for (let i = 0; i < logo.length; i++) {
    mem[i].addEventListener("mouseenter", () => {
      let s = `<a href="#"><i class="fab fa-linkedin"></i></a>`;
      logo[i].innerHTML = s;
      logo[i].style.backgroundColor = "#981b1bff";
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
}
