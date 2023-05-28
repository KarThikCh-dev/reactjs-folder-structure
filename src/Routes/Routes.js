
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { AdminRoutes, SomeOtherRoutes, UserRoutes } from './RoutesConfig';


const Routes = () => {
    return (
        <Router>
          {/* Main routes */}
          <Switch>
            <Route path="/user" component={UserRoutes} />
            <Route path="/someother" component={SomeOtherRoutes} />
            <Route path="/admin" component={AdminRoutes} />
          </Switch>
        </Router>
      );
};

export default Routes;