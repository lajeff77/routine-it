import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

const MainHeader = () => {

    return(
        <AppBar position="static" sx={{padding: "1%"}}>
            <Toolbar>
                <Typography variant='h3' component="div" sx={{ flexGrow: 1 }}>Routine It</Typography>            
                <Button href="/" variant="contained" disableElevation sx={{margin: "10px"}}>Home</Button>
                <Button href="/signup" variant="contained" disableElevation sx={{margin: "10px"}}>Sign Up</Button>
                <Button href="/signin" variant="contained" disableElevation sx={{margin: "10px"}}>Sign In</Button>
            </Toolbar>
        </AppBar>
    )
}

export default MainHeader;