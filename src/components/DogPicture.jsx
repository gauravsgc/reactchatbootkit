// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // console.log("goodmorning");
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt='a dog' />
      {/* hello */}
    </div>
  );
};

export default DogPicture;