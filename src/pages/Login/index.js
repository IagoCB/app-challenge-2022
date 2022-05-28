import { useNavigate } from 'react-router-dom';

import mundi from '../../assets/images/mundi.jpg';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function Login() {
    const navigate = useNavigate();

    const styles = {
        avatarAberto: {
            width: '60%',
            height: '100%',
        },
        boxPrincipal: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#ecf4f4',
            width: '100%',
            height: '100%',
        },
        boxButtonNew: {
            mt: '20px',
            mb: '5px',
            backgroundColor: '#000c0c',
            borderRadius: '10px',
            color: '#0fbab7',
            '&:hover': {
                backgroundColor: '#0fbab7',
                color: '#000c0c',
            }
        },
        boxButtonCreate: {
            mt: 3,
            borderRadius: '10px',
            backgroundColor: 'white',
            color: '#0fbab7',
            '&:hover': {
                backgroundColor: "#0fbab7",
                color: 'white',
            }
        },
        boxCreate: {
            display: 'flex',
            flexDirection: 'column',
            m: '30px',
            justifyContent: 'center',
            alignItems: 'center',

        },
        boxTypographyCreate: {
            color: '#3e3932',
            fontSize: '20px',
            alignItems: 'center',
            justifyContent: 'center',

        },
        listItemButton: {
            backgroundColor: '#b03b00',
            height: '55px',
            '&:hover, &:selected, &:focused': {
                backgroundColor: '#de6021',
            }
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
        container: {
            width: '100%',
            height: '100%'
        },
        boxForm: {
            p: '24px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'center'
        },
        boxTitle: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: '50px',
        },
        title: {
            color: '#000c0c',
            fontWeight: 'bold',
            fontSize: '60px',
            mt: '20px',
        },
        subTitle: {
            color: '#0fbab7',
            fontSize: '20px',
            mt: '20px',
        },
        checkbox: {
            color: '#0fbab7 !important',
        },
    };

    const handleClickCreate = (e) => {
        navigate(`/create`);
    };

    const handleClickEntrar = (e) => {
        navigate(`/home`);
    };

    return (
        <Box sx={styles.boxPrincipal}>
            <Avatar variant="square"
                src={mundi}
                sx={styles.avatarAberto}
            />
            <Box sx={styles.container}>
                <Box sx={styles.boxForm}>
                    <Box sx={styles.boxTitle}>
                        <Typography sx={styles.title}>Net Detect</Typography>
                        <Typography sx={styles.subTitle}>
                            Achei o melhor provedor da sua região
                        </Typography>
                    </Box>

                    <TextField
                        id='input-email'
                        required
                        fullWidth
                        variant="outlined"
                        label="Email"
                        disableRipple
                        sx={styles.txtField}
                    />
                    <TextField
                        id='input-senha'
                        required
                        fullWidth
                        variant="outlined"
                        label="Senha"
                        disableRipple
                        sx={styles.txtField}
                        type="password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" sx={styles.checkbox} disableRipple />}
                        label="Lembre de mim"
                    />
                    <Button
                        id='btn-entrar'
                        fullWidth
                        disableRipple
                        sx={styles.boxButtonNew}
                        onClick={(e) => handleClickEntrar(e)}
                    >
                        Entrar
                    </Button>

                    <Box sx={styles.boxCreate}>
                        <Typography sx={styles.boxTypographyCreate}>
                            Não possui uma conta?
                        </Typography>
                        <Button
                            id='btn-criar'
                            startIcon={<AddIcon />}
                            sx={styles.boxButtonCreate}
                            disableRipple
                            onClick={(e) => handleClickCreate(e)}
                        >
                            Criar
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}