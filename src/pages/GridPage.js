import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'symbol', headerName: 'Symbol', width: 90 },
  { field: 'sector', headerName: 'Sector', width: 150 },
];

const DataGridExample = () => {
  const [rows, setRows] = useState([]);  // State for storing the grid rows
  const [loading, setLoading] = useState(true);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = {
          symbol: "AAPL",
        };
        const response = await axios.post('http://127.0.0.1:8080/pe_analysis', postData);
        console.log(response);
        // Map the fetched data to the format required by DataGrid
        const rowData = response.data.map((company, index) => ({
          id: index + 1,    // Ensure each row has a unique ID
          name: company.name,
          symbol: company.symbol,
          sector: company.sector,
        }));
        setRows(rowData);  // Set the rows with fetched data
        setLoading(false); // Stop loading indicator
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}              // Pass the rows (data)
        columns={columns}        // Pass the columns configuration
        pageSize={10}            // Set the page size
        loading={loading}        // Show loading spinner while fetching data
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
};

export default DataGridExample;









// import React, { useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Box, Typography } from "@mui/material";


// const initialRows = [
//   { id: 1, column1: "A1", column2: "B1", column3: "C1" },
//   { id: 2, column1: "A2", column2: "B2", column3: "C2" },
//   { id: 3, column1: "A3", column2: "B3", column3: "C3" },
// ];

// function GridPage() {
//   const [rows, setRows] = useState(initialRows);

//   const columns = [
//     { field: "", headerName: "Column 1", width: 150, editable: true },
//     { field: "column2", headerName: "Column 2", width: 150, editable: true },
//     { field: "column3", headerName: "Column 3", width: 150, editable: true },
//   ];

//   return (
//     <Box p={2}>
//       <Typography variant="h4" gutterBottom>
//         Excel-Like Data Grid
//       </Typography>
//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//           disableSelectionOnClick
//         />
//       </div>
//     </Box>
//   );
// }

// export default GridPage;