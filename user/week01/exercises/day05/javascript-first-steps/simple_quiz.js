function getAnswer() {
		
let userAnswer = prompt(
`Question: Who created JavaScript?

  A) Brendan Eich
  B) Bill Gates
  C) Mark Zuckerberg

  Please select the correct option (A, B, or C).
`
);

switch(userAnswer.trim().toUpperCase()) {
  case "A":
    alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
    break;
  case "B":
    alert("Nope. He lead the development of the Windows Operating System.");
    break;
  case "C":
    alert("Nope. He lead the development of the Windows Operating System.");
    break;
  default:
    alert("Please select the correct option (A, B, or C).");
	getAnswer();
}
	

}

getAnswer();












