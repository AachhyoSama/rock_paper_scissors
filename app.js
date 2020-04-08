 let userScore = 0;
 let computerScore = 0;
 const userScore_span = document.getElementById("user-score");
 const computerScore_span = document.getElementById("computer-score");
 const scoreBoard_div = document.querySelector(".score-board");
 const result_div = document.querySelector(".result > p");
 const rock_div = document.getElementById("rock");
 const paper_div = document.getElementById("paper");
 const scissor_div = document.getElementById("scissor");

 function getComputerChoice() {
 	const choices = ['rock' , 'paper', 'scissor'];
 	const randomNumber = Math.floor( Math.random() * 3);
 	return choices[randomNumber];
 }

 function convertToWord(word){
 	if(word === "rock") return "Rock";
 	if(word === "paper") return "Paper";
 	return "Scissor";
 }

 function win(userChoice, computerChoice){
 	userScore++;
 	userScore_span.innerHTML = userScore;
 	computerScore_span.innerHTML = computerScore;
 	const smallUserWord = "user".fontsize(3).sub();
 	const smallComputerWord = "computer".fontsize(3).sub();
 	result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win!`; // ES6 representation of print
 	document.getElementById(userChoice).classList.add('green-glow');
 	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 500); // ES5 way of representing a function
 }

 function lose(userChoice, computerChoice){
 	computerScore++;
 	userScore_span.innerHTML = userScore;
 	computerScore_span.innerHTML = computerScore;
 	const smallUserWord = "user".fontsize(3).sub();
 	const smallComputerWord = "computer".fontsize(3).sub();
 	result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lose!`;
 	document.getElementById(userChoice).classList.add('red-glow');
 	setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500);
 }

 function draw(userChoice, computerChoice){
 	userScore_span.innerHTML = userScore;
 	computerScore_span.innerHTML = computerScore;
 	const smallUserWord = "user".fontsize(3).sub();
 	const smallComputerWord = "computer".fontsize(3).sub();
 	result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw!`;
 	document.getElementById(userChoice).classList.add('grey-glow');
 	setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 500);
 } 

 function game(userChoice) {
 	const computerChoice = getComputerChoice();
 	switch (userChoice + computerChoice){
 		case "rockscissor":
 		case "paperrock":
 		case "scissorpaper":
 			win(userChoice, computerChoice);
 			break;
 		case "rockpaper":
 		case "paperscissor":
 		case "scissorrock":
 			lose(userChoice, computerChoice);
 			break;
 		case "rockrock":
 		case "paperpaper":
 		case "scissorscissor":
 			draw(userChoice, computerChoice);
 			break;

 	}
 }


 function main() {
	 rock_div.addEventListener('click', () => game("rock")) // ES6 way of creating the function
	 paper_div.addEventListener('click', function() {
	 	game("paper");
	 })

	 scissor_div.addEventListener('click', function() {
	 	game("scissor");
	 })
 }

 main();