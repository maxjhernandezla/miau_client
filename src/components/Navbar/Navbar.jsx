import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="routes">
        <div className="route">
          <img src="hogar.png" alt="home" />
          <p>Home</p>
        </div>
        <div className="route">
          <img src="gato.png" alt="my-cats" />
          <p>My Cats</p>
        </div>
        <div className="route">
          <img src="profile.png" alt="profile" />
          <p>Karen</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
