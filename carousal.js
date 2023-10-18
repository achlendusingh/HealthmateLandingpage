document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const carousel = document.getElementById("review-carousel");

    const carouselItems = carousel.querySelectorAll(".carousel-item");
    let currentItemIndex = 0;

    // Show the initial item
    carouselItems[currentItemIndex].classList.add("active");

    // Function to show the next item
    function showNextItem() {
        carouselItems[currentItemIndex].classList.remove("active");
        currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
        carouselItems[currentItemIndex].classList.add("active");
    }

    // Function to show the previous item
    function showPrevItem() {
        carouselItems[currentItemIndex].classList.remove("active");
        currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[currentItemIndex].classList.add("active");
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener("click", showNextItem);
    prevBtn.addEventListener("click", showPrevItem);
});
