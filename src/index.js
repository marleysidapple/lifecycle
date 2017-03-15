import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, BrowserHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router history={BrowserHistory} routes={routes} />,
  document.getElementById('root')
);
