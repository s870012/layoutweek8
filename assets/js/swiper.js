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

//swiper-catalog
const swiper3 = new Swiper(".swiper-catalog", {
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  grid: {
    fill:"row",
    rows: 2,
  },
  spaceBetween: 24,
  breakpoints: {
    992: {      
      grid: { 
        rows: 4,
      },
      slidesPerView: 2,
    }
  }
});

//teacher
const swiper4 = new Swiper(".swiper-teacher", {
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  grid: {
    rows: 1,
  },
  spaceBetween: 24,
  breakpoints: {
    767: {      
      grid: { 
        rows: 1,
      },
      slidesPerView: 2,
    },
    1200: {      
      grid: { 
        rows: 1,
      },
      slidesPerView: 3,
    }
  }
});

const swiper5 = new Swiper(".swiper-course", {
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  grid: {
    rows: 1,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  slidesPerView: 1.5, 
  spaceBetween: 0,
  breakpoints: {
    576: {      
      grid: { 
        rows: 1,
      },
      slidesPerView: 3,
    },
    992: {      
      grid: { 
        rows: 1,
      },
      slidesPerView: 6,
      spaceBetween: 16,
    }
  }
});