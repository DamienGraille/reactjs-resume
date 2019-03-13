import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Work from './components/Work';
import Projects from './components/Projects';
import Education from './components/Education';
import Map from './components/Map';

class App extends Component {
  render() {
    let info ={
      infos:[["mobile","07760586545"], ["email","damiengraille@gmail.com"],["github","DamienGraille"],["location", "London"]],
     infodata:["07760586545","DamienGraille","London"]
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
