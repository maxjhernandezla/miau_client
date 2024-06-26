import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="routes">
        <NavLink to="/" className="route">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fhogar.png?alt=media&token=0ca652c2-207a-4ed9-9d1f-877387ad6ece"
            alt="home"
          />
          <p>Home</p>
        </NavLink>
        <NavLink to="/sounds" className="route">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fsounds.png?alt=media&token=0585495c-f66f-458e-9d62-8b022d7d6119"
            alt="sounds"
          />
          <p>Sounds</p>
        </NavLink>
        <NavLink to="/my-cats" className="route">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fgato.png?alt=media&token=48a625ad-beac-4cca-b5f7-8e3bc643a209"
            alt="my-cats"
          />
          <p>My Cats</p>
        </NavLink>
        <NavLink to="/profile" className="route">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fprofile.png?alt=media&token=aeeef0cb-2e26-4463-a844-16c9cc97140f"
            alt="profile"
          />
          <p>Karen</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
