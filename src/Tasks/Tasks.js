import React from 'react';
import Task from './Task';
// import jsonData from './userData.json';


const tasks = (props) => {
    let shade = true;
    const lineShade = () => {
        let value = '';
        if (shade) {
            value = ''
            shade = false;
        } else {
            value = 'shade'
            shade = true;
        }
        return value;
    }

   
    // const people = [
    //     {
    //         name: 'Spencer',
    //         age: '39',
    //         eyeColor: 'blue'
    //     },
    //     {
    //         name: 'Camille',
    //         age: '39',
    //         eyeColor: 'brown'
    //     },
    //     {
    //         name: 'Ethan',
    //         age: '17',
    //         eyeColor: 'hazel'
    //     },
    //     {
    //         name: 'Spencer',
    //         age: '39',
    //         eyeColor: 'blue'
    //     },
    //     {
    //         name: 'Camille',
    //         age: '39',
    //         eyeColor: 'brown'
    //     },
    //     {
    //         name: 'Ethan',
    //         age: '17',
    //         eyeColor: 'hazel'
    //     }

    // ]
    
    if(props.loaded) {
        const listItems = props.data.results.map((person) =>
        <Task
            key={person}
            name={person.name.first}
            age={person.dob.age}
            eyeColor={person.id.name}
            line={lineShade()}
        />
    );
    console.log(props.data.results);
    return (
        <div className='container'>
            <div>{listItems}</div>
        </div>
    );
    }
    


    return (
        <div className='container'>
            <div>Loadeing user data....</div>
        </div>
    );
}

export default tasks;