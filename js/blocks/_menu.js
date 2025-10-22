const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('active');
});

//фіксити відображення при клікові. не відображається меню при клікові по гамбургеру