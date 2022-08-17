import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);
gsap.set('.news__list-item', { autoAlpha: 0, y: 20 });

ScrollTrigger.batch('.news__list-item', {
  interval: 0.1,
  start: 'top bottom-=80px',

  onEnter: (batch) => {
    gsap.to(batch, {
      autoAlpha: 1,
      stagger: 0.15,
      overwrite: true,
      y: 0,
      ease: 'power4.out',
    });
  },

  onLeaveBack: (batch) =>
    gsap.to(batch, {
      autoAlpha: 0,
      y: 20,
      stagger: 0.15,
    }),
});
