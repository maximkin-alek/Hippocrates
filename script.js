const headerButton = document.querySelector('.header__mobile-button');
const mobileMenu = document.querySelector('.header__mobile-menu');

function toggleMobileMenu() {
  headerButton.classList.toggle('header__mobile-button_open');
  mobileMenu.classList.toggle('header__mobile-menu_is-open');
}
headerButton.addEventListener('click', toggleMobileMenu);
