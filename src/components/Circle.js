import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Circle.css';

const Circle = ({ isActive, index }) => {
  const circleClass = classnames({
    'step-progress--circle': true,
    active: isActive,
  });

  return <div className={circleClass} />;
};

Circle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default Circle;
