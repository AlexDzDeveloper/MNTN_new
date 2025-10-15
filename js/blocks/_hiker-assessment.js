'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const article = document.querySelector('[data-number="01"]'),
		  articleBtn = article.querySelector('.article-read-more'),
		  hiker = document.querySelector('.hiker-assessment'),
	      hikerBtn = hiker.querySelector('.hiker-assessment_back');


	// articleBtn.addEventListener('click', (e) => {
	// 	const parent = e.target.closest('.article');

	// 	// console.log(parent);
	// 	//Через клас працює
	// 	// parent.classList.add('hidden');
	// 	// hiker.classList.remove('hidden');

	// 	//Через анімацію
	// 	parent.style.animation = "hideArticle 500ms ease 1 normal running 0s forwards";
	// 	parent.addEventListener('animationend', () => {
	// 		parent.style.display = 'none';
	// 		hiker.style.display = 'flex';
	// 	}, { once: true })
	// 	hiker.style.animation = "showHiker 500ms ease 1 normal running 0s forwards";

	// });

	// hikerBtn.addEventListener('click', () => {
	// 	//Через клас працює
	// 	// article.closest('.article').classList.remove('hidden');
	// 	// hiker.classList.add('hidden');
	// 	// console.log(article);
	// 	const parent = article.closest('.article');

	// 	//Через анімацію
	// 	hiker.style.animation = "hideHiker 500ms linear 1 normal running 0s forwards";
	// 	hiker.addEventListener('animationend', () => {
	// 		hiker.style.display = 'none';
	// 		parent.style.display = 'flex';
	// 		parent.style.right = '0';
	// 	}, { once: true })
	// 	parent.style.animation = "showArticle 500ms normal 1 normal running 0s forwards";
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
			hiker.style.display = 'flex';
		}, { once: true });

		restartAnimation(hiker, "showHiker 500ms ease forwards");
	});

	hikerBtn.addEventListener('click', () => {
		const parent = article.closest('.article');

		restartAnimation(hiker, "hideHiker 500ms ease forwards");
		hiker.addEventListener('animationend', () => {
			hiker.style.display = 'none';
			parent.style.display = 'flex';
		}, { once: true });

		restartAnimation(parent, "showArticle 500ms ease forwards");
	});
});