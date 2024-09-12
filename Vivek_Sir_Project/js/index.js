var swiper1 = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false
  },
  allowTouchMove: false,
  breakpoints: {
      768: {
          slidesPerView: 4,
          spaceBetween: 30
      }
  }
});


// Initialize Swiper for testimonials
const swiper = new Swiper('.swiper-container2', {
  loop: true,
  autoplay: {
      delay: 3000000, // 3 seconds between slides
      disableOnInteraction: false
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  }
});



