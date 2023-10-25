import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../http";

const initialState = {
    journals: [],
    currentJournal: {},
    currentArticle: {},
    requestSent: false,
    journalError: "",
    articleError: "",
    journalSent: false,
    global:""
}
export const sendRequestForArticle = createAsyncThunk(
    'journals/sendRequest',
    async (payload, thunkApi) => {
        try{
            const response = await api.post("/articles/request", payload)
            await thunkApi.dispatch(journalSlice.actions.setRequestSent(true))
            await thunkApi.dispatch(journalSlice.actions.setArticleError(""))
            return response.data;
        }catch(e){
            if (e.response && e.response.data) {
                thunkApi.dispatch(journalSlice.actions.setArticleError(e.response.data.message));
            } else {
                thunkApi.dispatch(journalSlice.actions.globalError(e));
            }
        }
        
    }
)
export const createJournal = createAsyncThunk(
    'journals/createJournal',
    async (payload, thunkApi) => {
        try{
            const response = await api.post("/journals/create", payload.data);
            await thunkApi.dispatch(journalSlice.actions.setJournalSent(true))
            await thunkApi.dispatch(journalSlice.actions.setError(""))
            return response.data;
        }catch(e){
            if (e.response && e.response.data) {
                thunkApi.dispatch(journalSlice.actions.setError(e.response.data.message));
            } else {
                thunkApi.dispatch(journalSlice.actions.globalError(e));
            }
        }
        
    }
)
export const getJournals = createAsyncThunk(
    'journal/getJournals',
    async (payload, thunkApi) => {
        try{
            const response = await api.get("/journals");
            
            await thunkApi.dispatch(setJournals(response.data))
        }catch(e){
            if (e.response && e.response.data) {
                thunkApi.dispatch(journalSlice.actions.globalError(e.response.data.message));
            }
        }
    }
)

const journalSlice = createSlice({
    name: 'journals',
    initialState,
    reducers: {
        setJournals: (state, action) => {
            state.journals = action.payload;
        },
        globalError: (state, action) => {
            state.global = action.payload;
        },
        setRequestSent(state, action){
            state.requestSent = action.payload
        },
        setJournalSent(state, action){
            state.journalSent = action.payload
        },
        setError(state, action){
            state.journalError = action.payload
        },
        setArticleError(state, action){
            state.articleError = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createJournal.rejected, (state, action) => {
                state.journalSent = false;
            })
    }
})
export const { setRequestSent, setJournalSent, setError, setJournals } = journalSlice.actions
export default journalSlice.reducer;