import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CatForm = ({ onSubmit }) => {
  const [cat, setCat] = useState({
    name: '',
    type: 'calico',
    birthday: new Date(),
    gender: 'female',
    neutered: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCat({
      ...cat,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setCat({
      ...cat,
      birthday: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cat);
  };

  return (
    <div className="add-cat-form">
      <div className="cat_img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Flogo.png?alt=media&token=e0b242d9-9255-4c9d-b101-2976b92a3368"
          alt="cat_img"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={cat.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={cat.type}
            onChange={handleChange}
            required
          >
            <option value="calico">Calico</option>
            <option value="orange">Orange</option>
            <option value="tuxedo">Tuxedo</option>
            <option value="siames">Siames</option>
            <option value="grey">Grey</option>
            <option value="albino">Albino</option>
            <option value="black">Black</option>
            <option value="chocolate">Chocolate</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday:</label>
          <DatePicker
            selected={cat.birthday}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            maxDate={new Date()}
            showYearDropdown
            scrollableYearDropdown
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={cat.gender}
            onChange={handleChange}
            required
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="neutered">Neutered:</label>
          <select
            id="neutered"
            name="neutered"
            value={cat.neutered}
            onChange={handleChange}
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
};

export default CatForm;
