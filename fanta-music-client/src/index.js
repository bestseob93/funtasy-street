import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App, Search, Home, Login, Register } from 'containers';

import configStore from 'store/configStore';

import 'styles/common.css';
import 'styles/Authentication/auth.css';
import 'styles/App.css';
import 'styles/search.css';
import 'styles/Header.css';
import 'styles/Visualize.css';
import 'styles/Footer.css';
import 'styles/Geo.css';

const rootElement = document.querySelector('#root');
ReactDOM.render(
  <Provider store={configStore}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="Search" component={Search}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
        </Route>
    </Router>
  </Provider>
  , rootElement);
