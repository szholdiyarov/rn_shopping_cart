import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CartItem, ShopItem } from './types';

export interface CartSlicer {
  items: CartItem[];
  total: number;
}

const initialState: CartSlicer = {
  items: [],
  total: 0,
};

export const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ShopItem>) => {
      const { items } = state;
      const indexOfItem = items.findIndex(
        item => item.shopItem.id === action.payload.id,
      );

      if (indexOfItem >= 0) {
        const shopItemToUpdate = items[indexOfItem];
        shopItemToUpdate.quantity += 1;
      } else {
        const itemToPush = action.payload;
        state.items.push({
          shopItem: itemToPush,
          quantity: 0,
        });
      }
    },
    removeOneItem: (state, action: PayloadAction<ShopItem>) => {
      const { items } = state;
      const indexOfItem = items.findIndex(
        item => item.shopItem.id === action.payload.id,
      );

      if (indexOfItem >= 0) {
        const shopItemToUpdate = items[indexOfItem];
        shopItemToUpdate.quantity -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlicer.actions;

export default cartSlicer.reducer;
