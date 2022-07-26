document.addEventListener('DOMContentLoaded', () => {

  const roomDetailsName = document.querySelectorAll('.details-spoiler');
  const roomDetail = document.querySelectorAll('.rooms .additional-text');

  for (let i = 0; i < 2; i++) {
    roomDetailsName[i].addEventListener('click', function () {
      roomDetail[i].classList.toggle('active');
    });
  }


  gsap.timeline({
    scrollTrigger: {
      trigger: "#rooms-inner-h1-1,#rooms-inner-p-1"
    }
  })
  .fromTo("#rooms-inner-h1-1,#rooms-inner-p-1", {
    y: '-50',
    opacity: 0
  }, {
    y: '0',
    opacity: 1,
    duration: 1.5,
  });



  const roomsAndRates = gsap.utils.toArray('.rooms-card');
  roomsAndRates.forEach(card => {
    gsap.from(card, {
      y: 200,
      opacity: 0.1,
      scrollTrigger: {
        trigger: card,
        scrub: 0,

      }
    })
  });

});