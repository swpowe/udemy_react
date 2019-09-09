import React from 'react';

const RowData = (props) => {
    const randomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    return (
        <a href="">
            <div className={`flex_line ${props.line}`}>
                <span className='flex_item box'>
                    <span className='flex_item icon' style={{ backgroundColor: randomColor }}>{props.name.charAt(0).toUpperCase()}</span>
                </span>
                <span className='flex_item name'>{props.name}</span>
                <span className='flex_item age'>{props.age}</span>
                <span className='flex_item eyeColor'>{props.eyeColor === '' ? '---' : props.eyeColor}</span>
                <button className='button edit' onClick={props.handleEditClick}><FontAwesomeIcon icon={faPencilAlt} aria-hidden="true" /></button>
                <button className='button trash' onClick={props.handleEditClick}><FontAwesomeIcon icon={faTrashAlt} aria-hidden="true" /></button>
            </div>
        </a>
    );
}