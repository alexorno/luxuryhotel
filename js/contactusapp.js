document.addEventListener('DOMContentLoaded', () => {

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.inout"
    }
  });

  tl.fromTo(".title h1,.title p", {
    y: '-50',
    opacity: 0,
  }, {
    y: '0',
    opacity: 1,
    duration: 1.5,
  });

});