var clickCount = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function increment(event) {
  clickCount++;
  var oneLessClick = clickCount - 1;
  $clickCount.textContent = $clickCount.textContent.replace(oneLessClick, clickCount);
  if (clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', increment);
