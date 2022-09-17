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

const submitx = document.getElementById('submit');

const validEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

submitx.addEventListener('click', (event) => {
  const validatedEmail = document.getElementById('email').value;
  if (!validEmail(validatedEmail)) {
    document.querySelector('.error').innerHTML = '*Email should be typed in Lowercase*';
    event.preventDefault();
  } else {
    document.querySelector('.error').innerHTML = '';
  }
});

// const body = document.querySelector('body');
// const form = document.querySelector('form');
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const text = document.getElementById('text');

// const retrieveData = localStorage.getItem('user');

// body.onload = () => {
//   if (retrieveData) {
//     const store = JSON.parse(retrieveData);
//     name.value = store.name;
//     email.value = store.email;
//     text.value = store.text;
//   }
// };

// document.querySelectorAll('input').forEach((input) => {
//   input.addEventListener('input', (event) => {
//     event.preventDefault();

//     const nameData = document.getElementById('name').value;
//     const emailData = document.getElementById('email').value;
//     const textData = document.getElementById('text').value;

//     const userStore = {
//       name: nameData,
//       email: emailData,
//       text: textData,
//     };

//     localStorage.setItem('user', JSON.stringify(userStore));
//   });
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

function fillInputs() {
  const user = document.getElementById('name');
  const nameValue = localStorage.getItem('user');
  if(nameValue) {
    user.value = nameValue;
  }

  user.addEventListener('change', function (event) {
    user.value = event.target.value;
    localStorage.setItem('user', event.target.value);
  });

  const email = document.getElementById('email');
  const ValueFormEmail = localStorage.getItem('email');
  if (ValueFormEmail) {
    email.value = ValueFormEmail
  }

  email.addEventListener('change', function(event) {
    email.value = event.target.value;
    localStorage.setItem('email', event.target.value);
  });

  const text = document.getElementById('text');
  const valueForText = localStorage.getItem('text');
  if (valueForText){
    text.value = valueForText;
  }
   
  text.addEventListener('change', function(event){
    text.value = event.target.value;
    localStorage.setItem('text', event.target.value);
  });
}

addEventListener('load', () => {
  fillInputs();
});