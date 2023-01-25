import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../http";
import axios from 'axios'
import apiURL from '../http'


const initialState = {
    journals: [],
    currentJournal: {},
    currentArticle: {},
    requestSent: false
}
export const sendRequestForArticle = createAsyncThunk(
    'journals/sendRequest',
    async (payload, thunkApi) => {
        try{
            const response = api.post("/articles/request", payload)
            return response.data;
        }catch(e){
            console.log(e);
        }
        
    }
)
export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async (payload, thunkApi) => {
        try{
            const response = axios.get(`${apiURL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            payload.navigate('/');
            return response.data;
        }catch(e){
            if (e.response && e.response.data) {
                thunkApi.dispatch(journalSlice.actions.catchLoginError(e.response.data));
            } else {
                thunkApi.dispatch(journalSlice.actions.globalError(e));
            }
        }
        
    }
)
export const setArticleRequestSent = (value) => {
    setRequestSent(value)
}

export const getJournals = createAsyncThunk(
    'journal/getJournals',
    async (payload, thunkApi) => {
        try{
            api.get("/journals");
        }catch(e){

        }
    }
)

const journalSlice = createSlice({
    name: 'journals',
    initialState,
    reducers: {
        setRequestSent(state, action){
            state.requestSent = action.value
        }
    },
    extraReducers: builder => {
        builder
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.loginError = null;
            })

    }
})
export const { setRequestSent } = journalSlice.actions
export default journalSlice.reducer;