import React from 'react';

const userInput = (props) => {
    const box = {
        border: '3px solid blue'
      }

    return <input 
        type="text"
        style={box} 
        onChange={props.changed}
        value={props.currentName}/>;
};

export default userInput;