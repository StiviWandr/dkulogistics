import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../http";
import axios from 'axios'
import apiURL from '../http'


const initialState = {
    registerError: null,
    global: null,
    loginError: null,
    user: null,
    currentAuthor: null,
}

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
                thunkApi.dispatch(usersSlice.actions.catchLoginError(e.response.data));
            } else {
                thunkApi.dispatch(usersSlice.actions.globalError(e));
            }
        }
        
    }
)

export const loginUser = createAsyncThunk(
    'users/login',
    async (payload, thunkApi) => {
        try {
            const response = await api.post('/login', payload.userData);
            localStorage.setItem('token', response.data.accessToken)
            payload.navigate('/');
            return response.data;
        } catch (e) {
            if (e.response && e.response.data) {
                thunkApi.dispatch(usersSlice.actions.catchLoginError(e.response.data.message));
            } else {
                thunkApi.dispatch(usersSlice.actions.globalError(e));
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'users/register',
    async (payload, thunkApi) => {
        try {
            const res = await api.post('/registration', payload.userData);
            payload.navigate('/');
            thunkApi.dispatch(usersSlice.actions.loginafterRegister(res.data));
            return res.data;
        } catch (e) {
            if (e.response && e.response.data) {
                thunkApi.dispatch(usersSlice.actions.catchRegisterError(e.response.data));
            } else {
                thunkApi.dispatch(usersSlice.actions.globalError(e));
            }
        }
    }
)

export const logoutUser = createAsyncThunk(
    'logout/users',
    async (payload, thunkAPI) => {
        await api.post('/logout');
        thunkAPI.dispatch(usersSlice.actions.logoutUser());
        console.log(usersSlice.actions);
        payload.navigate('/');
    }
)
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
        loginafterRegister:(state, action)=> {
            state.user = action.payload.user;
        },
        catchRegisterError: (state, action) => {
            state.registerError = action.payload;
        },
        catchLoginError: (state, action) => {
            state.loginError = action.payload;
        },
        globalError: (state, action) => {
            state.global = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, state => {
                state.registerError = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.loginError = null;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.loginError = null;
            })
            .addCase(registerUser.pending, state => {
                state.loginError = null;
                state.global = null;
                state.registerError = null;
            })
            .addCase(loginUser.pending, state => {
                state.loginError = null;
                state.global = null;
                state.registerError = null;
            })

    }
})

export default usersSlice.reducer;