import {createSlice, createSelector} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  deliveryFee: 20,
  feeDelivery: 200,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload.product;
      const existingItem = state.items.find(
        item => item.product.id === newItem.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({product: newItem, quantity: 1});
      }
    },
    setQuantity: (state, action) => {
      const {productId, amount} = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === productId,
      );

      if (existingItem) {
        existingItem.quantity += amount;
      }

      if (existingItem.quantity <= 0) {
        state.items = state.items.filter(item => item !== existingItem);
      }
    },
  },
});

export const numberOfItems = state => state.cart.items.length;
export const selectSubTotal = state =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0,
  );

const cartSelector = state => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubTotal,
  (cart, subtotal) => (subtotal > cart.feeDelivery ? 0 : cart.deliveryFee),
);

export const selectTotal = createSelector(
  selectSubTotal,
  selectDeliveryPrice,
  (subtotal, deliveryFee) => subtotal + deliveryFee,
);
