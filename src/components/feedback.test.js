import React from 'react';
import {shallow} from 'enzyme';
import {Feedback} from './feedback';

describe('<Feedback />', function() {
  it('Renders without crashing', function() {
    shallow(<Feedback />);
  });

  it('Renders feedback', function() {
    const test = 'You are listening to a game.';

    const wrapper = shallow(<Feedback feedback={test} />);
    expect(wrapper.contains(test)).toEqual(true);
  });
});
