import React from 'react';

function Header(props) {
    return ( 
        <div>
            <h1>This is my header</h1>
            {props.enabled ? <h1>Hello {props.name}</h1> : ''}
        </div>
    )
}

export default Header;