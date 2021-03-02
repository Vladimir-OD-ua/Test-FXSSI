window.load = function() {
    document.querySelector("body").classList.remove("preload");
};

function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let lines = menu.querySelector('.burger-menu_lines');
    let links = menu.querySelector('.burger-menu_link');
    let overlay = menu.querySelector('.burger-menu_overlay');
    let body = document.querySelector('body');

    lines.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
    });

    links.addEventListener('click', () => toggleMenu);
    overlay.addEventListener('click', () => toggleMenu);


    function toggleMenu(){
        if (menu.classList.contains('burger-menu_active')) {
            menu.classList.remove('burger-menu_active');
            body.style.overflow = 'visible';
        } else {
            menu.classList.add('burger-menu_active');
            body.style.overflow = 'hidden';
        }
    }
}


burgerMenu('.burger-menu');