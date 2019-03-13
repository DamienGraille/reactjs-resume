import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
      <div>
        <h1 >
        {this.props.name}
        </h1>
        <div></div>
        <div class="title2">{this.props.title}
        </div>
        <h4>
        Targetting an entry level developer job
        </h4>
        <ul><span>
          {this.props.info.infos.map((data)=> <li><span>{data[0]} </span><span>{data[1]}</span></li> )
        }
        </span>
        </ul>
        <Info/>
      </div>);
    }
  }

  export default Header;