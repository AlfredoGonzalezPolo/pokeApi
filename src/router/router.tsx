import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from '../layout/MainLayout';

const MainPage = lazy(() => import('../pages/MainPage'));
const DetailPage = lazy(() => import('../pages/DetailPage'));
const FilterPage = lazy(() => import('../pages/FilterPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path=":id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DetailPage />
          </Suspense>
        }
      />
      <Route
        path="filter/:type"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <FilterPage />
          </Suspense>
        }
      />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
