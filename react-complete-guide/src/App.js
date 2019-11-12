import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    user: [{username: 'None'}],
    persons: [
      { id: '1', name: 'Max', age:28 },
      { id: '2', name: 'Jean', age:58 },
      { id: '3', name: 'Steph', age:32 },
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  usernameChangedHandler = (event) => {
    this.setState({user:[{username: event.target.value}]});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // style for switch name button
    const style = {
      backgroundColor: 'black',
      font: 'inherit',
      color: 'white',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey! I'm a React App!!</h1>

        <UserInput 
          changed={this.usernameChangedHandler}
          currentName={this.state.user[0].username}/>
        <UserOutput userName={this.state.user[0].username}/>
        <UserOutput userName={this.state.user[0].username}/>
        <UserOutput userName="LNPappas"/>

        <button 
          style={style}
          onClick={this.togglePersonHandler}>Show Name
        </button>
        {persons}
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