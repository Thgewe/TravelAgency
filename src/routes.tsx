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
import FlightPage from './pages/FlightPage';

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
  {
    path: HOME_ROUTE,
    name: 'home',
    element: <HomePage />,
  },
];
export const layoutRoutes: IRoute[] = [
  {
    path: FLIGHT_ROUTE,
    name: 'flight',
    element: <FlightPage />,
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
