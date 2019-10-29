import React from 'react';
import PropTypes from 'prop-types';

import webRouter from '../../router';
import { Link } from '../../components';
import { Container, Header, Content, Logo } from './styles';

const PublicTemplate = ({ children, showGoBack }) => (
    <Container>
        <Header>
            <Logo
                src="https://cdn3.iconfinder.com/data/icons/landmark-outline/447/giza_egypt_cairo_desert_egyptian_pyramid_tourism_architecture_landmark_travel-512.png"
                title=""
                alt=""
            />
        </Header>

        {showGoBack && <Link to={webRouter.DISCOVERY}>Home</Link>}

        <Content>{children}</Content>
    </Container>
);

PublicTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    showGoBack: PropTypes.bool,
};

PublicTemplate.defaultProps = {
    showGoBack: false,
};

export default PublicTemplate;
