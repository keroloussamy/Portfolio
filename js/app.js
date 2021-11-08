const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('.nav-ul-container');
const navHeader = document.querySelector('#nav-flex-container');
const closeNav = document.querySelector('.close-nav');

const navLink1 = document.querySelector('.nav-item1');
const navLink2 = document.querySelector('.nav-item2');
const navLink3 = document.querySelector('.nav-item3');

function showUp() {
  navUl.classList.add('display-menu', 'animate__fadeInDown');
  navHeader.classList.add('d-none');
  closeNav.classList.remove('d-none');
}

function closeUp() {
  navUl.classList.remove('display-menu');
  navHeader.classList.remove('d-none');
  closeNav.classList.add('d-none');
}

menuIcon.addEventListener('click', showUp);
closeNav.addEventListener('click', closeUp);
navLink1.addEventListener('click', closeUp);
navLink2.addEventListener('click', closeUp);
navLink3.addEventListener('click', closeUp);
