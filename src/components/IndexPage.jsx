'use strict';

import React from 'react';
import AthletePreview from './AthletePreview';
import Button from './Button';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <Button name="Create Space" url="/create-space"/>
        <Button name="Browse Spaces" url="/browse-spaces"/>
      </div>
    );
  }
}
