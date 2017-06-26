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
  // store reference to the parent to save some typing
  $div = $(this).parent();
  // get the color value
  $divBGColor = $div.css('background-color');

  if($divBGColor == 'rgb(255, 0, 0)') {
    // is red, make it yellow
    console.log('red');
    $div.css('background-color', 'yellow');
  } else {
    // is yellow, make it red
    console.log('yellow');
    $div.css('background-color', 'red');
  }

}

// remove selected div from the Dom
function removeDiv() {
  $(this).parent().remove();
}
