import {RESTART_GAME, restartGame, MAKE_GUESS, makeGuess, GENERATE_AURAL_UPDATE, generateAuralUpdate} from './actions';

describe('restartGame', function() {
  it('Should return the action', function() {
    const correctAnswer = 15;
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe('makeGuess', function() {
  it('Should return the action', function() {
    const guess = 15;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe('generateAuralUpdate', function() {
  it('Should return the action', function() {
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});
