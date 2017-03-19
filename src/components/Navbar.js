'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
    render() {
        return (
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Space Shuttle</a>
              <ul id="nav-mobile" className="right">
                <li>Welcome, Michael</li>
              </ul>
            </div>
          </nav>
        );
    }
}