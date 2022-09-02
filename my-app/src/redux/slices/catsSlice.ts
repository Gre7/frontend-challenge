import { createSlice } from '@reduxjs/toolkit';

import { ICatItem, ICatFavoriteItem } from '../../models/models';

export interface catData {
  cats: ICatItem[];
  favoriteCats: ICatFavoriteItem[];
  fetching: boolean;
  error: string;
  totalCats: number;
}

const initialState: catData = {
  cats: [],
  favoriteCats: [],
  fetching: true,
  error: '',
  totalCats: 0,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
    fetchCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.fetching = false;
    },
    fetchError: (state, action) => {
      state.error = action.payload;
    },
    setTotalCats: (state, action) => {
      state.totalCats = action.payload;
    },
    fetchFavoriteSuccess: (state, action) => {
      state.favoriteCats = action.payload;
      state.fetching = false;
    },
  },
});

export const {
  fetchCatsSuccess,
  setFetching,
  fetchError,
  setTotalCats,
  fetchFavoriteSuccess,
} = catsSlice.actions;

export default catsSlice.reducer;
