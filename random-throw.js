export function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    const throwOptions = ['Rock', 'Paper', 'Scissors'];

    return throwOptions[randomNumber];
}

export function checkResults(cpuThrow, playerThrow) {
    if (cpuThrow === playerThrow) {
        return 'Tie';
    } else if (cpuThrow === 'Rock' && playerThrow === 'Paper') {
        return 'Winner';
    } else if (cpuThrow === 'Paper' && playerThrow === 'Scissors') {
        return 'Winner';
    } else if (cpuThrow === 'Scissors' && playerThrow === 'Rock') {
        return 'Winner';
    } else {
        return 'Loser';
    }
}