// store the number of clicks on the generate button
var clickCount = 0;

$(document).ready(function() {
  console.log('ready to roll');
  // append starting button here if not already in html file

  // event listeners
  $("#generateDiv").on('click', generateDiv);
  $("#container").on('click', '.swapColors', swapColors);
  $("#container").on('click', '.removeDiv', removeDiv);

});

// appends a new div onto the dom with the current click count
function generateDiv() {
  console.log('generate Div');
  clickCount++;

  $("#container").append('<div></div>');
  var $el = $("#container").children().last();

  $el.append('<p>' + clickCount + '</p>');
  $el.append('<button class="swapColors">Swap</button>');
  $el.append('<button class="removeDiv">Delete</button>');

}

// changes selected div to yellow
function swapColors() {
  // make it yellow
  $(this).parent().toggleClass('yellow');
}

// remove selected div from the Dom
function removeDiv() {
  $(this).parent().remove();
}
