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
import * as Styled from './StyledHeader';
import * as Styles from './StyledHeader';
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuM from '../menu/Menu';
import Register from '../register/Register';
import Login from '../login/Login';
import ModalForm from '../modalForm/ModalForm';
import Modal from '../Modal/Modal';
import Basket from '../basket/Panier';
import { useCart } from "react-use-cart";
import { User } from '../../interface/UserInterface';
// import { userInfo } from 'os';

interface HearderProps {
  handleChange: (e: React.MouseEvent<HTMLAnchorElement>) => void,
}

export default function Header(props: HearderProps): JSX.Element {
  const { handleChange } = props;

  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openBasket, setOpenBasket] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const getUserInfos = localStorage.getItem("userInfos") 
  const [parseUserInfos, setParseUserInfos] = useState<User>();

  const {
    isEmpty,
    totalItems,
  } = useCart();

  useEffect(() => {
    if ( getUserInfos ) {
      setParseUserInfos(JSON.parse(localStorage.getItem("userInfos") || "") )
    }
  }, [getUserInfos])

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if ( parseUserInfos ) {
      localStorage.removeItem("userInfos");
      window.location.reload();
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isOpenLongin = () => {
    setAnchorEl(null);
    setOpenLogin(true);
  };

  const isOpenRegister = () => {
    setAnchorEl(null);
    setOpenRegister(true);
  };

  const onChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
    navigate('/search');
    handleChange(e);
  }

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

      <MenuItem onClick={isOpenLongin}>Se Connecter</MenuItem>
      <MenuItem onClick={isOpenRegister}>S'inscrire</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {openMenu && (
        <Modal onClick={()=>setOpenMenu(false)}>
          <MenuM/>
        </Modal>
      )}
      {openBasket && (
        <Modal className='reverse' onClick={()=>setOpenBasket(false)}>
          <Basket/>
        </Modal>
      )}
      {openRegister && (
        <ModalForm titleForm={'Inscription'} onClick={()=>setOpenRegister(false)}>
            <Register/>
        </ModalForm>
      )}
        {openLogin && (
          <ModalForm titleForm={'Se connecter'} onClick={()=>setOpenLogin(false)}>
             <Login/>
          </ModalForm>
      )}
      <Styles.ContainerHeader>
        <Styled.ContainerAppBar>
          <AppBar className='container-header'>
            <Toolbar>
              <Styled.ContentNav>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={()=>setOpenMenu(true)}
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
                    onChange={(e: any) => onChange(e)}
                  />
                </Styled.Search>
              </Styled.ContentNav>

              <Box sx={{ flexGrow: 1 }} />
              
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                 {parseUserInfos ? <Styles.NameUser>{parseUserInfos.firstname} </Styles.NameUser> : <Styled.Img src={iconUser} alt="icon user" />} 
              
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show basket"
                  color="inherit"
                  onClick={()=>setOpenBasket(true)}
                >
                  <Badge badgeContent={totalItems} color="error">
                    <Styled.Img src={iconBasket} alt="icon panier" />
                  </Badge>
                </IconButton>
            
            </Toolbar>
          </AppBar>
        </Styled.ContainerAppBar>
      </Styles.ContainerHeader>
      {!parseUserInfos &&
        <div>
          {renderMenu}
        </div>
      }
    </Box>
  );
}