'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const article = document.querySelector('[data-number="01"]'),
		  articleBtn = article.querySelector('.article-read-more'),
		  hiker = document.querySelector('.hiker-assessment'),
	      hikerBtn = hiker.querySelector('.hiker-assessment_back');


	articleBtn.addEventListener('click', (e) => {
		const parent = e.target.closest('.article');

		console.log(parent);
		parent.style.display = 'none';
		parent.style.transition = 'display 0.5s ease';//не працює для display, переробити на visability
		hiker.style.display = "flex";

	});
	// console.log(articleBtn);
	// articleBtn.addEventListener('click', () => {
	// 	article.style.display = "none"
	// });


	/*
					.article {
					opacity: 1;
					visibility: visible;
					transition: opacity 0.5s ease, visibility 0.5s ease;
					}

					.article.hidden {
					opacity: 0;
					visibility: hidden;
					}



					articleBtn.addEventListener('click', (e) => {
					const parent = e.target.closest('.article');
					parent.classList.add('hidden');

					setTimeout(() => {
						hiker.style.display = "flex";
					}, 500); // після завершення анімації
					});

	*/



	hikerBtn.addEventListener('click', () => {
		hiker.style.display = 'none';
		article.closest('.article').style.display = 'flex';
		console.log(article);
	})
});