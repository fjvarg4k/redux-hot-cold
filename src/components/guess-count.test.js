import React from 'react';
import {shallow} from 'enzyme';
import {GuessCount} from './guess-count';

describe('<GuessCount />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessCount />);
  });

  it('Renders the correct amount of guesses', function() {
    const testGuesses = 5;
    const wrapper = shallow(<GuessCount guessCount={testGuesses} />);
    expect(wrapper.text()).toEqual(`You've made ${testGuesses} guesses!`);
  });
});
