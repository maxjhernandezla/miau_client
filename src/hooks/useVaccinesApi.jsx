import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';

const useVaccinesApi = () => {
  const { user } = useContext(LoginContext);

  const getVaccines = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/vaccines`, {
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
      const response = await axios.get(
        `http://localhost:8080/api/vaccines/${vid}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return { getVaccines, getVaccineById };
};

export default useVaccinesApi;
