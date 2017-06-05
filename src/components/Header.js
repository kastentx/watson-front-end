import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <h2>{props.message}</h2>
  )
}

Header.propTypes = {
  message: PropTypes.string
};

export default Header;
