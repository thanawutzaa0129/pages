import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

const students = [
  {id : 12, name: 'Sam', score: 100},
  {id : 18, name: 'Rose', score: 10},
  {id : 20, name: 'Violet', score: 50}
]

const StudentLine = (props) => (
  <div>{props.id} {props.name} = {props.score}</div>
)

class App extends Component {
  render() {
    return (
      _.map(students,s => (<StudentLine {...s} key={s.id}/>))
    );
  }
}

export default App;
