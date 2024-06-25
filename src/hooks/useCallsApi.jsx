import axios from 'axios';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

const useSoundsApi = () => {
  const { user } = useContext(LoginContext);

  const getAudio = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/calls/reproduce/667b513857809eda99783ac5`,
        {
          responseType: 'blob', // Para recibir el contenido como un objeto Blob
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.error(error.message);
      throw error; // Re-throw the error so the caller can handle it if needed
    }
  };

  return { getAudio };
};

export default useSoundsApi;
