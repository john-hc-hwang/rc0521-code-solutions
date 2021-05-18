var $modal = document.querySelector('.modal');
var $background = document.querySelector('.background.none');
var $container = document.querySelector('.container.none');
var $survey = document.querySelector('.survey');

var count = 0;
$modal.addEventListener('click', function (event) {
  count++;
  if (count % 2 === 1) {
    $background.className = 'background';
    $container.className = 'container show';
  } else {
    $background.className = 'background none';
    $container.className = 'container none';
  }
});

$survey.addEventListener('click', function (event) {
  $background.className = 'background none';
  $container.className = 'container none';
});

$background.addEventListener('click', function (event) {
  $background.className = 'background none';
  $container.className = 'container none';
  count++;
});
