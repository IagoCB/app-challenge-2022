import Sidebar from '../../components/Sidebar';
import Box from '@mui/material/Box';
// import Map from "../../components/Map";

import maps from '../../assets/images/maps.jpg';


export default function Home() {
  const styles = {
    boxPage: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
    boxMid: {
      width: '96.2%',
      height: '100%',
      display: 'flex',
      position: 'absolut',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '25%',
      color: '#FFF',
      background: '#ba0041',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.4)',
      p: '2%',
      m: '3% auto',
    },
    boxButtonNew: {
      maxWidth: '30%',
      m: '5% auto',
      backgroundColor: '#af0351',
      borderRadius: '10px',
      color: 'white',
      '&:hover': {
        backgroundColor: '#ff7fac',
        color: '#af0351',
      }
    },
    txt: {
      width: '50%',
    }
  };

  return (
    <Box sx={styles.boxPage}>
      <Sidebar />        
      <Box
        sx={styles.boxMid}
        component="img"
        src={maps}
      />
    </Box>
  )
}
