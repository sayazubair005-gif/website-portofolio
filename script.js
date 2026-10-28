
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
/* ANIMASI MUNCUL SAAT SCROLL */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* BERANDA TETAP TERLIHAT */
.hero-content.reveal {
    opacity: 1;
    transform: none;
}

/* EFEK HOVER KARTU */
.skill-card,
.project-card,
.fact-card {
    transition:
        transform 0.35s ease,
        border-color 0.35s ease,
        box-shadow 0.35s ease;
}

.skill-card:hover,
.project-card:hover,
.fact-card:hover {
    transform: translateY(-7px);
    border-color: rgba(96, 165, 250, 0.65);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

/* EFEK HOVER TOMBOL */
.btn {
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(96, 165, 250, 0.25);
}

/* EFEK MENU NAVIGASI */
.nav-link {
    transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--accent);
}

/* ANIMASI TEKS BERGANTI */
#typingText {
    display: inline-block;
    color: var(--accent);
    transition: opacity 0.2s ease;
}

/* PENGATURAN AKSESIBILITAS */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }

    .reveal {
        opacity: 1;
        transform: none;
    }
}
