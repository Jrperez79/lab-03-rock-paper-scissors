// import function(s)
import { getRandomThrow, checkResults } from './random-throw.js';

//DOM elements
const myButton = document.getElementById('guess-button');
const current = document.getElementById('current');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');
const total = document.getElementById('total');

// initialize state
// Total Wins Losses Draws
let userWins = 0;
let userLoss = 0;
let userDraws = 0;
// Total times you played 'hit the guess button'
let totalGuesses = 0;

// set event listeners to update state and DOM

function useResults(result) {
    if (result === 'You Won!') {
        userWins++;
    } else if (result === 'You Lost') {
        userLoss++;
    } else {
        userDraws++;
    }
    totalGuesses++;
    current.textContent = `You picked ${result}!`;
    

}