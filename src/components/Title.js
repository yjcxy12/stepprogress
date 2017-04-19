import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Title.css';

const Title = ({ isActive, title }) => {
  const TitleClass = classnames({
    'step-progress--title': true,
    active: isActive,
  });

  return (
    <h3 className={TitleClass}>
      {title}
    </h3>
  );
};

Title.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
