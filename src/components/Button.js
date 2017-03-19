'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Button extends React.Component {
    render() {
        return (
          <Link className="waves-effect waves-light btn" to={this.props.url}>{this.props.name}</Link>
        );
    }
}