// IMAGE SLIDER   

const slides = document.querySelectorAll("#slides img");   //gets all img elements inside the element with id="slides".
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider); //runs the function when dom is loaded but before images and stylesheets
document.getElementById("total-slides").textContent = slides.length;

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");   //the image in the current index will be shown since display = none;
        // intervalId = setInterval(nextSlide, 5000); //automatic slideshow 
    }
    // console.log(intervalId);
}

function showSlide(index) { // handles showing the slide based on index:

    if (index >= slides.length) { //returns to the first image
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slides => {
        slides.classList.remove("displaySlide"); //all image element is removed to the .displaySlide for it to not show
    });
    slides[slideIndex].classList.add("displaySlide");  //the image in the current index will be shown since display = none;
    document.getElementById("curr-slide-no").textContent = slideIndex+1;
}

function prevSlide() {
    // clearInterval(intervalId); //resets the interval countdown
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    // clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}