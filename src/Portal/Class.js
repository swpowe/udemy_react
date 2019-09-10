import React from 'react';
import ReactDataGrid from 'react-data-grid';

import RowData from './RowData';

const defaultColumnProperties = {
    sortable: true,
    width: 120
  };

const columns = [
    {
        key : 'id',
        name : 'ID',
        sortDescendingFirst : true
    },
    {
        key : 'name.first',
        name : 'First Name'
        
    }
].map(c => ({ ...c, ...defaultColumnProperties }));

const ROW_COUNT = 10;

const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
    const comparer = (a, b) => {
        if(sortDirection === 'ASC') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        }else if(sortDirection === 'DESC') {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    };
    return sortDirection === 'NONE' ? initialRows : [...rows].sort(comparer);
};

class Class extends React.Component() {
    constructor() {
        super();
        this.state = {
            initialRows : {initialRows}
        }
        
    }
    
    

}
