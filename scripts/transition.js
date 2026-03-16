document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.querySelector(".page-transition");

  // Normal page load
  window.addEventListener("load", () => {
    overlay.classList.add("fade-out");
  });

  // Fix for browser back/forward navigation
  window.addEventListener("pageshow", () => {
    overlay.classList.add("fade-out");
  });

  document.querySelectorAll("a").forEach(link => {

    const url = link.href;

    if (!url) return;
    if (!url.startsWith(window.location.origin)) return;

    link.addEventListener("click", e => {

      if (e.metaKey || e.ctrlKey) return;

      e.preventDefault();

      overlay.classList.remove("fade-out");
      overlay.classList.add("fade-in");

      setTimeout(() => {
        window.location.href = url;
      }, 300);

    });

  });

});