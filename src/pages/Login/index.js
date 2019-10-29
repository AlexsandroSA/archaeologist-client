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
            <p>This is a classic website, no traps or weird stuff!</p>
            <p>Feel free to browse, relax and, I don't know, click the button down there? Might as well, right?</p>
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
