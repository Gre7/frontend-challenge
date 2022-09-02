import { Dispatch } from '@reduxjs/toolkit';

import axios from '../../axios';
import {
  setFetching,
  fetchCatsSuccess,
  fetchError,
  setTotalCats,
  fetchFavoriteSuccess,
} from '../slices/catsSlice';

export const fetchCatsPhotos = (limit = 15, page = 10) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setFetching(true));
      const response = await axios.get(`images/search`, {
        params: { limit, page },
      });
      dispatch(setTotalCats(response.headers['pagination-count']));
      dispatch(fetchCatsSuccess(response.data));
    } catch (e) {
      dispatch(fetchError(e as Error));
    }
  };
};

export const setFavoriteCat = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.post(`favourites`, {
        image_id: id,
      });
    } catch (e) {
      dispatch(fetchError(e as Error));
    }
  };
};

export const getFavoriteCat = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setFetching(true));
      const response = await axios.get(`favourites`);
      dispatch(fetchFavoriteSuccess(response.data));
    } catch (e) {
      dispatch(fetchError(e as Error));
    }
  };
};

export const deleteFavoriteCat = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`favourites/${id}`);
    } catch (e) {
      dispatch(fetchError(e as Error));
    }
  };
};
