var $body = document.querySelector('body');
var $form = document.querySelector('.formtype');
var $results = document.querySelector('.results.none');
var $again = document.querySelector('.again.none');
var $input = document.querySelector('#typehere');
var $goButton = document.querySelector('.goButton');
var $h1 = document.querySelector('h1');

var count = 0;
var errorCount = 0;

function keydown(event) {
  if (event.target.tagName === 'INPUT') {
    return;
  }

  var $span = document.querySelectorAll('span');
  if (count < $span.length) {
    if ($span[count].innerText === event.key) {
      $span[count].className = 'correct';
      if (count !== $span.length - 1) {
        $span[count + 1].className = 'underline';
      }
      count++;
    } else {
      $span[count].className = 'incorrect red';
      errorCount++;
    }
  }
  if (count === $span.length) {
    $results.textContent = 'You made ' + errorCount + ' typos';
    $results.className = 'results';
    $again.className = 'again';
  }
}

function reset(event) {
  var $span = document.querySelectorAll('span');
  for (var i = 0; i < $span.length; i++) {
    $span[i].removeAttribute('class');
    $span[i].remove();
  }
  $input.value = '';
  count = 0;
  errorCount = 0;
  $results.className = 'results none';
  $again.className = 'again none';
  $form.className = 'formtype';
}

function gogo(event) {
  var userInput = $input.value;
  var $spanChar = document.createElement('span');
  $spanChar.className = 'underline';
  $spanChar.textContent = userInput[0];
  $h1.appendChild($spanChar);
  for (var i = 1; i < userInput.length; i++) {
    $spanChar = document.createElement('span');
    $spanChar.textContent = userInput[i];
    $h1.appendChild($spanChar);
  }

  $form.className = 'formtype none';
}

$goButton.addEventListener('click', gogo);
$body.addEventListener('keydown', keydown);
$again.addEventListener('click', reset);
