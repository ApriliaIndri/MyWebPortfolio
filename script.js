document.addEventListener("DOMContentLoaded", function () {
  // Elemen yang akan diketik
  const typingElements = {
    ".typing-text": {
      Skills: "My Skills",
      Portfolio: "Aprilia's Portfolio",
      Contact: "Contact Me 🚀",
      Projects: "My Projects",
      About: "About Me",
    },
    ".typing-about": "About Me",
    ".typing-education": "Education",
  };

  // Efek mengetik umum
  function typeEffect(element, text, speed = 100) {
    if (!element) return;
    let index = 0;
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Jalankan efek mengetik untuk semua elemen yang perlu
  for (const selector in typingElements) {
    const element = document.querySelector(selector);
    const textData = typingElements[selector];
    if (typeof textData === "object") {
      typeEffect(element, textData[document.title] || "");
    } else {
      typeEffect(element, textData, 125);
    }
  }

  // Efek menu muncul satu per satu
  document.querySelectorAll(".menu-item").forEach((item, index) => {
    setTimeout(() => item.classList.add("show"), index * 550);
  });

  // ✨ Efek fade-in pada elemen
  function applyFadeEffect(elements, delay) {
    elements.forEach((el, index) => {
      setTimeout(() => el.classList.add("fade-in"), index * delay);
    });
  }

  applyFadeEffect(document.querySelectorAll(".about-text p, .edu-text"), 300);

  // Efek muncul untuk elemen "About Me"
  const aboutTextContainer = document.querySelector(".about-text");
  if (aboutTextContainer)
    setTimeout(() => aboutTextContainer.classList.add("show"), 500);

  // Efek muncul satu per satu untuk gambar
  function animateImages(selector, delay) {
    document.querySelectorAll(selector).forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = "1";
        img.style.transform = "translateY(0)";
      }, index * delay);
    });
  }

  animateImages(".skills-container img", 400);
  animateImages(".contact-card", 400);

  // Efek fade-in saat elemen pendidikan masuk layar
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".edu-container").forEach((container) => {
    observer.observe(container);
  });

  // Efek fade-in untuk proyek
  const projectsContainer = document.querySelector(".projects-container");
  if (projectsContainer) projectsContainer.classList.add("fade-in");
});
