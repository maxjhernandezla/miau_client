import { BrowserRouter } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext.jsx';
import { useContext } from 'react';
import { PrivateRoutes } from './PrivateRoutes.jsx';
import { PublicRoutes } from './PublicRoutes.jsx';

export const AppRouter = () => {
  const { user } = useContext(LoginContext);
  return (
    <BrowserRouter>
      {user.logged ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};
