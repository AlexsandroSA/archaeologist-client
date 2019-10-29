import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import router from './router';
import {
    LoginPage,
    DiscoveryPage,
    DiscoveryEditPage,
    DiscoveryCreatePage,
    DiscoveryDetailsPage,
} from './pages';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path={router.LOGIN} component={LoginPage} />
            <Route exact path={router.DISCOVERY} component={DiscoveryPage} />
            <Route exact path={router.DISCOVERY_CREATE} component={DiscoveryCreatePage} />
            <Route exact path={`${router.DISCOVERY_EDIT}/:id`} component={DiscoveryEditPage} />
            <Route exact path={`${router.DISCOVERY_DETAILS}/:id`} component={DiscoveryDetailsPage} />

            <Route path="*" component={() => <h1>NOT FOUND</h1>} />
        </Switch>
    </Router>
);

export default AppRouter;
