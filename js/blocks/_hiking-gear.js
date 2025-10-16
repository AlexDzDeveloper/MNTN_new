'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const article = document.querySelector('[data-number="02"]'),
		  articleBtn = article.querySelector('.article-read-more'),
		  hikingGear = document.querySelector('.hiking-gear'),
	      hikingGearBtn = hikingGear.querySelector('.hiking-gear_back');


	// articleBtn.addEventListener('click', (e) => {
	// 	const parent = e.target.closest('.article');
	// 	//Через клас працює
	// 	// parent.classList.add('hidden');
	// 	// hikingGear.classList.remove('hidden');
	// });

	// hikingGearBtn.addEventListener('click', () => {
	// 	//Через клас працює
	// 	// article.closest('.article').classList.remove('hidden');
	// 	// hikingGear.classList.add('hidden');
	// 	// console.log(article);
	// 	const parent = article.closest('.article');
	// })

	function restartAnimation(el, animationStr) {
		el.style.animation = 'none';
		el.offsetHeight; // force reflow
		el.style.animation = animationStr;
	}

	articleBtn.addEventListener('click', (e) => {
		const parent = e.target.closest('.article');

		restartAnimation(parent, "hideArticle 500ms ease forwards");
		parent.addEventListener('animationend', () => {
			parent.style.display = 'none';
			hikingGear.style.display = 'flex';
		}, { once: true });

		restartAnimation(hikingGear, "showHiker 500ms ease forwards");
	});

	hikingGearBtn.addEventListener('click', () => {
		const parent = article.closest('.article');

		restartAnimation(hikingGear, "hideHiker 500ms ease forwards");
		hikingGear.addEventListener('animationend', () => {
			hikingGear.style.display = 'none';
			parent.style.display = 'flex';
		}, { once: true });

		restartAnimation(parent, "showArticle 500ms ease forwards");
	});
});