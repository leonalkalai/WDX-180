
  // Function that returns a random move, e.g. rock, paper, scissors:
  function getRandomMove(){
	let choise = Math.floor( Math.random() * 3 );
	return choise === 0 ? "rock" : choise === 1 ? "paper" : "scissors";	
  }
  

  function getUserMove(){
	let userAnswer = prompt(
	`This is a rock-paper-scissors game!

	  A) rock
	  B) paper
	  C) scissors

	  Please type one of the above (A, B, or C).
   `);  

	switch(userAnswer.trim().toUpperCase()) {
	  case "A":
		return "rock";
		break;
	  case "B":
		return "paper";
		break;
	  case "C":
		return "scissors";
		break;
	  default:
		alert("Please select the correct option (A, B, or C).");
		getUserMove();
	}	   
  }  

  getRandomMove(); 
  getUserMove();
	
  // Given a move, (e.g. rock, paper, scissors) and a random computer move. Returns the result which must be strictly one of the following: "won", "lost", "draw"
  function checkMove( move, computerMove ){
	let result =
	move===computerMove
	? "Tie"
	: move ==="rock" && computerMove === "paper"
	? "Computer wins"
	: move ==="paper" && computerMove === "scissors"
	? "Computer wins"
	: move ==="scissors" && computerMove === "rock"
	? "Computer wins"
	: "player wins";
	return result;
  }


  // << YOUR CODE HERE

  // Don't worry about the code below. It's just there to test your code above.
  const drawn = new Set();
  for ( let i = 0; i < 100; i++ ){
    const randomMove = getRandomMove();
    drawn.add(randomMove);
    const oneOfTheThreeMoves = randomMove === 'rock' || randomMove === 'paper' || randomMove === 'scissors';
    if ( !oneOfTheThreeMoves ){
      throw new Error("Ops! Expected rock, paper or scissors, instead got " + randomMove);
    }
  }

  if ( !drawn.has("rock") || !drawn.has("paper") || !drawn.has("scissors") ){
    throw new Error("Ops! Did not find all three moves in the results!");
  }

  const gameResult1 = checkMove("rock", "rock");
  console.log("Game Result 1: ", gameResult1); // Should be draw

  const gameResult2 = checkMove("rock", "paper");
  console.log("Game Result 2: ", gameResult2); // Should be lost

  const gameResult3 = checkMove("rock", "scissors");
  console.log("Game Result 3: ", gameResult3); // Should be won
  
  const gameResult4 = checkMove("paper", "paper");
  console.log("Game Result 4: ", gameResult4); // Should be draw

  const gameResult5 = checkMove("paper", "scissors");
  console.log("Game Result 5: ", gameResult5); // Should be lost

  const gameResult6 = checkMove("paper", "rock");
  console.log("Game Result 6: ", gameResult6); // Should be won

  const gameResult7 = checkMove("scissors", "scissors");
  console.log("Game Result 7: ", gameResult7); // Should be draw

  const gameResult8 = checkMove("scissors", "rock");
  console.log("Game Result 8: ", gameResult8); // Should be lost

  const gameResult9 = checkMove("scissors", "paper");
  console.log("Game Result 9: ", gameResult9); // Should be won

  const gameResult10 = checkMove("pencil", "rock");
  console.log("Game Result 10: ", gameResult10); // Should be invalid move

  try {
    if (global) {
      global.getRandomMove = getRandomMove;
      global.checkMove = checkMove;
    }
  } catch (e) {}