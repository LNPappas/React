import React from 'react';

const userInput = (props) => {
    const box = {
        border: '10px dotted green'
      }

    return <input 
        type="text"
        style={box} 
        onChange={props.changed}
        value={props.currentName}/>;
};

export default userInput;