// CustomMenu.js
import React, { useState } from 'react';
import { MenuItemLink, usePermissions } from 'react-admin';
import { List, TextField, Box } from '@mui/material';
import { Dashboard, People, PostAdd } from '@mui/icons-material';

const CustomMenu1 = (props) => {
    const { permissions } = usePermissions();
    const [searchQuery, setSearchQuery] = useState('');

    // Handle search input
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Handle search submit (for example, on Enter press)
    const handleSearchSubmit = (event) => {
        if (event.key === 'Enter') {
            console.log('Search Query:', searchQuery);
            // Send search query to server or filter results in the frontend
        }
    };

    return (
        <Box>
            {/* Search TextField */}
            <Box sx={{ padding: 2 }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyPress={handleSearchSubmit}
                    size="small"
                />
            </Box>

            {/* Default Menu Items */}
            <List>
                <MenuItemLink
                    to="/"
                    primaryText="Dashboard"
                    leftIcon={<Dashboard />}
                    onClick={props.onMenuClick}
                />
                <MenuItemLink
                    to="/users"
                    primaryText="Users"
                    leftIcon={<People />}
                    onClick={props.onMenuClick}
                />
                <MenuItemLink
                    to="/posts"
                    primaryText="Posts"
                    leftIcon={<PostAdd />}
                    onClick={props.onMenuClick}
                />
            </List>
        </Box>
    );
};

export default CustomMenu1;
