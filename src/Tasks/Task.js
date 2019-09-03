import React from 'react';

const task = (props) => {
    return (
        <div className={`flex_line ${props.line}`}>
            <span className='flex_item name'>{props.name}</span>
            <span className='flex_item age'>{props.age}</span>
            <span className='flex_item eyeColor'>{props.eyeColor}</span>
        </div>
    );
}

export default task;