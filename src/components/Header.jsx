import React, { Component } from 'react';

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
        <ul><span>
          {this.props.info.infos.map((data)=> <li>{data}</li>)
        }
        </span>
        <span class="list">
        {this.props.info.infodata.map((data)=> <li>{data}</li>)
        }
        </span>
        </ul>
      </div>);
    }
  }

  export default Header;