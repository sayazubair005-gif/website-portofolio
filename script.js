
// ========================================
// PORTOFOLIO MUHAMMAD ABDURAHMAN ZUBAIR
// File: script.js
// ========================================


// 1. ANIMASI TEKS BERGANTI
const typingText = document.getElementById("typingText");

const phrases = [
  "Web Development",
  "HTML & CSS",
  "JavaScript",
  "Building Projects"
];

let phraseIndex = 0;
let characterIndex = phrases[0].length;
let deleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentPhrase = phrases[phraseIndex];

  if (deleting) {
    characterIndex--;
  } else {
    characterIndex++;
  }

  typingText.textContent = currentPhrase.substring(
    0,
    characterIndex
  );

  let delay = deleting ? 45 : 85;

  if (!deleting && characterIndex === currentPhrase.length) {
    deleting = true;
    delay = 1300;
  } else if (deleting && characterIndex === 0) {
    deleting = false;

    phraseIndex = (phraseIndex + 1) % phrases.length;

    delay = 350;
  }

  setTimeout(typeEffect, delay);
}

if (typingText) {
  setTimeout(typeEffect, 1200);
}


// 2. MENU NAVIGASI UNTUK HP
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

  const menuItems = navLinks.querySelectorAll("a");

  menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// 3. TAHUN OTOMATIS DI FOOTER
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


// 4. PENANDA MENU SESUAI BAGIAN YANG DIBUKA
const sections = document.querySelectorAll(
  "main section[id]"
);

const navItems = document.querySelectorAll(
  ".nav-link"
);

if ("IntersectionObserver" in window) {

  const sectionObserver = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          navItems.forEach(function (item) {

            const isActive =
              item.getAttribute("href") ===
              "#" + entry.target.id;

            item.classList.toggle("active", isActive);

          });

        }

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

}


// 5. ANIMASI SAAT BAGIAN WEBSITE MUNCUL
const revealTargets = document.querySelectorAll(
  ".section-heading, " +
  ".about-main, " +
  ".fact-card, " +
  ".skill-card, " +
  ".project-card, " +
  ".contact-card"
);

if ("IntersectionObserver" in window) {

  revealTargets.forEach(function (element) {
    element.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    function (entries, observer) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealTargets.forEach(function (element) {
    revealObserver.observe(element);
  });

}
```
