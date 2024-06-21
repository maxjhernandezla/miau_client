import { useContext } from 'react';
import { LoginContext } from '../../context/LoginContext';
import './Logout.scss';
const Logout = () => {
  const { logOut } = useContext(LoginContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logOut();
  };
  return (
    <div className="logout_container">
      <button className="logout_btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
