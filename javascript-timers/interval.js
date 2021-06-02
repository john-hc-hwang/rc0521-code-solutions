var $h1 = document.querySelector('h1');

function countdown() {
  var currentNum = Number($h1.textContent);
  var nextNum = currentNum - 1;
  $h1.textContent = nextNum;
  if (Number($h1.textContent) === 0) {
    $h1.textContent = 'Good Morning';
    clear();
  }
}

function clear() {
  clearInterval(intervalId);
}

var intervalId = setInterval(countdown, 1000);
