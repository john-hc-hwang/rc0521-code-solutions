var $form = document.querySelector('#contact-form');
// var $form = document.forms[0];
// above code is same as line 1.

var messageData = {};
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  messageData[$form.elements.name.name] = $form.elements.name.value;
  messageData[$form.elements.email.name] = $form.elements.email.value;
  messageData[$form.elements.message.name] = $form.elements.message.value;
  console.log('messageData:', messageData);
  $form.reset();
});
