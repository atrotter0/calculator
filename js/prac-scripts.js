function greeting() {
	var name = prompt("What is your name?");
	alert("Hello " + name + "!");
}

//greeting();

function subtract(number1, number2) {
	return number1 - number2;
}

//alert(subtract(3,5));

function multiplyThree(number1, number2, number3) {
	return number1 * number2 * number3;
}

//alert(multiplyThree(2,2,2));

function divide(number1, number2) {
	alert(number1 / number2);

}
//divide(81,9);

function findRemainder(number1, number2) {
	return number1 % number2;
}

//console.log(findRemainder(36,7));

function getInfo() {
	var age = prompt("What is your age?");
  var name = prompt("What is your name?");
  var food = prompt("What is your favorite food?");
  showResponse(age, name, food);
}

function showResponse(age, name, food) {
	alert("You are " + age + " years old.\nYour name is " + name + ". \nYour favorite food is " + food + ".");

}

//getInfo();

function getInfo() {
	var weight = parseInt(prompt("Enter your weight in lbs:"));
  var height = parseInt(prompt("Enter your height in inches:"));
  calculateBmi(weight, height);
}

function calculateBmi(weight, height) {
	console.log("Height: " + height);
  console.log("Weight: " + weight);
	var total = (weight / (height * height)) * 703;
	alert("Your Calculated BMI is: " + total );
}

//getInfo();

function calculateCelciusTemp() {
	var temp = parseInt(prompt("Enter the temperature in Farenheit: "));
  var result = (temp - 32) * 5/9;
  alert("The temperature in Celcius is: " + result);
}

//calculateCelciusTemp();
