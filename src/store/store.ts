import { configureStore } from "@reduxjs/toolkit";
import sessionsReducer from './sessionsSlice'

const store = configureStore({
    reducer:{
        sessions: sessionsReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch