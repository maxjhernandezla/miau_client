import axios from 'axios';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

const useSoundsApi = () => {
  const { user } = useContext(LoginContext);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const getSounds = async () => {
    const response = await axios.get(`${VITE_API_URL}/sounds`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const getAudio = async (sid) => {
    try {
      const response = await axios.get(
        `${VITE_API_URL}/calls/reproduce/${sid}`,
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
