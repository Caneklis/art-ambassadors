import { gsap, Expo } from "gsap";

document.querySelectorAll(".marquee__part").forEach((element) => {
  console.log(element);
  for (let i = 1; i <= 5; i++) {
    const newEl = element.cloneNode(true);
    const parentEl = element.parentNode;
    element.after(newEl);
  }
});

let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap
  .to(".marquee__part", {
    xPercent: -100,
    repeat: -1,
    duration: 10,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".marquee__inner", { xPercent: -50 });

gsap.fromTo(
  ".start__logo",
  1,
  { ease: Expo.easeOuteaseOut, autoAlpha: 0, y: 40 },
  { autoAlpha: 1, y: 0 },
  0.8
);
gsap.fromTo(
  ".start__text",
  1,
  { ease: Expo.easeOuteaseOut, autoAlpha: 0, y: 60 },
  { autoAlpha: 1, y: 0 },
  1.2
);
gsap.fromTo(
  ".start__info",
  1,
  { ease: Expo.easeOuteaseOut, autoAlpha: 0, y: 80 },
  { autoAlpha: 1, y: 0 },
  1.4
);
gsap.fromTo(
  ".marquee",
  1,
  { ease: Expo.easeOuteaseOut, autoAlpha: 0 },
  { autoAlpha: 1 },
  1.5
);

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > currentScroll) {
//     isScrollingDown = true;
//   } else {
//     isScrollingDown = false;
//   }

//   gsap.to(tween, {
//     timeScale: isScrollingDown ? 1 : -1,
//   });

//   currentScroll = window.pageYOffset;
// });
