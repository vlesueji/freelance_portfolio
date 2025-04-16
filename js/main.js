const header = document.getElementById('top-line');
const brgBtn = document.getElementById('burger-button');
const navList = document.getElementById('nav-list');
const link = document.querySelectorAll('.nav-link');
let scrollPosition = 0;
// let hashVar = window.location.hash;

function toggleHeaderClass(){
    if(window.scrollY > header.offsetHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function defineScrollDirection() {
    if (window.scrollY > scrollPosition & window.scrollY > header.offsetHeight) {
        scrolledDown();
    } else {
        scrolledUp();
    }
    scrollPosition = window.scrollY;
}

function openMenu(){
    navList.classList.add('opened');
    brgBtn.classList.add('opened');
}
function closeMenu(){
    navList.classList.remove('opened');
    brgBtn.classList.remove('opened');
}

function menuControl(){
    if (brgBtn.classList.contains('opened')) {
        closeMenu();
    }else{
        openMenu();
    }
}

function scrolledDown(){
    header.classList.add('scrolled-down');
}

function scrolledUp(){
    header.classList.remove('scrolled-down');
}

link.forEach(item => {
    item.addEventListener('click', closeMenu)
});



window.addEventListener('scroll', defineScrollDirection);
window.addEventListener('hashchange', scrolledUp);
window.addEventListener('scroll', toggleHeaderClass);
brgBtn.addEventListener('click', menuControl);

AOS.init({
    once: true
});


