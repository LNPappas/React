import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // state = {
  //   persons: [
  //     { name: 'Max', age:28 },
  //     { name: 'Jean', age:58 },
  //     { name: 'Steph', age:32 }
  //   ]
  // }

  // switchNameHandler = () => {
  //   // console.log('Clicked!');
  //   this.setState({persons: [
  //     { name: 'Maximillian', age:28 },
  //     { name: 'Jean', age:58 },
  //     { name: 'Stephanie', age:32 }
  //   ]});
  // }

  state = {
    username: 'None'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    const style = {
      backgroundColor: 'black',
      font: 'inherit',
      color: 'white',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
        <div className="App">
        <h1>Hey! I'm a React App!!</h1>

        <UserInput 
          changed={this.usernameChangedHandler}
          currentName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="LNPappas"/>
{/* 
        <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name
        </button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I like to hike!</Person> */}
      </div> 
    );
  }
}

export default App;

// const App = props => {
//   const [ personState, setPersonState] = useState({
//     persons: [
//       { name: 'Max', age:28 },
//       { name: 'Jean', age:58 },
//       { name: 'Steph', age:32 }
//     ]
//   });

//     const switchNameHandler = (newName) => {
//       setPersonState({
//         persons: [
//                 { name: newName, age:28 },
//                 { name: 'Jean', age:58 },
//                 { name: 'Stephanie', age:32 }
//         ]
//       });
//     }

// render() {
//   return (

      {/* <div className="App">
        <h1>Hey! I'm a React App!!</h1>
        <button onClick={() => switchNameHandler('Harvey')}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person 
          name={personState.persons[1].name} 
          age={personState.persons[1].age} />
        <Person 
          name={personState.persons[2].name} 
          age={personState.persons[2].age}
          click={() => switchNameHandler('Maximillian')}>I like to hike!</Person>
      </div>
    );
} */}