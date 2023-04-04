const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('show-navigation')
})

