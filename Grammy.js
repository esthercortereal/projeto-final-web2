let currentIndex = 0;
const cards = document.querySelectorAll('.carousel-slide .card');
const totalCards = cards.length;

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * (cards[0].offsetWidth + 20); // largura do card + margem
  document.querySelector('.carousel-slide').style.transform = `translateX(${offset}px)`;
}

