import React from 'react';
import PropTypes from 'prop-types';
import Circle from './Circle';
import Title from './Title';
import './Node.css';

const Node = ({ isActive, index, title, onClick }) => {
  return (
    <div
      className="step-progress--node"
      onClick={isActive ? () => onClick(index) : null}>
      <Title isActive={isActive} title={title} />
      <Circle isActive={isActive} index={index} />
    </div>
  );
};

Node.propTypes = {
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Node;
