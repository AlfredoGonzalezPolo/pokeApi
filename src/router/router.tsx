import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MainLayout from '../layout/MainLayout';
import { DetailPage } from '../pages/DetailPage';
// import { Suspense, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

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
// const MainPageLazy = lazy(() => import('../pages/MainPage'));
// const MainLayoutLazy = lazy(() => import('../layout/MainLayout'));
// const DetailPageLazy = lazy(() => import('../pages/DetailPage'));

// export function router() {
//   return (
//     <Suspense>
//       <Routes>
//         <Route path="/" element={<MainLayoutLazy></MainLayoutLazy>}></Route>
//       </Routes>
//     </Suspense>
//   );
// }
