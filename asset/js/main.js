// Menu toggle
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
// Show menu
if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu')
    })
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu')
    })
}

// Hide menu when click nav link
const navLinks = document.querySelectorAll('.nav__link')
function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(navLink => navLink.addEventListener('click', linkAction))

// Scroll section active link
const sections = document.querySelectorAll('section')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200
        const sectionId = current.getAttribute('id')
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active')
        }
        else {
            sectionsClass.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Change background header
function scrollHeader() {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

// Swiper 
let swiperIntroduction = new Swiper(".introduction__container", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

// Show scroll up btn
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    }
    else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)