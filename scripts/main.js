/* ==========================================================================
   Frogverse — Main JavaScript
   Libraries: Bootstrap 5, GSAP + ScrollTrigger, AOS
   ========================================================================== */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // ---- Initialize AOS (Animate On Scroll) ----
  AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,        // animate only once on scroll
    offset: 50,        // trigger 50px before element enters viewport
  });

  // ---- Register GSAP ScrollTrigger ----
  gsap.registerPlugin(ScrollTrigger);

  console.log('Frogverse initialized — Bootstrap 5, GSAP, AOS ready');
});
