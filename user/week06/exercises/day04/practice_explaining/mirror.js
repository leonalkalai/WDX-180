'use strict';

/* Mirror

  This program prompts the user to type any text of any length and prints the input string following the reversed value of the string seperated by pipe symbol.

  Data In:
    any text of any length including numbers ,symbols and spaces.

  Data Out:
    reversed input string | input string. There is a space before and after pipe symbol.

  Test Cases:
    ''                -> ' | '
    '  '              -> '  |  '
    '@#$%^'           -> '^%$#@ | @#$%^'
    'Html 5'          -> '5 lmtH | Html 5'
    'ht%$5'           -> '5$%th'
    '|'               -> '| | |'
    '123456789'       -> '987654321 | 123456789'
    '123 | 456 | 789' -> '987 | 654 | 321 | 123 | 456 | 789'
    'noeL'            -> 'Leon | noeL'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
