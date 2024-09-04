//hero-swiper
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
  
  //swiper-donate
  const swiper1 = new Swiper(".swiper-donate", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    grid: {
      rows: 1,
    },
    slidesPerView: 1,
    spaceBetween: 24,
  });

  //swiper-toplist
  const swiper2 = new Swiper(".swiper-toplist", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    grid: {
      rows: 1,
    },
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      992: {      
        grid: { 
          rows: 1,
        },
        slidesPerView: 4,
        navigation: {
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
          }
      }
    }
  });