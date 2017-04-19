import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import StepProgress from '../StepProgress';
import Node from '../Node';
import Chain from '../Chain';

describe('<StepProgress />', () => {
  const titleArray = ['discuss', 'design', 'build', 'test', 'deploy', 'live'];
  const wrapper = shallow(
    <StepProgress titleArray={titleArray} initialStep={0} />
  );
  const setState = spy(StepProgress.prototype, 'setState');

  it('should render correct number of <Node /> with the given titleArray', () => {
    wrapper.setProps({ titleArray: titleArray.slice(0, 0) });
    expect(wrapper.find(Node).length).toBe(2);

    wrapper.setProps({ titleArray: titleArray.slice(0, 1) });
    expect(wrapper.find(Node).length).toBe(2);

    wrapper.setProps({ titleArray: titleArray.slice(0, 2) });
    expect(wrapper.find(Node).length).toBe(2);

    wrapper.setProps({ titleArray: titleArray.slice(0, 3) });
    expect(wrapper.find(Node).length).toBe(3);

    wrapper.setProps({ titleArray: titleArray.slice(0, 4) });
    expect(wrapper.find(Node).length).toBe(4);

    wrapper.setProps({ titleArray: titleArray.slice(0, 5) });
    expect(wrapper.find(Node).length).toBe(5);

    wrapper.setProps({ titleArray: titleArray });
    expect(wrapper.find(Node).length).toBe(5);
  });

  it('should render correct number of <Chain /> with the given titleArray', () => {
    wrapper.setProps({ titleArray: titleArray.slice(0, 0) });
    expect(wrapper.find(Chain).length).toBe(1);

    wrapper.setProps({ titleArray: titleArray.slice(0, 1) });
    expect(wrapper.find(Chain).length).toBe(1);

    wrapper.setProps({ titleArray: titleArray.slice(0, 2) });
    expect(wrapper.find(Chain).length).toBe(1);

    wrapper.setProps({ titleArray: titleArray.slice(0, 3) });
    expect(wrapper.find(Chain).length).toBe(2);

    wrapper.setProps({ titleArray: titleArray.slice(0, 4) });
    expect(wrapper.find(Chain).length).toBe(3);

    wrapper.setProps({ titleArray: titleArray.slice(0, 5) });
    expect(wrapper.find(Chain).length).toBe(4);

    wrapper.setProps({ titleArray: titleArray });
    expect(wrapper.find(Chain).length).toBe(4);
  });

  it('should change state after clicking on a <Node /> before currentStep', () => {
    wrapper.setProps({ titleArray: titleArray.slice(0, 5), initialStep: 2 });

    wrapper.find(Node).at(0).simulate('click', 0);
    expect(setState.calledOnce).toBe(true);
    expect(wrapper.state('currentStep')).toEqual(0);
  });
});
