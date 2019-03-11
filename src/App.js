import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Work from './components/Work';
import Projects from './components/Projects';
import Education from './components/Education';
import Map from './components/Map';

class App extends Component {
  render() {
    var info ={
     infos:["mobile", "email", "github", "location"],
     infodata:["07760586545","damiengraille@gmail.com","DamienGraille","London"]
  };
    return (
      
      <div className="App">  
       
            <Header name={"Damien Graille"} age={"web developer"}
            info={info}
            />
            <Work/>
            <Projects/>
            <Education/>
            <Map/>
            
      </div>
    );
  }
}

export default App;
