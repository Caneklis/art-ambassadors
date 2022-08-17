import { gsap } from 'gsap';

let scrollPos = window.scrollY;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

const addClassToHeaderOnScroll = () => {
  gsap.to('.main-nav__list', {
    autoAlpha: 0,
  });
};
// header.classList.add('scroll');
const removeClassToHeaderOnScroll = () => {
  gsap.to('.main-nav__list', {
    autoAlpha: 1,
  });
};
// header.classList.remove('scroll');

window.addEventListener('scroll', function () {
  scrollPos = window.scrollY;

  if (scrollPos >= headerHeight) {
    addClassToHeaderOnScroll();
  } else {
    removeClassToHeaderOnScroll();
  }
});
