const CatImage = ({ type }) => {
  const typeImageMap = {
    calico: '/logo.png',
    orange: '/orange.png',
    tuxedo: '/tuxedo.png',
    siames: '/siames.png',
    grey: '/grey.png',
    albino: '/albino.png',
    black: '/black.png',
    chocolate: '/chocolate.png',
  };

  return (
    <div className="cat_img">
      <img src={typeImageMap[type]} alt={typeImageMap[type]} />
    </div>
  );
};

export default CatImage;
