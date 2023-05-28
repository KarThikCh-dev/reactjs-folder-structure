import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import components for different user pages
import SomeOtherPage from './SomeOtherPage';
import UserProfilePage from './UserProfilePage';
import UserSettingsPage from './UserSettingsPage';

// Define routes for each user type
const UserRoutes = () => {
  return (
    <Switch>
      <Route path="/user/profile" component={UserProfilePage} />
      <Route path="/user/settings" component={UserSettingsPage} />
      {/* Add more user routes here */}
    </Switch>
  );
};

const SomeOtherRoutes = () => {
  return (
    <Switch>
      <Route path="/someother" component={SomeOtherPage} />
      {/* Add more routes for some other user here */}
    </Switch>
  );
};

const AdminRoutes = () => {
  return (
    <Switch>
      {/* Add more admin routes here */}
    </Switch>
  );
};

// Export the routes
export { UserRoutes, SomeOtherRoutes, AdminRoutes };
