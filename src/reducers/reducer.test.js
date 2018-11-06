import reducer from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from '../actions/actions';

describe('Reducer', function() {
  it('Should set the initial state when nothing is passed in', function() {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.auralStatus).toEqual('');
  });

  it('Should return the current state on an unknown action', function() {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });
});

describe('restartGame', function() {
  it('Should start a new game', function() {
    let state = {
      guesses: [12, 15, 20, 56],
      feedback: "You're hot",
      correctAnswer: 50
    };

    const correctAnswer = 5;
    state = reducer(state, restartGame(correctAnswer));
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toEqual(correctAnswer);
    expect(state.auralStatus).toEqual('');
  });
});

describe('makeGuess', function() {
  it('Should make a guess', function() {
    let state = {
      guesses: [],
      feedback: '',
      correctAnswer: 100
    };

    state = reducer(state, makeGuess(25));
    expect(state.guesses).toEqual([25]);
    expect(state.feedback).toEqual("You're ice cold.");
  });
});

describe('generateAuralUpdate', function() {
  it('Can generate aural updates', function() {
    let state = {
      guesses: [24, 56, 2],
      feedback: "You're ice cold.",
      auralStatus: ''
    };

    state = reducer(state, generateAuralUpdate());
    expect(state.auralStatus).toEqual(
      "Here's the status of the game right now: You're ice cold. You've made 3 guesses. In order of most- to least-recent, they are: 2, 56, 24"
    );
  });
});
