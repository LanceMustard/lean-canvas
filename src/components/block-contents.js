import React, { Component } from 'react';
import '../styles/site.css';
import '../styles/app-content.css';

class BlockContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: props.block,
      items: props.items
    };
    this.renderBlockItem = this.renderBlockItem.bind(this);
  }

  renderBlockItem(item, index) {
    if (item.block == this.state.block) {
      return (
        <div className="block-item" key={index}>
          <span>{item.details}</span>
          <div className="block-item-icons">
            <a href="#">
              <i className="fa fa-edit tooltip"><span className="tooltiptext">Edit Assumption</span></i>
            </a>
            <a href="#">
              <i className="fa fa-trash-o tooltip"><span className="tooltiptext">Delete Assumption</span></i>
            </a>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="block-contents">
        { this.state.items.map(this.renderBlockItem) }
      </div>
    );
  }
}

export default BlockContents;