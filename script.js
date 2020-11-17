const hamb = document.querySelector('.hamb');
const closeMenu = document.querySelector('.close');
const header = document.querySelector('header');

hamb.addEventListener('click', function () {
  header.classList.add ('open');
})

closeMenu.addEventListener('click', function () {
  header.classList.remove ('open');
})