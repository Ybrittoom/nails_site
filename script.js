const imagesContainer = document.querySelector('.carousel-images');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % imagesContainer.children.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + imagesContainer.children.length) % imagesContainer.children.length;
    updateCarousel();
});
