/**
 * Frogverse — Game Button Helper
 * 
 * Auto-injects the ticket-notch SVG shape into .game-btn elements.
 * Buttons use a scaled SVG (preserveAspectRatio="none").
 * 
 * NOTE: .game-frame does NOT need JS — it uses pure CSS border-image.
 * 
 * Usage:
 *   <button class="game-btn game-btn--gold">
 *     <span class="game-btn__text">Rent</span>
 *   </button>
 */

let _uid = 0;
const uid = (p) => `${p}${++_uid}`;

function buttonSVG() {
  const gid = uid('bg');
  return `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 100 40" fill="none">
  <defs><linearGradient id="${gid}" x1="50" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="var(--btn-fill-top)"/><stop offset="1" stop-color="var(--btn-fill-bottom)"/>
  </linearGradient></defs>
  <path d="M94 0C94 3.314 96.686 6 100 6V34C96.686 34 94 36.686 94 40H6C6 36.686 3.314 34 0 34V6C3.314 6 6 3.314 6 0H94Z" fill="url(#${gid})" stroke="var(--btn-stroke)" stroke-width="2"/>
</svg>`;
}

function initGameButtons() {
  document.querySelectorAll('.game-btn').forEach(btn => {
    if (btn.querySelector('.game-btn__bg')) return;

    const bg = document.createElement('div');
    bg.className = 'game-btn__bg';
    bg.innerHTML = buttonSVG();
    btn.insertBefore(bg, btn.firstChild);

    btn.querySelectorAll(':scope > span').forEach(s => {
      if (!s.classList.contains('game-btn__text')) s.classList.add('game-btn__text');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGameButtons);
} else {
  initGameButtons();
}
