import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Marketplace from '../pages/Marketplace';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export const HOME_PAGE = '/';
export const SIGNUP_PAGE = '/signup';
export const LOGIN_PAGE = '/login';
export const MARKETPLACE = '/marketplace';
export const TOKO = '/toko';
export const PEMBELIAN = '/marketplace/pembelian';
export const WISHLIST = '/marketplace/wishlist';
export const KERANJANG = '/marketplace/keranjang';
export const SETTING = '/akun/setting';

export const routes = createBrowserRouter([
  {
    path: HOME_PAGE,
    Component: Home,
  },
  {
    path: MARKETPLACE,
    Component: Marketplace,
  },
  {
    path: LOGIN_PAGE,
    Component: Login,
  },
  {
    path: SIGNUP_PAGE,
    Component: SignUp,
  },
]);
