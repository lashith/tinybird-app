import { Box, Button, Grid } from "@mui/material";

const Filters = (props:any) =>{
    return (
        <Box>
<Grid container spacing={0.5}>
<Grid item xs={12}>
<Grid container 
  direction="row"
  justifyContent="flex-end"
  alignItems="flex-start">
  <Grid item xs={2}>
    <Button value='refresh all' onClick={props.handlebtns} variant="outlined" sx={{
    width:'100%'
    }}>Refresh All</Button>
    </Grid>
    </Grid>
  </Grid>
  <Grid item xs={2}>
  <Button value='tutor_not_joind' onClick={props.handlebtns} variant="outlined" sx={{
    width:'100%'
    }}>Tutor not joind</Button>
  </Grid>
  <Grid item xs={2}>
    <Button value='student_not_joind' onClick={props.handlebtns} variant="outlined" sx={{
    width:'100%'
    }}>Student not joind</Button>
  </Grid>
  <Grid item xs={2}>
    <Button value='tutor_not_present' onClick={props.handlebtns} variant="outlined" sx={{
    width:'100%'
    }}>Tutor not present</Button>
  </Grid>
  <Grid item xs={3}>
  <Button value='student_not_joind' onClick={props.handlebtns} variant="outlined" sx={{
    width:'100%'
    }}>Student not present</Button>
  </Grid>
  <Grid item xs={3}>
  <Grid container 
  direction="row"
  justifyContent="flex-end"
  alignItems="flex-start">
  <Grid item xs={4}>
    <Button value='all' onClick={props.handlebtns} variant="outlined" sx={{
    width:'100%'
    }}>All</Button>
    </Grid>
    </Grid>
  
  </Grid>
</Grid>
        </Box>
    )
}

export default Filters;