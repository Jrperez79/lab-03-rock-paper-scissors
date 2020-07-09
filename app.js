// import function(s)
import { getRandomThrow, checkResults } from './random-throw.js';

//DOM elements
const myButton = document.getElementById('guess-button');
const computerSelection = document.getElementById('cpu-pick');
const winCount = document.getElementById('wins');
const lossCount = document.getElementById('losses');
const drawCount = document.getElementById('draws');
const totalCount = document.getElementById('total');
const resetButton = document.getElementById('reset-button');


// initialize state
// Total Wins Losses Draws
let userWins = 0;
let userLoss = 0;
let userDraws = 0;
let totalGames = 0;

// set event listeners to update state and DOM

//Updates Results Section
const updateSpans = () => {
    winCount.textContent = userWins;
    lossCount.textContent = userLoss;
    drawCount.textContent = userDraws;
    totalCount.textContent = totalGames;
};

//EventListener on the "Let's Play Button"
myButton.addEventListener('click', () => {

    const userButton = document.querySelector('input:checked');
    const userSelection = userButton.value;

    const computerSelection = getRandomThrow();
    const getResult = checkResults(userSelection, computerSelection);

    if (getResult === 'You won!') {
        userWins++;
    } 
    
    if (getResult === 'You Lose!') {
        userLoss++;
    } 
    if (getResult === 'It is a draw!') {
        userDraws++;
    }
    totalGames++;
    
    computerSelection.textContent = 'The Computer has ' + computerSelection + '. ' + getResult;

    updateSpans();

});

//Button to Reset game
const resetGame = () => {
    userWins = 0;
    userLoss = 0;
    userDraws = 0;
    totalGames = 0;
    computerSelection.textContent = '';
    updateSpans();
};

resetButton.addEventListener('click', resetGame);

