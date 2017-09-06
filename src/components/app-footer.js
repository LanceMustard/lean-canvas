import React, { Component } from 'react';
import '../styles/site.css';
import '../styles/app-footer.css';

class AppFooter extends Component {
  render() {
    return (
      <div className="app-footer">
        <div className="icon-bar">
          <a href="#">
            <i className="fa fa-home"></i>
            Home
          </a>
          <a href="#">
            <i className="fa fa-bell"></i>
            Notifications
          </a>
          <a href="#">
            <i className="fa fa-envelope"></i>
            Messages
          </a>
          <a href="#">
            <i className="fa fa-user"></i>
            Me
          </a>
        </div>
      </div>
    );
  }
}

export default AppFooter;