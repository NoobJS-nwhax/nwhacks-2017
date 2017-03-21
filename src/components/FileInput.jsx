'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class FileInput extends React.Component {
    render() {
        return (
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" multiple/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
            </div>
          </div>
        );
    }
}