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

window.addEventListener('DOMContentLoaded', updateHeroDimensions);

window.addEventListener('resize', updateHeroDimensions);
