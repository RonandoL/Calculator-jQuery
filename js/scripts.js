// Business Logic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


// UI logic
$(function() {
  $('form#calculator').submit(function(event) {
    event.preventDefault();

    $('.results').empty();
    $('#input1').removeClass().nextAll().remove();
    $('#input2').removeClass().nextAll().remove();

    var number1 = parseInt($('#input1').val());
    var number2 = parseInt($('#input2').val());
    var operator = $('input:radio[name=operator]:checked').val();
    var resultAdd = add(number1, number2);
    var resultSubtract = subtract(number1, number2);
    var resultMultiply = multiply(number1, number2);
    var resultDivide = divide(number1, number2);

    $('.results').show();

    if (isNaN(number1) && isNaN(number2)) {
      $('#input1').addClass('red');
      $('#input2').addClass('red');
      $('#input1').after('<span class="redText"> * Yo, fill this field brah!</span>');
      $('#input2').after('<span class="redText"> * Yo, fill this field brah!</span>');
      $('.results').hide();
    } else if (isNaN(number1)) {
      $('#input1').addClass('red');
      $('#input1').after('<span class="redText"> * Yo, fill this field brah!</span>');
      $('.results').hide();
    } else if (isNaN(number2)) {
      $('#input2').addClass('red');
      $('#input2').after('<span class="redText"> * Yo, fill this field brah!</span>');
      $('.results').hide();
    } else if (operator === "add") {
      $('.results').append('<h4>You entered ' + number1 + ' and ' + number2 + ', added together they equal: ' + resultAdd + '</h4>');
    } else if (operator === "subtract") {
      $('.results').append('<h4>You entered ' + number1 + ' and ' + number2 + ', subtracting the latter from the former, we get: ' + resultSubtract + '</h4>');
    } else if (operator === "multiply") {
      $('.results').append('<h4>You entered ' + number1 + ' and ' + number2 + ', multiplied together they equal: ' + resultMultiply + '</h4>');
    } else {
      $('.results').append('<h4>You entered ' + number1 + ' and ' + number2 + ', dividing the latter into the former, we get: ' + resultDivide + '</h4>');
    }




    $('.divide').append('<h4>You entered ' + number1 + ' and ' + number2 + ', dividing the latter into the former, we get: ' + resultDivide + '</h4>');
  });



  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

});
