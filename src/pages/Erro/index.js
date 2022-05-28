import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Erro(){

    const styles = {
        container: {
            maxWidth: '70%',
            color: '#FFF',
            background: '#ba0041',
            borderRadius: '4px',
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
            p: '30px',
            m: '80px auto',
            mb: '40px',          
        },

        title:{            
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
         
        },

        subTitle:{
            fontSize: '70px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }
    }

    return(
        <Box sx={styles.container}>
            <Typography sx={styles.title}>Error Not Found</Typography>
            <Typography sx={styles.subTitle}>404</Typography>                
        </Box>
    )
}