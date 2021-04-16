import Home from '../components/home'; // 每个页面
import Detail from '../components/detail';
import Welcome from '../components/welcome';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    // exact能够使得路由的匹配更严格一些
  },
  {
    path: '/detail',
    component: Detail,
    exact: true,
  },
  {
    path: '/welcome',
    component: Welcome,
  },
];

export default routes;
