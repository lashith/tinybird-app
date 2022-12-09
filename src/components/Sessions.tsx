import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { fetchSessions } from '../store/sessionsSlice';
import SessionsList from "./SessionsList";
import Filters from './Filters';
import { Box, Container, Grid, Typography} from '@mui/material';
import { Session } from '../store/sessionTypes';
import ExpandableRowTable from './test';
import ExpandableRowTable2 from './test2';

const Sessions = () => {

  const [eventSessions, setEventSessions] = useState<Session[]>([]);
  const sessions = useAppSelector(state => state.sessions)

const dispatch = useAppDispatch()

useEffect(()=>{
  setEventSessions(sessions.sessions);
console.log(sessions.sessions)
},[sessions])

useEffect(()=>{
    dispatch(fetchSessions());
},[dispatch])


const handlebtns = (e:any)=>{

 if(e.target.value === 'tutor_not_joind'){
 const filter=sessions.sessions.filter((item:Session) => item.tutor_joined === 0);
  setEventSessions(filter);
 }
 else if(e.target.value === 'student_not_joind'){
  const filter=sessions.sessions.filter((item:Session) => item.student_joined === 0);
  setEventSessions(filter);
 }
 else if(e.target.value === 'tutor_not_present'){
  const filter=sessions.sessions.filter((item:Session) => item.is_tutor_present === 0);
  setEventSessions(filter);
 }
 else if(e.target.value === 'student_not_joind'){
  const filter=sessions.sessions.filter((item:Session) => item.is_student_present=== 0);
  setEventSessions(filter);
 }
 else if(e.target.value === 'all'){
  setEventSessions(sessions.sessions);
 }
 else if(e.target.value === 'refresh all'){
  dispatch(fetchSessions());
  setEventSessions(sessions.sessions);
 }
 else{
  return
 }
 }

return (
    <Box>
    <Container maxWidth="xl" disableGutters>
    <Grid
   container
   alignItems={"center"}
   px={{ xs: "15px", md: "120px" }}
   pt="50px"
 >
  <Grid item xs={12}>
  <Typography
                          fontWeight={900}
                          fontSize="21px"
                          lineHeight={"120%"}
                          letterSpacing="0.5px"
                          textTransform="uppercase"
                          color={"#0D3C60"}
                          marginBottom='20px'
                        >
                        Session tracker
                        </Typography>
                        <Typography
                          fontWeight={900}
                          fontSize="18px"
                          lineHeight={"120%"}
                          letterSpacing="0.5px"
                          textAlign="left"
                          color={"#0D3C60"}
                          marginBottom='10px'
                        >
                       Sessions List 
                        </Typography>
                        <Filters handlebtns={handlebtns} />

<div>
      {sessions.loading && <div>Loading...</div>}
      {!sessions.loading && sessions.error ? <div>Error: {sessions.error}</div> : null}
      {!sessions.loading && sessions.sessions.length ? (
        <SessionsList Sessions={eventSessions} />
      ): null}
  </div>
</Grid>
<Grid item xs={12}>
<ExpandableRowTable Sessions={eventSessions} />
</Grid>
<Grid item xs={12}sx={{
    marginTop:'20px'
    }}>
  <hr  />
</Grid>
<Grid item xs={12}>
<ExpandableRowTable2 Sessions={eventSessions} />
</Grid>
</Grid>

    </Container>
</Box>
)
}

export default Sessions