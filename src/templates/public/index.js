import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Logo } from './styles';

const PublicTemplate = ({ children }) => (
    <Container>
        <Logo>LOGO</Logo>
        <Content>{children}</Content>
    </Container>
);

PublicTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicTemplate;
