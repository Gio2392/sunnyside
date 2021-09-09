const d = document;


d.addEventListener("DOMContentLoaded", (e) => {
    toggle("#nav__toggle", ".nav__list", ".nav__link");
});

function toggle (toggle, menu, link){

    d.addEventListener("click", (e) => {
        if(e.target.matches(toggle) || e.target.matches(`${toggle} *`)){
            d.querySelector(menu).classList.toggle("active");
        }
        if(e.target.matches(link)){
            d.querySelector(menu).classList.remove("active");
        }
    })
}
