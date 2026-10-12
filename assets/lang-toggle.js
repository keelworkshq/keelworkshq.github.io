(function () {
  var toggle = document.querySelector('.lang-toggle');
  var en = document.getElementById('lang-en');
  var ne = document.getElementById('lang-ne');

  if (!toggle || !en || !ne) return;

  var buttons = toggle.querySelectorAll('button[data-lang]');
  var chromeStrings = document.querySelectorAll('[data-en][data-ne]');

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ne') return;

    en.hidden = lang !== 'en';
    ne.hidden = lang !== 'ne';

    document.documentElement.lang = lang;

    buttons.forEach(function (button) {
      var active = button.getAttribute('data-lang') === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    chromeStrings.forEach(function (el) {
      el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ne');
    });
  }

  toggle.addEventListener('click', function (event) {
    var button = event.target.closest('button[data-lang]');
    if (!button || !toggle.contains(button)) return;
    setLanguage(button.getAttribute('data-lang'));
  });

  setLanguage('en');
})();
