import React from 'react';
import PropTypes from 'prop-types';

import { ButtonBase } from './styles';

const Button = ({ onClick, type, children }) => (
  <ButtonBase type={type} onClick={onClick}>{children}</ButtonBase>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => undefined,
};

export default Button;
