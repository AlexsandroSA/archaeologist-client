import React from 'react';
import PropTypes from 'prop-types';

import { BoxBase } from './styles';

const Box = ({ children }) => <BoxBase>{children}</BoxBase>

Box.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Box;
