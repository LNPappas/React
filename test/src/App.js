import React, {Component} from 'react';
import './App.css';
import Validation from './Input/Input'
import Char from './Char/Char';

class App extends Component {
  state = {
    inputs: ''
  }

  inputChangedHandler = (event) => {
    this.setState({inputs: event.target.value});
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.inputs.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({inputs: updatedText});
  }

  render () {
    const charList = this.state.inputs.split('').map((chr, index) => {
      return <Char 
        character={chr} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)}/>;
    });


    return ( 
      <div>
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.inputs}/>
        <p>{this.state.inputs}</p>
        <Validation inputLength={this.state.inputs.length}/>
        {charList}
      </div>
    )
  }
}

export default App;
