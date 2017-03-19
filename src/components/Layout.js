'use strict';

import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="app-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
