import { gsap, Expo } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { animateHeroBlock } from './hero.js';
// import './sticky-header.js';
import './grid-resizer.js';
import './animate-news-list.js';
import './main-nav.js';

if (
  document.readyState === 'interactive' ||
  document.readyState === 'complete'
) {
  resolve();
} else {
  const resolve = () => {
    document.body.removeAttribute('unresolved');

    gsap.from('header', 1, {
      opacity: 0,
      duration: 1,
      ease: 'linear',
    });

    gsap.from('.page__main', 1, {
      opacity: 0,
      duration: 2,
      delay: 1,
      ease: 'linear',
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    resolve();
    window.dispatchEvent(new Event('resize'));

    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');
    const fourth = document.getElementById('fourth');
    const fifth = document.getElementById('fifth');
    const container = document.getElementById('promo');
    const rect = container.getBoundingClientRect();

    const animate = (element, position) => {
      element.style.transform = `translateX(${position}px)`;
    };

    document.addEventListener('scroll', function (e) {
      const lastKnownScrollPosition = window.scrollY;

      window.requestAnimationFrame(function () {
        animate(first, lastKnownScrollPosition * 0.3);
        animate(second, lastKnownScrollPosition * -0.3);
        animate(third, lastKnownScrollPosition * 0.3);
        animate(fourth, lastKnownScrollPosition * -0.3);
        animate(fifth, lastKnownScrollPosition * 0.3);
      });
    });

    animateHeroBlock();

    if (document.querySelector('.marquee')) {
      document.querySelectorAll('.marquee__part').forEach((element) => {
        console.log(element);
        for (let i = 1; i <= 3; i++) {
          const newEl = element.cloneNode(true);
          const parentEl = element.parentNode;
          element.after(newEl);
        }
      });

      let currentScroll = 0;
      let isScrollingDown = true;

      let tween = gsap
        .to('.marquee__part', {
          xPercent: -100,
          repeat: -1,
          duration: 20,
          ease: 'linear',
        })
        .totalProgress(0.5);

      let tween1 = gsap
        .to('.marquee__part-left', {
          xPercent: 100,
          repeat: -1,
          duration: 20,
          ease: 'linear',
        })
        .totalProgress(0.5);

      gsap.set('.marquee__inner', { xPercent: -50 });

      gsap.fromTo(
        '.start__logo',
        1,
        { ease: Expo.easeOuteaseOut, autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0 },
        0.8
      );
      gsap.fromTo(
        '.start__text',
        1,
        { ease: Expo.easeOuteaseOut, autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0 },
        1.2
      );
      gsap.fromTo(
        '.start__info',
        1,
        { ease: Expo.easeOuteaseOut, autoAlpha: 0, y: 80 },
        { autoAlpha: 1, y: 0 },
        1.4
      );
      gsap.fromTo(
        '.marquee',
        1,
        { ease: Expo.easeOuteaseOut, autoAlpha: 0 },
        { autoAlpha: 1 },
        1.5
      );
    }

    // gsap.registerPlugin(ScrollTrigger);

    // gsap.fromTo(
    //   '.hero',
    //   { autoAlpha: 1, y: 0 },
    //   {
    //     autoAlpha: 0,
    //     y: -100,
    //     ease: 'none',
    //     scrollTrigger: {
    //       toggleActions: 'play pause none reset',
    //       trigger: '.hero',
    //       start: 'top left',
    //       end: 'bottom center',
    //       markers: false,
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   '.promo',
    //   { autoAlpha: 0, y: 100 },
    //   {
    //     autoAlpha: 1,
    //     y: 0,
    //     ease: 'none',
    //     scrollTrigger: {
    //       toggleActions: 'play pause none reset',
    //       trigger: '.promo',
    //       start: 'top 50%',
    //       end: 'bottom center',
    //       markers: false,
    //     },
    //   }
    // );

    const searchFormToggle = document.querySelector('.header__search-btn');
    const searcForm = document.querySelector('.header__search');

    searchFormToggle.addEventListener('click', () => {
      let expanded = searchFormToggle.getAttribute('aria-expanded') === 'true';
      searchFormToggle.setAttribute('aria-expanded', !expanded);
      searchFormToggle.classList.add('search-form__toggle-btn--open');
      searcForm
        .querySelector('.header__search-form')
        .classList.add('is-active');
    });

    document.addEventListener('click', function (e) {
      const target = e.target;
      const its_menu = target == searcForm || searcForm.contains(target);
      const menu_is_active = searcForm
        .querySelector('.header__search-form')
        .classList.contains('is-active');

      if (!its_menu && menu_is_active) {
        searchFormToggle.classList.remove('search-form__toggle-btn--open');
        searcForm
          .querySelector('.header__search-form')
          .classList.remove('is-active');
      }
    });
  });
}
