const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');


	//   console.log(hamburger)
	//   console.log(menu)
hamburger.addEventListener('click', () => {
	console.log("click");
  	menu.classList.add('active');
	hamburger.style.zIndex = "0"
});

close.addEventListener('click', () => {
 	 menu.classList.remove('active');
	 hamburger.style.zIndex = "100";
});

overlay.addEventListener('click', () => {
  	menu.classList.remove('active');
	 hamburger.style.zIndex = "100";
});

//фіксити відображення при клікові. не відображається меню при клікові по гамбурге ру