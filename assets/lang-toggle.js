(function () {
  var toggle = document.querySelector('.lang-toggle');
  var en = document.getElementById('lang-en');
  var ne = document.getElementById('lang-ne');
  if (!toggle || !en || !ne) return;

  var buttons = toggle.querySelectorAll('button');

  toggle.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-lang]');
    if (!btn) return;

    var lang = btn.getAttribute('data-lang');
    en.hidden = lang !== 'en';
    ne.hidden = lang !== 'ne';

    buttons.forEach(function (b) {
      var active = b === btn;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  });
})();
