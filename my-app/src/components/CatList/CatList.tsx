import { useMemo } from 'react';

import CatItem from '../CatItem';

import { CatListProps } from './CatListTypes';
import { StyledCatList } from './CatListStyled';

const CatList = ({ items, favoriteItems }: CatListProps) => {
  const catItems = useMemo(() => {
    if (!items) return null;
    return items.map((item) => (
      <CatItem key={item.id} url={item.url} id={item.id} />
    ));
  }, [items]);

  const favoriteCatItems = useMemo(() => {
    if (!favoriteItems) return null;
    return favoriteItems.map((item) => (
      <CatItem
        key={item.id}
        favoriteId={item.id}
        url={item.image.url}
        id={item.image.id}
      />
    ));
  }, [favoriteItems]);

  return <StyledCatList>{catItems || favoriteCatItems}</StyledCatList>;
};

export default CatList;
