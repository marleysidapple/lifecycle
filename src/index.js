import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';


ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path='/' component={App}>
	      <IndexRoute component={Home} />
	    </Route>
  	</Router>,
	document.getElementById('root')
)


