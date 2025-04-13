const header = document.getElementById('top-line');
const brgBtn = document.getElementById('burger-button');
const navList = document.getElementById('nav-list');
const link = document.querySelectorAll('.nav-link');

function toggleHeaderClass(){
    if(window.scrollY > header.offsetHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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
link.forEach(item => {
    item.addEventListener('click', closeMenu)
});




window.addEventListener('scroll', toggleHeaderClass);
brgBtn.addEventListener('click', menuControl);
AOS.init({
    once: true
});


