import React from 'react'

const person = (props) => {
    return (
        <div>
            <p> I'm {props.name}!</p>
            <p> I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <br/>
        </div>
    )
};

export default person;