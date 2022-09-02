import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { routes } from './lib/routes';
import Header from './components/Header';

const App = () => {
  const pages = useMemo(
    () =>
      routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        ></Route>
      )),
    [routes]
  );

  return (
    <div className="app">
      <Header />
      <Routes>{pages}</Routes>
    </div>
  );
};

export default App;
