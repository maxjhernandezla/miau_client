import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';

const useCatsApi = () => {
  const { user } = useContext(LoginContext);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const addCat = async (cat) => {
    try {
      const response = await axios.post(`${VITE_API_URL}/cats/create`, cat, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const getCats = async () => {
    const response = await axios.get(`${VITE_API_URL}/cats`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const getCatById = async (cid) => {
    const response = await axios.get(`${VITE_API_URL}/cats/${cid}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const updateCat = async (cid, cat) => {
    const response = await axios.put(
      `${VITE_API_URL}/cats/update/${cid}`,
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
    const response = await axios.delete(`${VITE_API_URL}/cats/delete/${cid}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const getCatVaccinations = async (cid) => {
    const response = await axios.get(`${VITE_API_URL}/cats/${cid}/vaccines`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const addVaccineToCat = async (cid, vid, vaccine) => {
    const response = await axios.post(
      `${VITE_API_URL}s/cats/${cid}/vaccines/${vid}`,
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
