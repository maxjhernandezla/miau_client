import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Cat.scss';
import useCatsApi from '../../hooks/useCatsApi';
import { useNavigate, useParams } from 'react-router-dom';
import CatImage from '../../components/CatImage/CatImage';

const CatDetail = () => {
  const [cat, setCat] = useState({
    name: '',
    type: 'calico',
    birthday: new Date(),
    gender: 'female',
    neutered: 'yes',
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { cid } = useParams();
  const { getCatById, addCat, updateCat, deleteCat } = useCatsApi();

  useEffect(() => {
    if (cid) {
      const fetchCat = async () => {
        const catData = await getCatById(cid);
        setCat(catData);
        setIsEditing(true);
      };
      fetchCat();
    }
  }, [cid]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateCat(cid, cat);
    } else {
      await addCat(cat);
    }
    navigate('/my-cats');
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await deleteCat(cid);
    }
    navigate('/my-cats');
  };

  return (
    <div className="cat-form">
      <CatImage type={cat.type} />
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
            dateFormat="yyyy/MM/dd"
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
        <button type="submit">{isEditing ? 'Update Cat' : 'Add Cat'}</button>
        {isEditing && <button onClick={handleDelete}>Delete</button>}
      </form>
    </div>
  );
};

export default CatDetail;
