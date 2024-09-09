import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline, Divider, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle the drawer open/close state
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar /> {/* Adds space for the AppBar */}
      <Divider />
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/data" onClick={handleDrawerToggle}>
          <ListItemText primary="Data" />
        </ListItem>
        <ListItem button component={Link} to="/charts" onClick={handleDrawerToggle}>
          <ListItemText primary="Charts" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Full-width Top Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensures the AppBar is above the drawer
          width: '100%',
        }}
      >
        <Toolbar>
          {/* Hamburger Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}  // Toggle drawer when hamburger button is clicked
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer (Side Menu) */}
      <Drawer
        variant="temporary"  // Change to temporary to make it closable on click
        open={mobileOpen}
        onClose={handleDrawerToggle}  // Close drawer when clicking outside
        sx={{
          display: { xs: 'block', sm: 'none' },  // Drawer for mobile only
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Permanent Drawer for larger screens */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },  // Permanent drawer for larger screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Adjust the top margin to ensure content is pushed below the AppBar
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
