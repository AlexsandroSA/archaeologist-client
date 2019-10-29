import React from 'react';
import PropTypes from 'prop-types';

import webRouter from '../../router';
import PublicTemplate from '../../templates/default';
import { Button } from '../../components';

const LoginPage = ({ history }) => {

    function handleClick() {
        history.push(webRouter.DISCOVERY);
    }

    return (
        <PublicTemplate>
            <h1>Hello!</h1>
            <h2>Welcome to the Archaeologist.</h2>
            <p>This is the best website for you adventurer!</p>
            <p>Feel free to browse, relax and record your discoveries around the world.</p>
            <Button onClick={handleClick}>Enter</Button>
        </PublicTemplate>
    );
};

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func,
    }).isRequired,
};

export default LoginPage;
