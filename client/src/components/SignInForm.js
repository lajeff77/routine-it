import React, { useState} from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import {Box, Link, Button, Grid, TextField, Typography } from '@mui/material';

const SignInForm = () => {

    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/v1/user/login", {
            email: email,
            password: password,
            });
            if(response.status !== 200){
                throw new Error("Authentication failed (status: " + response.status);
            }
            else{
                console.log(`Request is ok. Status is ${response.status}: ${response.message}.`);
                setAuthenticated(true);
            }
        } catch (error) {
            console.error(`An error occurred: ${error.message}`);

        }
    };

    return(
        <Box display="flex" justifyContent="center" sx={{margin:"100px"}}>
            <Grid display="flex" flexDirection="column" alignItems="center" sx={{border: "1px grey solid", borderRadius:"5px", width: "50%", padding: "50px"}}>
            <Typography variant='h2' align='center' sx={{margin:"20px"}}>Welcome Back to Routine It</Typography>
            <Typography variant='body1' sx={{margin:"20px"}}>Need to create an account? Sign up <Link href="/signup">here</Link>.</Typography>
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center">
                <TextField required type="email" name="email" label="Email" onChange={(e) => setEmail(e.target.value)} sx={{margin:"10px"}}/>
                <TextField required type="password" name="password" label="Password" onChange={(e) => setPassword(e.target.value)} sx={{margin:"10px"}}/>
                <Button type="submit" variant="contained" sx={{margin:"5px"}}>Sign In</Button>
            </Box>
            </Grid>
            {authenticated && <Navigate to="/mydashboard" replace={true} />}
        </Box>
    )

}

export default SignInForm;