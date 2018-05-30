function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

function inputHasValues() {
  if ($("#number1").val() && $("#number2").val()) {
    return true;
  } else {
    return false;
  }
}

function enableAllBtns() {
  $("#btn-add").removeAttr("disabled");
  $("#btn-subtract").removeAttr("disabled");
  $("#btn-multiply").removeAttr("disabled");
  $("#btn-divide").removeAttr("disabled");
}

function disableAllBtns() {
  $("#btn-add").prop('disabled', 'true');
  $("#btn-subtract").prop('disabled', 'true');
  $("#btn-multiply").prop('disabled', 'true');
  $("#btn-divide").prop('disabled', 'true');
}

$(document).ready(function() {
  disableAllBtns();

  $("#number1, #number2").keyup(function() {
    inputHasValues() ? enableAllBtns() : disableAllBtns();
  });

  $("#btn-add").click(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("#btn-subtract").click(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("#btn-multiply").click(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("#btn-divide").click(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});
