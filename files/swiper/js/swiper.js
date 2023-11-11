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

new Swiper('.page-contect__slider', {
   //slidesPerView: 2,
   autoHeight: false,
   spaceBetween: 40,
   speed: 800,
   effect: 'slide',

   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 20,
         autoHeight: false,
         slidesPerColumn: 2,
         grid: {
            rows: 2,
         },
      },
      576: {
         slidesPerView: 1,
         spaceBetween: 40,
         autoHeight: false,
         slidesPerColumn: 2,
         grid: {
            rows: 2,
         },
      },
      860: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 40,
         autoHeight: true,
         grid: {
            rows: 1,
         },
      }
   },
});


var scrollEvents = ['wheel', 'mousewheel']
function freezeScroll() {
   for (var i = 0; i < arguments.length; i++) {
      elem = arguments[i];
      let func = preventScrollEventFunc(elem);
      let options = {passive: false};
      $(elem).on('mouseenter', function() {
         onWheel(window, func, options);
      }).on('mouseleave', function() {
         removeOnWheel(window, func);
      });
   }
}
// Отменить скролл страницы, если элемент selector прокручен до упора
function preventScrollEventFunc(selector) {
   let elem = $(selector);
   function preventScroll(e) {
      let offset = e.wheel || e.wheelDelta;
      let crossingUpper = elem.scrollTop() == 0 && offset > 0;
      let crossingDown = (elem[0].scrollHeight - elem.scrollTop() ==
         elem[0].clientHeight && offset < 0);
      if (crossingUpper || crossingDown) {
         e.preventDefault()
      }
   }
   return preventScroll;
}
// Повесить обработчик func для событий wheel и mousewheel у elem
function onWheel(elem, func, options) {
   options = options || {};
   scrollEvents.forEach(function(item, i, arr) {
      elem.addEventListener(item, func, options);
   });
}
// Убрать обработчик func для событий wheel и mousewheel у elem
function removeOnWheel(elem, func, options) {
   options = options || {};
   scrollEvents.forEach(function(item, i, arr) {
      elem.removeEventListener(item, func, options);
   });
}


document.addEventListener("DOMContentLoaded", function() {

   //freezeScroll('#div', '#div2', #div3', '#div...');
   freezeScroll('#showroom-area-slider');

});

const showroom_area_slider = document.querySelector('.showroom-area-slider')
new Swiper(showroom_area_slider, {
   slidesPerView: 2.03,
   slidesPerGroup: 1,
   watchOverflow: true,
   autoHeight: false,
   centeredSlides: true,
   loop: true,
   spaceBetween: 25,
   //initialSlide: 1,
   speed: 1200,
   effect: 'slide',
   mousewheel: {
      sensitivity: 3,
      eventsTarget: showroom_area_slider,
   },
   breakpoints: {
      0: {
         slidesPerView: 1.14,
         slidesPerGroup: 1,
         spaceBetween: 20,
      },
      576: {
         slidesPerView: 1.6,
         slidesPerGroup: 1,
         spaceBetween: 25,
      },
      800: {
         slidesPerView: 2.03,
         slidesPerGroup: 1,
         spaceBetween: 25,
      }
   }

})
//document.querySelector('.showroom-area-slider').addEventListener("wheel", (event) => {});

/*$('#js-showroom-area').bind('mousewheel DOMMouseScroll', function(e) {
   var scrollTo = null;
   if (e.type == 'mousewheel') {
      scrollTo = (e.originalEvent.wheelDelta * -1);
   } else if (e.type == 'DOMMouseScroll') {
      scrollTo = 40 * e.originalEvent.detail;
   }
   if (scrollTo) {
      e.preventDefault();
      $(this).scrollTop(scrollTo + $(this).scrollTop());
   }
});*/