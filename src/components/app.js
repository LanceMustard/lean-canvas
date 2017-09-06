import React, { Component } from 'react';
import AppHeader from './app-header.js';
import AppContent from './app-content.js';
import AppFooter from './app-footer.js';
import '../styles/app.css';
import '../styles/site.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

export default App;
