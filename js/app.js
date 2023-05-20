const solutionsEl = document.querySelector('.solutions');
const allSolutions = document.querySelectorAll('.feature');

solutionsEl.addEventListener('click', (e) => {
  const selected = e.target.closest('.feature');
  if (!selected) return;
  if (selected.classList.contains('open')) {
    selected.classList.remove('open');
    return;
  }
  for (let solution of allSolutions) {
    solution.classList.remove('open');
  }
  selected.classList.add('open');
});

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      //   dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      700: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },

      1400: {
        slidesPerView: 4,
      },
    },
  });
}

initSwiper();
