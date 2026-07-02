// ===================================
// Portfolio - Vanilla JavaScript
// ===================================

// ===================================
// Intersection Observer for Fade-in
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(element);
  });

  // Mobile Menu Toggle
  setupMobileMenu();

  // Smooth Scroll Links
  setupSmoothScroll();

  // Add interactivity to cards
  setupCardInteractions();

  // Parallax effect (optional, subtle)
  setupParallaxEffect();
});

// ===================================
// Mobile Menu Functions
// ===================================

function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      // Animate menu icon
      const icon = mobileMenuBtn.querySelector("svg");
      if (mobileMenu.classList.contains("hidden")) {
        icon.style.transform = "rotate(0deg)";
      } else {
        icon.style.transform = "rotate(180deg)";
      }
    });

    // Close menu when a link is clicked
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // 메뉴 닫기 애니메이션 시작
        mobileMenu.classList.add("hidden");
        const icon = mobileMenuBtn.querySelector("svg");
        icon.style.transform = "rotate(0deg)";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !mobileMenu.classList.contains("hidden") &&
        !mobileMenuBtn.contains(e.target) &&
        !mobileMenu.contains(e.target)
      ) {
        mobileMenu.classList.add("hidden");
        const icon = mobileMenuBtn.querySelector("svg");
        icon.style.transform = "rotate(0deg)";
      }
    });
  }
}

// ===================================
// Smooth Scroll for Navigation
// ===================================

let activeScrollAnimation = null;

function scrollToSection(targetElement, duration = 700) {
  const startY = window.pageYOffset;
  const targetY = targetElement.getBoundingClientRect().top + startY - 92;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    return;
  }

  if (activeScrollAnimation) {
    cancelAnimationFrame(activeScrollAnimation);
  }

  let startTime = null;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function step(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }

    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const nextY = startY + distance * easedProgress;

    window.scrollTo(0, nextY);

    if (progress < 1) {
      activeScrollAnimation = window.requestAnimationFrame(step);
    } else {
      activeScrollAnimation = null;
    }
  }

  activeScrollAnimation = window.requestAnimationFrame(step);
}

function updateActiveNavLink(targetId) {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.classList.remove("text-blue-600", "font-semibold");
    if (link.getAttribute("href") === targetId) {
      link.classList.add("text-blue-600", "font-semibold");
    }
  });
}

function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // 링크 클릭 시 즉시 활성화 상태 표시
        updateActiveNavLink(targetId);
        scrollToSection(targetElement);
      }
    });
  });
}

// ===================================
// Card Interaction Effects
// ===================================

function setupCardInteractions() {
  const cardHovers = document.querySelectorAll(".card-hover");

  cardHovers.forEach((card) => {
    // Add click effect (ripple)
    card.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      // Remove existing ripples
      const existingRipple = this.querySelector(".ripple");
      if (existingRipple) {
        existingRipple.remove();
      }

      this.appendChild(ripple);
    });
  });
}

// ===================================
// Parallax Effect (Subtle)
// ===================================

function setupParallaxEffect() {
  const parallaxElements = document.querySelectorAll("#hero");

  window.addEventListener(
    "scroll",
    function () {
      parallaxElements.forEach((element) => {
        const scrollPosition = window.pageYOffset;
        const elementPosition = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;

        // Only apply parallax when element is in view
        if (
          scrollPosition + windowHeight > elementPosition &&
          scrollPosition < elementPosition + elementHeight
        ) {
          const offset = (scrollPosition - elementPosition) * 0.5;
          element.style.backgroundPosition = `center ${offset}px`;
        }
      });
    },
    { passive: true },
  );
}

// ===================================
// Active Navigation Link Indicator
// ===================================

window.addEventListener(
  "scroll",
  function () {
    const sections = document.querySelectorAll(
      "section#about, section#skills, section#projects, section#contact",
    );
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const screenMiddle = window.scrollY + window.innerHeight / 2;

      // 화면 중앙이 섹션 안에 있을 때 활성화 (hero 섹션 제외)
      if (screenMiddle >= sectionTop && screenMiddle < sectionBottom) {
        currentSection = section.getAttribute("id");
      }
    });

    if (currentSection) {
      updateActiveNavLink(`#${currentSection}`);
    }
  },
  { passive: true },
);

// ===================================
// Scroll to Top Button (Optional)
// ===================================

function addScrollToTopButton() {
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.id = "scrollToTop";
  scrollToTopBtn.innerHTML = "↑";
  scrollToTopBtn.className =
    "fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-all opacity-0 pointer-events-none";

  document.body.appendChild(scrollToTopBtn);

  // Show/hide button on scroll
  window.addEventListener(
    "scroll",
    function () {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.pointerEvents = "auto";
        scrollToTopBtn.style.transform = "translateY(0)";
      } else {
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.pointerEvents = "none";
        scrollToTopBtn.style.transform = "translateY(20px)";
      }
    },
    { passive: true },
  );

  // Scroll to top on click
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollToTopBtn.style.transition = "all 0.3s ease";
}

// Add scroll to top button when DOM is ready
document.addEventListener("DOMContentLoaded", addScrollToTopButton);

// ===================================
// Performance: Lazy Load Images
// ===================================

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ===================================
// Add Ripple Effect CSS
// ===================================

function addRippleStyles() {
  const style = document.createElement("style");
  style.textContent = `
        .card-hover {
            position: relative;
            overflow: hidden;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(59, 130, 246, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", addRippleStyles);

// ===================================
// Page Load Animation
// ===================================

window.addEventListener("load", function () {
  document.body.style.opacity = "1";
  document.body.style.animation = "fadeIn 0.6s ease-out";
});

// ===================================
// Keyboard Navigation Support
// ===================================

document.addEventListener("keydown", function (e) {
  // Escape key to close mobile menu
  if (e.key === "Escape") {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  }

  // Keyboard shortcuts (optional)
  // e.g., Press 'S' to scroll to projects
  if (e.key === "s" && !e.ctrlKey && !e.metaKey) {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});

// ===================================
// Smooth Hash Navigation Fix
// ===================================

window.addEventListener("hashchange", function () {
  const targetId = window.location.hash.slice(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    setTimeout(function () {
      scrollToSection(targetElement);
    }, 0);
  }
});

// ===================================
// Utility Functions
// ===================================

// Debounce function for better performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ===================================
// Analytics (Optional)
// ===================================

// Track section views
function trackSectionView(sectionId) {
  // You can send this data to your analytics service
  console.log(`Section viewed: ${sectionId}`);
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        trackSectionView(entry.target.id);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll("section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

// ===================================
// Accessibility Enhancements
// ===================================

// Add focus management for keyboard users
document.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-nav");
  }
});

document.addEventListener("mousedown", function () {
  document.body.classList.remove("keyboard-nav");
});

// ===================================
// Dynamic Year in Footer (if needed)
// ===================================

function updateFooterYear() {
  const yearElements = document.querySelectorAll("[data-year]");
  const currentYear = new Date().getFullYear();

  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}

document.addEventListener("DOMContentLoaded", updateFooterYear);

// ===================================
// Prevent flash of unstyled content
// ===================================

document.documentElement.style.opacity = "0";
window.addEventListener("load", function () {
  document.documentElement.style.opacity = "1";
  document.documentElement.style.transition = "opacity 0.3s ease";
});

// ===================================
// Console Easter Egg
// ===================================

console.log(
  "%c🎉 Welcome to My Portfolio!",
  "color: #3b82f6; font-size: 20px; font-weight: bold;",
);
console.log("%cThank you for visiting! 👋", "color: #8b5cf6; font-size: 16px;");
console.log(
  "%cFeel free to reach out: your.email@example.com",
  "color: #ec4899; font-size: 14px;",
);
console.log(
  "%cMade with HTML, Tailwind CSS & Vanilla JavaScript ❤️",
  "color: #10b981; font-size: 12px;",
);

// ===================================
// Export functions if needed as module
// ===================================

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    setupMobileMenu,
    setupSmoothScroll,
    setupCardInteractions,
    debounce,
    throttle,
  };
}
