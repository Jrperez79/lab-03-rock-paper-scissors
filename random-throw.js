export function getRandomThrow() {
    let getRandomThrow = Math.ceil(Math.random() * 3);
    if (getRandomThrow === 1) {
        return 'Rock';
    } else if (getRandomThrow === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

export function checkResults(cpuThrow, playerThrow) {
    if (cpuThrow === 'Paper' && playerThrow === 'Scissors') {
        return 'You Won!';
    } else if (cpuThrow === 'Rock' && playerThrow === 'Paper') {
        return 'You Won!';
    } else if (cpuThrow === 'Paper' && playerThrow === 'Rock') {
        return 'You Lose!';
    } else if (cpuThrow === 'Rock' && playerThrow === 'Scissors') {
        return 'You Lose!';
    } else if (cpuThrow === 'Scissors' && playerThrow === 'Paper') {
        return 'You Lose!';
    } else if (cpuThrow === 'Scissors' && playerThrow === 'Rock') {
        return 'You Won!';
    } else if (cpuThrow === playerThrow) { 
        return 'It is a draw!';
    }
}
