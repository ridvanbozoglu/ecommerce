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
    return response.data; 
  }
);

export const getAdressThunk = createAsyncThunk(
  'client/getAdress',
  async () => {
    const response = await api.get('/user/address'); 
    return response.data; 
  }
);

export const editAdressThunk = createAsyncThunk(
  'client/editAdressThunk',
  async (newAdress) => {
    const response = await api.put('/user/address',newAdress); 
    return response.data; 
  }
);

export const addAdressThunk = createAsyncThunk(
  'client/addAdressThunk',
  async (newAdress) => {
    try{
    const response = await api.post('/user/address',newAdress); 
    console.log(response.data[0]);
    return response.data[0]; }
    catch (error){ console.log(error);
    }
  }
);

export const deleteAdressThunk = createAsyncThunk(
  'client/deleteAdressThunk',
  async (id) => {
    const response = await api.delete(`/user/address/${id}`);

    
    return id;
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
    userAddressLoading: false, 
    userDataError: null,
    isAuthenticated: !!localStorage.getItem("token") || !!sessionStorage.getItem("token"), 
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
      })
      .addCase(getAdressThunk.pending, (state) => {
        state.userAddressLoading = true;
      })
      .addCase(getAdressThunk.fulfilled, (state, action) => {
        state.userAddressLoading = false;
        state.addressList = action.payload;
      })
      .addCase(getAdressThunk.rejected, (state, action) => {
        state.userAddressLoading = false;
        state.userDataError = action.error;
      })
      .addCase(editAdressThunk.pending, (state) => {
        state.userAddressLoading = true;
      })
      .addCase(editAdressThunk.fulfilled, (state, action) => {
        state.userAddressLoading = false;
        state.addressList = state.addressList.map((address) => {
          if (address.id === action.payload.id) {
            return action.payload;
          }
          return address;
        });
      })
      .addCase(editAdressThunk.rejected, (state, action) => {
        state.userAddressLoading = false;
        state.userDataError = action.error;
      })
      .addCase(addAdressThunk.pending, (state) => {
        state.userAddressLoading = true;
      })
      .addCase(addAdressThunk.fulfilled, (state, action) => {
        state.userAddressLoading = false;
        state.addressList = [...state.addressList, action.payload];
      })
      .addCase(addAdressThunk.rejected, (state, action) => {
        state.userAddressLoading = false;
        state.userDataError = action.error;
      })
      .addCase(deleteAdressThunk.pending, (state) => {
        state.userAddressLoading = true;
      })
      .addCase(deleteAdressThunk.fulfilled, (state, action) => {
        state.userAddressLoading = false;
        state.addressList = state.addressList.filter(
          (address) => address.id !== action.payload
        );
      })      
      .addCase(deleteAdressThunk.rejected, (state, action) => {
        state.userAddressLoading = false;
        state.userDataError = action.error;
      });
  },
});

export const { setUser, setRoles, setTheme, setLanguage, setIsAuthenticated } = clientSlice.actions;
export default clientSlice.reducer;
