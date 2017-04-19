import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { clamp } from 'ramda';
import Chain from './Chain';
import Node from './Node';
import './StepProgress.css';

const modifyTitleArray = titleArray => {
  const length = titleArray.length;
  if (length < 2 || length > 5) {
    console.warn(
      `Please provide array of length between 2 and 5: Length of ${length} is provided.`
    );
  }

  const appendArray = arr => {
    if (arr.length < 2) return appendArray(arr.concat(['Default']));
    return arr;
  };

  return appendArray(titleArray).slice(0, 5);
};

class StepProgress extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { currentStep: props.initialStep };
  }

  handleClick(index) {
    this.setState(() => ({ currentStep: index }));
  }

  renderSteps() {
    const titleArray = modifyTitleArray(this.props.titleArray);
    const totalSteps = titleArray.length;
    const currentStep = clamp(0, totalSteps, this.state.currentStep);

    return titleArray.map((title, index) => {
      const isActive = index <= currentStep;
      return [
        index > 0
          ? <Chain isActive={isActive} totalSteps={totalSteps} />
          : null,
        <Node
          isActive={isActive}
          index={index}
          title={title}
          onClick={this.handleClick}
        />,
      ];
    });
  }

  render() {
    return (
      <div className="step-progress">
        {this.renderSteps()}
      </div>
    );
  }
}

StepProgress.PropTypes = {
  titleArray: PropTypes.array.isRequired,
  initialStep: PropTypes.number,
};

StepProgress.defaultProps = {
  initialStep: 0,
};

export default StepProgress;
