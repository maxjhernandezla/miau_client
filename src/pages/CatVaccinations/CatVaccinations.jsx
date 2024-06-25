// Vaccines.js
import { useEffect, useState } from 'react';
import useCatsApi from '../../hooks/useCatsApi';
import { NavLink, useParams } from 'react-router-dom';
import CatVaccinationsComponent from '../../components/CatVaccinationsComponent/CatVaccinationsComponent';

const CatVaccinations = () => {
  const [catVaccinations, setCatVaccinations] = useState(null);
  const { getCatVaccinations } = useCatsApi();
  const { cid } = useParams();

  useEffect(() => {
    const fetchCatVaccines = async () => {
      try {
        const vaccinesData = await getCatVaccinations(cid);
        setCatVaccinations(vaccinesData);
      } catch (error) {
        console.error('Error fetching cat vaccines:', error);
      }
    };

    fetchCatVaccines();
  }, [cid]);

  return (
    <div className="cat_vaccinations_container">
      <h1>My vaccines</h1>
      {catVaccinations && (
        <div>
          <CatVaccinationsComponent
            catVaccinations={catVaccinations.vaccinations}
          />
        </div>
      )}
      <NavLink to={`/my-cats/${cid}`} className="route">
        <button>Go back</button>
      </NavLink>
    </div>
  );
};

export default CatVaccinations;
