import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
