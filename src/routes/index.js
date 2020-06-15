import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Product from './Product';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produto/:id" component={Product} />
    </Switch>
  );
}
