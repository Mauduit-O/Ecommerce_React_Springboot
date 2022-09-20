import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo/logo.svg';
import iconBasket  from '../../assets/icon/basket.svg'
import iconUser  from '../../assets/icon/user.svg';
import iconMenu  from '../../assets/icon/menu.svg';
import iconMore from '../../assets/icon/more.svg';
import * as Styled from './StyledHeader';
import { NavLink } from "react-router-dom";
import Modal from '../Modal/Modal';
import { useState } from "react";
// import MenuM from '../Modal/modalMenu/Menu';
import Panier from '../Modal/modalPanier/Panier';


export default function PrimarySearchAppBar() {
  const [modal, setModal] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // }; 

  const toggleModal = () => {
    setModal(!modal);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Se Connecter</MenuItem>
      <MenuItem onClick={handleMenuClose}>S'inscrire</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show basket"
          color="inherit"
        >
          <Badge badgeContent={2} color="error">
            <Styled.Img src={iconBasket} alt="icon panier" onClick={toggleModal}/>
          </Badge>
        </IconButton>
        <p>Panier</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Styled.Img src={iconUser} alt="icon user" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
        {/* <Modal modalT={modal} UpdateSetModal={setModal} >
          <MenuM/>
        </Modal> */}
        {/* <ModalMenu modalT={modal} setModalT={setModal} /> */}
      <Styled.ContainerAppBar>
        <AppBar className='container-header'>
          <Toolbar>
            <Styled.ContentNav>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <Styled.Img src={iconMenu} alt="icon menu"/>
              </IconButton>
              <NavLink to="/"><Styled.Logo src={logo} alt="logo HarleyD" /></NavLink>
              <Styled.Search className='container-search'>
                <Styled.SearchIconWrapper>
                  <SearchIcon />
                </Styled.SearchIconWrapper>
                <Styled.StyledInputBase
                  placeholder="Rechercher"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Styled.Search>
            </Styled.ContentNav>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Styled.Img src={iconUser} alt="icon user" />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show basket"
                color="inherit"
                onClick={toggleModal}
              >
                <Badge badgeContent={2} color="error">
                  <Styled.Img src={iconBasket} alt="icon panier" />
                </Badge>
              </IconButton>
              <Modal modalT={modal} UpdateSetModal={setModal} className='reverse' title='Panier'>
                <Panier></Panier>
              </Modal>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <Styled.Img src={iconMore} alt="icon menu" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Styled.ContainerAppBar>
   
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}