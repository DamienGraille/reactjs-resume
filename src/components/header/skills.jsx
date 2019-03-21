import React, { Component } from 'react';



class Skills extends Component {
    render() {
      return (
      <div>
        <ul>
        {this.props.listskills.map((data)=> <li><span>{data} </span></li> )}
        </ul>
      </div>
      );
    }
  }

  export default Skills;
