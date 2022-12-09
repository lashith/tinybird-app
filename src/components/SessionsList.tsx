import React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Session } from '../store/sessionTypes';

const columns: GridColDef[] = [
  { field: 'session_id', headerClassName: 'super-app-theme--header', headerName: 'ID', width:100},
  { field: 'session_link', headerClassName: 'super-app-theme--header', headerName: 'Link', width:450,
renderCell:(params)=><a href={`${params.value}`} target={`_blank`}>{params.value!.toString()}</a>},
  { field: 'session_started_at', headerClassName: 'super-app-theme--header', headerName: 'Session started at', width:200 },
  { field: 'session_started', headerClassName: 'super-app-theme--header', headerName: 'Session started', width:120},
  { field: 'tutor_joined', headerClassName: 'super-app-theme--header', headerName: 'Tutor joined', width:100},
  { field: 'student_joined', headerClassName: 'super-app-theme--header', headerName: 'Student joined', width:107},
  { field: 'is_tutor_present', headerClassName: 'super-app-theme--header', headerName: 'Tutor present', width:120},
  { field: 'is_student_present', headerClassName: 'super-app-theme--header', headerName: 'Student present', width:120},
];


interface SessionsListProps {
  Sessions:Session[];
}
  const SessionsList = (props:SessionsListProps)=>{
        const {Sessions} = props;
      return (
          <Box>
<Box sx={{height:500, width: '100%', '& .super-app-theme--header': {
          backgroundColor: '#1976d2',color:'#fff'
        }}}>
<DataGrid
        rows={Sessions}
        columns={columns}
        getRowId={(row) => row.session_id}
        autoHeight={true}
        pageSize={7}
      />
      </Box>

  </Box>
      )
  }
  
  export default SessionsList;


  