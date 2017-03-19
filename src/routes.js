'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import CreateSpacePage from './components/CreateSpacePage';

import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="create-space" component={CreateSpacePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
