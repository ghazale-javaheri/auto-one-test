import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
    return ( 
        <Box mt={6} height={80} sx={{borderTop: "1px solid ", borderColor:"disable"}} display="flex" justifyContent="center" alignItems={"center"}>
            <Typography textAlign="center">
            © AUTO1 Group 2018
            </Typography>
        </Box>
     );
}

export default Footer;