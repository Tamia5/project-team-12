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
})();
// Current page
const navLinks = document.querySelectorAll('.nav-link');
const navLinksMob = document.querySelectorAll('.nav-mobile-link');
const currentLink = window.location.pathname;

for (const link of navLinks) {
    if (link.href.includes(currentLink)) {
        link.classList.add("current");
        break;
    }
}
// Mobile
for (const link of navLinksMob) {
    if (link.href.includes(currentLink)) {
        link.classList.add("current");
        break;
    }
}
