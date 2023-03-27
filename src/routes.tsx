import React from 'react';
import HomePage from './pages/HomePage';
import {
  FAVOURITES_ROUTE,
  FLIGHT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  STAYS_ROUTE,
} from './utils/constants';
import { IRoute } from './models/route';

export const routes: IRoute[] = [
  {
    path: LOGIN_ROUTE,
    name: 'home',
    element: <div>LOGIN</div>,
  },
  {
    path: SIGNUP_ROUTE,
    name: 'flight',
    element: <div>SIGNUP</div>,
  },
];
export const layoutRoutes: IRoute[] = [
  {
    path: HOME_ROUTE,
    name: 'home',
    element: <HomePage />,
  },
  {
    path: FLIGHT_ROUTE,
    name: 'flight',
    element: <HomePage />,
  },
  {
    path: STAYS_ROUTE,
    name: 'stays',
    element: <HomePage />,
  },
  {
    path: FAVOURITES_ROUTE,
    name: 'favourites',
    element: <HomePage />,
  },
];
