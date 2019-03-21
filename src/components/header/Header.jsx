import React, { Component } from 'react';
import Info from './Info';
import Skills from './Skills';


class Header extends Component {
    render() {
      return (
      <div>
        <h1 >
        {this.props.name}
        </h1>
         
        
        <div class="title2">{this.props.title}
        </div>
        <h4>
        Targetting an entry level developer job
        </h4>
        <Info info={this.props.info}/>
        <h4>
        Skills at a glance
        </h4>
        <Skills listskills={this.props.listskills}/>
      </div>
      
      );
    }
  }

  export default Header;