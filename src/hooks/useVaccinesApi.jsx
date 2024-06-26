import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';

const useVaccinesApi = () => {
  const { user } = useContext(LoginContext);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const getVaccines = async () => {
    try {
      const response = await axios.get(`${VITE_API_URL}/vaccines`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const getVaccineById = async (vid) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/vaccines/${vid}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return { getVaccines, getVaccineById };
};

export default useVaccinesApi;
