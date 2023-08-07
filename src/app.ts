let userScore: number = 0;
let computerScore: number = 0;
const userScore_span: HTMLElement = document.getElementById("user-score")!;
const computerScore_span: HTMLElement = document.getElementById("computer-score")!;
const scoreBoard_div: HTMLElement = document.querySelector(".score-board")!;
const result_div: HTMLParagraphElement = document.querySelector(".result > p")!;
const rock_div: HTMLElement = document.getElementById("rock")!;
const paper_div: HTMLElement = document.getElementById("paper")!;
const scissor_div: HTMLElement = document.getElementById("scissor")!;

// Get computer choice
let getComputerChoice =(): string => {
    const choices: string[] = ['rock', 'paper', 'scissor'];

    // Take a random number and set it to take an option from the choice array
    const randomNumber: number = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// A function to convert to word
let convertToWord = (word: string): string => {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissor";
}

let wrapInSub = (text: string): string => {
    return `<sub>${text}</sub>`;
}

let win = (userChoice: string, computerChoice: string): void => {
    userScore++;
    userScore_span.innerHTML = userScore.toString();
    computerScore_span.innerHTML = computerScore.toString();
    const smallUserWord: string = wrapInSub("user");
    const smallComputerWord: string = wrapInSub("computer");
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win!`;
    document.getElementById(userChoice)!.classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice)!.classList.remove('green-glow'), 500);
}

let lose = (userChoice: string, computerChoice: string): void => {
    computerScore++;
    userScore_span.innerHTML = userScore.toString();
    computerScore_span.innerHTML = computerScore.toString();
    const smallUserWord: string = wrapInSub("user");
    const smallComputerWord: string = wrapInSub("computer");
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lose!`;
    document.getElementById(userChoice)!.classList.add('red-glow');
    setTimeout(function () { document.getElementById(userChoice)!.classList.remove('red-glow') }, 500);
}

let draw = (userChoice: string, computerChoice: string): void => {
    userScore_span.innerHTML = userScore.toString();
    computerScore_span.innerHTML = computerScore.toString();
    const smallUserWord: string = wrapInSub("user");
    const smallComputerWord: string = wrapInSub("computer");
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw!`;
    document.getElementById(userChoice)!.classList.add('grey-glow');
    setTimeout(function () { document.getElementById(userChoice)!.classList.remove('grey-glow') }, 500);
}

let game = (userChoice: string): void => {
    const computerChoice: string = getComputerChoice();
    switch (userChoice + computerChoice) {
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

let main = (): void => {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => 
        game("paper")
    );

    scissor_div.addEventListener('click', () => 
        game("scissor")
    );
}

main();
