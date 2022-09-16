const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navItems.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navItems.classList.remove('active');
}));

// end of hamburger

// begin popup sect
const projectsDetails = [
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    phone: 'images/snap.png',
    desktop: 'images/snap1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionpop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ',
    languages: ['html', 'css', 'javascript'],
    languages_pop: ['Html', 'Css', 'Javascript', 'github'],
    live: 'https://becky449.github.io/portfolio-website/',
    source: 'https://github.com/Becky449/portfolio-website',
  },
  {
    title: 'Multi Post Stories',
    subtitle: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    phone: 'images/snap2.png',
    desktop: 'images/snappy3.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionpop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
    languages: ['html', 'css', 'javascript'],
    languages_pop: ['Html', 'Css', 'Javascript', 'github'],
    live: 'https://becky449.github.io/portfolio-website/',
    source: 'https://github.com/Becky449/portfolio-website',
  },
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    phone: 'images/snap3.png',
    desktop: 'images/snappy4.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionpop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
    languages: ['html', 'css', 'javascript'],
    languages_pop: ['Html', 'Css', 'Javascript', 'github'],
    live: 'https://becky449.github.io/portfolio-website/',
    source: 'https://github.com/Becky449/portfolio-website',
  },
  {
    title: 'Multi Post Stories',
    subtitle: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    phone: 'images/snap4.png',
    desktop: 'images/snappy5.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionpop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
    languages: ['html', 'css', 'javascript'],
    languages_pop: ['Html', 'Css', 'Javascript', 'github'],
    live: 'https://becky449.github.io/portfolio-website/',
    source: 'https://github.com/Becky449/portfolio-website',
  },
];

const projectCardString = projectsDetails.map((project) => `
<div class="cont">
  <div class="beck">
    <div class="image-cards">
      <img class="mobile-image"
        src="${project.phone}"
        alt="phone image"
      />
      <img class="desktop-image"
      src="${project.desk}"
      alt="project image"
    />
    </div>
    <div class="c-title">
      <h2>${project.title}</h2>
      <ul class="p-cards">
        <li class="c-list first">${project.subtitle}</li>
        <li class="c-list second">${project.dev}</li>
        <li class="c-list second">${project.year}</li>
      </ul>
      <p class="paragraph-cards">${project.description}</p>
      <ul class="x-button">
        ${project.languages.map((tech) => `<li class="button">${tech}</li>`).join('')}
      </ul>
      <div class="see-container">
        <button type="button" class="project-btn btn see-button">
          See Project
        </button>
        </div>
    </div>
  </div>
</div>
`);

const popupContainer = document.querySelector('.pop');
const recentWork = document.querySelector('.works');
const parser = new DOMParser();
projectCardString.forEach((projectString, index) => {
  const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;
  const mobilePopup = `
    <div class="p-pop-hide ">
    <div class="backgroundpop"></div>
      <div class="p-pop">
        <div class="p-header">
          <i class="fa-solid fa-xmark project-close">x</i>
          <h2>${projectsDetails[index].title}</h2>
          <p class="c-list  apex">${projectsDetails[index].subtitle} <span class="c-list  apex">${projectsDetails[index].dev}</span> <span class="c-list apex">${projectsDetails[index].year}</span></p>
        </div>
        <div class="image-cards c-1">
          <img class="mobile-image pop-img" src="${projectsDetails[index].phone}" alt="card image">
          <img class="desktop-image p-img"  src="${projectsDetails[index].desk}" alt="card image">            
        <div class="p-footer">
          <p class="p-descriptionription">${projectsDetails[index].descriptionpop}</p>
          <div>
            <ul class = ("apex")>
              ${projectsDetails[index].languages_pop.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
            <div class="p-links">
              <a href="${projectsDetails[index].live}">See Live <i class="close"></i></a>
              <a href="${projectsDetails[index].source}">See Source <i class="close"></i></a>
            </div>
          </div>
        </div>
      </div>
  </div>
`;

  const mobilePopupElement = parser.parseFromString(mobilePopup, 'text/html').body.firstChild;
  const projectBtn = projectElement.querySelector('.see-button');
  const closeBtn = mobilePopupElement.querySelector('.project-close');
  projectBtn.addEventListener('click', () => {
    mobilePopupElement.classList.toggle('p-pop-hide');
  });
  closeBtn.addEventListener('click', () => {
    mobilePopupElement.classList.toggle('p-pop-hide');
  });
  recentWork.append(projectElement);
  popupContainer.append(mobilePopupElement);
});

//form validation
function validateForm() {
  let x = document.forms["form1"]["email"].value;
  if (x !== x.toLowerCase) {
   document.querySelector('.error').innerHTML = '*Please type your email in lowercase*';
    return false;
  }
}