import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../axios/eccomerceApi"
import { setCategories } from '../actions/productAction';



export const getCategories = createAsyncThunk(
  'products/getCategories',
  async () => {
    const response = await api.get('/categories'); 
    return response.data; 
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    categoriesLoading: false,
    categoriesError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.categoriesLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        state.categoriesError = action.error;
      })

  },
});


export default categoriesSlice.reducer;
