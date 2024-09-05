import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../axios/eccomerceApi";

export const categoriesThunk = createAsyncThunk(
  'product/categoriesThunk',
  async () => {
    const response = await api.get('/categories'); 
    return response.data; 
  }
);

export const productsThunk = createAsyncThunk(
  'product/productsThunk',
  async ({ categoryId, offset, order, filter }) => {
    console.log(categoryId, offset, order, filter);
    
    const params = new URLSearchParams();
    if (categoryId) {
      params.append('category', categoryId);
    }
    if (order) {
      params.append('sort', order);
    }
    if (filter) {
      params.append('filter', filter);
    }
    params.append('offset', offset);
    params.append('limit', 16);
    const endPoint = `/products?${params.toString()}`;
    console.log(endPoint);
    const response = await api.get(endPoint);
    console.log(response.data);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    categories: [],
    productList: [],
    total: 0,
    limit: 16,
    offset: 0,
    filter: '',
    fetchState: 'NOT_FETCHED',
    isLoading: false, 
    productDataError: {}
  },
  reducers: {
    setCategories: (state, action) => {      
      return { ...state, categories: action.payload };
    },
    setProductList: (state, action) => {
      return { ...state, productList: action.payload };
    },
    setTotal: (state, action) => {
      return { ...state, total: action.payload };
    },
    setFetchState: (state, action) => {
      return { ...state, fetchState: action.payload };
    },
    setLimit: (state, action) => {
      return { ...state, limit: action.payload };
    },
    setOffset: (state, action) => {
      return { ...state, offset: action.payload };
    },
    setFilter: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoriesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(categoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(categoriesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.productDataError = action.error;
      })
      .addCase(productsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productsThunk.fulfilled, (state, action) => {
        state.productList = action.payload.products;
        state.total = action.payload.total;
        state.isLoading = false;
      })
      .addCase(productsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.productDataError = action.error;
      })
  },
});

export const { setCategories, setProductList, setTotal, setFetchState, setLimit, setOffset, setFilter } = productSlice.actions;
export default productSlice.reducer;
