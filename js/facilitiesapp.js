document.addEventListener('DOMContentLoaded', () => {
    gsap.timeline({
        scrollTrigger: {
          trigger: "#facilities-inner-h1-1,#facilities-inner-p-1"
        }
      })
      .fromTo("#facilities-inner-h1-1,#facilities-inner-p-1", {
        y: '-50',
        opacity: 0
      }, {
        y: '0',
        opacity: 1,
        duration: 1.5,
      });
  
      
    const facilitiesCards = gsap.utils.toArray('.facilitities-inner-card');
    facilitiesCards.forEach(card => {
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