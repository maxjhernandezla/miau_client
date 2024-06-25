// Vaccines.js
import { useEffect, useState } from 'react';
import AddVaccineComponent from '../../components/AddVaccineComponent/AddVaccineComponent';
import useVaccinesApi from '../../hooks/useVaccinesApi';
import { useParams } from 'react-router-dom';
import './AddVaccine.scss';

const AddVaccine = () => {
  const [vaccines, setVaccines] = useState(null);
  const { getVaccines } = useVaccinesApi();
  const { cid } = useParams();

  useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const vaccinesData = await getVaccines();
        setVaccines(vaccinesData);
      } catch (error) {
        console.error('Error fetching vaccines:', error);
      }
    };

    fetchVaccines();
  }, [cid]);

  return (
    <div className="add_vaccines_container">
      {vaccines && <AddVaccineComponent vaccines={vaccines} cid={cid} />}
    </div>
  );
};

export default AddVaccine;
