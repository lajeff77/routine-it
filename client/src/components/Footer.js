import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <AppBar position="sticky" color="primary" sx={{alignItems: "center"}}>
            <Toolbar>
                <Typography variant="body1">Routine It &copy; 2024</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;