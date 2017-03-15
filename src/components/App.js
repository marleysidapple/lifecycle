import React, { Component } from 'react';
import NavigationBar from './navigation/NavigationBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
        </div>
      </div>
    );
  }
}

export default App;
