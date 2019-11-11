// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age:28 },
//       { name: 'Jean', age:58 },
//       { name: 'Steph', age:32 }
//     ]
//   }

//   switchNameHandler = () => {
//     // console.log('Clicked!');
//     this.setState({persons: [
//       { name: 'Maximillian', age:28 },
//       { name: 'Jean', age:58 },
//       { name: 'Stephanie', age:32 }
//     ]});
//   }

const App = props => {
  const [ personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age:28 },
      { name: 'Jean', age:58 },
      { name: 'Steph', age:32 }
    ]
  });

    const switchNameHandler = () => {
      setPersonState({
        persons: [
                { name: 'Maximillian', age:28 },
                { name: 'Jean', age:58 },
                { name: 'Stephanie', age:32 }
        ]
      });
    }


  // render() {
    return (
      <div className="App">
        <h1>Hey! I'm a React App!!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        <Person name={personState.persons[2].name} age={personState.persons[2].age}>I like to hike!</Person>
      </div>
    );
}

      {/* <div className="App">
        <h1>Hey! I'm a React App!!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I like to hike!</Person>
      </div> */}
  //   );
  // }
// }

export default App;
