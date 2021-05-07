const mainNav = document.querySelector('.main-nav__list');
const mainNavToggle = document.querySelector('.main-nav__toggle');

mainNavToggle.addEventListener('click', function() {
    mainNav.classList.toggle('main-nav__list_active');
    document.body.classList.toggle('lock');
    if (mainNav.classList.contains('main-nav__list_active')) {
        mainNavToggle.firstChild.classList.remove('fa-bars');
        mainNavToggle.firstChild.classList.add('fa-times');
    }
    else {
        mainNavToggle.firstChild.classList.remove('fa-times');
        mainNavToggle.firstChild.classList.add('fa-bars');
    }
});

// плавное перемещение к ссылкам меню
const menuLinks = document.querySelectorAll('a[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', clickOnMenu);
    });
    function clickOnMenu(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const Block = document.querySelector(menuLink.dataset.goto);
            const blockValue = Block.getBoundingClientRect().top + pageYOffset;
            if (mainNav.classList.contains('main-nav__list_active')) {
                document.body.classList.remove('lock');
                mainNav.classList.remove('main-nav__list_active');
                mainNavToggle.firstChild.classList.remove('fa-times');
                mainNavToggle.firstChild.classList.add('fa-bars');
            }
            window.scrollTo({
                top: blockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}