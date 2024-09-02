import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import categoriesSlice from './reducers/catagoriesReducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    categories:categoriesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;