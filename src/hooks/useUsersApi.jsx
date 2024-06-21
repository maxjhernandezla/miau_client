import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';

const useUsersApi = () => {
  const { user } = useContext(LoginContext);

  const getUserById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/users/${user.user_id}`,
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
        `http://localhost:8080/api/users/update/${user.user_id}`,
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
