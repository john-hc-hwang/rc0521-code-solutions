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

var index = 0;

function changeImageRight() {
  index++;
  if (index === 5) {
    index = 0;
  }
  $carousel.setAttribute('src', images[index].src);
  $carousel.setAttribute('alt', images[index].alt);
  for (var circles of $allCircle) {
    circles.classList.replace('fas', 'far');
  }
  $allCircle[index].classList.replace('far', 'fas');
}

function changeImageLeft() {
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

var intervalId = setInterval(changeImageRight, 2000);

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

$rightArrow.addEventListener('click', function (event) {
  clearInterval(intervalId);
  changeImageRight();
  intervalId = setInterval(changeImageRight, 2000);
});

$leftArrow.addEventListener('click', function (event) {
  clearInterval(intervalId);
  changeImageLeft();
  intervalId = setInterval(changeImageRight, 2000);
});
