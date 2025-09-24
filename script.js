const menu = document.querySelector('nav .menu');
const navLinks = document.querySelector('.nav-links');  
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menu.classList.toggle('active');
});
