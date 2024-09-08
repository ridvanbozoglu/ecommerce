import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedCart = [...state.cart];
      
      const existingItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        updatedCart[existingItemIndex].quantity = (updatedCart[existingItemIndex].quantity || 1) + (action.payload.quantity || 1);
      } else {
        updatedCart.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
          checked: true,
        });
      }

      state.cart = updatedCart;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.cart = state.cart.map(item =>
        item.id === id
          ? { ...item, quantity }
          : item
      );
    },
    toggleChecked: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.map(item =>
        item.id === id
          ? { ...item, checked: !item.checked }  
          : item
      );
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    deleteCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  toggleChecked,  
  setPayment,
  setAddress,
  deleteCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
