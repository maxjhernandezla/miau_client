import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="routes">
        <NavLink to="/" className="route">
          <img src="hogar.png" alt="home" />
          <p>Home</p>
        </NavLink>
        <NavLink to="/sounds" className="route">
          <img src="sounds.png" alt="sounds" />
          <p>Sounds</p>
        </NavLink>
        <NavLink to="/my-cats" className="route">
          <img src="gato.png" alt="my-cats" />
          <p>My Cats</p>
        </NavLink>
        <NavLink to="/profile" className="route">
          <img src="profile.png" alt="profile" />
          <p>Karen</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
