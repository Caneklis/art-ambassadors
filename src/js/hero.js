import { gsap, Expo, TweenMax, Linear } from 'gsap';
import { getRandomNumber } from './utils.js';

const GREEN_COLOR = 'var(--s-green)';
const BLACK_COLOR = 'var(--b-black)';
const GRAY_COLOR = 'var(--s-gray)';

const animateHeroBlock = () => {
  gsap.fromTo(
    '.hero',
    1,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 1, delay: 1 }
  );

  gsap.to('.hero__article h1, .hero__article h2', 1, {
    color: BLACK_COLOR,
    delay: 2,
    ease: Linear.easeNone,
  });

  gsap.to('.hero__article h2 span span', 1, {
    color: GREEN_COLOR,
    delay: 2,
    ease: Linear.easeNone,
    onComplete: () => {
      const staggers = document.querySelectorAll('.stagger');

      for (let i = 0; i < staggers.length; i++) {
        setTimeout(() => {
          animateMe(staggers[i]);
        }, 2000);
      }
    },
  });

  const animateMe = (box) => {
    TweenMax.fromTo(
      box,
      getRandomNumber(1, 2),
      { color: GRAY_COLOR },
      {
        color: GREEN_COLOR,
        delay: getRandomNumber(1, 6),
        repeatDelay: getRandomNumber(1, 9),
        repeat: -1,
        yoyo: true,
        ease: Linear.easeNone,
        onCompleteParams: [box],
      }
    );
  };
};

export { animateHeroBlock };
