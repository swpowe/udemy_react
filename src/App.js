import React from 'react';
import './App.css';
import Header from './Header';
import ClassComp from './ClassComp'

function App() {

  return (
    <div className="App">
      <Header name="Spencer" enabled={true}/>
      <ClassComp />
    </div>
  );
}

export default App;
