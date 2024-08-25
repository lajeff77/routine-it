import React, {useState} from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import {Box, Link, Button, Grid, TextField, Typography } from '@mui/material';

const CreateAccountForm = () => {

    const [authenticated, setAuthenticated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Sending ${password} as password`);
        console.log(`JSON string will be ${JSON.stringify({firstName, lastName, email, password})}`);
        /*TODO: call account creation api here */
        try {
            const response = await axios.post("http://localhost:8080/api/v1/user/create", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            });
            console.log(`New user with id ${response?.id}.`);
            setAuthenticated(true);  
        } catch (error) {
            console.error(`An error occurred: ${error.message}`);
        }
    }

    return (
        <Box display="flex" justifyContent="center" sx={{margin:"100px"}}>
            <Grid display="flex" flexDirection="column" alignItems="center" sx={{border: "1px grey solid", borderRadius:"5px", width: "50%", padding: "50px"}}>
            <Typography variant='h2' align='center' sx={{margin:"20px"}}>Sign up for Routine It</Typography>
            <Typography variant='body1' sx={{margin:"20px"}}>Already have an account? Sign in <Link href="/signin">here</Link>.</Typography>
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center">
                    <TextField required type="text" name="first-name" label="First Name" sx={{margin:"10px"}} onChange={(e) => setFirstName(e.target.value)} />
                    <TextField required type="text" name="last-name" label="Last Name" sx={{margin:"10px"}} onChange={(e) => setLastName(e.target.value)}/>
                    <TextField required type="email" name="email" label="Email" sx={{margin:"10px"}} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField required type="password" name="password" label="Password" sx={{margin:"10px"}} onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit" variant="contained" sx={{margin:"5px"}}>Create Account</Button>
            </Box>
            </Grid>
            {authenticated && <Navigate to="/mydashboard" replace={true} />}
        </Box>
    )
}

export default CreateAccountForm;