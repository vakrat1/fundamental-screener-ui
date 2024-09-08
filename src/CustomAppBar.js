// import * as React from 'react';
// import { AppBar, TitlePortal } from 'react-admin';
// import Box from '@mui/material/Box';
// // import { AppBar, Toolbar, Typography } from '@mui/material';

// import Logo from './logso.svg';

// export const CustomAppBar = () => (
    // <AppBar position="fixed">
    //     <Toolbar>   
    //         <img src="./logo.svg" alt="Logo" style={{ width: 40, marginRight: 10 }} />
    //         <Typography variant="h6" noWrap>
    //             My Application
    //         </Typography>
    //     </Toolbar>
    // </AppBar>
// );

// CustomAppBar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material'; // Ensure you import Toolbar and Typography

const CustomAppBar = (props) => (
  <AppBar {...props}>
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
        <img src="/logo.png" alt="Logo" style={{ width: 40, marginRight: 10 }} />
        My Admin Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
