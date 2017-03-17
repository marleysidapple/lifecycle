import React, { Component } from 'react';
import NavigationBar from './navigation/NavigationBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
        	{this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
