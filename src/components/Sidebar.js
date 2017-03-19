'use strict';

import React from 'react';
import { Link } from 'react-router';

//connect to DB
var async = require('async');

// Require the driver.
var pg = require('pg');

var fs = require('fs');
var aSpaces = [];
// Connect to the "bank" database.
var config = {
  user: 'maxroach',
  host: 'localhost',
  database: 'HOTEL',
  port: 26257
};


pg.connect(config, function (err, client, done) {

  // Closes communication with the database and exits.
  var finish = function () {
    done();
    //process.exit();
  };

  var sql = fs.readFileSync('space_control.sql').toString();

  if (err) {
    console.error('could not connect to cockroachdb', err);
    finish();
  }

  client.query(sql, function (err, results){
    done();
    if(err){
      console.error('error: ', err);
      finish();
    }
  });

  var sqlquery = "SELECT sName FROM space WHERE uID=1";

  client.query(sqlquery, function (err, results){
    done();
    if(err){
      console.error('error: ', err);
      finish();
    }
        results.rows.forEach(function (row){
        //console.log(row.sName);
        aSpaces.push({name:row.sName, id:row.sName});
    });
   //console.log(aSpaces);
   finish();
  });

});





var mySpaces = [
  {
    name: "HI",
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
              {aSpaces.map(function(oSpace) {
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