import React, {useState} from "react";
import {Navigate} from 'react-router-dom';
import {Box, Link, Button, Grid, TextField, Typography } from '@mui/material';

const SignInForm = () => {

    const [user, setUser] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        /*TODO: call account login api here */
        console.log("Signed in account");
        setUser(true);
    }

    return(
        <Box display="flex" justifyContent="center" sx={{margin:"100px"}}>
            <Grid display="flex" flexDirection="column" alignItems="center" sx={{border: "1px grey solid", borderRadius:"5px", width: "50%", padding: "50px"}}>
            <Typography variant='h2' align='center' sx={{margin:"20px"}}>Welcome Back to Routine It</Typography>
            <Typography variant='body1' sx={{margin:"20px"}}>Need to create an account? Sign up <Link href="/signup" className="regular-link">here</Link>.</Typography>
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center">
                    <TextField required type="email" name="email" label="Email" sx={{margin:"10px"}}/>
                    <TextField required type="password" name="password" label="Password" sx={{margin:"10px"}}/>
                <Button type="submit" variant="contained" sx={{margin:"5px"}}>Sign In</Button>
            </Box>
            </Grid>
            {user && <Navigate to="/mydashboard" replace={true} />}
        </Box>
    )

}

export default SignInForm;