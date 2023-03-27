import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { layoutRoutes, routes } from '../routes';
import { HOME_ROUTE } from '../utils/constants';
import { IRoute } from '../models/route';
import Layout from './Layout';

const AppRouter = () => {
  const createRoutes = (routes: IRoute[]) => {
    return routes.map((route) => (
      <Route key={route.name} path={route.path} element={route.element}>
        {route.nested && createRoutes(route.nested)}
      </Route>
    ));
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        {createRoutes(layoutRoutes)}
        <Route path={'*'} element={<Navigate to={HOME_ROUTE} />} />
      </Route>
      {createRoutes(routes)}
    </Routes>
  );
};

export default AppRouter;
