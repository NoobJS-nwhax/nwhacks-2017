'use strict';

import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

export default class Navbar extends React.Component {
    render() {
        return (
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Space Shuttle 
              <FontAwesome
                className='rocket'
                name='rocket'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              /></a>
              <ul id="nav-mobile" className="right">
                <li>Welcome, Michael</li>
              </ul>
            </div>
          </nav>
        );
    }
}