(() => {
  const mobileMenu = document.querySelector('.header-mobile-menu');
  const openMenuBtn = document.querySelector('.header-btn-hamburger');
  const closeMenuBtn = document.querySelector('.header-btn-close');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();})();
// Current page
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
  link.classList.remove('current');
});

if (currentPage === "/index.html") {
  document.querySelector('.nav-link-home').classList.add('current');
} else if (currentPage === "/favorite.html") {
  document.querySelector('.nav-link-fav').classList.add('current');
}
