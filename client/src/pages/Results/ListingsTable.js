
import React, { useEffect, useState, useMemo } from 'react';
import api from '../../api'
import { Container } from 'reactstrap';
import TableContainer from './TableContainer.jsx';


const ListingsTable = () => {

//Quicksort function:
function quickSort(rowA, rowB, id, desc) {
    if (rowA.values[id] > rowB.values[id]) return 1; 
    if (rowB.values[id] > rowA.values[id]) return -1;
    return 0;
}

const [data, setData] = useState([]);
useEffect(() => {
  const doFetch = async () => {
    const response = await api.getAllListings();
    //const body = await response.json();
    //const contacts = body.results;
    const listings = response.data.data;
    console.log(listings);
    setData(listings);
  };
  doFetch();
}, []);

const columns = [
    {
        Header: 'ID',
        accessor: '_id',
        filterable: true,
    },
    {
        Header: 'Title',
        accessor: 'title',
        filterable: true,
        sortType: quickSort,
    },
    {
        Header: 'Street Address',
        accessor: 'address.street',
        filterable: true,
    },
    {
        Header: 'Suburb',
        accessor: 'address.suburb',
        filterable: true,
    },
    {
        Header: 'City',
        accessor: 'address.city',
        filterable: true,
    },
    // {
    //     Header: 'Region',
    //     accessor: 'address.region',
    //     filterable: true,
    // },
    {
        Header: 'Rent ($/week)',
        accessor: 'rent',

    },
    {
        Header: 'Property Type',
        accessor: 'property_type',

    },
    {
        Header: 'Date Available',
        accessor: 'date_available',

    },
];

return (
    <Container style={{ marginTop: 100 }}>
      <TableContainer columns={columns} data={data} />
    </Container>
  );
};

export default ListingsTable;