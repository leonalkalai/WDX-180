'use strict';

/* Remove Spaces

   This program prompts the user to type some text, removes the spaces of the input and alerts the user input and the result with removed spaces in seperate lines. 


  Data In:
    any text including numbers ,symbols and spaces


  Data Out:  
    before:_user input
    after:_user input without spaces
    There is space _ generated after the 'before:' and after the 'after:' so you can ignore it.

  Test Cases:
  '     ' ↴
  'before:      '    
  'after: '

  'java scri pt' ↴
  before: java scri pt
  after: javascript

  ' 6%3$ ^ ' ↴
  before:  6%3$ ^
  after: 6%3$^

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
