import React, { Component } from 'react';
import '../styles/site.css';
import '../styles/app-header.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <a href="#" className="button">☰ Menu</a>

        <h1>Allira's Lean Canvas</h1>

        <a href="#" className="button">
          <i className="fa fa-cog"></i>
          Settings
        </a>
      </header>
    );
  }
}

export default AppHeader;