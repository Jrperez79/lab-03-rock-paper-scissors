// import function(s)
import { getRandomThrow, checkResults } from './random-throw.js';

//DOM elements
const myButton = document.getElementById('guess-button');
// const computerSelectionDisplay = document.getElementById('cpu-pick');
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
    totalGames++;
    totalCount.textContent = totalGames;

    const userButton = document.querySelector('input:checked');
    let userSelection = userButton.value;

    let computerSelectionDisplay = getRandomThrow();
    // let getResult = checkResults(userSelection, computerSelectionDisplay);
    checkResults(userSelection, computerSelectionDisplay);

    // if else ? 
    if (checkResults(userSelection, computerSelectionDisplay) === 'You Won!') {
        userWins++;
        winCount.textContent = userWins;
    } 
    else if (checkResults(userSelection, computerSelectionDisplay) === 'You Lose!') {
        userLoss++;
        lossCount.textContent = userLoss;
    } 
    else {
        userDraws++;
        drawCount.textContent = userDraws;
    }

});

//Button to Reset game
const resetGame = () => {
    userWins = 0;
    userLoss = 0;
    userDraws = 0;
    totalGames = 0;
    // computerSelectionDisplay.textContent = '';
    updateSpans();
};

resetButton.addEventListener('click', resetGame);

