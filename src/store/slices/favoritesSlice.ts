import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteState, Product } from '../../type/product';

// 初始化
const initialState: FavoriteState = {
  favorites: [],
  loading: false,
  error: null,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.favorites.find(
        product => product.id === action.payload.id
      )
      if (!existingProduct) {
        state.favorites.push(action.payload)
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        product => product.id !== action.payload
      )
    }
  }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;