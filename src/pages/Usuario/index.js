import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import Sidebar from '../../components/Sidebar';

export default function Usuario() {

  const navigate = useNavigate();

  const styles = {
    txtField: {
      width: '700px',
      borderRadius: '10px',
      backgroundColor: 'white !important',
      color: 'white !important',
      '& label.Mui-focused': {
        color: '#ba0041',
        backgroundColor: 'transparent !important',
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: '10px',
        backgroundColor: 'white !important',
        '&.Mui-focused fieldset': {
          backgroundColor: 'transparent !important',
          borderRadius: '10px',
          borderColor: '#ba0041',
        },
      },
    },
    boxPage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      m: 0,
      p: 0,
    },
    container: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: '24px',
    },
    buttonInfo: {
      backgroundColor: '#ba0041',
      color: 'white',
      borderRadius: '10px',
      width: '338px',
      height: '53px',
      ml: '24px',
      '&:hover': {
        backgroundColor: '#9c0036',
      }
    },
    boxButtonInfo: {
      width: '338px',
      height: '40px',
      mt: '40px',
      mb: '20px',
      mr: '12px',
      backgroundColor: '#000c0c',
      borderRadius: '10px',
      color: '#0fbab7',
      '&:hover': {
        backgroundColor: '#0fbab7',
        color: '#000c0c',
      }
    },
    boxButtonLogout: {
      width: '338px',
      height: '40px',
      mt: '40px',
      mb: '20px',
      ml: '12px',
      backgroundColor: '#000c0c',
      borderRadius: '10px',
      color: '#0fbab7',
      '&:hover': {
        backgroundColor: '#0fbab7',
        color: '#000c0c',
      }
    },
    box: {
      pt: '24px',
    },
  };

  const handleClick = (e) => {
    navigate(`/`);
  };

  return (
    <Box sx={styles.boxPage}>
      <Sidebar />
      <Box sx={styles.container}>
        <Box sx={styles.box}>
          <TextField
            id='input-usuario'
            required
            fullWidth
            variant="outlined"
            label="Email"
            disableRipple
            sx={styles.txtField}
            disabled
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
            id='input-nomeusuario'
            required
            fullWidth
            variant="outlined"
            label="Nome"
            disableRipple
            sx={styles.txtField}
          />
        </Box>
        <Box sx={styles.box}>
          <TextField
            id='input-senhausuario'
            required
            fullWidth
            variant="outlined"
            label="Senha"
            disableRipple
            sx={styles.txtField}
          />
        </Box>
        <Box sx={styles.box}>
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
        </Box>

        <Box>
          <Button disableRipple sx={styles.boxButtonInfo}>
            Alterar Informacoes
          </Button>
          <Button disableRipple sx={styles.boxButtonLogout} onClick={(e) => handleClick(e)} id='btn-sair'>
            Sair
          </Button>
        </Box>
      </Box>
    </Box >
  )
}
