'use strict';

import React from 'react';
import { Link } from 'react-router';

var mySpaces = [
  {
    name: "Woodward Library",
    id: "woodward"
  },
  {
    name: "Koerner Library",
    id: "koerner"
  }
];

var joinedSpaces = [
  {
    name: "Ebi-Ten",
    id: "ebiten"
  },
  {
    name: "Thunderbird Parkade",
    id: "thunderbird"
  }
];

export default class Sidebar extends React.Component {
    render() {
        return (
          <ul id="slide-out" className="side-nav fixed">
            <h4>My Spaces</h4>
              {mySpaces.map(function(oSpace) {
                return <li><Link to={`/spaces/${oSpace.id}`}>{oSpace.name}</Link></li>;
              })}
            <h4>Joined Spaces</h4>
              {joinedSpaces.map(function(oSpace) {
                return <li><Link to={`/spaces/${oSpace.id}`}>{oSpace.name}</Link></li>;
              })}
          </ul>
        );
    }
}