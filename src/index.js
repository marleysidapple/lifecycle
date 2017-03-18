import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Signup from './components/Signup';


const app = document.getElementById('root');

ReactDOM.render(
	 <Router history = {hashHistory}>
	  <Route path="/" component={App}>
	    <IndexRoute component={Home} />
	    <Route path="signup" component={Signup} />
	  </Route>
	 </Router>,
	app);


