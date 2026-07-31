document.addEventListener('DOMContentLoaded', function () {
  var el = document.querySelector('[data-typewriter]');
  if (!el) return;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  var text = el.textContent;
  el.textContent = '';
  el.classList.add('is-typing');

  var i = 0;
  var speed = 35;

  function tick() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(tick, speed);
    } else {
      el.classList.remove('is-typing');
    }
  }
  tick();
});
