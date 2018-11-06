import React from 'react';
import {shallow} from 'enzyme';
import {TopNav} from './top-nav';
import {RESTART_GAME, GENERATE_AURAL_UPDATE} from '../actions/actions';

describe('<TopNav />', function() {
  it('Renders without crashing', function() {
    shallow(<TopNav />);
  });

  it('Should fire the onRestartGame callback when btn is clicked', function() {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.new');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });

  it('Should fire the onGenerateAuralUpdate when btn is clicked', function() {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.status-link');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toEqual(GENERATE_AURAL_UPDATE);
  });
});
