import React from 'react';

const CollectionImages = ({ image }) => {
  return (
    <div className="collection">
      <img className="collection__img" src={image} alt="photos" />
    </div>
  );
};

export default CollectionImages;
