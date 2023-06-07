import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from '../assets/Image.png'
import Photo from '../assets/Photo.png'
import NotificationsIcon from '@mui/icons-material/Notifications';

import AppBarcss from './AppBarcss.css'

const pages = ['Community', 'Appointments', 'Archive' ];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 
const word ="ProMed"
  return (
 
    <AppBar position="flex" style ={{backgroundColor :"#FFFFFF" , color :'black'}}  >
      <Container maxWidth="xl" >
        <Toolbar disableGutters  sx={{ border: '1px  black'  , height: '96px'}}>
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
        

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
              
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent: 'center',
            fontWeight: 400,
            fontFamily: 'Montserrat',
        } }}>
            {pages.map((page) => (
              <Button 
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#828282', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
<NotificationsIcon color="primary" />
<Box m={1} />
          <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 ,md: 'flex' }}>
                <Avatar alt="" src={Photo} />
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  
  );
}
export default ResponsiveAppBar;