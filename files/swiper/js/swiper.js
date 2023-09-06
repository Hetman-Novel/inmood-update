new Swiper('#top-sales-slider', {

   // Стрелки
   navigation: {
      prevEl: '.product-slider__prev',
      nextEl: '.product-slider__next',
   },

   // Количество слайдов для показа
   slidesPerView: 3, // Можно указывать не только целые числа, а и к примеру 2.2 2.3 2.5 2.8
   //slidesPerView: 'auto',

   // Количество пролистываемых слайдов
   slidesPerGroup: 3,

   // Отключение функционала
   // если слайдов меньше чем нужно
   watchOverflow: true,

   autoHeight: true,

   // Отступ между слайдами
   spaceBetween: 39,

   // Скорость
   speed: 800,

   // Эффекты переключения слайдер
   effect: 'slide',

   // Брейк поинты (адаптив)
   // Ширина экрана
   // Работают по принципу мобайл ферст (от меньшего к большему)
   breakpoints: {
      0: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      481: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      1025: {
         slidesPerView: 3,
         slidesPerGroup: 3,
         spaceBetween: 39,
      }
   },
});

if (window.matchMedia("(min-width: 1024px)").matches) {
   new Swiper('#news-preview-slider', {

      // Стрелки
      navigation: {
         prevEl: '.news-preview-slider__prev',
         nextEl: '.news-preview-slider__next',
      },

      // Автовысота
      //autoHeight: true,

      // Количество слайдов для показа
      slidesPerView: 2, // Можно указывать не только целые числа, а и к примеру 2.2 2.3 2.5 2.8
      //slidesPerView: 'auto',

      // Количество пролистываемых слайдов
      slidesPerGroup: 2,

      // Отключение функционала
      // если слайдов меньше чем нужно
      watchOverflow: true,

      autoHeight: true,

      // Отступ между слайдами
      spaceBetween: 38,

      // Скорость
      speed: 800,

      // Эффекты переключения слайдер
      effect: 'slide',

      // Брейк поинты (адаптив)
      // Ширина экрана
      // Работают по принципу мобайл ферст (от меньшего к большему)
      breakpoints: {
         0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
         },
         481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
         },
         1025: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 39,
         }
      },
   });
}

new Swiper('#in-interior-slider', {

   // Стрелки
   navigation: {
      prevEl: '.in-interior-slider__prev',
      nextEl: '.in-interior-slider__next',
   },

   // Автовысота
   //autoHeight: true,

   // Количество слайдов для показа
   //slidesPerView: 4.5, // Можно указывать не только целые числа, а и к примеру 2.2 2.3 2.5 2.8
   slidesPerView: 'auto',

   // Количество пролистываемых слайдов
   slidesPerGroup: 1,

   // Отключение функционала
   // если слайдов меньше чем нужно
   watchOverflow: true,

   autoHeight: true,

   // Отступ между слайдами
   spaceBetween: 40,

   //centeredSlides: true,
   //loop: true,

   // Скорость
   speed: 800,

   // Эффекты переключения слайдер
   effect: 'slide',

   // Брейк поинты (адаптив)
   // Ширина экрана
   // Работают по принципу мобайл ферст (от меньшего к большему)
   breakpoints: {
      0: {
         //slidesPerView: 1.2,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      481: {
         //slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      801: {
         loop: true,
         //slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      1025: {
         //slidesPerView: 3.8,
         slidesPerGroup: 1,
         centeredSlides: true,
         spaceBetween: 40,
         loop: true,
      }
   },
});

new Swiper('#product-in-detail-slider', {

   // Стрелки
   navigation: {
      prevEl: '.product-in-detail-slider__prev',
      nextEl: '.product-in-detail-slider__next',
   },

   // Количество слайдов для показа
   //slidesPerView: 4.5, // Можно указывать не только целые числа, а и к примеру 2.2 2.3 2.5 2.8
   //slidesPerView: 'auto',

   // Количество пролистываемых слайдов
   slidesPerGroup: 1,

   // Отключение функционала
   // если слайдов меньше чем нужно
   watchOverflow: true,

   // Автовысота
   autoHeight: true,

   // Отступ между слайдами
   spaceBetween: 40,

   //centeredSlides: true,
   //loop: true,

   // Скорость
   speed: 800,

   // Эффекты переключения слайдер
   effect: 'slide',

   // Брейк поинты (адаптив)
   // Ширина экрана
   // Работают по принципу мобайл ферст (от меньшего к большему)
   breakpoints: {
      0: {
         slidesPerView: 1.2,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      481: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      801: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      1025: {
         loop: true,
         centeredSlides: true,
         slidesPerView: 1.9,
         slidesPerGroup: 1,
         spaceBetween: 40,
      }
   },
});

new Swiper('.you-get-slider', {
   slidesPerView: 2,
   slidesPerGroup: 1,
   watchOverflow: true,
   autoHeight: true,
   spaceBetween: 40,
   speed: 800,
   effect: 'slide',

   breakpoints: {
      0: {
         slidesPerView: 1.14,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      576: {
         slidesPerView: 1.52,
         slidesPerGroup: 1,
         spaceBetween: 22,
      },
      860: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 40,
      }
   },
});