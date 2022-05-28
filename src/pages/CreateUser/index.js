import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/images/Globe.png';

import mundi from '../../assets/images/mundi.jpg';

export default function CreateUser() {
  const navigate = useNavigate();

  const styles = {
    boxPrincipal: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
      height: '100%',
      background: `url(${mundi}) no-repeat left top fixed`,
      backgroundSize: 'cover',
    },
    boxIconButton: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      m: 0,
      p: 0,
    },
    icon: {
      color: '#000c0c',
      m: 0,
      p: 0
    },
    txtField: {
      mb: '30px',
      borderRadius: '10px',
      backgroundColor: 'white !important',
      color: 'white !important',
      '& label.Mui-focused': {
        color: '#0fbab7',
        backgroundColor: 'transparent !important',
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
        backgroundColor: 'white !important',
        '&.Mui-focused fieldset': {
          backgroundColor: 'transparent !important',
          borderRadius: '10px',
          borderColor: '#0fbab7',
        },
      },
    },
    boxButtonNew: {
      mt: '52px',
      height: '42px',
      backgroundColor: '#000c0c',
      borderRadius: '10px',
      color: '#0fbab7',
      '&:hover': {
        backgroundColor: '#0fbab7',
        color: '#000c0c',
      }
    },
    box: {
      display: 'flex',
      backgroundColor: '#ecf4f4',
      position: 'absolute',
      width: '80%',
      height: '80%',
      borderRadius: '20px',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      m: '36px',
    },
    right: {
      display: 'flex',
      flexDirection: 'column',
      width: '35%',
      height: '100%',
    },
    boxText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      mr: '36px',
    },
    text: {
      color: '#000c0c',
      fontSize: '20px',
      textAlign: 'center',
    },
    boxForm: {
      display: 'flex',
      flex: 1,
      height: '100%',
      flexDirection: 'column',
      pl: '36px',
      justifyContent: 'center',
      borderLeft: '2px solid #000c0c',
    },
    boxTxtRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  };

  const handleClick = (e) => {
    navigate(`/`);
  }

  return (
    <Box sx={styles.boxPrincipal}>
      <Box sx={styles.box}>
        <Box sx={styles.container}>
          <Box sx={styles.right}>
            <Box sx={styles.boxIconButton}>
              <IconButton disableRipple onClick={(e) => handleClick(e)}>
                <ArrowBackIosIcon sx={styles.icon} />
              </IconButton>
            </Box>
            <Box sx={styles.boxText}>
              <Box
                component="img"
                sx={{
                  height: '73%',
                  width: '115%',
                  borderRadius: '10px',
                }}
                src={logo}
              />
            </Box>
          </Box>
          <Box sx={styles.boxForm}>
            <TextField
              id='input-newemail'
              required
              fullWidth
              variant="outlined"
              label="E-mail"
              disableRipple
              sx={styles.txtField}
            />
            <TextField
              id='input-newnome'
              required
              fullWidth
              variant="outlined"
              label="Nome"
              disableRipple
              sx={styles.txtField}
            />
            <TextField
              id='input-newsenha'
              required
              fullWidth
              variant="outlined"
              label="Senha"
              disableRipple
              sx={styles.txtField}
            />
            <TextField
              id='input-newsenha'
              required
              select
              fullWidth
              variant="outlined"
              label="Tipo"
              disableRipple
              sx={styles.txtField}
            >
              <MenuItem value="">{'None'}</MenuItem>
              <MenuItem value='Cliente'>{'Cliente'}</MenuItem>
              <MenuItem value='Instalador'>{'Instalador'}</MenuItem>
            </TextField>
            <Button fullWidth disableRipple sx={styles.boxButtonNew}>
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}