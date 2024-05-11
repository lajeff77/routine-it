import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const MainHeader = () => {

    return(
        <AppBar position="static" sx={{padding: "1%"}}>
            <Toolbar>
                <Typography variant='h3' component="div" sx={{ flexGrow: 1 }}>Routine It</Typography>            
                <Button component={Link} to="/" variant="contained" disableElevation sx={{margin: "10px"}}>Home</Button>
                <Button component={Link} to="/signup" variant="contained" disableElevation sx={{margin: "10px"}}>Sign Up</Button>
                <Button component={Link} to="/signin" variant="contained" disableElevation sx={{margin: "10px"}}>Sign In</Button>
            </Toolbar>
        </AppBar>
    )
}

export default MainHeader;