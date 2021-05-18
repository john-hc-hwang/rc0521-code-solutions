var $switch = document.querySelector('.bulb.on');
var $background = document.querySelector('.bulb-container.on');

var counter = 0;
$switch.addEventListener('click', function (event) {
  counter++;
  if (counter % 2 === 1) {
    $switch.className = 'bulb off';
    $background.className = 'bulb-container off';
  } else {
    $switch.className = 'bulb on';
    $background.className = 'bulb-container on';
  }
});
