export function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

export function checkResults(cpuThrow, playerThrow) {
    if (cpuThrow === 'Rock' && playerThrow === 'Scissors') {
        return 'You Won!';
    } else if (cpuThrow === 'Rock' && playerThrow === 'Paper') {
        return 'You Won!';
    } else if (cpuThrow === 'Paper' && playerThrow === 'Rock') {
        return 'You Lose!';
    } else if (cpuThrow === 'Rock' && playerThrow === 'Scissor') {
        return 'You Lose!';
    } else if (cpuThrow === 'Scissors' && playerThrow === 'Paper') {
        return 'You Lose!';
    } else {
        return 'It is a draw!';
    }
}