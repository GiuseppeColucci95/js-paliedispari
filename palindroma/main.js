/* 
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma
*/

//ask to the user to insert a word and save it in variable
const userWord = prompt("Insert a word and i will check if it is palindrome: [ex: hi, abba..]");
console.log(userWord);

//call the function isPalindrome to see if input is palindrome
isPalindrome(userWord);

//create a function that establish if the given word is a palindrome one or not
function isPalindrome(text) {
  let palindrome = true;

  //create a for loop to see if the word is palindrome checking first and last element following i index
  for (let i = 0; i < text.length - i; i++) {
    if (text[i] !== text[text.length - i - 1]) {
      palindrome = false;
      break
    }
  }

  //check the result and print it
  if (palindrome) {
    console.log(`La parola inserita è palindroma!`);
  } else {
    console.log(`La parola inserita non è palindroma!`);
  }
}
