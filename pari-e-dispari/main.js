/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.
*/

//ask to the user if even or odd and save it in a variable
const userChoice = prompt("Choose if even or odd: [even, odd]");
console.log(userChoice);

//ask to the user a number between 1 and 5 and save it in a variable
const userNumber = Number(prompt("Choice a number between 1 and 5: [1, 2, ..., 5]"));
console.log(userNumber);

//generate a random number between 1 and 5 using a function and save it in a variable
const min = 1;
const max = 5;
const computerNumber = generate(min, max);
console.log(computerNumber);

//sum the numbers
const sum = userNumber + computerNumber;
console.log(sum);

//establish if sum is even or odd using a function
const sumIsEven = isEven(sum);

//print the result
if ((sumIsEven === true && userChoice === "even") || (sumIsEven === false && userChoice === "odd")) {
  alert(`You won! Choice: ${userChoice}, Number: ${userNumber}, Pc Number: ${computerNumber}, Sum: ${sum}`);
} else {
  alert(`You lose! Choice: ${userChoice}, Number: ${userNumber}, Pc Number: ${computerNumber}, Sum: ${sum}`);
}






//FUNCTIONS

//generate and return a number between min and max included
function generate(min, max) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

//check if value is even return the result as a boolean
function isEven(value) {

  if (value % 2 === 0) {
    return true;
  }
  return false;
}