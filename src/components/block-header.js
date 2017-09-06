import React, { Component } from 'react';
import '../styles/site.css';
import '../styles/app-content.css';

class BlockHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  render() {
    return (
      <div className="block-title">
        <h1>{this.state.title}</h1>
        <a href="#">
          <i className="fa fa-plus-circle tooltip"><span className="tooltiptext">Add Assumption</span></i>
        </a>
      </div>
    );
  }
}

export default BlockHeader;