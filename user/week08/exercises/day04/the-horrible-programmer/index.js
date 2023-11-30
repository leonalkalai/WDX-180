/*  Highlight current day of week excluding weekend

  This program displays the days of the week except weekend days and highlights the current day

  Data In: 
    none

  Data Out: 
    the week days except weekend days in different lines. The current day is highlighted with bold.

  Test Cases:
      You can test the results with this simplified code

      `
      const week = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
      const noneWeekendDays = week.slice(1,6);
      const currentDate = new Date(); 
      const today = currentDate.getDay();
      for ( const currentDate of noneWeekendDays ){ 
        if ( today > 1 && today < 6 ) {
          console.log(today); 
          console.log(week[today]);
          console.log(currentDate); 
          console.log(week[today] === currentDate); 
        }
      }
      `

  Comments:
    A developer left a code for us to figure out what it does and get it ready for production.  
    
  Given Code:
      const w = [ "Sunday", "Monday", "Tuesday", 
    "Wednesday", "Thursday", "Friday", "Saturday" ] 
    const data = w.slice(1,6); 
    document.write(`<ul>`); 
    const d = new Date(); 
    const cd = d.getDay(); 
    
    for ( const d of data ){ 
    if ( cd > 1 && cd < 6 ) { 
      if ( w[cd] === d ){ document.write( `<li><strong>${d}</strong></li>` ); continue; 
      }}  
      document.write( `<li>${d}</li>` ); 
    } 
    document.write(`</ul>`);   
     

***Developer's Goals***
  1) Understand what the program does.
  2) Make code readable.
  3) put comments to explain what's happening in the code.
  4) add meaningful and descriptive names to the variables.
  5) format the code and add indentation.


***Developer's Notes*** 
  1) week array starting from 0 index.
  2) week.slice(1,6) -> substracting the values of the array from 1 to 6 (getting the values between 1 and 6).
  3) new Date(); gets the current date 
  4) getDay(); gets current day 
  5) week[today] -> week[number] is the day of current day index. Example week[2] index is Tuesday.

  
****Developer's Changes****

  1) changed const 'w' to 'fullWeekDays'
  2) changed 2 lines week array to one line
  3) added ; after week array assignment
  4) changed data to 'weekDays'
  5) change d to currentDate
  6) add indentation to both 'if'
  7) changed the closing curly bracket of internal if to a new line and added indentation to it
  8) added indentation for external if closing curly bracket
  9) changed document.write of internal if to go to next line
  10) changed continue to go to next line and added the correct indentation
  11. changed d of for loop to 'day' as it is not the same value as d of new Date();

*/

const fullWeekDays  = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]; // array of days
const weekDays = fullWeekDays.slice(1,6); // none weekend days
document.write(`<ul>`); // open ul
const currentDate = new Date(); // current date
const today = currentDate.getDay(); // current day index
 
for ( const day of weekDays ){ // iterate through none weekend days
  if ( today > 1 && today < 6 ) { // check if today between 2nd and 5th day of week
    if ( fullWeekDays [today] === day ){ // check if current day is equal to each day of week 
       document.write( `<li><strong>${day}</strong></li>` ); // display current date with bold
       continue; // continue
    }
  }  
  document.write( `<li>${day}</li>` ); // display current date
} 
document.write(`</ul>`); // close ul
