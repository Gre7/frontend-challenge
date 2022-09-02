export interface ICatItemCategories {
  id: number;
  name: string;
}

export interface ICatItem {
  categories: ICatItemCategories[];
  height: number;
  id: string;
  url: string;
  width: number;
}

type FavoriteImage = Pick<ICatItem, 'id' | 'url'>;

export interface ICatFavoriteItem {
  created_at: string;
  id: number;
  image: FavoriteImage;
  image_id: string;
  user_id: string;
}
