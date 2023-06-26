var currentSlide = 0;
var slides = document.getElementsByClassName('item')

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[n].classList.add('active');
  currentSlide = n;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

showSlide(currentSlide);
