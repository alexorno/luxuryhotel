'use strict'

document.addEventListener('DOMContentLoaded', function () {

  const scrollDown = document.querySelector('.awelcomepage-scroll-inner');
  const firstSlideScroll = document.querySelector('.roomtypes-inner h1') || document.querySelector('.facilities h1') || document.querySelector('.rooms h1');

  scrollDown.addEventListener('click', function () {
    firstSlideScroll.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
// swiper
  const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  //   animations
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.inout"
    }
  });
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: "restart complete restart reset",
    start: "top bottom",
    end: "center center"
  });
  

  tl.fromTo('.awelcomepage', {
    x: '-500px',
    opacity: '0',
  }, {
    x: '0px',
    opacity: '1',
    duration: 1,
    stagger: 0.2
  });


  const roomTypesLeft = gsap.utils.toArray('.roomtypes-inner-card-left');

  roomTypesLeft.forEach(roomTypes => {
    gsap.from(roomTypes, {
      x: -200,
      scrollTrigger: {
        trigger: roomTypes,
        scrub: 0,

      }
    })
  });


  gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-inner h1"
      }
    })
    .fromTo(".testimonials-inner h1 ,.testimonials-inner p ,.testimonials-inner p1", {
      y: '-50',
      opacity: 0
    }, {
      y: '0',
      opacity: 1,
      duration: 1.5,
    });

});