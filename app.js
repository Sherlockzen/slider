const btnPrev = document.querySelector(".prevBtn");
const btnNext = document.querySelector(".nextBtn");
// const slideContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");

btnPrev.style.display = "none";

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
});

let posi = 0;

btnNext.addEventListener('click', function() {
    if (posi < 3) {
        posi++;
    }
    carousel()
})

btnPrev.addEventListener('click', function(){
    if (posi > 0) {
        posi--;
    }
    carousel();
});

function carousel() {
    if (posi === 0) {
        btnPrev.style.display = "none";
    } else {
        btnPrev.style.display = "block";
    }
    if (posi === 3) {
        btnNext.style.display = "none";
    } else {
        btnNext.style.display = "block";
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${posi * 100}%)`
    });
}