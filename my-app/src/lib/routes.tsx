import FavoriteCatsPage from '../pages/FavoriteCatsPage/FavoriteCatsPage';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export const routes = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/favorite',
    element: <FavoriteCatsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
