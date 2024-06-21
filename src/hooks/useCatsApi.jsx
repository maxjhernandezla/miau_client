import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';

const useCatsApi = () => {
  const { user } = useContext(LoginContext);

  // const reproduce = async (sid) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8080/api/sounds/reproduce/667069707ac0f40412e81777`,
  //       {
  //         responseType: 'blob', // Para recibir el contenido como un objeto Blob
  //         headers: {
  //           Authorization: `Bearer ${user.token}`,
  //         },
  //       }
  //     );
  //     return response;
  //   } catch (error) {
  //     console.error(error.message);
  //     throw error; // Re-throw the error so the caller can handle it if needed
  //   }
  // };

  const addCat = async (cat) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/cats/create`,
        cat,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const getCats = async () => {
    const response = await axios.get(`http://localhost:8080/api/cats`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const getCatById = async (cid) => {
    const response = await axios.get(`http://localhost:8080/api/cats/${cid}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const updateCat = async (cid, cat) => {
    const response = await axios.put(
      `http://localhost:8080/api/cats/update/${cid}`,
      cat,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return response.data;
  };

  const deleteCat = async (cid) => {
    const response = await axios.delete(
      `http://localhost:8080/api/cats/delete/${cid}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return response.data;
  };

  return { addCat, getCats, getCatById, updateCat, deleteCat };
};

export default useCatsApi;
