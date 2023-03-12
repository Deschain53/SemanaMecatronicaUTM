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
import { NavLink } from 'react-router-dom';
import LogoUTM from '../../img/utm1.jpg'
import Grid from '@mui/material/Grid';

const pag = ['home', 'program', 'about'];

const pages = [
  {label:'Inicio',direction:'home'},
  {label:'Conferencias',direction:'conferences'},
  {label:'Concurso',direction:'contest'},
  {label:'Talleres',direction:'workshops'},
]
const activeClassName = "";

const nameLogo = "UTM";

export const ImgNavb = ( {h="auto",w="auto"} ) => {

  return (
  <>
      <img    src={LogoUTM}//(mode === 'dark' ? logoObs : logoClaro)} ///DESECTRUCTURAR
              className="rounded mx-auto d-block"     
              height = {h}
              width = {w} 
      />
  </>
  )
}

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    
    <AppBar position="static" >

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      ///Justificacion dinamica, en pantalla chica que este a la izquierda
      //style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Toolbar disableGutters>
          {/*Logo y Marca de pagina en pantalla Grande */}
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            {nameLogo}
          </Typography>

          {/*NabMenu en pantalla Chica */}
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              >
              {pages.map((page) => (
                <MenuItem key={page.direction} onClick={handleCloseNavMenu}>
                    <NavLink
                      to={page.direction}
                      //className={({ isActive }) =>
                      //isActive ? activeClassName : undefined
                      //}
                      >
                      <Typography textAlign="center">
                          {page.label}
                      </Typography>
                    </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/*Logo y Marca de pagina en pantalla Chica */}
          {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            {nameLogo}
          </Typography>

          {/*Menu en patalla Grande */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              key={page.direction}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink
                  to={page.direction}
                  //className={({ isActive }) =>
                  //isActive ? activeClassName : undefined
                  //}
                >
                  <Typography 
                    textAlign="center"
                    sx={{ color: 'white' }}>
                      {page.label}
                  </Typography>
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Grid>
    </Grid>
    </AppBar>
  </>
  );
}

//<ImgNavb h='100' w='100'/>

//<ImageLogo
////estilo={{with:200, height:200}}
///>

