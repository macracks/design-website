function updateHeroDimensions() {
    const hero = document.querySelector('.hero');
    const svg = document.querySelector('.project-title');

    if (!hero || !svg) return;

    let svgHeightForCalc;

    if (window.matchMedia("(min-aspect-ratio: 1.3/1)").matches) {
        // Wide layout
        svgHeightForCalc = svg.getBoundingClientRect().width;
        hero.style.height = `calc(100vh)`;
        hero.style.maxWidth = `calc(100vw - ${svgHeightForCalc + 50}px)`; 
        
    } else {
        // Narrow layout
        svgHeightForCalc = svg.getBoundingClientRect().height;
        hero.style.height = `calc(100vh - ${svgHeightForCalc + 40}px)`;
        hero.style.maxWidth = '100%';
    }

    const info = document.querySelector('.information');
    if (info) {
        if (window.matchMedia("(min-aspect-ratio: 1.3/1)").matches) {
            info.style.transform = `translateY(-${svgHeightForCalc}px)`;
        } else {
            info.style.transform = ''; // reset when returning to narrow
        }
    }

    const pictures = document.querySelector('.project-pictures');
    if (pictures) {
        if (window.matchMedia("(min-aspect-ratio: 1.3/1)").matches) {
            pictures.style.transform = `translateY(-${svgHeightForCalc}px)`;
        } else {
            pictures.style.transform = ''; // reset when returning to narrow
        }
    }

    const footer = document.querySelector('.footer');
    if (footer) {
        if (window.matchMedia("(max-aspect-ratio: 1.3/1)").matches) {
            footer.style.marginTop = '15px';
        } else {
            footer.style.marginTop = '-75px';
        }
        
    }

}

updateHeroDimensions();

window.addEventListener('DOMContentLoaded', () => {
    updateHeroDimensions();
  });
  
window.addEventListener('load', updateHeroDimensions);
  
window.addEventListener('resize', updateHeroDimensions);
  




//DATES
document.addEventListener("DOMContentLoaded", () => {
    // French date
    const dateSpanFR = document.getElementById('current-date');
    if (dateSpanFR) {
      const todayFR = new Date();
      const optionsFR = { year: 'numeric', month: 'long', day: 'numeric' };
      dateSpanFR.textContent = todayFR.toLocaleDateString('fr-FR', optionsFR);
    }
  
    // English date
    const dateSpanEN = document.getElementById('current-date-en');
    if (dateSpanEN) {
      const todayEN = new Date();
      const optionsEN = { year: 'numeric', month: 'long', day: 'numeric' };
      dateSpanEN.textContent = todayEN.toLocaleDateString('en-US', optionsEN);
    }
  });