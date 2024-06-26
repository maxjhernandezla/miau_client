import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';

const useUsersApi = () => {
  const { user } = useContext(LoginContext);
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const getUserById = async () => {
    try {
      const response = await axios.get(
        `${VITE_API_URL}/users/${user.user_id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  const updateUser = async (updatedData) => {
    try {
      const response = await axios.put(
        `${VITE_API_URL}/update/${user.user_id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  return { getUserById, updateUser };
};

export default useUsersApi;
