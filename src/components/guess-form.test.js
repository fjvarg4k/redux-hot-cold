import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form';
import {makeGuess} from '../actions/actions';

describe('<GuessForm />', function() {
  it('Renders without crashing', function() {
    shallow(<GuessForm />);
  });

  it('Should fire the onMakeGuess callback when the form is submitted', function() {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = '10';
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });

  it('Should reset the input when the form is submitted', function() {
    const wrapper = mount(<GuessForm dispatch={() => {}} />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = '10';
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});
