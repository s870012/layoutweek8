const swiper = new Swiper(".hero-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    grid: {
      rows: 1,
    },
    centereSlides: true,
    roundLenghts: true,
    loop: true,
    breakpoints: {
      992: {      
        grid: { 
          rows: 1,
        },
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }
      }
    }
  });
  
  //swiper-lesson-list
  