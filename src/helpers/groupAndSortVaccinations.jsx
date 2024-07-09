const groupAndSortVaccinations = (vaccinations) => {
  const groupedVaccinations = vaccinations.reduce((acc, vaccination) => {
    const vaccineId = vaccination.vaccine_id._id;
    if (!acc[vaccineId]) {
      acc[vaccineId] = [];
    }
    acc[vaccineId].push(vaccination);
    return acc;
  }, {});

  Object.keys(groupedVaccinations).forEach((vaccineId) => {
    groupedVaccinations[vaccineId].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  });

  return groupedVaccinations;
};

export default groupAndSortVaccinations;
