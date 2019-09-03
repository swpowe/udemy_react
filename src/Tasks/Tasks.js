import React from 'react';
import Task from './Task';

const tasks = () => {
    let shade = true;
    const lineShade = () => {
        let value = '';
        // if shade is true, set it false and return falue 'shade'
        // if shade is false, set it true and return value ''
        if(shade) {
            value = ''
            shade = false;
        }else {
            value = 'shade'
            shade = true;
        }
        return value;
    }

    const people = [
        {
            name: 'Spencer',
            age: '39',
            eyeColor: 'blue'
        },
        {
            name: 'Camille',
            age: '39',
            eyeColor: 'brown'
        },
        {
            name: 'Ethan',
            age: '17',
            eyeColor: 'hazel'
        },
        {
            name: 'Spencer',
            age: '39',
            eyeColor: 'blue'
        },
        {
            name: 'Camille',
            age: '39',
            eyeColor: 'brown'
        },
        {
            name: 'Ethan',
            age: '17',
            eyeColor: 'hazel'
        }

    ]

    const listItems = people.map((person) =>
        <Task
            key={person}
            name={person.name}
            age={person.age}
            eyeColor={person.eyeColor}
            line={lineShade()}
        />
    );

    

    return (
        <div className='flex_container'>
            <div>{listItems}</div>
        </div>
    );
}

export default tasks;