import React from 'react';
import {Box, Card, TextField, Typography} from '@mui/material';

const NameRoutine = ({props}) => {
    //TODO: validate that the name isn't a duplicate
    let formik = props.formik;

    const handleKeyPress = (e) => {
        if(e.key === 'Enter')
        {
            e.preventDefault();
            props.handleSubmit();
        }
    }

    return(
        <Box sx={{margin:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Typography variant="h1" sx={{textAlign: 'center', margin: '30px'}}>Let's Make a New Routine!</Typography>
            <Card variant="outlined" sx={{ padding: '40px', align:"center", width:"70%", display:"flex", flexDirection:"column", outline:"2px"}}>
                <Typography variant="body1" sx={{margin: '20px'}}>We'll start with a name for this routine:</Typography>
                <TextField required name="name" id="outlined-required" label="Enter a name" variant="outlined" fullWidth size="small" error={formik.touched.name && formik.errors.name} onChange={formik.handleChange} value={formik.values.name} onKeyDown={handleKeyPress}/>
            </Card>
        </Box>
    )
}

export default NameRoutine;