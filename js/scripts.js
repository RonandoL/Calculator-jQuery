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
  $('form').submit(function(event) {
    event.preventDefault();

    $('.thumbnail').empty();

    var number1 = parseInt($('.add1').val());
    var number2 = parseInt($('.add2').val());
    var resultAdd = add(number1, number2);
    var resultSubtract = subtract(number1, number2);
    var resultMultiply = multiply(number1, number2);
    var resultDivide = divide(number1, number2);

    $('.results').show();
    $('.add').append('<h4>You entered ' + number1 + ' and ' + number2 + ', added together they equal: ' + resultAdd + '</h4>');
    $('.subtract').append('<h4>You entered ' + number1 + ' and ' + number2 + ', subtracting the latter from the former, we get: ' + resultSubtract + '</h4>');
    $('.multiply').append('<h4>You entered ' + number1 + ' and ' + number2 + ', multiplied together they equal: ' + resultMultiply + '</h4>');
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
