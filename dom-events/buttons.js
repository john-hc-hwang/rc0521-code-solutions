function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);

}

var $click = document.querySelector('.click-button');
$click.addEventListener('click', handleClick);

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover);

var $double = document.querySelector('.double-click-button');
$double.addEventListener('dblclick', handleDoubleClick);
