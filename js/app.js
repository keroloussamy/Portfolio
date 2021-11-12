window.onload = () => {
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
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codepen', 'Terminal', 'Bootstrap'],
    linktoLiveVersion: '#',
    linkToSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components 2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'Images/SnapshootPortfolio.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codepen', 'Terminal', 'Bootstrap'],
    linktoLiveVersion: '#',
    linkToSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components 3',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'Images/SnapshootPortfolio.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codepen', 'Terminal', 'Bootstrap'],
    linktoLiveVersion: '#',
    linkToSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components 4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'Images/SnapshootPortfolio.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codepen', 'Terminal', 'Bootstrap'],
    linktoLiveVersion: '#',
    linkToSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components 5',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'Images/SnapshootPortfolio.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codepen', 'Terminal', 'Bootstrap'],
    linktoLiveVersion: '#',
    linkToSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components 6',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'Images/SnapshootPortfolio.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codepen', 'Terminal', 'Bootstrap'],
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
      li.classList.add('bg-white-gray');
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

  // email validation
  const regex = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;
  const form = document.getElementById('footer-form');
  const email = document.getElementById('email');
  const error = document.querySelector('.email-error');

  form.addEventListener('submit', (event) => {
    if (regex.test(email.value)) {
      error.textContent = '';
    } else {
      error.textContent = 'The email should be lowercase.';
      event.preventDefault();
    }
  });

  //  local Storage
  if (localStorage.getItem('dataInputs') === null) {
    const dataInputs = { fullName: '', email: '', userComment: '' };
    localStorage.setItem('dataInputs', JSON.stringify(dataInputs));
  }

  const userComment = document.getElementById('userComment');
  const fullName = document.getElementById('fullName');

  const populateForm = () => {
    const retrievedObject = JSON.parse(localStorage.getItem('dataInputs'));
    fullName.value = retrievedObject.fullName;
    email.value = retrievedObject.email;
    userComment.value = retrievedObject.userComment;
  }
  populateForm();

  const store = () => {
    const inputs = {
      fullname: fullname.value,
      email: email.value,
      message: userComment.value,
    };
    localStorage.setItem('formInput', JSON.stringify(inputs));
  };

  fullName.addEventListener('change', (event) => {
    store();
  });
  email.addEventListener('change', (event) => {
    store();
  });
  userComment.addEventListener('change', (event) => {
    store();
  });

};