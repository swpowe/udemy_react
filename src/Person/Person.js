import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a person named {props.name}.</p>
            <button onClick={props.handleClick}>Change Name</button>
        </div>
    );
}

export default person;