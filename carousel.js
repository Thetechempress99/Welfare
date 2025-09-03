let slideIndex = 0;
    const slides = document.getElementById("slides");
    const indicators = document.querySelectorAll(".indicators input");
    const carousel = document.getElementById("carousel");

    function showSlide(index) {
      if (index >= indicators.length) index = 0;
      if (index < 0) index = indicators.length - 1;
      slideIndex = index;
      slides.style.transform = `translateX(${-slideIndex * 100}%)`;
      indicators[slideIndex].checked = true;
    }

    function moveSlide(step) {
      showSlide(slideIndex + step);
    }

    function goToSlide(index) {
      showSlide(index);
    }

    // Auto Slide
    let autoSlide = setInterval(() => {
      moveSlide(1);
    }, 4000);

    // Pause auto slide on hover
    carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
    carousel.addEventListener("mouseleave", () => {
      autoSlide = setInterval(() => moveSlide(1), 3000);
    });

    // Swipe support
    let startX = 0;
    let endX = 0;

    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      if (startX - endX > 50) {
        // swipe left
        moveSlide(1);
      } else if (endX - startX > 50) {
        // swipe right
        moveSlide(-1);
      }
    }

    // Initialize
    showSlide(slideIndex);