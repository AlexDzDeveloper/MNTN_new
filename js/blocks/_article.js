'use strict';

document.addEventListener('DOMContentLoaded', () => {

	//Робота із hero scroll
	const heroScroll = document.querySelector('.hero-scroll'),
		  firstArticle = document.querySelector('.article');

	heroScroll.addEventListener('click', () => {

		//Роблю плавний скрол до першої статті по кліку на кнопку
		window.scrollTo(0, 0);
		window.scrollTo({
			top: firstArticle.offsetTop,//елемент, до якого роблю скрол
			left: 0,
			behavior: "smooth"//плавність скролу
		})
	})
})