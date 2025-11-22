import React, { useMemo, useRef } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
//import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);


const defaultData = [
  { id: 'P001', name: 'John Doe', age: 25, date: '2025-11-22', status: 'Confirmed' },
  { id: 'P002', name: 'Anna Smith', age: 30, date: '2025-11-23', status: 'Pending' },
  { id: 'P003', name: 'Mike Brown', age: 35, date: '2025-11-24', status: 'Cancelled' },
  { id: 'P004', name: 'Sara Lee', age: 28, date: '2025-11-25', status: 'Confirmed' },
];

export default function CustomTable({ rowData = defaultData }) {
  const navigate = useNavigate ? useNavigate() : () => {};
  const gridRef = useRef({ api: null, columnApi: null });
  const [gridReady, setGridReady] = React.useState(false);
  const handleViewDetails = (row) => {
    navigate(`/details/${row.name}`);
  };
  const columnDefs = useMemo(() => [
    { headerName: 'PatientId', field: 'id' },
    { headerName: 'PatientName', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Appointment Date', field: 'date' },
    { headerName: 'Status', field: 'status' },
    {
      headerName: 'View Details',
      field: 'view',
      cellRenderer: (params) => (
        <IconButton onClick={() => handleViewDetails(params.data)} color="primary">
          <VisibilityIcon />
        </IconButton>
      ),
      width: 120,
      suppressMenu: true,
      sortable: false,
      resizable: false,
    },
  ], []);

  const onSearch = (e) => {
    if (gridRef.current.api && typeof gridRef.current.api.setQuickFilter === 'function') {
      gridRef.current.api.setQuickFilter(e.target.value);
    } else {
      console.warn('AG Grid API or setQuickFilter not available', gridRef.current.api);
    }
  };

  const onGridReady = (params) => {
    gridRef.current.api = params.api;
    gridRef.current.columnApi = params.columnApi;
    setGridReady(true);
    // Debug: log the api object
    console.log('AG Grid API:', params.api);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        onChange={onSearch}
        sx={{ marginBottom: 2 }}
        disabled={!gridReady}
      />
      <div className="ag-theme-alpine" style={{ height: 1400, width: '100%' }}>
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
          defaultColDef={{filter: true, sortable: true, resizable: true }}
        />
      </div>
    </div>
  );
}