import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import MyCats from '../pages/MyCats/MyCats';
import Navbar from '../components/Navbar/Navbar';
import Cat from '../pages/Cat/Cat';
import User from '../pages/User/User';

export const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-cats" element={<MyCats />} />
        <Route path="/my-cats/:cid" element={<Cat />} />
        <Route path="/add-cat" element={<Cat />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Navbar />
    </>
  );
};
