const d = document,
    $toggle = d.getElementById('nav__toggle'),
    $menu = d.querySelector('.nav__list');


$toggle.addEventListener('click', () => {
    $menu.classList.toggle('active');
});