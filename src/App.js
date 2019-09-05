import React from 'react';
import './App.css';
import ReverseList from './ReverseList';
import List from './List';

function App() {
  return (
    <div className="App">
      <div id='topBanner'>Reverse String</div>
      <div id='inputBar'>
        <input id='txt' placeholder='Reverse here' type='text' />
        <button id='btn'>Submit</button>
      </div>
        <List />
        <ReverseList />
      </div>
  );
}

export default App;
