import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import moment from 'moment';

const Datagrid = () => {
    const [pageSize, setPageSize] = useState(25);

    const columns: GridColDef[] = [
        { field: 'Lidnumber', headerName: 'Lidnumber', width: 100, headerClassName: 'bg-gray-100', },
        { field: 'FirstName', headerName: 'Name', flex: 1, headerClassName: 'bg-gray-100', },
        { field: 'LastName', headerName: 'Achternaam', flex: 1, headerClassName: 'bg-gray-100', },
        { field: 'BirthDate', headerName: 'Geboortedatum', flex: 1, headerClassName: 'bg-gray-100', renderCell: params => { return moment(params.row.BirthDate).format('DD-MM-YYYY') } },
        { field: 'Team', headerName: 'Team', flex: 1, headerClassName: 'bg-gray-100', },
    ];

    const rows = [
        { id: 1, Lidnumber: 1, FirstName: 'Tijmen', LastName: 'Hullegie', BirthDate: '2005-07-29', Team: 'jo19-4' },
        { id: 2, Lidnumber: 2, FirstName: 'Justin', LastName: 'Hullegie', BirthDate: '2010-03-31', Team: 'jo13-1' },
        { id: 3, Lidnumber: 3, FirstName: 'Vincent', LastName: 'Hullegie', BirthDate: '1975-12-08', Team: 'Senior-23' },
        { id: 4, Lidnumber: 4, FirstName: 'Milan', LastName: 'Hullegie', BirthDate: '2008-08-14', Team: 'jo16-2' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
                initialState={{ pagination: { paginationModel: { pageSize } } }}
                pageSizeOptions={[pageSize]}
                checkboxSelection
                autoHeight
            // components={{ Toolbar: GridToolbar }}
            />
        </div>
    );
}

export default Datagrid;
import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import moment from 'moment';

const Datagrid = () => {
    const [pageSize, setPageSize] = useState(25);

    const columns: GridColDef[] = [
        { field: 'Lidnumber', headerName: 'Lidnumber', width: 100, headerClassName: 'bg-gray-100', },
        { field: 'FirstName', headerName: 'Name', flex: 1, headerClassName: 'bg-gray-100', },
        { field: 'LastName', headerName: 'Achternaam', flex: 1, headerClassName: 'bg-gray-100', },
        { field: 'BirthDate', headerName: 'Geboortedatum', flex: 1, headerClassName: 'bg-gray-100', renderCell: params => { return moment(params.row.BirthDate).format('DD-MM-YYYY') } },
        { field: 'Team', headerName: 'Team', flex: 1, headerClassName: 'bg-gray-100', },
    ];

    const rows = [
        { id: 1, Lidnumber: 1, FirstName: 'Tijmen', LastName: 'Hullegie', BirthDate: '2005-07-29', Team: 'jo19-4' },
        { id: 2, Lidnumber: 2, FirstName: 'Justin', LastName: 'Hullegie', BirthDate: '2010-03-31', Team: 'jo13-1' },
        { id: 3, Lidnumber: 3, FirstName: 'Vincent', LastName: 'Hullegie', BirthDate: '1975-12-08', Team: 'Senior-23' },
        { id: 4, Lidnumber: 4, FirstName: 'Milan', LastName: 'Hullegie', BirthDate: '2008-08-14', Team: 'jo16-2' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.id}
                initialState={{ pagination: { paginationModel: { pageSize } } }}
                pageSizeOptions={[pageSize]}
                checkboxSelection
                autoHeight
            // components={{ Toolbar: GridToolbar }}
            />
        </div>
    );
}

export default Datagrid;
