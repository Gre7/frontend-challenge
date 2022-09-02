import { ICatItem, ICatFavoriteItem } from '../../models/models';
export interface CatListProps {
  items?: Pick<ICatItem, 'id' | 'url'>[];
  favoriteItems?: ICatFavoriteItem[];
}
