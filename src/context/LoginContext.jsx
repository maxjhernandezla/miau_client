import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    user_id: null,
    logged: false,
    error: null,
    token: null,
    role: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    const role = localStorage.getItem('role');

    if (token && user_id && role) {
      setUser({
        user_id,
        logged: true,
        error: null,
        token,
        role,
      });
    }
  }, []);

  const logIn = async (values) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/users/login',
        values
      );
      const { accessToken, user } = response.data;
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user_id', user._id);
      localStorage.setItem('role', user.role);

      setUser({
        user_id: user._id,
        logged: true,
        error: null,
        token: accessToken,
        role: user.role,
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setUser({ user_id: null, logged: false, error: error.message });
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('role');
    setUser({
      user_id: null,
      logged: false,
      error: null,
      token: null,
      role: null,
    });
  };

  const register = async (values) => {
    try {
      await axios.post('http://localhost:8080/api/users/register', values);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      throw error;
    }
  };

  return (
    <LoginContext.Provider value={{ user, logIn, logOut, register }}>
      {children}
    </LoginContext.Provider>
  );
};
