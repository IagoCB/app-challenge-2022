/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  useState,
  useContext,
  useEffect,
} from 'react';

import { styled, useTheme } from '@material-ui/core';
import { tableCellClasses } from '@mui/material/TableCell';
import {
  Box,
  IconButton,
  Typography,
  TableCell,
  Paper,
  Button,
  Modal,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableFooter,
  TablePagination,
  TableRow,
} from '@mui/material';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';

import { Context } from '../../contexts/context';
import Client from '../../resources/entitiesClient';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#000c0c',
    color: 'white',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: `${theme.palette.primary.blur} !important`,
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const {
    count, page, rowsPerPage, onPageChange,
  } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0 }} className="table-footer">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function ListTableLuminaires({ list }) {
  const {
    currentLuminaire,
    setCurrentLuminaire,
    setListUpdateLuminaire,    
  } = useContext(Context);
  
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClose = () => setOpen(false);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const styles = {
    selectedTableRow: {
      backgroundColor: `${theme.palette.primary.blur} !important`,
    },

    boxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: 'none',
    },

    tableContainer: {
      flex: 1,
      maxHeight: '100%',
      boxShadow: 'none',
    },

    tableContainer2: {
      zIndex: 2,
      boxShadow: '0px 10px 5px #BBB, 0px 0px 20px #BBB',
    },

    table: {
      minWidth: 450,
    },

    styledTableCell: {
      width: '200px',
    },

    boxStyledTableCell: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    icon: {
      color: theme.palette.primary.main,
    },

    infosIcon: {
      color: theme.palette.primary.main,
      cursor: 'pointer',
      '&:hover': { color: theme.palette.primary.light },
    },

    tableRowEmpty: {
      height: 53 * emptyRows,
    },

    tableFooter: {
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
    },

    tablePagination: {
      borderBottom: 'none',
    },

    typographyQuestion: {
      mt: 2,
      textAlign: 'center',
    },

    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: 24,
      p: 4,
      borderRadius: '10px',
      width: '500px',
      backgroundColor: theme.palette.common.white,
    },
    containerButtons: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '30px',
    },
    title: {
      textAlign: 'center',
    },
    buttonSave: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderRadius: '10px',
      width: '150px',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        border: 'none',
      },
    },
    buttonClose: {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.common.white,
      borderRadius: '10px',
      width: '150px',
      '&:hover': {
        backgroundColor: theme.palette.error.main,
        border: 'none',
      },
    },
  };

  // eslint-disable-next-line no-shadow
  const sliceList = (page, rowsPerPage) => {
    const sliceLuminaires = list.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    );
    return sliceLuminaires;
  };

  return (
    <Box sx={styles.boxStyle}>
      <TableContainer component={Paper} sx={styles.tableContainer}>
        <Table
          sx={styles.table}
          stickyHeader
          aria-label="sticky table"
          className="table-container"
        >
          <TableHead sx={{color: 'black'}}>
            <TableRow>
              <StyledTableCell align="center">
                {'Nome'}
              </StyledTableCell>
              <StyledTableCell align="center">
                {'Classificação'}
              </StyledTableCell>
              <StyledTableCell align="center">
                {'Preço por KM'}
              </StyledTableCell>
              <StyledTableCell align="center">
                {'Latitude'}
              </StyledTableCell>
              <StyledTableCell align="center">
                {'Longetude'}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0 ? sliceList(page, rowsPerPage) : list).map(
              (item, index) => (
                Object.keys(currentLuminaire).length !== 0 && currentLuminaire.luminaire_name === item.luminaire_name ? (
                  <StyledTableRow key={item.luminaire_name} tabIndex={index} sx={styles.selectedTableRow}>
                    <StyledTableCell align="center">
                      {item.luminaire_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.luminaire_maker}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.luminaire_potency}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.luminaire_config}
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={styles.styledTableCell}>
                      <Box sx={styles.boxStyledTableCell}>
                        <EditIcon
                          sx={styles.infosIcon}
                        />
                        <DeleteIcon
                          sx={styles.infosIcon}                          
                        />
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ) : (
                  <StyledTableRow key={item.luminaire_name} tabIndex={index}>
                    <StyledTableCell align="center">
                      {item.luminaire_name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.luminaire_maker}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.luminaire_potency}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.luminaire_config}
                    </StyledTableCell>
                    <StyledTableCell align="center" sx={styles.styledTableCell}>
                      <Box sx={styles.boxStyledTableCell}>
                        <EditIcon
                          sx={styles.infosIcon}                        
                        />
                        <DeleteIcon
                          sx={styles.infosIcon}                       
                        />
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                )
              ),
            )}
            {emptyRows > 0 && <TableRow style={styles.tableRowEmpty} />}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={styles.tableContainer2}>
        <Table sx={styles.table}>
          <TableFooter sx={styles.tableFooter}>
            <TableRow>
              <TablePagination
                sx={styles.tablePagination}
                rowsPerPageOptions={[5, 10, 25]}
                count={list.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'Rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Typography
            sx={styles.title}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            {'attentionTxt'}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={styles.typographyQuestion}
            variant="h5"
            component="h3"
          >
            {'deleteLuminaireTxt'}
          </Typography>
          <Box sx={styles.containerButtons}>
            <Button onClick={() => handleClose()} sx={styles.buttonClose}>
              {'noButton'}
            </Button>
            <Button         
              sx={styles.buttonSave}
            >
              {'yesButton'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
