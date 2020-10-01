//setTimeout('document.location.reload()',10000) establece cada cuanto se reinicia//
var max = 50;
var min = -15;
var temp = prompt("Cual es la temperatura actual");

var resul = (num1,num2,num3) => num1+num2+num3/3;
alert("la temperatura media es " + resul(max,min,temp));
