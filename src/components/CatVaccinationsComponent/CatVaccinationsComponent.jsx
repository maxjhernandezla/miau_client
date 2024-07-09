import { useState, useEffect } from 'react';
import { formatDate } from '../../helpers/formatDate';
import groupAndSortVaccinations from '../../helpers/groupAndSortVaccinations';

const CatVaccinationsComponent = ({ catVaccinations }) => {
  const [groupedVaccinations, setGroupedVaccinations] = useState({});
  const [openGroups, setOpenGroups] = useState({});

  useEffect(() => {
    if (catVaccinations && catVaccinations.length > 0) {
      setGroupedVaccinations(groupAndSortVaccinations(catVaccinations));
    }
  }, [catVaccinations]);

  const toggleGroup = (vaccineId) => {
    setOpenGroups((prevState) => ({
      ...prevState,
      [vaccineId]: !prevState[vaccineId],
    }));
  };

  if (!catVaccinations || catVaccinations.length === 0) {
    return <p>No vaccines found for this cat.</p>;
  }

  return (
    <div className="cat_vaccines_container">
      {Object.keys(groupedVaccinations).map((vaccineId) => {
        const vaccineGroup = groupedVaccinations[vaccineId];
        const vaccineName = vaccineGroup[0].vaccine_id.name;
        const isOpen = openGroups[vaccineId];
        const mostRecentVaccine = vaccineGroup[0];

        return (
          <div key={vaccineId} className="cat_vaccine_group">
            <div
              className="cat_vaccine_header"
              onClick={() => toggleGroup(vaccineId)}
            >
              <h3>{vaccineName}</h3>
              {mostRecentVaccine.next_due_date && (
                <p>
                  Next due date: {formatDate(mostRecentVaccine.next_due_date)}
                </p>
              )}
              <button>{isOpen ? 'Hide' : 'Show'}</button>
            </div>
            {isOpen && (
              <div className="cat_vaccine_list">
                {vaccineGroup.map((vaccine) => (
                  <div key={vaccine._id} className="cat_vaccine">
                    <p>Last vaccination date: {formatDate(vaccine.date)}</p>
                    <p>Doctor: {vaccine.vet_name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CatVaccinationsComponent;
