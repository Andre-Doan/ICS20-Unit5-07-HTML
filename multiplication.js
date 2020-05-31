// JavaScript File
function myFunction(){
let factor1 = document.getElementById("multiply").value;
let factor2 = document.getElementById("multiplicate").value;
let counter = 0;
let sum = 0;
while(counter < factor2) {
sum = sum + parseFloat(factor1); 
counter = counter + 1;
}
document.getElementById("output").innerHTML = " The product is " + sum;
}
