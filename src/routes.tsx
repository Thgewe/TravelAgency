import React from 'react';
import HomePage from './pages/HomePage';
import { HOME_ROUTE } from './utils/constants';
import { IRoute } from './models/route';

export const routes: IRoute[] = [
  {
    path: HOME_ROUTE,
    name: 'home',
    element: <HomePage />,
  },
];
