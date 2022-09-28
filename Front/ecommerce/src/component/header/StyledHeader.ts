import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import styles from 'styled-components'

export const ContainerHeader = styles.div`
  padding-bottom: 8vh;

  @media (min-width: 800px) {
    padding-bottom: 6vh;
  }

  @media (min-width: 1200px) {
    padding-bottom: 8vh;
  }

  @media (min-width: 1600px) {
    padding-bottom: 7vh;
  }

  @media (min-width: 2000px) {
    padding-bottom: 6vh;
  }
`
export const NameUser = styles.p`
 color: #0B7698;
 font-size: 18px;
`

export const ContainerAppBar = styled('div')(({ theme }) => ({
  '.container-header': {
    background: 'white',
    position: 'fixed',
    zIndex: 2
  }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Logo = styled('img')(({ theme }) => ({
  width: '130px',
  cursor: 'pointer',
  transform: 'translate(0px, 10px)'
}));

export const Img = styled('img')(({ theme }) => ({
  width: '25px'
}));

export const ContentNav = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '66vw',
  [theme.breakpoints.up(370)]: {
    width: '68vw',
  },
  [theme.breakpoints.up('sm')]: {
    width: '99vw',
  },
}));

export const Search = styled('div')(({ theme }) => ({
  color: 'black',
  borderBottom: '1px solid black',
  cursor: 'pointer',
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(4),
    width: 'auto',
  },
}));

