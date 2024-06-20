import { AiOutlinePlus } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import './MyCats.scss';
import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import CatImage from '../../components/CatImage/CatImage';
const MyCats = () => {
  const [cats, setCats] = useState([]);
  const { getCats } = useApi();
  useEffect(() => {
    const fetchCats = async () => {
      const userCats = await getCats();
      setCats(userCats);
    };
    fetchCats();
  }, []);

  return (
    <div className="my_cats">
      <h1>My Cats</h1>
      <div className="cats_container">
        {cats.length > 0 &&
          cats.map((cat) => (
            <NavLink to={`/my-cats/${cat._id}`} key={cat._id} className="cat">
              <CatImage type={cat.type} />
              <h4>{cat.name}</h4>
            </NavLink>
          ))}
        <div className="add_cat">
          <NavLink to="/add-cat" className="route">
            <div className="icon_container">
              <AiOutlinePlus />
            </div>
            <h4>Add cat</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyCats;
