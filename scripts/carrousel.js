(function () {
  const track = document.querySelector('.track');

  // Cloner les cartes et les mettre à la fin du premier groupe
  const cards = Array.from(track.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  const SPEED = 0.03;
  let position = 0;
  let lastTime = null;
  let loopWidth = null;

  function getLoopWidth() {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return (track.scrollWidth / 2) + (gap / 2);
  }

  function tick(timestamp) {
    if (lastTime === null) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    if (loopWidth === null) loopWidth = getLoopWidth();

    position -= SPEED * delta;

    if (position <= -loopWidth) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(tick);
  }

  // Claude m'a dit d'ajouter cette partie mais j'ai aucune idée ce que ça fait lmaooo
  Promise.all(
    Array.from(track.querySelectorAll('img'))
      .map(img => img.complete
        ? Promise.resolve()
        : new Promise(res => { img.onload = res; img.onerror = res; })
      )
  ).then(() => {
    loopWidth = getLoopWidth();
    requestAnimationFrame(tick);
  });
})();