const navItems = document.querySelectorAll('.nav-menu__item');

function setActiveTab(clickedItem) {
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  
  clickedItem.classList.add('active');
}

navItems.forEach(item => {
  item.addEventListener('click', function() {
    setActiveTab(this);
  });
});

const dropdownItems = document.querySelectorAll('.nav-menu__item--dropdown');

dropdownItems.forEach(item => {
  item.addEventListener('click', function(e) {
    setActiveTab(this);
  });
});

function switchToTab(tabName) {
  const targetTab = Array.from(navItems).find(item => 
    item.textContent.trim() === tabName
  );
  
  if (targetTab) {
    setActiveTab(targetTab);
  }
}

const mainMenuItems = document.querySelectorAll('.main-menu__item');

mainMenuItems.forEach(item => {
  item.addEventListener('click', function() {
    mainMenuItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

const burgerBtn = document.querySelector('.header__burger');
const modalBurger = document.querySelector('.modal-burger');
const closeModalBurger = document.querySelector('.header__close-modal');

if (burgerBtn && modalBurger && closeModalBurger) {
  burgerBtn.addEventListener('click', () => {
    modalBurger.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  closeModalBurger.addEventListener('click', () => {
    modalBurger.style.display = '';
    document.body.style.overflow = '';
  });
}

const callbackBtn = document.querySelector('.header__button');
const modalCallback = document.getElementById('modalCallback');
const closeModalCallback = document.getElementById('closeModalCallback');
const callbackOverlay = document.querySelector('.modal-callback__overlay');

if (callbackBtn && modalCallback && closeModalCallback && callbackOverlay) {
  callbackBtn.addEventListener('click', () => {
    modalCallback.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  closeModalCallback.addEventListener('click', () => {
    modalCallback.classList.remove('active');
    document.body.style.overflow = '';
  });
  callbackOverlay.addEventListener('click', () => {
    modalCallback.classList.remove('active');
    document.body.style.overflow = '';
  });
}

const callbackBtnModa = document.querySelector('.header__button-moda');
if (callbackBtnModa && modalCallback && closeModalCallback && callbackOverlay) {
  callbackBtnModa.addEventListener('click', () => {
    modalCallback.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('header__button-modal')) {
    const modalCallback = document.getElementById('modalCallback');
    if (modalCallback) {
      modalCallback.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
});
