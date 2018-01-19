import React, { Component } from 'react';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const students = [
  {id : '12', name: 'Sam', score: 100},
  {id : '18', name: 'Rose', score: 10},
  {id : '20', name: 'Violet', score: 50}
]

const Home = () => (<div>Home</div>)
const Students = () => (
  <div>
    {
      _.map(students, s => <StudentLink {...s} key={s.id}/>)
    }
    <Route path="/students/:id" component={StudentContainer}/>
  </div>
)
const StudentContainer = ({match}) => {
  let s = _.find(students, ['id', match.params.id])
  return (
    <StudentLine {...s} key={s.id}/>
  )
}
const StudentLink = ({id, name}) => (
  <div><Link to={`/students/${id}`}>{name}</Link></div>
)
const StudentLine = ({id, name, score}) => (
  <div>{id} {name} = {score}</div>
)

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/students" component={Students}/> 
      </div>       
    </Router>
    );
  }
}

export default App;
