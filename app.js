// import function(s)
import { getRandomThrow, checkResults } from './random-throw.js';

//DOM elements
const myButton = document.getElementById('guess-button');
const cpuPick = document.getElementById('cpu-pick');
const current = document.getElementById('current');
const winCount = document.getElementById('wins');
const losscount = document.getElementById('losses');
const drawCount = document.getElementById('draws');
const totalCount = document.getElementById('total');

// initialize state
// Total Wins Losses Draws
let userWins = 0;
let userLoss = 0;
let userDraws = 0;
let totalGames = 0;

// set event listeners to update state and DOM

