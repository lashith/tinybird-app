import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { Session } from './sessionTypes';

type InitialState = {
    loading: boolean,
    sessions:Session[],
    error:string
}

const initialState: InitialState = {
    loading: false,
    sessions:[],
    error:''
}

export const fetchSessions = createAsyncThunk('sessions/fetchSessions', ()=>{
    return axios
    .get(`${process.env.REACT_APP_TINYBIRD_URL2}`,{
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TINYBIRD_TOKEN2}`,
          Accept:'application/json',
          'Content-Type':'application/json'
        }
    })
    .then((res)=>res.data.data);
});

const sessionsSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchSessions.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchSessions.fulfilled, (state, action:PayloadAction<Session[]>)=> {
            state.loading = false
            state.sessions = action.payload
            state.error = ''
        })
        builder.addCase(fetchSessions.rejected, (state, action) => {
            state.loading = false
            state.sessions = []
            state.error = action.error.message || 'Something went wrong'
        })
    }
})

export default sessionsSlice.reducer