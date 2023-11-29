'use strict';

/* Reverse

  This program prompts the user to type any text , reverses the input value and alerts the user input string and the reversed one seperated by an arrow pointing to the right.

  Data In:
    any text exactly 5 characters long including numbers ,symbols and spaces

  Data Out:
    [the user input] , [arrow to right ->] , [reversed user input]
    There is space _ generated after the 'before:' and after the 'after:' so you can ignore it.

  Test Cases:
     ''       ->   '-> '
     ' '      ->   '  ->  '
    'Html5'   -> 'Html5 -> 5lmtH'
    '@#$%^'   -> '@#$%^ -> ^%$#@'
    'Html ->' -> 'Html5 -> -> >- 5lmtH' 
    '->'      -> '-> -> >-'
    ']321['   ->  ']321[ -> [123]'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
