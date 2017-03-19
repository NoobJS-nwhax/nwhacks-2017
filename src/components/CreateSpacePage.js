/**
 * Created by catherineleung on 2017-03-19.
 */
'use strict';

import React from 'react';
import TextField from './TextField';

export default class CreateSpacePage extends React.Component {
    render() {
        return (
            <div className="create-space">
                <TextField label="Name of Space" id="space-name"/>
                <TextField label="Location" id="location"/>
                <TextField label="Description" id="description"/>
            </div>
        );
    }
}
