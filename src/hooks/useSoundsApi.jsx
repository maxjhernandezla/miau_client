import axios from 'axios';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

const useSoundsApi = () => {
  const { user } = useContext(LoginContext);

  const getSounds = async () => {
    const response = await axios.get('http://localhost:8080/api/sounds', {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const getAudio = async (sid) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/calls/reproduce/${sid}`,
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

  return { getAudio, getSounds };
};

export default useSoundsApi;
