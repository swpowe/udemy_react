import React from 'react';

const task = (props) => {
    const randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    return (
        <div className={`flex_line ${props.line}`}>
            <span className='flex_item box'>
                <span className='flex_item icon' style={{backgroundColor: randomColor}}>{props.name.charAt(0).toUpperCase()}</span>
            </span>
            <span className='flex_item name'>{props.name}</span>
            <span className='flex_item age'>{props.age}</span>
            <span className='flex_item eyeColor'>{props.eyeColor==='' ? '---' : props.eyeColor}</span>
        </div>
    );
}

export default task;