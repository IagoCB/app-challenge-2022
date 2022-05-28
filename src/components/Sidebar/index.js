import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MapIcon from '@mui/icons-material/Map';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/mundi.jpg';

const drawerWidth = 260;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      overflowX: "hidden",
      backgroundColor: "#0fbab7",
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const styles = {
    boxPrincipal: {
      display: 'flex',
      m: 0,
      p: 0,
    },

    boxAvatar: {
      display: 'flex',
      justifyContent: 'center',
    },

    avatarAberto: {
      width: '150px',
      height: '150px',
    },

    avatarFechado: {
      width: '60px',
      height: '60px',
    },

    listItemButton: {
      backgroundColor: '#0fbab7',
      height: '55px',
      '&:hover, &:selected, &:focused': {
        backgroundColor: '#de6021',
      }
    },

    color: {
      color: 'white',
    }
  };

  return (
    <Box sx={styles.boxPrincipal}>
      <Drawer variant="permanent" open={open} onClick={toggleDrawer}>
        <Box sx={styles.boxAvatar}>
          {open === true ?
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={styles.avatarAberto}
            />
            :
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={styles.avatarFechado}
            />
          }
        </Box>
        <List>
          <Link to="/user">
            <ListItemButton disableRipple sx={styles.listItemButton} id = 'side-user'>
              <ListItemIcon>
                <AccountBoxIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Minha conta" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>
        <List>
          <Link to="/home">
            <ListItemButton disableRipple sx={styles.listItemButton} id = 'side-home'>
              <ListItemIcon>
                <MapIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Mapa" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>        
        <List>
          <Link to="/plans">
            <ListItemButton disableRipple sx={styles.listItemButton} id = 'side-plans'>
              <ListItemIcon>
                <PlagiarismIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Planos" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>
        <List>
          <Link to="/installers">
            <ListItemButton disableRipple sx={styles.listItemButton} id = 'side-installers'>
              <ListItemIcon>
                <EngineeringIcon sx={styles.color} />
              </ListItemIcon>
              <ListItemText primary="Instaladores" sx={styles.color} />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
    </Box>
  )
}