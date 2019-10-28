import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import router from './router';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path={router.LOGIN} component={() => <h1>LOGIN</h1>} />
            <Route path="*" component={() => <h1>NOT FOUND</h1>} />
        </Switch>
    </Router>
);

export default AppRouter;
