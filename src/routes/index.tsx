import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ProductList from '../pages/ProductList';
import ProductCreate from '../pages/ProductCreate';
import ProductEdit from '../pages/ProductEdit';

const Routes: React.FC = () => (
  <Switch>
    <Route  path="/" exact component={SignIn}/>
    <Route  path="/signup" exact component={SignUp}/>


    <Route  path="/products" exact isPrivate component={ProductList}/>
    <Route  path="/products/create" exact isPrivate component={ProductCreate}/>
    <Route  path="/products/edit/:id" exact isPrivate component={ProductEdit}/>
  </Switch>
)

export default Routes;
