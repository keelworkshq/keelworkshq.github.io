(function () {
  var switcher = document.querySelector('.region-switch');
  if (!switcher) return;

  var toggle = switcher.querySelector('.region-switch-toggle');
  var menu = switcher.querySelector('.region-switch-menu');

  function open() {
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (menu.classList.contains('is-open')) {
      close();
    } else {
      open();
    }
  });

  document.addEventListener('click', function (e) {
    if (!switcher.contains(e.target)) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
