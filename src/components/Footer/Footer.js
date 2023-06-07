import React from 'react'
import Footercss from './Footercss.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from '../assets/Image.png'


const pages = [' About ', ' Privacy policy ', ' Contact us ' ];


export const Footer = () => {
    const word ="ProMed"

  return (
    <>
    <div id ="footercss">
 <img src={Image} alt="" />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box m={1} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.0rem',
              color: '#333333',
              textDecoration: 'none',
            }}
          >
            
              <span style={{ color: "#0681B4" }}>{word.slice(0, 3)}</span>
      {word.slice(3, -3)}
      <span style={{ color: "#333333" }}>{word.slice(-3)}</span>
          </Typography>

       
              
        
    
    <div id="any">
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent: 'center',
      fontWeight: 400,
      fontFamily: 'Montserrat',
  } }}>
      {pages.map((page) => (
    
        
        
          [page]
       
      ))}
    </Box>
    </div>
    </div>
    </>
  )
}