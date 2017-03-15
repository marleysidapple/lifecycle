import React, { Component } from 'react';
import { Link } from "react-router";

class Navigationbar extends Component {

	constructor(){
		super();
		this.state = {
			isOpen: false
		};


	}

	toggleClass(e){	
		if (this.state.isOpen === false){
			this.setState({isOpen: true});
		} else {
			this.setState({isOpen: false});
		}
	}

	render(){
		return(
				<div>
					  <nav className="navbar navbar-default navbar-static-top">
				      <div className="container">
				        <div className="navbar-header">
				          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				            <span className="sr-only">Toggle navigation</span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				          </button>
				          <a className="navbar-brand" href="#">My Registration</a>
				        </div>
				        <div id="navbar" className="navbar-collapse collapse">
				          <ul className="nav navbar-nav">
				            <li className="active"><a href="/">Home</a></li>
				            <li><a href="/">Signup</a></li>
				          </ul>
				        </div>
				      </div>
				    </nav>
				</div>
			);
	}

}

export default Navigationbar;