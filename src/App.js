import React from 'react';
import './App.css';
import Header from './Header';
import ClassComp from './ClassComp';
import Person from './Person/Person'; // Person could be anything. could also create alias
import Tasks from './Tasks/Tasks';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name : 'Spencer',
      longName : 'Camille Rose Powell'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      longName : this.state.longName === 'Spencer Wayne Powell' 
        ? 'Camille Rose Powell' : 'Spencer Wayne Powell'
    })
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name} enabled={true}/>
        <ClassComp />
        <Person name={this.state.longName} handleClick={this.handleClick}/>
        <Tasks />
      </div>
    );
  }
}

export default App;
