import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hey! I'm a React App!!</h1>
      <Person name='Max' age='28' />
      <Person name='Jean' age='58' />
      <Person name='Steph' age='32'>My hobbies: Hiking</Person>
    </div>
  );
}

export default App;
