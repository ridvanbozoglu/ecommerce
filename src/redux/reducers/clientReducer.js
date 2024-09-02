import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../axios/eccomerceApi"

export const createUser = createAsyncThunk(
  'client/createUser',
  async (formData) => {
    const response = await api.post('/signUp',formData); 
    return response.data; 
  }
);

export const loginThunk = createAsyncThunk(
  'client/loginThunk',
  async (userData) => {
    const response = await api.post('/login',userData); 
    console.log(response.data);
    
    return response.data; 
  }
);

const clientSlice = createSlice({
  name: 'client',
  initialState: {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: '',
    language: '',
    userDataLoading: false, 
    userDataError: null,
    isAuthenticated: true, 
  },
  reducers: {
    setUser: (state, action) => {      
      state.user = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.userDataLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.userDataLoading = false;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.userDataLoading = false;
        state.userDataError = action.error;
      })
      .addCase(loginThunk.pending, (state) => {
        state.userDataLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.userDataLoading = false;
        state.user = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.userDataLoading = false;
        state.userDataError = action.error;
      });
  },
});

export const { setUser, setRoles, setTheme, setLanguage, setIsAuthenticated } = clientSlice.actions;
export default clientSlice.reducer;
