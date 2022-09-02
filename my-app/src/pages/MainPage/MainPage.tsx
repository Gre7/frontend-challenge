import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchCatsPhotos } from '../../redux/actions/catActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ICatItem } from '../../models/models';
import CatList from '../../components/CatList';
import { setFetching } from '../../redux/slices/catsSlice';

const MainPage = () => {
  const dispatch = useAppDispatch();

  //TODO можно ли вынести состояние в redux?
  const [photos, setPhotos] = useState<ICatItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { cats, totalCats, fetching } = useAppSelector((state) => state.cat);

  const getCatsPhotos = useCallback(() => {
    if (!fetching) return;
    dispatch(fetchCatsPhotos(15, currentPage));
    dispatch(setFetching(false));
    setCurrentPage((prevState) => prevState + 1);
  }, [fetching, currentPage]);

  const setCatsPhotos = useCallback(() => {
    setPhotos((prevPhotos) => {
      return [...prevPhotos, ...cats];
    });
  }, [cats]);

  useEffect(() => {
    getCatsPhotos();
    setCatsPhotos();
  }, [getCatsPhotos, setCatsPhotos]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = useCallback(
    (e: Event) => {
      if (!e.target) return;
      const scrollHeight = (e.target as Document).documentElement.scrollHeight;
      const scrollTop = (e.target as Document).documentElement.scrollTop;
      const innerHeight = window.innerHeight;
      if (
        scrollHeight - (scrollTop + innerHeight) < 100 &&
        photos.length < totalCats &&
        currentPage < 15
      ) {
        dispatch(setFetching(true));
      }
    },
    [setFetching]
  );

  return (
    <>
      <CatList items={photos} />
    </>
  );
};
export default MainPage;
