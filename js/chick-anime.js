document.querySelectorAll('.popUp').forEach(popUp => {
  popUp.addEventListener('click', e => {
    e.preventDefault();

    popUp.classList.add('is-animating');

    const direction = Math.random() > 0.5 ? 1 : -1;
    const distance = 48; // 横移動量（px）

    popUp.animate(
      [
        {
          transform: 'translate(0, 0) rotate(0deg)',
          opacity: 1
        },
        {
          transform: `translate(${direction * 16}px, 2px) rotate(${direction * 18}deg)`
        },
        {
          transform: `translate(${direction * 32}px, 4px) rotate(${direction * -12}deg)`
        },
        {
          transform: `translate(${direction * distance}px, 6px) rotate(0deg)`,
          opacity: 0
        }
      ],
      {
        duration: 1400,
        easing: 'ease-out',
        fill: 'forwards'
      }
    );

    // アニメ後に遷移
    setTimeout(() => {
      const link = popUp.closest('a');
      if (!link) return;

      const href =
        link.getAttribute('href') ||
        link.getAttribute('xlink:href');

      if (href) location.href = href;
    }, 1300);
  });
});