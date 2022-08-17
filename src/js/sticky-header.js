import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 1024px)': function () {
    const showAnim = gsap
      .from('.header', {
        yPercent: -100,
        paused: true,
        duration: 0.5,
      })
      .progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  },
});

// let scrollPos = window.scrollY;
// const header = document.querySelector('header');
// const headerHeight = header.offsetHeight;

// const addClassToHeaderOnScroll = () => {
//   gsap.to('.main-nav__list', {
//     autoAlpha: 0,
//   });
// };
// // header.classList.add('scroll');
// const removeClassToHeaderOnScroll = () => {
//   gsap.to('.main-nav__list', {
//     autoAlpha: 1,
//   });
// };
// // header.classList.remove('scroll');

// window.addEventListener('scroll', function () {
//   scrollPos = window.scrollY;

//   if (scrollPos >= headerHeight) {
//     addClassToHeaderOnScroll();
//   } else {
//     removeClassToHeaderOnScroll();
//   }
// });
