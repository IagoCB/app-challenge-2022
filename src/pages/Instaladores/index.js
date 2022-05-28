/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { styled, useTheme } from '@material-ui/core';
import styledMaterial from '@mui/material/styles/styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';

import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import { useContext, useEffect, useState } from 'react';

import { Context } from '../../contexts/context';
import Client from '../../resources/entitiesClient';

import Sidebar from '../../components/Sidebar';
import ListTableInstallers from '../../components/ListTableInstallers';

const BoxStyled = styledMaterial(Box)`
  -webkit-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.31); 
  box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.31);
`;

let mainList = [];

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: `${'#0fbab7'} !important`,
  '&:hover': {
    backgroundColor: `${'#1f5f61'} !important`,
  },
  '&:active': {
    boxShadow: 'none',
    color: `${theme.palette.common.white} !important`,
  },
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: '#0fbab7',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: theme.palette.grey[200],
    '&.Mui-focused fieldset': {
      borderRadius: '10px',
      borderColor: '#0fbab7',
    },
  },
}));

export default function Luminaire() {
  const theme = useTheme();

  const {   
    listUpdateInstallers,
    setListUpdateInstallers,
    
  } = useContext(Context);

  const [listLuminaire, setListLuminaire] = useState([]);

  const [idInstaller, setidInstaller] = useState('');

  useEffect(() => {
    async function fetchData() {
      const luminaireData = await Client.listLuminaireByTenant();
      if (luminaireData.status === 200) {
        setListLuminaire(luminaireData.data);
        mainList = luminaireData.data;
      }
      setListUpdateInstallers(false);
    }

    fetchData();
  }, [listUpdateInstallers]);

  useEffect(() => {
    function filterBy(luminaire) {
      const p = JSON.stringify(luminaire.luminaire_potency);
      return (luminaire.luminaire_name.includes(idInstaller)
      );
    }

    async function filterData() {
      if (idInstaller === '') {
        setListLuminaire(mainList);
      } else setListLuminaire(mainList.filter(filterBy));
    }

    filterData();
  }, [idInstaller]);

  const handleClickUpdateList = async () => {
    const luminaireData = await Client.listLuminaireByTenant();
    if (luminaireData.status === 200) setListLuminaire(luminaireData.data);
  };

  const styles = {
    mainBox: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.grey[50],
      display: 'flex',
      flexDirection: 'row',
      border: 'none',
    },
    sidebar: {
      position: 'fixed',
      zIndex: 1,
    },
    centerBox: {
      flex: 1,
      m: '20px',
      position: 'relative',
    },
    mainContent: {
      backgroundColor: theme.palette.common.white,
      width: '100%',
      height: '92.5%',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      border: 'none',
    },

    boxHeader: {
      display: 'flex',
      flexDirection: 'row',
      height: '80px',
    },

    boxFlex: {
      flex: 1,
    },

    filterBox: {
      ml: '20px',
      mt: '20px',
      display: 'flex',
      flexDirection: 'row',
    },

    textFieldStyle: {
      color: theme.palette.grey[400],
    },

    boxButton: {
      display: 'flex',
      flexDirection: 'row',
      width: '180px',
      height: '80px',
      p: 3,
      justifyContent: 'end',
    },

    styledButtonNew: {
      p: '15px',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderRadius: '15px',
    },

    styledButtonUpdate: {
      p: '15px',
      backgroundColor: 'white',
      color: 'white',
      borderRadius: '15px',
      ml: '10px',
    },

    boxTable: {
      display: 'flex',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      border: 'none',
    },

    boxTextField: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flex: 1,
    },

    txtField: {
      m: '0px 10px ',
    },

    txtFieldSelect: {
      m: '0px 10px ',
      width: '150px',
    },
  };

  return (
    <Box sx={styles.mainBox}>
      <Sidebar
        style={styles.sidebar}
        tenantName="Tenant"     
      />  
      <Box sx={styles.centerBox}>
        <BoxStyled sx={styles.mainContent}>
          <Box sx={styles.boxHeader}>
            <Box sx={styles.boxFlex}>
              <Box sx={styles.filterBox}>
                <Box sx={styles.boxTextField}>
                  <TextFieldStyled
                    label={'Identificador'}
                    id={Math.random().toString()}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      endAdornment: <InputAdornment position="end"><SearchIcon sx={styles.textFieldStyle} /></InputAdornment>,
                    }}
                    onChange={(e) => setidInstaller(e.target.value)}
                    sx={styles.txtField}
                  />                 
                </Box>
              </Box>
            </Box>
            <Box sx={styles.boxButton}>
              <StyledButton
                sx={styles.styledButtonUpdate}
                onClick={handleClickUpdateList}
              >
                <RefreshIcon />
              </StyledButton>
            </Box>
          </Box>
          <Box sx={styles.boxTable}>
            <ListTableInstallers list={listLuminaire} />
          </Box>
        </BoxStyled>  
      </Box>   
    </Box>
  );
}
