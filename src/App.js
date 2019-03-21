import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Work from './components/Work';
import Projects from './components/Projects';
import Education from './components/Education';
import Map from './components/Map';

class App extends Component {
  render() {
    let info =[["mobile","07760586545"], ["email","damiengraille@gmail.com"],["github","DamienGraille"],["location", "London"]]; 
  

  let listskills=["HTML5", "CSS3", "Javascript: ES6, React, Node", "Problem Analysis and Problem-Solving"];
    return (
      
      <div className="App">  
       
            <Header name={"Damien Graille"} age={"web developer"}
            info={info} listskills= {listskills}
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
