/**
 * Created by catherineleung on 2017-03-19.
 */
'use strict';

import React from 'react';

export default class TextField extends React.Component {
    render() {
        return (
            <div className="input-field">
                <input id={this.props.id} type="text" class="validate"/>
                <label for={this.props.id}>{this.props.label}</label>
            </div>
        );
    }
}
