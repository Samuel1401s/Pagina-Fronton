const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let counter = 0;
const size = carouselItems[0].clientWidth;
const totalItems = carouselItems.length;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= totalItems) {
        counter = 0;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = totalItems - 1;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

setInterval(() => {
    counter++;
    if (counter >= totalItems) {
        counter = 0;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}, 100000);

function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "200px") {
        sidenav.style.width = "0";
    } else {
        sidenav.style.width = "200px";
    }
}

// Cargar el contenido de menu.html en el contenedor del menú
fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menuContainer').innerHTML = data;
    });