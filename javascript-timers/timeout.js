var $h1 = document.querySelector('h1');

function hello() {
  $h1.textContent = 'Hello There';
}

setTimeout(hello, 2000);
