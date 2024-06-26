import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/miau_client/login" element={<Login />} />
      <Route path="/miau_client/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/miau_client/login" />} />
    </Routes>
  );
};
