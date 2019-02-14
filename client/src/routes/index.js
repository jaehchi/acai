
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Landing from './Landing';
import NotFound from './NotFound';

const routes = [
  {
    path: '/register',
    name: 'register',
    exact: true,
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    exact: true,
    component: Login,
  },
  {
    path: '/channels/@me',
    name: 'me',
    exact: true,
    component: Home,
  },
  {
    path: '/channels/@me/:channel_id',
    name: 'me',
    exact: true,
    component: Home,
  },
  {
    path: '/channels/:guild_id/:channel_id',
    name: 'home',
    exact: true,
    component: Home,
  },
  {
    path: '/',
    name: 'landing',
    exact: true,
    component: Landing,
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound,
  },
];

export default routes;
