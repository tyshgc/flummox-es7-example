/**
 * App Routes
 */

import React         from 'react';
import joinClasses   from 'react/lib/joinClasses';
import Router        from 'react-router';
import getUA         from './utils/ua';
React.initializeTouchEvents(true);

/* Components */
import App from './views/App';

const {
  Top,
  NotFound
} = require('./views/pages');


/* Router Handler */
const {
  DefaultRoute,
  NotFoundRoute,
  Link,
  Route,
  RouteHandler
} = Router;

/* Routes */
const Routes = (
  <Route name='Top' path='/' handler={App}>
    <DefaultRoute handler={Top} />
    
    {/* 404 */}
    <NotFoundRoute handler={NotFound} />
  </Route>
);

/* Root Render */
const app = document.getElementById("app");
Router.run(Routes, (Handler, state)=> React.render(<Handler />, app));

console.log("Start App...");