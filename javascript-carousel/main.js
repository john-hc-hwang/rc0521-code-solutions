var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var $carousel = $('.carousel');
var $allCircle = $$('.fa-circle');
var $leftArrow = $('.fas.fa-chevron-circle-left');
var $rightArrow = $('.fas.fa-chevron-circle-right');

var images = [
  {
    src: 'images/001.png',
    alt: 'Ivysaur'
  },
  {
    src: 'images/004.png',
    alt: 'Charmander'
  },
  {
    src: 'images/007.png',
    alt: 'Squirtle'
  },
  {
    src: 'images/025.png',
    alt: 'Pikachu'
  },
  {
    src: 'images/039.png',
    alt: 'Fluffypuff'
  }
];

var index = 0; // index initialization

function changeImageRight() {
  // increment index by 1 and if index is at rightmost image, set index to 0
  // to get the leftmost image (index 0)
  index++;
  if (index === 5) {
    index = 0;
  }
  // sets desired image with src and alt attribute at specified index
  $carousel.setAttribute('src', images[index].src);
  $carousel.setAttribute('alt', images[index].alt);
  // start by setting all circles unselected using for loop
  // then only select a single circle at the specified index
  for (var circles of $allCircle) {
    circles.classList.replace('fas', 'far');
  }
  $allCircle[index].classList.replace('far', 'fas');
}

function changeImageLeft() {
  // if index is at leftmost image, set index to 5
  // decrement by 1 to get the rightmost image (index 4)
  if (index === 0) {
    index = 5;
  }
  index--;
  $carousel.setAttribute('src', images[index].src);
  $carousel.setAttribute('alt', images[index].alt);
  for (var circles of $allCircle) {
    circles.classList.replace('fas', 'far');
  }
  $allCircle[index].classList.replace('far', 'fas');
}

function selectImage() {
  $carousel.setAttribute('src', images[index].src);
  $carousel.setAttribute('alt', images[index].alt);
  for (var circles of $allCircle) {
    circles.classList.replace('fas', 'far');
  }
  $allCircle[index].classList.replace('far', 'fas');
}

// initially call changeImageRight every 2 seconds
var intervalId = setInterval(changeImageRight, 2000);

// add eventlisteners to all circles using for loop
// clearInterval and setInterval at the end of code to reset
for (var circles of $allCircle) {
  circles.addEventListener('click', function (event) {
    clearInterval(intervalId);
    var circleId = event.target.id;
    var id = circleId.slice(event.target.id.length - 1);
    index = id - 1;
    selectImage();
    intervalId = setInterval(changeImageRight, 2000);
  });
}

// clearInterval and setInterval at the end of code to reset
$rightArrow.addEventListener('click', function (event) {
  clearInterval(intervalId);
  changeImageRight();
  intervalId = setInterval(changeImageRight, 2000);
});

// clearInterval and setInterval at the end of code to reset
$leftArrow.addEventListener('click', function (event) {
  clearInterval(intervalId);
  changeImageLeft();
  intervalId = setInterval(changeImageRight, 2000);
});
