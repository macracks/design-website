console.log("✅ Script loaded successfully.");

// Delay script until DOM is fully ready
window.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM content loaded.");

  const header = document.querySelector("header");
  const hero = document.querySelector(".hero");
  const text = document.querySelector("#test"); // change to your real element’s ID or class

  console.log("🔍 header:", header);
  console.log("🔍 hero:", hero);
  console.log("🔍 text:", text);

  if (!header || !hero) {
    console.warn("⚠️ One or more key elements (header or hero) not found. Check class names.");
  }

  if (!text) {
    console.error("❌ Could not find the element you’re targeting (maybe wrong selector?)");
    return;
  }

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    console.log("🌀 scrollY:", scrollY);

    try {
      if (scrollY > 200) {
        if (!text.classList.contains("scrolled")) {
          console.log("⬆️ Passed 200px — adding class");
          text.classList.add("scrolled");
        }
      } else {
        if (text.classList.contains("scrolled")) {
          console.log("⬇️ Back above 200px — removing class");
          text.classList.remove("scrolled");
        }
      }
    } catch (err) {
      console.error("🔥 Runtime error during scroll event:", err);
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split("/").pop();

  // ✅ Run only on the landing page ******************* Important
  if (!['index.html', 'landing.html', ''].includes(currentPage)) {
    console.log("⏭️ Skipping slideshow — not a landing page");
    return;
  }

  console.log("🎞️ Slideshow initialized for index.html");

  const slides = document.querySelectorAll('.slide');
  const header = document.querySelector('.header');
  let current = 0;
  const fadeDuration = 150; // milliseconds
  const displayDuration = 2500; // milliseconds each slide is fully visible



  // Show the first slide immediately
  slides[current].classList.add('active');
  header.classList.add(slides[current].dataset.theme);



  // Change slides every displayDuration
  setInterval(() => {
    slides[current].classList.remove('active');
    header.classList.remove(slides[current].dataset.theme);

    current = (current + 1) % slides.length;

    slides[current].classList.add('active');
    header.classList.add(slides[current].dataset.theme);
  }, displayDuration);
});

// LANGUAGE SWITCH
const langSwitch = document.querySelector('.lang-switch');
const navLinks = document.querySelectorAll('.nav a:not(.lang-switch)');
let isEnglish = false;

langSwitch.addEventListener('click', () => {
  isEnglish = !isEnglish;
  navLinks.forEach(link => {
    link.textContent = isEnglish ? link.dataset.en : link.dataset.fr;
  });
  langSwitch.textContent = isEnglish ? 'FR' : 'EN';
});



// Force reflow on back navigation to fix arrow/SVG glitches
window.addEventListener('pageshow', () => {
    document.body.offsetHeight; // forces reflow
});

// ---------- HEADER SCROLL SLIDE-UP ----------
document.addEventListener('DOMContentLoaded', () => {
  console.log('[HEADER DEBUG] DOM fully loaded');

  const header = document.querySelector('.header');
  if (!header) {
    console.error('[HEADER DEBUG] ❌ No element with class .header found.');
    return;
  } else {
    console.log('[HEADER DEBUG] ✅ Header found:', header);
  }

  const hero = document.querySelector('.about-hero');

  const updateHeader = () => {
    const headerHeight = header.offsetHeight;
    const triggerPoint = hero ? hero.offsetHeight - headerHeight : 500;
    const scrollY = window.scrollY;

    if (scrollY >= triggerPoint) {
      const translateY = Math.min(scrollY - triggerPoint, headerHeight);
      header.style.transform = `translateY(-${translateY}px)`;
      console.log('[HEADER DEBUG] → Header translating up:', translateY);
    } else {
      header.style.transform = 'translateY(0)';
      console.log('[HEADER DEBUG] → Header at top');
    }
  };

  // Run on scroll
  window.addEventListener('scroll', updateHeader);

  // Run immediately on resize to recalc trigger and transform
  window.addEventListener('resize', updateHeader);

  // Also run once at load to ensure correct initial position
  updateHeader();

  console.log('[HEADER DEBUG] ✅ Scroll & resize listeners attached');
});
