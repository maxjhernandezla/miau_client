const CatImage = ({ type }) => {
  const typeImageMap = {
    calico:
      'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Flogo.png?alt=media&token=e0b242d9-9255-4c9d-b101-2976b92a3368',
    orange:
      'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Forange.png?alt=media&token=098aad1b-3f1e-44e3-b4cc-75cdeaecd8c1',
    tuxedo:
      'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Ftuxedo.png?alt=media&token=f6a1dd73-bb9a-48c7-b757-f98d42e54a51',
    siames:
      'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fsiames.png?alt=media&token=feaf39f4-93c9-47ca-be5f-d1ac46bf8a5e',
    grey: 'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fgrey.png?alt=media&token=95f53991-4c07-43d2-916b-e68ce3f5d346',
    albino:
      'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Falbino.png?alt=media&token=b29b1d53-ae3c-4054-ae3d-47110bc873ef',
    black:
      'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fblack.png?alt=media&token=976317ce-3be8-4ab0-bee4-dd11e7fa32ae',
    chocolate:
      'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fchocolate.png?alt=media&token=0e98e3c2-e546-4e12-a8a5-2229444e3541',
  };

  return (
    <div className="cat_img">
      <img src={typeImageMap[type]} alt={typeImageMap[type]} />
    </div>
  );
};

export default CatImage;
