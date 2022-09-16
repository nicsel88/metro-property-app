import React from 'react';
import { useTable } from 'react-table';
import { Table } from 'reactstrap';

const TableContainer = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <Table bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableContainer;

// import React, { Component } from 'react'
// import NavBar from '../components/NavBar.jsx'

// import { useTable } from 'react-table'
// import api from '../api'

// import styled from 'styled-components'

// // import 'react-table/react-table.css'

// const Wrapper = styled.div`padding: 0 40px 40px 40px;`



// class ListingsList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             listings: [],
//             columns: [],
//             isLoading: "false"
//         }
//     }

//     componentDidMount = async () => {
//         this.setState({ isLoading: "true" })

//         await api.getAllListings().then(listings => {
//             this.setState({
//                 listings: listings.data.data,
//                 isLoading: "false",
//             })
//         })
//     }

//     render() {
//         const { listings, isLoading } = this.state
//         console.log('TCL: ListingsList -> render -> listings', listings)

//         const columns = [
//             {
//                 Header: 'ID',
//                 accessor: '_id',
//                 filterable: true,
//             },
//             {
//                 Header: 'Title',
//                 accessor: 'title',
//                 filterable: true,
//             },
//             {
//                 Header: 'Address',
//                 accessor: 'address',
//                 filterable: true,
//             },
//             {
//                 Header: 'Rent',
//                 accessor: 'rent',
//                 Cell: props => <span>{props.value.join(' / ')}</span>,
//             },
//             {
//                 Header: 'Property Type',
//                 accessor: 'property_type',
//                 Cell: props => <span>{props.value.join(' / ')}</span>,
//             },
//             {
//                 Header: 'Date Available',
//                 accessor: 'date_available',
//                 Cell: props => <span>{props.value.join(' / ')}</span>,
//             },
//         ]

//         let showTable = true
//         if (!listings.length) {
//             showTable = false
//         }

//         return (
//           <div>
//             <NavBar/>
//             <Wrapper>
//                 {showTable && (
//                     <useTable
//                         data={listings}
//                         columns={columns}
//                         loading={isLoading}
                        
//                     />
//                 )}
//             </Wrapper>
//           </div>
//         )
//     }
// }

// export default ListingsList