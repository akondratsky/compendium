import { RouteObject, useParams, useSearchParams } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Search from '@/pages/Search';
import Edit from '@/pages/Edit';
import NotFound from '@/pages/NotFound';
import { useEditMode } from '@/components/useEditMode';

const RootPage = () => {
  const [isEditMode] = useEditMode();

  return isEditMode ? <Edit /> : <Search />;
};

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <RootPage /> }],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
