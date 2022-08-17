import { ScrollLock } from '../components/scroll-lock/js/scroll-lock.js';

(() => {
  const menuButton = document.querySelector('.main-nav__toggle');
  const menuList = document.querySelector('.main-nav__list');
  const body = document.querySelector('body');

  menuButton.addEventListener('click', () => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('main-nav__toggle--open');
    menuList.classList.toggle('main-nav__list--open');
    menuList.style.marginTop = `${headerHeight}px`;
    body.classList.toggle('page__body--fixed');
    if (menuList.classList.contains('main-nav__list--open')) {
      window.scrollLock.disableScrolling();
    } else {
      window.scrollLock.enableScrolling();
    }
  });
})();
