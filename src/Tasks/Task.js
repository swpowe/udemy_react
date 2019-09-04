import React from 'react';

const task = (props) => {
    console.log(typeof(props.name))
    return (
        <div className={`flex_line ${props.line}`}>
            <span className='flex_item box'>
                <span className='flex_item icon'>{props.name.charAt(0).toUpperCase()}</span>
            </span>
            <span className='flex_item name'>{props.name}</span>
            <span className='flex_item age'>{props.age}</span>
            <span className='flex_item eyeColor'>{props.eyeColor}</span>
        </div>
    );
}

export default task;