
  (function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards   = document.querySelectorAll('.project-card');
 
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
 
        const filter = btn.dataset.filter;
 
        cards.forEach(card => {
          if (filter === 'tous') {
            card.style.display = '';
          } else {
            const tags = card.dataset.tags ? card.dataset.tags.split(' ') : [];
            card.style.display = tags.includes(filter) ? '' : 'none';
          }
        });
      });
    });
  })();