'use strict';

/* Flip Five

  This program prompts the user to type a text with exactly 5 characters length, reverses the input value and alerts the reversed string to the browser.

  Data In: 
    any text exactly 5 characters long including numbers ,symbols and spaces


  Data Out: 
    the reversed input if it was 5 characters long
    alert user with message 'nope, try again.' if input was not 5 characters long


  Test Cases:
    '' -> 'nope, try again.'
    'Html' -> 'nope, try again.'
    '@#$%^' -> '^%$#@'
    '     ' -> '     '
    'Html5' -> '5lmtH'
    'ht%$5' -> '5$%th'


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
