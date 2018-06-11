import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import routeConfig from './router-config';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)
const RegisterRoutes = (routes) => {
    routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
    ))
}

ReactDOM.render(
    <Router >
        <div>
        <App/>
            {routeConfig.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
            {/*<RegisterRoutes routes={routeConfig}/>*/}
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
