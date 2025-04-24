let places = [
    { name: "Colosseum - Rome's Timeless Arena", about: "Step into the heart of ancient Rome with a visit to the Colosseum, the largest amphitheater ever built. Once home to gladiator battles and grand spectacles, it’s a powerful reminder of the empire’s architectural brilliance and dramatic history." },
    { name: "Venice Grand Canal – A City on Water", about: "Glide through the romantic waterways of Venice on a gondola ride along the Grand Canal. Lined with Renaissance palaces and bustling bridges, it’s a living postcard of Italy’s unique charm and elegance." },
    { name: "Leaning Tower of Pisa – An Icon of Imperfection", about: "A marvel of medieval engineering gone slightly sideways, the Leaning Tower of Pisa is world-famous for its tilt. Climb its spiraling staircase for panoramic views and a photo-op you can’t leave Italy without." },
    { name: "Amalfi Coast – Italy’s Coastal Paradise", about: "With its colorful cliffside villages, crystal-clear waters, and sun-soaked beaches, the Amalfi Coast is a dream destination. Whether you're savoring local seafood or hiking scenic trails, it’s pure Mediterranean magic." },
    { name: "Florence Cathedral – The Dome of the Renaissance", about: "Dominating the skyline of Florence, the Cathedral of Santa Maria del Fiore (Duomo) is a masterpiece of Gothic and Renaissance architecture. Its iconic red dome and detailed façade are as awe-inspiring up close as they are from afar." }
];
// console.log(places[1].name);

// IMAGE SLIDER   

const pisaH = document.querySelector("#place-about h1");
const pisaP = document.querySelector("#place-about p");

const slides = document.querySelectorAll("#slides img");   //gets all img elements inside the element with id="slides".
let slideIndex = 0;
// let intervalId = null;

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

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("displaySlide"); //all image element is removed to the .displaySlide for it to not show
    }

    slides[slideIndex].classList.add("displaySlide");  //the image in the current index will be shown since display = none;

    document.getElementById("curr-slide-no").textContent = slideIndex + 1;
    document.getElementById("name-place").textContent = places[slideIndex].name;
    document.getElementById("place-desc").textContent = places[slideIndex].about;

    if (slideIndex == 2) {
        pisaH.classList.add("pisa-Exclusive");
        pisaP.classList.add("pisa-Exclusive");
    } else {
        pisaH.classList.remove("pisa-Exclusive");
        pisaP.classList.remove("pisa-Exclusive");
    }
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

let hand = document.getElementById("hand-icon");
let audio = document.querySelector("#italian-music");
let isPlaying = true;

function playMusic() {
    if(isPlaying) {
        audio.pause();
        isPlaying = false;
        hand.src = "images/italian_hand.png";
    }
    else {
        audio.play();
        isPlaying = true;
        hand.src = "images/ogey.png";
    }
}