import { createSlice } from '@reduxjs/toolkit';

import { ShopItem } from './types';

export interface ShopSlicer {
  items: ShopItem[];
}

const initialState: ShopSlicer = {
  items: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      price: Number(1.341),
      image: require('assets/image1.jpeg'),
    },
    {
      id: 'bd7acbea-df33-46c2-aed5-3ad53abb28ba',
      title: 'Second Item',
      price: Number(705.99),
      image: require('assets/image2.jpeg'),
    },
    {
      id: 'bd7acbea-c1b5-46c2-aed5-3ad53abb28ba',
      title: 'Thirds Item',
      price: Number(234.99),
      image: require('assets/image3.jpeg'),
    },
    {
      id: 'bd7acbea-c1b1-46c2-sdfd-3ad53abb28ba',
      title: 'Forth Item',
      price: Number(199.99),
      image: require('assets/image4.jpeg'),
    },
  ],
};

export const shopSlicer = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { addToCart } = cartSlicer.actions;

export default shopSlicer.reducer;
