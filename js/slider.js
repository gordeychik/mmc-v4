const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  loop: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  breakpoints: {
          1: {
            slidesPerView: 1,
          },
          577: {
            slidesPerView: 2,
          },
          769: {
            slidesPerView: 4,
          },
        },
});

const inputTel = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputTel);