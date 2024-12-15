const platformItems = document.querySelectorAll(".platform-item");
const platformImages = document.querySelectorAll(".platform-image");

platformItems.forEach((item) => {
  item.addEventListener("click", () => {
    const platform = item.dataset.platform;
    platformImages.forEach((img) => {
      img.classList.remove("active");
      if (img.dataset.platform === platform) {
        img.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.querySelector(".dots");

  let currentIndex = 0;

  // Create dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 110}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Initialize
  updateCarousel();
});
