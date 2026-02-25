// Navber
const navMenu = document.getElementById('nav-menu');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

// Menu Open korar jonno
openMenu.addEventListener('click', () => {
    navMenu.classList.remove('-translate-y-full');
    navMenu.classList.add('translate-y-0');
});

// Menu Close korar jonno
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('translate-y-0');
    navMenu.classList.add('-translate-y-full');
});
