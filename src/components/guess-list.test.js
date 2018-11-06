import React from 'react';
import {shallow} from 'enzyme';
import {GuessList} from './guess-list';

describe('<GuessList />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessList guesses={[]} />);
  });

  it('Should render a list of guesses', function() {
    const values = [15, 25, 40];
    const wrapper = shallow(<GuessList guesses={values} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    });
  });
});
