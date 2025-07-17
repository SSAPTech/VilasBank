// Toggle submenus on header click
document.querySelectorAll('.menu-header').forEach(header => {
  header.addEventListener('click', () => {
    const submenu = header.nextElementSibling;
    const isOpen = submenu.style.display === 'flex';

    // Close all submenus
    document.querySelectorAll('.submenu').forEach(s => s.style.display = 'none');

    // Toggle clicked submenu
    submenu.style.display = isOpen ? 'none' : 'flex';
  });
});

    function navigateTo(page) {
      window.location.href = page;
    }

// Image slider
const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slider-track img');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlidePosition() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

// Auto Slide
let autoSlide = setInterval(showNextSlide, 4000);

// Manual Slide Navigation
nextBtn.addEventListener('click', () => {
  showNextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  showPrevSlide();
  resetAutoSlide();
});

// Reset auto-slide when manually used
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(showNextSlide, 4000);
}
