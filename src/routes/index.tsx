import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route  path="/" exact component={SignIn}/>
    <Route  path="/signup" exact component={SignUp}/>
    <Route  path="/products" exact component={Product}/>
  </Switch>
)

export default Routes;
