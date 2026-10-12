(function () {
  var onNepalPage = window.location.pathname.indexOf('/nepal-digital-impact/') === 0;
  if (onNepalPage) return;

  if (localStorage.getItem('kw-nepal-banner-dismissed')) return;

  var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  var timer = controller ? setTimeout(function () { controller.abort(); }, 3000) : null;

  fetch('https://ipapi.co/json/', controller ? { signal: controller.signal } : {})
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (timer) clearTimeout(timer);
      if (data && data.country_code === 'NP') {
        showBanner();
      }
    })
    .catch(function () {
      if (timer) clearTimeout(timer);
    });

  function showBanner() {
    var bar = document.createElement('div');
    bar.className = 'region-banner';
    bar.innerHTML =
      '<div class="wrap">' +
      '<p>Looks like you\'re visiting from Nepal. We have a dedicated page for Nepal-based work.</p>' +
      '<div class="region-banner-actions">' +
      '<a href="/nepal-digital-impact/">View Nepal page</a>' +
      '<button type="button" aria-label="Dismiss">&times;</button>' +
      '</div></div>';
    document.body.insertBefore(bar, document.body.firstChild);
    bar.querySelector('button').addEventListener('click', function () {
      bar.remove();
      localStorage.setItem('kw-nepal-banner-dismissed', '1');
    });
  }
})();
