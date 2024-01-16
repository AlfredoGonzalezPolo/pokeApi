import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MainLayout from '../layout/MainLayout';
import { DetailPage } from '../pages/DetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/:id',
        element: <DetailPage />,
      },
    ],
  },
]);
export default router;
