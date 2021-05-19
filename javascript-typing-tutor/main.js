var $span = document.querySelectorAll('span');
var $body = document.querySelector('body');
var $results = document.querySelector('.results.none');
var $again = document.querySelector('.again.none');

var count = 0;
var errorCount = 0;
function keydown(event) {
  if (count <= $span.length - 1) {
    if ($span[count].textContent === event.key || ($span[count].innerText === event.key)) {
      $span[count].className = 'correct';
      if (count !== $span.length - 1) {
        $span[count + 1].className = 'underline';
      }
      count++;
    } else {
      $span[count].className = 'incorrect underline red';
      errorCount++;
    }
  }
  if (count === $span.length) {
    $results.textContent = 'You made ' + errorCount + ' typos';
    $results.className = 'results';
    $again.className = 'again';
  }
}

function play(event) {
  count = 0;
  errorCount = 0;
  for (var i = 0; i < $span.length; i++) {
    $span[i].removeAttribute('class');
  }
  $results.className = 'results none';
  $again.className = 'again none';
}

$body.addEventListener('keydown', keydown);
$again.addEventListener('click', play);
