import React, { Component } from 'react';



class Info extends Component {
    render() {
      return (
      <div>
        
        
        
        <ul><span>
        {this.props.info.map((data)=> <li><span>{data[0]} </span><span>{data[1]}</span></li> )}
        </span>
        </ul>
      </div>
      );
    }
  }

  export default Info;

 // {this.props.info.infos.map((data)=> <li><span>{data[0]} </span><span>{data[1]}</span></li> )}
//info={this.props.info}
//{this.props.children}