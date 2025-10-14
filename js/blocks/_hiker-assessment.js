'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const article = document.querySelector('[data-number="01"]'),
		  articleBtn = article.querySelector('.article-read-more'),
		  hiker = document.querySelector('.hiker-assessment'),
	      hikerBtn = hiker.querySelector('.hiker-assessment_back');


	articleBtn.addEventListener('click', (e) => {
		const parent = e.target.closest('.article');

		console.log(parent);
		parent.classList.add('hidden');
		hiker.classList.remove('hidden');
	});

	hikerBtn.addEventListener('click', () => {
		article.closest('.article').classList.remove('hidden');
		hiker.classList.add('hidden');
		console.log(article);
	})
});