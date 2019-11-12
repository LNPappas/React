import React from 'react'
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}> I'm {props.name}!</p>
            <p> I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <br/>
        </div>
    )
};

export default person;