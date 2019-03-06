import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Header from './components/Work';
import Header from './components/Projects';
import Header from './components/Education';
import Header from './components/Map';

class App extends Component {
  render() {
    return (
      
      <div className="App">  
       
            <Header/>
            <Work/>
            <Projects/>
            <Education/>
            <Map/>
            
      </div>
    );
  }
}

export default App;
