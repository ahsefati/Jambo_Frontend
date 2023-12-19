import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

// Blog
import BlogPage from './pages/BlogPage';

// Auth
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPassPage from './pages/ForgotPassPage';

// Main Pages
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import SavedTools from './pages/SavedTools';
import UserProfilePage from './pages/UserProfilePage';

// Tools
import CoinDetailsPage from './pages/Tools/CoinDetailsPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'savedtools', element: <SavedTools /> },
        { path: 'userprofile', element: <UserProfilePage /> },
        { path: 'coindetails/:id', element: <CoinDetailsPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignupPage/>,
    },
    {
      path: 'forgotpass',
      element: <ForgotPassPage/>,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
