// IMPORT MODULES under test here:
import { checkResults } from '../random-throw.js';

const test = QUnit.test;

test('Paper vs Scissors = loss, Paper vs Rock = Won, Paper vs Paper = Draw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'Paper';
    const computer = 'Scissors';
    const expected = 'You Lose!';
    
    const player2 = 'Paper';
    const computer2 = 'Rock';
    const expected2 = 'You Won!';
    

    const player3 = 'Paper';
    const computer3 = 'Paper';
    const expected3 = 'It is a draw!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(computer, player);
    const result2 = checkResults(computer2, player2);
    const result3 = checkResults(computer3, player3);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
    assert.equal(result2, expected2);
    assert.equal(result3, expected3);
    
});
