document.addEventListener('DOMContentLoaded', function() {
    // Functionality for toggling the navigation menu
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navlist');
    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Attach event listeners to next/previous buttons
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    // Attach listeners to dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide(index + 1);
        });
    });

    function showSlides(n) {
        let i;
        const slides = document.querySelectorAll('.mySlides');
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[slideIndex-1].style.display = 'block'; 
        dots[slideIndex-1].className += ' active';
    }
});

// Exposing functions to the global scope
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
