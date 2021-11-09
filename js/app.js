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

// -------------------------------Details-Mob----------------------------------------
const projects = [{
  name: 'Keeping track of hundreds of components 1',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage: 'Images/SnapshootPortfolio.png',
  technologies: ['html', 'css', 'js', 'Codepen', 'Terminal', 'Bootstrap'],
  linktoLiveVersion: '#',
  linkToSource: '#',
},
{
  name: 'Keeping track of hundreds of components 2',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage: 'Images/SnapshootPortfolio.png',
  technologies: ['html', 'css', 'js', 'Codepen', 'Terminal', 'Bootstrap'],
  linktoLiveVersion: '#',
  linkToSource: '#',
},
{
  name: 'Keeping track of hundreds of components 3',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage: 'Images/SnapshootPortfolio.png',
  technologies: ['html', 'css', 'js', 'Codepen', 'Terminal', 'Bootstrap'],
  linktoLiveVersion: '#',
  linkToSource: '#',
},
{
  name: 'Keeping track of hundreds of components 4',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage: 'Images/SnapshootPortfolio.png',
  technologies: ['html', 'css', 'js', 'Codepen', 'Terminal', 'Bootstrap'],
  linktoLiveVersion: '#',
  linkToSource: '#',
},
{
  name: 'Keeping track of hundreds of components 5',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage: 'Images/SnapshootPortfolio.png',
  technologies: ['html', 'css', 'js', 'Codepen', 'Terminal', 'Bootstrap'],
  linktoLiveVersion: '#',
  linkToSource: '#',
},
{
  name: 'Keeping track of hundreds of components 6',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage: 'Images/SnapshootPortfolio.png',
  technologies: ['html', 'css', 'js', 'Codepen', 'Terminal', 'Bootstrap'],
  linktoLiveVersion: '#',
  linkToSource: '#',
},
];

const projectDetail = document.querySelector('#Project-detail');
const closeDetail = document.querySelector('.close-detail');
const projectBtns = document.querySelectorAll('.project-btn');

const detailImg = document.querySelector('.detail-img');
const detailH3 = document.querySelector('.detail-h3');
const technologiesUl = document.querySelector('.detail-technologies');
const detailP = document.querySelector('.detail-p');
const seeLive = document.querySelector('.seeLive');
const seeSource = document.querySelector('.seeSource');

function showUpDetails(e) {
  technologiesUl.innerHTML = '';
  const id = e.target.getAttribute('data-projectId');
  detailH3.textContent = projects[id - 1].name;
  detailImg.src = projects[id - 1].featuredImage;
  projects[id - 1].technologies.forEach((x) => {
    const li = document.createElement('li');
    li.classList.add('badge', 'bg-white-gray', 'text-dark', 'p-2', 'm-1');
    const t = document.createTextNode(x);
    li.appendChild(t);
    technologiesUl.appendChild(li);
  });
  detailP.textContent = projects[id - 1].description;
  seeLive.href = projects[id - 1].linktoLiveVersion;
  seeSource.href = projects[id - 1].linkToSource;
  projectDetail.classList.remove('d-none');
  projectDetail.classList.add('display-details');
}

function closeUpDetails() {
  projectDetail.classList.add('d-none');
  projectDetail.classList.remove('display-details');
}

[...projectBtns].forEach((btn) => btn.addEventListener('click', showUpDetails));

closeDetail.addEventListener('click', closeUpDetails);
