import React from 'react';
import PropTypes from 'prop-types';

import { LinkBase } from './styles';

const Link = ({ children }) => <LinkBase>{children}</LinkBase>

Link.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Link;
