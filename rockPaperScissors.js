function rockPaperScissors(playerTurn) {
    // LETS CREATE THE VARIABLES NEEDED TO PLAY

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    //  LETS WRITE THE PLAYER TURNS

    if (playerTurn == 'r' || playerTurn == 'rock') {
    playerTurn = rock;
    } else if (playerTurn == 'p' || playerTurn == 'paper') {
    playerTurn = paper;
    } else if (playerTurn == 's' || playerTurn == 'scissors') {
    playerTurn = scissors;
    } else {
    console.log('Invalid input. Try again!');
    }
    console.log(`You chose ${playerTurn}`);

    //  LETS MAKE THE COMPUTER CHOOSE A NUMBER

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

    // LETS MAKE DIFFERENT SCENARIOS FOR THE PC
    let computerMove = '';

    switch(computerRandomNumber) {
        case 1:
            computerMove = rock;
            break;
        case 2:
            computerMove = paper;
            break;
        case 3:
            computerMove = scissors;
            break;
    }
    console.log(`Computer chose ${computerMove}`);

    // NOW LETS COMPARE PLAYER CHOISE WITH COMPUTER CHOISE;

    if ((playerTurn === rock && computerMove === scissors) 
    || (playerTurn === scissors && computerMove === paper) 
    || (playerTurn === paper && computerMove === rock)) {
        console.log('Player wins!');
    } else if ((playerTurn === rock && computerMove === paper) 
    || (playerTurn === paper && computerMove === scissors) 
    || (playerTurn === scissors && computerMove === rock)) {
        console.log('Computer wins!');
    } else {
        console.log(`It's a draw!`);
    }
}
rockPaperScissors('r');

