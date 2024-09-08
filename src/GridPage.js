import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";


const initialRows = [
  { id: 1, column1: "A1", column2: "B1", column3: "C1" },
  { id: 2, column1: "A2", column2: "B2", column3: "C2" },
  { id: 3, column1: "A3", column2: "B3", column3: "C3" },
];

function GridPage() {
  const [rows, setRows] = useState(initialRows);

  const columns = [
    { field: "column1", headerName: "Column 1", width: 150, editable: true },
    { field: "column2", headerName: "Column 2", width: 150, editable: true },
    { field: "column3", headerName: "Column 3", width: 150, editable: true },
  ];

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Excel-Like Data Grid
      </Typography>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
}

export default GridPage;