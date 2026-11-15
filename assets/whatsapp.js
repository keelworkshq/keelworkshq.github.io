(function () {
  var NUMBER = '918431914296';
  var onNepalPage = window.location.pathname.indexOf('/nepal-digital-impact/') === 0;
  var message = onNepalPage
    ? "Hello Keelworks, I found you through your Nepal page and I'd like to talk about "
    : "Hello Keelworks, I found you through your website and I'd like to talk about ";

  var link = document.createElement('a');
  link.className = 'whatsapp-float';
  link.href = 'https://wa.me/' + NUMBER + '?text=' + encodeURIComponent(message);
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', 'Chat with Keelworks on WhatsApp');
  link.innerHTML =
    '<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" focusable="false">' +
    '<path fill="currentColor" d="M16.04 3C9.4 3 4 8.33 4 14.9c0 2.1.56 4.15 1.62 5.95L4 29l8.38-2.17a12.2 12.2 0 0 0 3.66.56C22.68 27.39 28 22.06 28 15.5 28 8.93 22.68 3 16.04 3zm0 22.2c-1.15 0-2.28-.2-3.36-.56l-.24-.08-4.98 1.29 1.33-4.8-.16-.25A9.86 9.86 0 0 1 6.2 14.9c0-5.37 4.42-9.73 9.84-9.73 5.42 0 9.76 4.36 9.76 10.33 0 5.37-4.34 9.7-9.76 9.7zm5.39-7.27c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.71.22 1.36.19 1.88.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35z"/>' +
    '</svg><span>WhatsApp</span>';

  document.body.appendChild(link);
})();
