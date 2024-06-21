import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUsersApi from '../../hooks/useUsersApi';
import './UserEdit.scss';
import Logout from '../Logout/Logout';

const UserEdit = () => {
  const [user, setUser] = useState({
    email: '',
    name: '',
    surname: '',
    working_from: 'home',
    address: '',
  });
  const { getUserById, updateUser } = useUsersApi();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById();
      setUser({
        email: userData.email,
        name: userData.name,
        surname: userData.surname,
        working_from: userData.working_from,
        address: userData.address,
      });
    };

    fetchUser();
    console.log(user);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateUser(user);
    if (response) navigate('/');
  };

  return (
    <div className="user-edit-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={user.surname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="working_from">Working From:</label>
          <select
            id="working_from"
            name="working_from"
            value={user.working_from}
            onChange={handleChange}
          >
            <option value="home">Home</option>
            <option value="office">Office</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <Logout />
    </div>
  );
};

export default UserEdit;
