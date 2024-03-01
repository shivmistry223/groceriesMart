const $carousel = $(".carousel");
const $slides = $(".carousel-slide");
let currentIndex = 0;

function showSlide(index, $slides, $carousel) {
  if (index < 0) {
    currentIndex = $slides.length - 1;
  } else if (index >= $slides.length) {
    currentIndex = 0;
  }

  $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
}

const autoAdvanceInterval = 3000; // Change slide every 3 seconds

setInterval(function () {
  currentIndex++;
  showSlide(currentIndex, $slides, $carousel);
}, autoAdvanceInterval);

$("#next1").on('click', function(params) {
    const currentIndex = 1;
    $('#product1').css("transform", `translateX(-${currentIndex * 100}%)`);
})
$("#prev1").on('click', function(params) {
    const currentIndex = 0;
    $('#product1').css("transform", `translateX(${currentIndex * 100}%)`);
})

$("#next2").on('click', function(params) {
    const currentIndex = 1;
    $('#product2').css("transform", `translateX(-${currentIndex * 100}%)`);
})
$("#prev2").on('click', function(params) {
    const currentIndex = 0;
    $('#product2').css("transform", `translateX(${currentIndex * 100}%)`);
})

$("#next3").on('click', function(params) {
    const currentIndex = 1;
    $('#product3').css("transform", `translateX(-${currentIndex * 100}%)`);
})
$("#prev3").on('click', function(params) {
    const currentIndex = 0;
    $('#product3').css("transform", `translateX(${currentIndex * 100}%)`);
})

$("#next4").on('click', function(params) {
    const currentIndex = 1;
    $('#product4').css("transform", `translateX(-${currentIndex * 100}%)`);
})
$("#prev4").on('click', function(params) {
    const currentIndex = 0;
    $('#product4').css("transform", `translateX(${currentIndex * 100}%)`);
})