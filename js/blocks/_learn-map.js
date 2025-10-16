'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const article = document.querySelector('[data-number="03"]'),
		  articleBtn = article.querySelector('.article-read-more'),
		  learnMap = document.querySelector('.learn-map'),
	      learnMapBtn = learnMap.querySelector('.learn-map_text-block__back');


	// articleBtn.addEventListener('click', (e) => {
	// 	const parent = e.target.closest('.article');
	// 	//Через клас працює
	// 	// parent.classList.add('hidden');
	// 	// learnMap.classList.remove('hidden');
	// });

	// learnMapBtn.addEventListener('click', () => {
	// 	//Через клас працює
	// 	// article.closest('.article').classList.remove('hidden');
	// 	// learnMap.classList.add('hidden');
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
			learnMap.style.display = 'flex';
		}, { once: true });

		restartAnimation(learnMap, "showHiker 500ms ease forwards");
	});

	learnMapBtn.addEventListener('click', () => {
		const parent = article.closest('.article');

		restartAnimation(learnMap, "hideHiker 500ms ease forwards");
		learnMap.addEventListener('animationend', () => {
			learnMap.style.display = 'none';
			parent.style.display = 'flex';
		}, { once: true });

		restartAnimation(parent, "showArticle 500ms ease forwards");
	});
});