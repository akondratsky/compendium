import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Search from '@/pages/Search';
import Edit from '@/pages/Edit';
import NotFound from '@/pages/NotFound';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Search /> }],
  },
  {
    path: '/edit',
    element: <Layout />,
    children: [{ index: true, element: <Edit /> }]
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
