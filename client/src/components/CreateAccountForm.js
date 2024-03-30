import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
import {Box, Link, Button, Grid, TextField, Typography } from '@mui/material';

const CreateAccountForm = () => {

    const [user, setUser] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        /*TODO: call account creation api here */
        console.log("Created account");
        setUser(true);
    }

    return (
        <Box display="flex" justifyContent="center" sx={{margin:"100px"}}>
            <Grid display="flex" flexDirection="column" alignItems="center" sx={{border: "1px grey solid", borderRadius:"5px", width: "50%", padding: "50px"}}>
            <Typography variant='h2' align='center' sx={{margin:"20px"}}>Sign up for Routine It</Typography>
            <Typography variant='body1' sx={{margin:"20px"}}>Already have an account? Sign in <Link href="/signin">here</Link>.</Typography>
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center">
                    <TextField required type="text" name="first-name" label="First Name" sx={{margin:"10px"}} />
                    <TextField required type="text" name="last-name" label="Last Name" sx={{margin:"10px"}} />
                    <TextField required type="email" name="email" label="Email" sx={{margin:"10px"}}/>
                    <TextField required type="password" name="password" label="Password" sx={{margin:"10px"}}/>
                <Button type="submit" variant="contained" sx={{margin:"5px"}}>Create Account</Button>
            </Box>
            </Grid>
            {user && <Navigate to="/mydashboard" replace={true} />}
        </Box>
    )
}

export default CreateAccountForm;