import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Session } from '../store/sessionTypes';

const columns: GridColDef[] = [
  { field: 'session_id', headerName: 'ID', width:100},
  { field: 'session_link', headerName: 'link', width:450},
  { field: 'session_started_at', headerName: 'session started at', width:200 },
  { field: 'session_started', headerName: 'session started', width:120},
  { field: 'tutor_joined', headerName: 'student joined', width:107},
  { field: 'student_joined', headerName: 'tutor present', width:100},
  { field: 'is_tutor_present', headerName: 'student present', width:120},
  { field: 'is_student_present', headerName: 'student present', width:120},
];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#3449b3',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  
  const SessionsList = (Sessions: { sessions: { sessions: Session[]; }; })=>{
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(10);
    
      const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
  
       const {sessions} = Sessions.sessions;
      console.log(sessions);
  
      const sessionNotStartedHandler = ()=>{

      }
  
  
      return (
          <div>
  <h3>Sessions List </h3>

  <div>
  <TableContainer component={Paper} sx={{maxHeight:{
    xs:'400px',
    lg:'500px'
  }}}>
        <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">id</StyledTableCell>
              <StyledTableCell align="left">link</StyledTableCell>
              <StyledTableCell align="left" width="400px">session started at</StyledTableCell>
              <StyledTableCell align="left"> session started</StyledTableCell>
              <StyledTableCell align="left">tutor joined</StyledTableCell>
              <StyledTableCell align="left"> student joined</StyledTableCell>
              <StyledTableCell align="left"> tutor present</StyledTableCell>
              <StyledTableCell align="left">student present </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions && sessions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.session_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              
                <TableCell align="left">{row.session_id}</TableCell>
                <TableCell align="left">{row.session_link}</TableCell>
                <TableCell align="left" >{row.session_started_at}</TableCell>
                <TableCell align="right">{row.session_started}</TableCell>
                <TableCell align="right">{row.tutor_joined}</TableCell>
                <TableCell align="right">{row.student_joined}</TableCell>
                <TableCell align="right">{row.is_tutor_present}</TableCell>
                <TableCell align="right">{row.is_student_present}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={sessions?.length}
          rowsPerPage={10}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

<div style={{height:500, width: '100%'}}>
<DataGrid
        rows={sessions}
        columns={columns}
        getRowId={(row) => row.session_id}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 15]}
      />
      </div>
  </div>
  </div>
      )
  }
  
  export default SessionsList;