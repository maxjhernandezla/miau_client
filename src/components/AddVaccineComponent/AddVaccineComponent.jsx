import { useState } from 'react';
import useCatsApi from '../../hooks/useCatsApi';
import './AddVaccineComponent.scss';
import { NavLink } from 'react-router-dom';

const AddVaccineComponent = ({ vaccines, cid }) => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    vet_name: '',
    date: '',
    vaccine_id: '',
  });

  const { addVaccineToCat } = useCatsApi();

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { vet_name, date } = formData;
    const vid = e.target.vaccine_id.value;
    const vaccine = { vet_name, date };
    addVaccineToCat(cid, vid, vaccine);
    // Limpia los campos del formulario después de enviarlos
    setFormData({
      vet_name: '',
      date: '',
      vaccine_id: '',
    });
  };

  return (
    <div className="add_vaccine_component_container">
      <h2>Add Vaccine</h2>
      <form onSubmit={handleSubmit} className="add_vaccine_form">
        <div>
          <label htmlFor="vaccine_id">Vaccine:</label>
          <select
            id="vaccine_id"
            name="vaccine_id"
            defaultValue=""
            onChange={handleChange}
          >
            <option value="">Select Vaccine</option>
            {vaccines.map((vaccine) => (
              <option key={vaccine._id} value={vaccine._id}>
                {vaccine.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="vet_name">Veterinarian Name:</label>
          <input
            type="text"
            id="vet_name"
            name="vet_name"
            value={formData.vet_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Vaccine</button>
        <NavLink to={`/my-cats/${cid}`} className="route">
          <button>Go back</button>
        </NavLink>
      </form>
    </div>
  );
};

export default AddVaccineComponent;
