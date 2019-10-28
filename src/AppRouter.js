import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import router from './router';
import { LoginPage } from './pages';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path={router.LOGIN} component={LoginPage} />
            <Route path="*" component={() => <h1>NOT FOUND</h1>} />
        </Switch>
    </Router>
);

export default AppRouter;
