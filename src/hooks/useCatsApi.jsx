import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';

const useCatsApi = () => {
  const { user } = useContext(LoginContext);

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

  const getCatVaccinations = async (cid) => {
    const response = await axios.get(
      `http://localhost:8080/api/cats/${cid}/vaccines`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return response.data;
  };

  const addVaccineToCat = async (cid, vid, vaccine) => {
    const response = await axios.post(
      `http://localhost:8080/api/cats/${cid}/vaccines/${vid}`,
      vaccine,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return response.data;
  };

  return {
    addCat,
    getCats,
    getCatById,
    updateCat,
    deleteCat,
    getCatVaccinations,
    addVaccineToCat,
  };
};

export default useCatsApi;
