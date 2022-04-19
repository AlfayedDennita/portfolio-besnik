const {
  body
} = document;

// Navigation Menu

const navMenu = document.querySelector('header nav');
const hamburgerButton = document.querySelector('header .hamburger-btn');

hamburgerButton.addEventListener('click', () => {
  body.classList.toggle('nav-active');

  if (body.classList.contains('nav-active')) {
    window.scrollTo(0, 0);
    hamburgerButton.title = 'Close Navigation Menu';
  } else {
    hamburgerButton.title = 'Open Navigation Menu';
  }
});

window.addEventListener('click', (e) => {
  const navMenuContents = [...navMenu.querySelectorAll('*')];
  const hamburgerButtonContents = [...hamburgerButton.querySelectorAll('*')];

  if (body.classList.contains('nav-active') && e.target !== navMenu && !navMenuContents.includes(e.target) && e.target !== hamburgerButton && !hamburgerButtonContents.includes(e.target)) {
    body.classList.remove('nav-active');
    hamburgerButton.title = 'Open Navigation Menu';
  }
});

const submenus = navMenu.querySelectorAll('.submenu');

submenus.forEach((submenu) => {
  const submenuToggle = submenu.querySelector('.submenu-toggle');
  submenuToggle.addEventListener('click', () => {
    submenu.classList.toggle('submenu-active');
  });
});

const menuButtons = navMenu.querySelectorAll('a:not(.submenu-toggle), button:not(.submenu-toggle)');

menuButtons.forEach((menuButton) => {
  menuButton.addEventListener('click', () => {
    body.classList.remove('nav-active');
    hamburgerButton.title = 'Open Navigation Menu';
  });
});