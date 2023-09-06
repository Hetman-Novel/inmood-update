jQuery(document).ready(function($) {
   $('#phone').phonecode({
      preferCo: 'ua'
   });

   $('.product-in-detail__slide-content video').on('click', function() {
      $(this).prop("controls", true);
      $(this).parent().addClass('this-play-video');
   });
});

const video_review_video = document.getElementById('video-review-video');
const video_review_title = document.getElementById('video-review-title');
const video_review_bg_image = document.getElementById('video-review-bg-image');
const video_review_btn_play = document.getElementById('video-review-btn-play');
if (video_review_video) {
   video_review_btn_play.addEventListener('click', () => {
      video_review_video.classList.add('play');
      video_review_video.play();
      video_review_title.remove();
      video_review_bg_image.remove();
      video_review_btn_play.remove();
   });
}

function dynamicAdapt() {
    // Dynamic Adapt v.1
    // HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
    // e.x. data-da="item, 2, 991"
    // Andrikanych Yevhen 2020
    // https://www.youtube.com/c/freelancerlifestyle
 
    "use strict";
 
    (function () {
       let originalPositions = [];
       let daElements = document.querySelectorAll('[data-da]');
       let daElementsArray = [];
       let daMatchMedia = [];
       //Заполняем массивы
       if (daElements.length > 0) {
          let number = 0;
          for (let index = 0; index < daElements.length; index++) {
             const daElement = daElements[index];
             const daMove = daElement.getAttribute('data-da');
             const daArray = daMove.split(',');
             const daPlace = daArray[1] ? daArray[1].trim() : 'last';
             const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
             if (daArray.length > 0) {
                daElement.setAttribute('data-da-index', number);
                //Заполняем массив первоначальных позиций
                originalPositions[number] = {
                   "parent": daElement.parentNode,
                   "index": indexInParent(daElement)
                };
                //Заполняем массив элементов 
                daElementsArray[number] = {
                   "element": daElement,
                   "destination": document.querySelector('.' + daArray[0].trim()),
                   "place": daPlace,
                   "breakpoint": daBreakpoint
                }
                number++;
             }
          }
          dynamicAdaptSort(daElementsArray);
 
          //Создаем события в точке брейкпоинта
          for (let index = 0; index < daElementsArray.length; index++) {
             const el = daElementsArray[index];
             const daBreakpoint = el.breakpoint;
             const daType = "max"; //Для MobileFirst поменять на min
 
             daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
             daMatchMedia[index].addListener(dynamicAdapt);
          }
       }
       //Основная функция
       function dynamicAdapt(e) {
          for (let index = 0; index < daElementsArray.length; index++) {
             const el = daElementsArray[index];
             const daElement = el.element;
             const daDestination = el.destination;
             const daPlace = el.place;
             const daBreakpoint = el.breakpoint;
             const daClassname = "_dynamic_adapt_" + daBreakpoint;
 
             if (daMatchMedia[index].matches) {
                //Перебрасываем элементы
                if (!daElement.classList.contains(daClassname)) {
                   let actualIndex = indexOfElements(daDestination)[daPlace];
                   if (daPlace === 'first') {
                      actualIndex = indexOfElements(daDestination)[0];
                   } else if (daPlace === 'last') {
                      actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
                   }
                   daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
                   daElement.classList.add(daClassname);
                }
             } else {
                //Возвращаем на место
                if (daElement.classList.contains(daClassname)) {
                   dynamicAdaptBack(daElement);
                   daElement.classList.remove(daClassname);
                }
             }
          }
          customAdapt();
       }
 
       //Вызов основной функции
       dynamicAdapt();
 
       //Функция возврата на место
       function dynamicAdaptBack(el) {
          const daIndex = el.getAttribute('data-da-index');
          const originalPlace = originalPositions[daIndex];
          const parentPlace = originalPlace['parent'];
          const indexPlace = originalPlace['index'];
          const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
          parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
       }
       //Функция получения индекса внутри родителя
       function indexInParent(el) {
          var children = Array.prototype.slice.call(el.parentNode.children);
          return children.indexOf(el);
       }
       //Функция получения массива индексов элементов внутри родителя 
       function indexOfElements(parent, back) {
          const children = parent.children;
          const childrenArray = [];
          for (let i = 0; i < children.length; i++) {
             const childrenElement = children[i];
             if (back) {
                childrenArray.push(i);
             } else {
                //Исключая перенесенный элемент
                if (childrenElement.getAttribute('data-da') == null) {
                   childrenArray.push(i);
                }
             }
          }
          return childrenArray;
       }
       //Сортировка объекта
       function dynamicAdaptSort(arr) {
          arr.sort(function (a, b) {
             if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
          });
          arr.sort(function (a, b) {
             if (a.place > b.place) { return 1 } else { return -1 }
          });
       }
       //Дополнительные сценарии адаптации
       function customAdapt() {
          const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
       }
    }());
} dynamicAdapt();

function nSpollers() {
   // Spollers
   const spollersArray = document.querySelectorAll('[data-spollers]');
   if (spollersArray.length > 0) {
      // Получение обычных спойлеров
      const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
         return !item.dataset.spollers.split(",")[0];
      });
      // Инициализация обычных спойлеров
      if (spollersRegular.length > 0) {
         initSpollers(spollersRegular);
      }

      // Получение спойлеров с медиа запросами
      const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
         return item.dataset.spollers.split(",")[0];
      });

      // Инициализация спойлеров с медиа запросами
      if (spollersMedia.length > 0) {
         const breakpointsArray = [];
         spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
         });

         // Получаем уникальные брейкпоинты
         let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
         });
         mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
         });

         // Работаем с каждым брекпоинтом
         mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            // Обьекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function (item) {
               if (item.value === mediaBreakpoint && item.type === mediaType) {
                  return true;
               }
            });
            // Событие
            matchMedia.addListener(function () {
               initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
         });
      }
      // Инициализация
      function initSpollers(spollersArray, matchMedia = false) {
         spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
               spollersBlock.classList.add('_init');
               initSpollerBody(spollersBlock);
               spollersBlock.addEventListener("click", setSpollerAction);
            } else {
               spollersBlock.classList.remove('_init');
               initSpollerBody(spollersBlock, false);
               spollersBlock.removeEventListener("click", setSpollerAction);
            }
         });
      }
      // Работа с контентом
      function initSpollerBody(spollersBlock, hideSpollerBody = true) {
         const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
         if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
               if (hideSpollerBody) {
                  spollerTitle.removeAttribute('tabindex');
                  if (!spollerTitle.classList.contains('_active')) {
                     spollerTitle.nextElementSibling.hidden = true;
                  }
               } else {
                  spollerTitle.setAttribute('tabindex', '-1');
                  spollerTitle.nextElementSibling.hidden = false;
               }
            });
         }
      }
      function setSpollerAction(e) {
         const el = e.target;
         if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
               if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                  hideSpollersBody(spollersBlock);
               }
               spollerTitle.classList.toggle('_active');
               _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
         }
      }
      function hideSpollersBody(spollersBlock) {
         const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
         if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
         }
      }
   }

   // SlideToggle
   let _slideUp = (target, duration = 500) => {
      if (!target.classList.contains('_slide')) {
         target.classList.add('_slide');
         target.style.transitionProperty = 'height, margin, padding';
         target.style.transitionDuration = duration + 'ms';
         target.style.height = target.offsetHeight + 'px';
         target.offsetHeight;
         target.style.overflow = 'hidden';
         target.style.height = 0;
         target.style.paddingTop = 0;
         target.style.paddingBottom = 0;
         target.style.marginTop = 0;
         target.style.marginBottom = 0;
         window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
         }, duration);
      }
   }
   let _slideDown = (target, duration = 500) => {
      if (!target.classList.contains('_slide')) {
         target.classList.add('_slide');
         if (target.hidden) {
            target.hidden = false;
         }
         let height = target.offsetHeight;
         target.style.overflow = 'hidden';
         target.style.height = '0';
         target.style.paddingTop = '0';
         target.style.paddingBottom = '0';
         target.style.marginTop = '0';
         target.style.marginBottom = '0';
         target.offsetHeight;
         target.style.transitionProperty = 'height, margin, padding';
         target.style.transitionDuration = duration + 'ms';
         target.style.height = height + 'px';
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
         }, duration);
      }
   }
   let _slideToggle = (target, duration = 500) => {
      if (target.hidden) {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
} nSpollers();

const productConfiguratorMilProductBlock = document.querySelectorAll('.product-configurator__milProductBlock')
if (productConfiguratorMilProductBlock) {

   productConfiguratorMilProductBlock.forEach(prodConfigSrc => {
      prodConfigSrc.addEventListener("click", function () {
         document.getElementById("product-configurator-big").src = this.getAttribute('data-src');
      });
   });

   const tabs = document.getElementById('product-configurator-mils');
   if (tabs) {
      const changeClass = el => {
         for (var i = 0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove('active');
         }
         el.classList.add('active');
      }
      tabs.addEventListener('click', e => {
         var currTab = e.target.dataset.btn;
         changeClass(e.target);
      });
   }
}