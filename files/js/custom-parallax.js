"use strict"

window.onload = function () {
	const parallax = document.querySelector('.parallax')
  
	if (parallax) {
		const vertical_title = document.querySelector('.js-vertical-title')
		const blanche_furniture_bgImage_one = document.querySelector('.js-blanche-furniture-bgImage-one')
		const blanche_furniture_bgImage_two = document.querySelector('.js-blanche-furniture-bgImage-two')
		const blanche_furniture_bgImage_three = document.querySelector('.js-blanche-furniture-bgImage-three')
		const blanche_furniture_bgImage_four = document.querySelector('.js-blanche-furniture-bgImage-four')
		const blanche_furniture_bgImage_five = document.querySelector('.js-blanche-furniture-bgImage-five')
		const blanche_furniture_bgImage_six = document.querySelector('.js-blanche-furniture-bgImage-six')
  
		const elementsToObserve = document.querySelectorAll('.js-mood-ukrainian-furniture, .blanche-furniture')

		elementsToObserve.forEach((element) => {
			const parallaxParent = element.closest('.parallax')
			if (parallaxParent) {
			const parallaxHeight = parallaxParent.offsetHeight
			let thresholdSets = [];
			for (let i = 0; i <= 1.0; i += 0.005) {
				thresholdSets.push(i)
			}
			const callback = function (entries, observer) {
				const scrollTopProcent = (window.pageYOffset / parallaxHeight) * 100
				setMouseParallaxStyle(scrollTopProcent, element)
			}
			const observer = new IntersectionObserver(callback, {
				threshold: thresholdSets,
			})
			observer.observe(element)
			}
		})
  
	  	function setMouseParallaxStyle(scrollTopProcent) {
			vertical_title.parentElement.style.cssText = `transform: rotate(-90deg) translateX(+${scrollTopProcent / 3}%)`;
			blanche_furniture_bgImage_one.parentElement.style.cssText = `transform: translateY(-${scrollTopProcent / 12}%)`;
			blanche_furniture_bgImage_two.parentElement.style.cssText = `transform: translateY(+${scrollTopProcent / 9}%)`;
			blanche_furniture_bgImage_three.parentElement.style.cssText = `transform: translateY(-${scrollTopProcent / 12}%)`;
			blanche_furniture_bgImage_four.parentElement.style.cssText = `transform: translateY(-${scrollTopProcent / 15}%)`;
			blanche_furniture_bgImage_five.parentElement.style.cssText = `transform: translateY(-${scrollTopProcent / 30}%)`;
			blanche_furniture_bgImage_six.parentElement.style.cssText = `transform: translateY(+${scrollTopProcent / 20}%)`;
		}
	}
}