const d = document,
      w = window;

d.addEventListener("DOMContentLoaded", (e) => {
    toggle("#nav__toggle", ".nav__list", ".nav__link");
    scrollBtn(".btn__scroll");
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

function scrollBtn (btn){
    let $btn = d.querySelector(btn);
    w.addEventListener("scroll", (e) => {
        let scroll = w.pageYOffset || d.documentElement.scrollTop;
        if(scroll > 600){
            $btn.classList.remove("hidden");
        }else{
            $btn.classList.add("hidden");
        }
    })

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
}
