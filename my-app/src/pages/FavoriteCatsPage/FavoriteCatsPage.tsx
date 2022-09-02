import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getFavoriteCat } from '../../redux/actions/catActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import CatList from '../../components/CatList';
const FavoriteCatsPage = () => {
  const dispatch = useAppDispatch();

  const { favoriteCats } = useAppSelector((state) => state.cat);

  useEffect(() => {
    dispatch(getFavoriteCat());
  }, [dispatch, getFavoriteCat]);

  return <CatList favoriteItems={favoriteCats} />;
};
export default FavoriteCatsPage;
