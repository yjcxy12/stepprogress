import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Chain.css';

const Chain = ({ isActive, totalSteps }) => {
  const chainStyle = {
    height: '10px',
    width: `calc(${100 / (totalSteps - 1)}% - ${33 + 33 / (totalSteps - 1)}px)`,
  };
  const chainClass = classnames({
    'step-progress--chain': true,
    active: isActive,
  });
  return <div className={chainClass} style={chainStyle} />;
};

Chain.propTypes = {
  isActive: PropTypes.bool.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default Chain;
