document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.querySelector(".page-transition");

  // Fade IN when page loads
  window.addEventListener("load", () => {
    overlay.classList.add("fade-out");
  });

  // Intercept all internal links
  document.querySelectorAll("a").forEach(link => {

    const url = link.href;

    if (!url) return;

    if (url === window.location.href) return;

    if (url.startsWith(window.location.origin)) {

      link.addEventListener("click", e => {

        // allow opening new tabs
        if (e.metaKey || e.ctrlKey) return;

        e.preventDefault();

        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");

        setTimeout(() => {
          window.location.href = url;
        }, 300);

      });

    }

  });

});