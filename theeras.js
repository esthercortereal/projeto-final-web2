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


// let currentIndex1 = 0;
// const cards1 = document.querySelectorAll('.carousel-slide1 .card1');
// const totalCards1 = cards1.length;

// document.querySelector('.next1').addEventListener('click', () => {
//   currentIndex1 = (currentIndex + 1) % totalCards1;
//   updateCarousel();
// });

// document.querySelector('.prev1').addEventListener('click', () => {
//   currentIndex = (currentIndex1 - 1 + totalCards1) % totalCards1;
//   updateCarousel();
// });

// function updateCarousel() {
//   const offset = -currentIndex1 * (cards1[0].offsetWidth + 20); // largura do card + margem
//   document.querySelector('.carousel-slide1').style.transform = `translateX(${offset}px)`;
// }