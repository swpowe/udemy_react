import React from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
    // {
    //     key : 'id',
    //     name : 'ID'
    // },
    {
        key : 'title',
        name : 'Title',
    },
    {
        key : 'count',
        name : 'Count'
    }
];

const rows = [
    {
        // id : 0,
        title : 'Socks',
        count : 20
    },
    {
        // id : 1,
        title : 'Hats',
        count : 40
    },
    {
        // id : 2,
        title : 'Pants',
        count : 60
    }
];

function HelloWorld() {
    return (
        <ReactDataGrid 
            columnSortable
            columns={columns} 
            rowGetter={i => rows[i]}
            rowsCount={3}
            minHeight={150}
        />
    );
}

export default HelloWorld;