import React, { useCallback, useEffect, useState } from 'react';

import HeartIcon from '../../icons/HeartIcon/HeartIcon';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  setFavoriteCat,
  deleteFavoriteCat,
  getFavoriteCat,
} from '../../redux/actions/catActions';

import { CatItemProps } from './CatItemTypes';
import {
  StyledCatItem,
  StyledCatItemImg,
  StyledHeartIconButton,
} from './CatItemStyled';

const CatItem = ({ url, id, favoriteId }: CatItemProps) => {
  const dispatch = useAppDispatch();

  const [heartColor, setHeartColor] = useState('none');

  useEffect(() => {
    favoriteId ? setHeartColor('#FF3A00') : setHeartColor('none');
  }, [favoriteId]);

  const handleClickFavoriteCat = useCallback(
    (id: string) => {
      if (!favoriteId) {
        dispatch(setFavoriteCat(id));
        setHeartColor('#FF3A00');
      } else {
        dispatch(getFavoriteCat());
        dispatch(deleteFavoriteCat(favoriteId));
        dispatch(getFavoriteCat());
        setHeartColor('none');
      }
    },
    [favoriteId, dispatch, getFavoriteCat, deleteFavoriteCat]
  );

  return (
    <StyledCatItem>
      <StyledCatItemImg src={url} />
      <StyledHeartIconButton
        className="heart-button"
        onClick={() => handleClickFavoriteCat(id)}
      >
        <HeartIcon fill={heartColor} />
      </StyledHeartIconButton>
    </StyledCatItem>
  );
};

export default CatItem;
