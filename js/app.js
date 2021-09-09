const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    toggle("#nav__toggle", ".nav__list", ".nav__link");
});

function toggle (toggle, menu, link){

    const $toggle = d.querySelector(toggle);
    const $menu = d.querySelector(menu);

    d.addEventListener("click", (e) => {
        if(e.target.matches(toggle) || e.target.matches(`${toggle} *`)){
            $menu.classList.toggle("active");
        }
        if(e.target.matches(link)){
            $menu.classList.remove("active");
        }
        if(e.target !== $menu && e.target !== $toggle && e.target !== d.querySelector(`${toggle} img`)){
            $menu.classList.remove("active");
        }
    })
}
