import { Box, Button, Typography  } from '@mui/material';
import React from 'react';

const HeroSection = () => {
    return(
        <Box sx={{height: "700px",
         background: "linear-gradient(0deg, rgba(255, 255, 255, 0.45), rgba(0, 0, 0, 0.45)), url('/bathroom-counter-medium.jpg')", 
         backgroundRepeat: "no-repeat", 
         backgroundSize: "cover", 
         color: "white",
          padding: "5%", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center"}}>
            <Typography variant="h1" sx={{textAlign: "center", paddingTop: "150px", paddingBottom: "50px"}} >Everyone should be able to keep a routine!</Typography>
            <Button href='/signup' variant="contained" disableElevation sx={{margin: "10px"}}>Get Started!</Button>
        </Box>
    )
}

export default HeroSection;