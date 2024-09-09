import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import GridPage from './pages/GridPage';
import BarChart from './pages/AppBarChart';
import Main from './pages/main';

const drawerWidth = 240;

// const menuItems = [
//             { text: 'Main', path: '/' },
//             { text: 'GridPage', path: '/grid' },
//             { text: 'BarChart', path: '/barchart' },
//         ];



function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

//   const [open, setOpen] = React.useState(true);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar /> {/* This adds space for the AppBar */}
      <Divider />
      <List>
        {/* Map over menu items */}
        <ListItem button component={Link} to="/">
          <ListItemText primary="Main" />
        </ListItem>
        <ListItem button component={Link} to="/data">
          <ListItemText primary="Data" />
        </ListItem>
        <ListItem button component={Link} to="/charts">
          <ListItemText primary="Charts" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Top Bar */}
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          {/* Menu button for mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Drawer for mobile devices */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main content */}
      <main style={{ flexGrow: 1, padding: '24px', width: `calc(100% - ${drawerWidth}px)`, marginLeft: `${drawerWidth}px` }}>
        <Toolbar /> {/* Adds spacing to offset the AppBar */}
        <Typography paragraph>
          Main content goes here. You can replace this with your own content or components.
        </Typography>
      </main>
    </div>
  );
}

export default Layout;
